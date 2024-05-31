import { PostI, CategoryI } from "~/types"
import { component$ } from "@builder.io/qwik"
import { usePostStyle } from "~/composable/usePostStyle"
import CategorySideBar from "~/components/category/CategorySideBar"
import { PreviewMidSquareSizePost } from "~/components/preview/PreviewMidSquareSizePost"

export default component$(
  (props: {
    posts: PostI[]
    partner: boolean
    category: CategoryI
    categories: CategoryI[]
  }) => {
    const { postStyle } = usePostStyle(props.category?.attributes.slug)

    return (
      <>
        <section class="pt-4">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div
                  class="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-300 text-center"
                  style={`background-image:url(${postStyle.backgroundImage}); background-position: center left; background-size: cover;`}
                >
                  <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div class="w-100 my-auto">
                      <div class="text-white mb-3">Новини у категорії:</div>
                      <h1 class="text-white h2">
                        <span
                          class={`badge ${props.category?.attributes.slug} mb-2`}
                        >
                          <i class="bi bi-circle-fill me-2 small fw-bold"></i>
                          {props.category?.attributes.name}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="position-relative pt-0">
          <div class="container" data-sticky-container>
            <div class="row">
              <div class="col-lg-9">
                <div class="row gy-4">
                  {props.posts?.map((item) => (
                    <div key={item.id} class="col-sm-6">
                      <PreviewMidSquareSizePost
                        post={item}
                        partner={props.partner}
                      />
                    </div>
                  ))}

                  <div style="display:none;" class="col-12 text-center mt-5">
                    <nav
                      class="mb-5 d-flex justify-content-center"
                      aria-label="navigation"
                    >
                      <ul class="pagination pagination-bordered ">
                        <li class="page-item disabled">
                          <a
                            class="page-link"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            Попередня
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item disabled">
                          <a class="page-link" href="#">
                            ..
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            15
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Наступна
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 mt-5 mt-lg-0">
                <CategorySideBar
                  categories={props.categories}
                  categorySlug={props.category?.attributes.slug}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
)
