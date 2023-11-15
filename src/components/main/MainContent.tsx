import { useDayjs } from "~/composable/useDayjs"
import { useMainCategories } from "~/routes/layout.tsx"
import { useSocialPosts, usePartnerPosts } from "../../routes/index.tsx"

import { component$ } from "@builder.io/qwik"
import { SideBarCategoryList } from "~/components/side-bar/SideBarCategoryList"
import { PreviewMidSquareSizePost } from "~/components/preview/PreviewMidSquareSizePost"

export const MainContent = component$(() => {
  const dayjs = useDayjs()
  const socialPosts = useSocialPosts()
  const partnerPosts = usePartnerPosts()
  const mainCategories = useMainCategories()

  return (
    <section class="position-relative">
      <div class="container" data-sticky-container>
        <div class="row">
          <div class="col-lg-9">
            <div class="mb-4">
              <h2 class="m-0">
                <i class="bi bi-people me-2"></i>Суспільство
              </h2>
              <p>Останні новини, рисунки, відео і чутки</p>
            </div>
            <div class="row gy-4">
              {socialPosts.value?.map((item) => (
                <div class="col-sm-6" key={item.id}>
                  <PreviewMidSquareSizePost partner={false} post={item} />
                </div>
              ))}
            </div>
          </div>
          <div class="col-lg-3 mt-5 mt-lg-0">
            <div data-sticky data-margin-top="80" data-sticky-for="767">
              <div class="row g-2">
                <div class="col-4">
                  <a
                    href="https://www.facebook.com/prozak.info"
                    target="_blank"
                    class="bg-facebook rounded text-center text-white-force p-2 d-block"
                  >
                    <i class="bi bi-facebook fs-5 mb-2"></i>
                    <span class="small">Facebook</span>
                  </a>
                </div>
                <div class="col-4">
                  <a
                    href="#"
                    target="_blank"
                    class="bg-instagram-gradient rounded text-center text-white-force p-2 d-block"
                  >
                    <i class="bi bi-instagram fs-5 mb-2"></i>
                    <span class="small">Instagram</span>
                  </a>
                </div>
                <div class="col-4">
                  <a
                    href="https://www.youtube.com/@prozakinfo2090/videos"
                    target="_blank"
                    class="bg-youtube rounded text-center text-white-force p-2 d-block"
                  >
                    <i class="bi bi-youtube fs-5 mb-2"></i>
                    <span class="small">Youtube</span>
                  </a>
                </div>
              </div>

              <SideBarCategoryList categories={mainCategories.value} />

              <div class="row">
                <div class="col-12 col-sm-6 col-lg-12">
                  <h4 class="mt-4 mb-3">Новини партнерів</h4>
                  {partnerPosts.value?.map((item) => (
                    <div key={item.id} class="card mb-3">
                      <div class="row g-3">
                        <div class="col-4">
                          <img
                            class="rounded"
                            src={item.attributes.image?.data?.attributes?.url}
                            alt=""
                          />
                        </div>
                        <div class="col-8">
                          <h6>
                            <a
                              href={`/partner/${item.attributes.slug}`}
                              class="btn-link stretched-link text-reset fw-bold"
                            >
                              {item?.attributes.name}
                            </a>
                          </h6>
                          <div class="small mt-1">
                            {dayjs(item.attributes.publish_date).format(
                              "H:mm | DD MMMM "
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div class="col-12 col-sm-6 col-lg-12 my-4">
                  <a href="#" class="d-block card-img-flash">
                    <img src="/images/adv.png" alt="" />
                  </a>
                  <div class="smaller text-end mt-2">
                    ads via{" "}
                    <a href="#" class="text-body">
                      <u>Bootstrap</u>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
