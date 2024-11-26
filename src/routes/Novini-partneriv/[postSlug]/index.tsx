import qs from "qs"
import { get } from "lodash-es"
import { PostI } from "~/types"
import { routeLoader$ } from "@builder.io/qwik-city"
import { PartnerPost } from "~/components/post/PartnerPost"
import { useSignal, component$, Resource } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

export const useGetPostData = routeLoader$(async (requestEvent) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: requestEvent.params.postSlug
        }
      },
      sort: ["publishedAt:desc"],
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/partner-posts?${query}`
  )
  const result = await response.json()
  const post = get(result.data, "[0]")

  return post as PostI
})

export default component$(() => {
  const getPostData = useGetPostData()
  const postData = useSignal<PostI>(getPostData.value)

  return (
    <Resource
      value={postData}
      onPending={() => <div>Loading...</div>}
      onResolved={(postData) => (
        <PartnerPost data={postData} />
      )}
    />
  )
})

export const head: DocumentHead = ({ resolveValue, params }) => {
  const data = resolveValue(useGetPostData)

  return {
    title: `${data?.attributes?.name} - Прозак`,
    meta: [
      { content: data?.attributes?.short_description || '', name: "description" },
      {
        property: 'og:title',
        content: data?.attributes?.name,
      },
      {
        property: 'og:description',
        content: data?.attributes?.short_description,
      },
      {
        property: 'og:image',
        content: data?.attributes.image?.data?.attributes.url,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'PROZAK.INFO',
      },
      {
        property: 'og:url',
        content: `${import.meta.env.VITE_SITE_URL}/Novini-partneriv/${params.postSlug}`,
      },
    ]
  }
}