import qs from "qs"
import { PostI } from "~/types"
import { useStore, component$, useServerMount$ } from "@builder.io/qwik"
import { PreviewBigSizePost } from "~/components/preview/PreviewBigSizePost"
import { PreviewMidSizePost } from "~/components/preview/PreviewMidSizePost"
import { PreviewSmallSizePost } from "~/components/preview/PreviewSmallSizePost"

export const MainHero = component$(() => {
  const store = useStore({
    topPosts: [] as PostI[]
  })

  const topPostsQ = qs.stringify(
    {
      filters: {
        type: {
          $eq: "main"
        }
      },
      pagination: {
        page: 1,
        pageSize: 4
      },
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useServerMount$(async () => {
    const topPosts = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/posts?${topPostsQ}`
    )

    const result = await topPosts.json()
    store.topPosts = result.data
  })

  return (
    <>
      {store.topPosts?.length ? (
        <section class="pt-2 pb-0 card-grid">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-6">
                <PreviewBigSizePost post={store.topPosts[0]} />
              </div>
              <div class="col-lg-6">
                <div class="row g-4">
                  <div class="col-12">
                    <PreviewMidSizePost post={store.topPosts[1]} />
                  </div>
                  <div class="col-md-6">
                    <PreviewSmallSizePost post={store.topPosts[2]} />
                  </div>
                  <div class="col-md-6">
                    <PreviewSmallSizePost post={store.topPosts[3]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  )
})
