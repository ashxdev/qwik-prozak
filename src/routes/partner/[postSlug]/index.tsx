import qs from "qs"
import { get } from "lodash-es"
import { useLocation } from "@builder.io/qwik-city"
import { PartnerPost } from "~/components/post/PartnerPost"
import { useStore, component$, useServerMount$ } from "@builder.io/qwik"

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
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useServerMount$(async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/partner-posts?${query}`
    )
    const result = await response.json()
    store.post = get(result.data, "[0]")
  })

  return <PartnerPost data={store.post} />
})
