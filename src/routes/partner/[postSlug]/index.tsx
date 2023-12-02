import qs from "qs"
import { get } from "lodash-es"
import { useLocation } from "@builder.io/qwik-city"
import { PartnerPost } from "~/components/post/PartnerPost"
import { useStore, component$, useTask$ } from "@builder.io/qwik"

export default component$(() => {
  const location = useLocation()
  const store = useStore({ post: null } as any)

  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: location.params.postSlug
        }
      },
      sort: ["publishedAt:desc"],
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useTask$(async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_DOCKER_URL}/partner-posts?${query}`
    )
    const result = await response.json()
    store.post = get(result.data, "[0]")
  })

  return <PartnerPost data={store.post} />
})
