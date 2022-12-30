import qs from "qs"
import { get } from "lodash-es"
import { Post } from "~/components/post/Post"
import { useLocation } from "@builder.io/qwik-city"
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
      populate: ["image", "category", "sub_category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useServerMount$(async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/posts?${query}`
    )
    const result = await response.json()
    store.post = get(result.data, "[0]")
  })

  return <Post data={store.post} />
})
