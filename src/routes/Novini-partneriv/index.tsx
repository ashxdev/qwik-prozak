import qs from "qs"
import { CategoryI, PostI } from "~/types"
import { useCategories } from "~/shared/loaders"
import { routeLoader$ } from "@builder.io/qwik-city"
import Category from "~/components/category/Category"
import type { DocumentHead } from "@builder.io/qwik-city"
import { component$, Resource, useSignal } from "@builder.io/qwik"

type PartnerPostsData = {
  posts: PostI[]
  category: CategoryI
  categories: CategoryI[]
}

export { useCategories } from "~/shared/loaders"

export const useGetPostData = routeLoader$(async () => {
  const postsQ = qs.stringify(
    {
      sort: ["publish_date:desc"],
      pagination: {
        page: 1,
        pageSize: 6
      },
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const posts = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/partner-posts?${postsQ}`
  )
  const result = await posts.json()

  const category = {
    id: 308,
    attributes: {
      name: "Новини партнерів",
      slug: "partner",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      description: "",
      short_description: ""
    }
  }

  return { posts: result.data, category }
})

export default component$(() => {
  const categories = useCategories()
  const getPostData = useGetPostData()
  const partnerPostsData = useSignal<PartnerPostsData>({
    ...getPostData.value,
    categories: categories.value
  })

  return (
    <Resource
      value={partnerPostsData}
      onPending={() => <div>Loading...</div>}
      onResolved={({ posts, category }) => (
        <Category
          partner
          posts={posts}
          category={category}
          categories={categories.value}
        />
      )}
    />
  )
})

export const head: DocumentHead = () => {
  return {
    title: "Новини партнерів - Прозак",
    meta: [
      { key: "keywords", content: "новини партнерів прозак" },
      {
        key: "description",
        content: "Новини партнерів"
      }
    ]
  }
}
