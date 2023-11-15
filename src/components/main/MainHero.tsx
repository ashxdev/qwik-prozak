import { component$ } from "@builder.io/qwik"
import { useTopPosts } from "../../routes/index.tsx"
import { PreviewBigSizePost } from "~/components/preview/PreviewBigSizePost"
import { PreviewMidSizePost } from "~/components/preview/PreviewMidSizePost"
import { PreviewSmallSizePost } from "~/components/preview/PreviewSmallSizePost"

export const MainHero = component$(() => {
  const topPosts = useTopPosts()

  return (
    <>
      {topPosts.value?.length ? (
        <section class="pt-2 pb-0 card-grid">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-6">
                <PreviewBigSizePost post={topPosts.value[0]} />
              </div>
              <div class="col-lg-6">
                <div class="row g-4">
                  <div class="col-12">
                    <PreviewMidSizePost post={topPosts.value[1]} />
                  </div>
                  <div class="col-md-6">
                    <PreviewSmallSizePost post={topPosts.value[2]} />
                  </div>
                  <div class="col-md-6">
                    <PreviewSmallSizePost post={topPosts.value[3]} />
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
