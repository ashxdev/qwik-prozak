import qs from "qs"
import { PostI, SubCategory } from "~/types"
import { useDayjs } from "~/composable/useDayjs"
import { useStore, component$, useServerMount$ } from "@builder.io/qwik"
import { PreviewMidSquareSizePost } from "~/components/preview/PreviewMidSquareSizePost"

export const MainContent = component$(() => {
  const dayjs = useDayjs()

  const store = useStore({
    socialPosts: [] as PostI[],
    partnerPosts: [] as PostI[],
    mainCategories: [] as SubCategory[]
  })

  const mainCategoriesQ = qs.stringify(
    {
      filters: {
        type: {
          $eq: "main"
        }
      },
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const socialPostsQ = qs.stringify(
    {
      filters: {
        category: {
          slug: {
            $eq: "suspilstvo"
          }
        },
        type: {
          $ne: "main"
        }
      },
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

  const partnerPostsQ = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 6
      },
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useServerMount$(async () => {
    const socialPosts = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/posts?${socialPostsQ}`
    )
    const result = await socialPosts.json()
    store.socialPosts = result.data

    const categories = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/categories?${mainCategoriesQ}`
    )
    const resultCat = await categories.json()
    store.mainCategories = resultCat.data

    const partnerPosts = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/partner-posts?${partnerPostsQ}`
    )
    const resultPartner = await partnerPosts.json()
    store.partnerPosts = resultPartner.data
  })

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
              <div class="col-sm-6">
                {store.socialPosts?.map((item) => (
                  <PreviewMidSquareSizePost post={item} />
                ))}
              </div>
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
                    <i class="fab fa-facebook-square fs-5 mb-2"></i>
                    <span class="small">Facebook</span>
                  </a>
                </div>
                <div class="col-4">
                  <a
                    href="#"
                    target="_blank"
                    class="bg-instagram-gradient rounded text-center text-white-force p-2 d-block"
                  >
                    <i class="fab fa-instagram fs-5 mb-2"></i>
                    <span class="small">Instagram</span>
                  </a>
                </div>
                <div class="col-4">
                  <a
                    href="https://www.youtube.com/@prozakinfo2090/videos"
                    target="_blank"
                    class="bg-youtube rounded text-center text-white-force p-2 d-block"
                  >
                    <i class="fab fa-youtube-square fs-5 mb-2"></i>
                    <span class="small">Youtube</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 class="mt-4 mb-3">Популярні категорії</h4>
                {store.mainCategories?.map((item) => (
                  <div
                    class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4"
                    style="
                      background-image: url(/images/blog/4by3/01.jpg);
                      background-position: center left;
                      background-size: cover;
                    "
                  >
                    <div class="p-3">
                      <a
                        href="#"
                        class="stretched-link btn-link fw-bold text-white h5"
                      >
                        {item?.attributes.name}
                      </a>
                    </div>
                  </div>
                ))}

                <div class="text-center mt-3">
                  <a href="#" class="fw-bold text-body text-primary-hover">
                    <u>View all categories</u>
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-sm-6 col-lg-12">
                  <h4 class="mt-4 mb-3">Новини партнерів</h4>
                  {store.partnerPosts?.map((item) => (
                    <div class="card mb-3">
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
                            {dayjs(item.attributes.createdAt).format(
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
