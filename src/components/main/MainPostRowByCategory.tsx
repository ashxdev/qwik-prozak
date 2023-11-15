import qs from "qs"
import { PostI } from "~/types"
import { PostsRow } from "~/components/PostsRow"
import { useStore, component$, useTask$ } from "@builder.io/qwik"

export const MainPostRowByCategory = component$(
  (props: { title: string; categorySlug: string }) => {
    const store = useStore({
      posts: [] as PostI[]
    })

    const postsQ = qs.stringify(
      {
        filters: {
          category: {
            slug: {
              $eq: props.categorySlug
            }
          }
        },
        pagination: {
          page: 1,
          pageSize: 8
        },
        sort: ["publishedAt:desc"],
        populate: ["image", "category"]
      },
      {
        encodeValuesOnly: true
      }
    )

    useTask$(async () => {
      const posts = await fetch(
        `${import.meta.env.VITE_STRAPI_URL}/posts?${postsQ}`
      )

      const result = await posts.json()

      store.posts = result.data
    })

    return (
      <PostsRow
        posts={store.posts}
        title={props.title}
        categorySlug={props.categorySlug}
      />
    )
  }
)
