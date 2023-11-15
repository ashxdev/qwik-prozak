import qs from "qs"
import { get } from "lodash-es"
import { PostI, CategoryI } from "~/types"
import { Post } from "~/components/post/Post"
import { routeLoader$ } from "@builder.io/qwik-city"
import { LegacyPost } from "~/components/post/LegacyPost"
import type { DocumentHead } from "@builder.io/qwik-city"
import { component$, useSignal, Resource } from "@builder.io/qwik"

type PostData = { post: PostI | null; legacyPost: string }

export const usePostCategories = routeLoader$(async (requestEvent) => {
  const categoriesQ = qs.stringify(
    {
      filters: {
        slug: {
          $ne: requestEvent.params.categorySlug
        }
      },
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const categories = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/categories?${categoriesQ}`
  )
  const result = await categories.json()
  return result.data as CategoryI[]
})

export const useGetPostData = routeLoader$(async (event) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: event.params.postSlug
        }
      },
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/posts?${query}`
  )
  const result = await response.json()
  const post = get(result.data, "[0]")

  if (post) return { post, legacyPost: "" }

  // try to get post from legacy site
  const responseFromLegacySite = await fetch(
    `http://legacy.prozak.info/${event.params.categorySlug}/${event.params.postSlug}`
  )
  const legacyPostHtml = (await responseFromLegacySite.text()) || ""

  return {
    post,
    // @ts-expect-error
    legacyPost: /<article.*?>([\s\S]*)<\/article>/.exec(legacyPostHtml)[1]
  }
})

export default component$(() => {
  const getPostData = useGetPostData()
  const postData = useSignal<PostData>(getPostData.value || [])

  return (
    <Resource
      value={postData}
      onPending={() => <div>Loading...</div>}
      onResolved={({ post, legacyPost }) => (
        <>
          {post ? <Post data={post} /> : <LegacyPost legacyPost={legacyPost} />}
        </>
      )}
    />
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const data = resolveValue(useGetPostData)

  // legacy title
  if (!data?.post) {
    // @ts-expect-error
    const title = /<h1.*?>([\s\S]*)<\/h1>/.exec(data?.legacyPost)[1]

    return {
      title: `${title} - Прозак`,
      meta: [
        { content: title, key: "keywords" },
        { content: title, key: "description" }
      ]
    }
  }

  return {
    title: `${data?.post?.attributes?.name} - Прозак`,
    meta: [
      { content: data?.post?.attributes?.name, key: "keywords" },
      { content: data?.post?.attributes?.short_description, key: "description" }
    ]
  }
}
