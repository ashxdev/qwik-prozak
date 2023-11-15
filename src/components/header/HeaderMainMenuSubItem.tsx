import qs from "qs"
import { useDayjs } from "~/composable/useDayjs"
import { PostI, CategoryI, Homepage } from "~/types"
import { $, useStore, component$ } from "@builder.io/qwik"
interface Props {
  homepage: Homepage
  category?: CategoryI
}

export const HeaderMainMenuSubItem = component$((props: Props) => {
  const dayjs = useDayjs()

  const store = useStore<{ posts?: PostI[]; loading: boolean }>({
    posts: [],
    loading: false
  })

  const query = qs.stringify(
    {
      filters: {
        category: {
          slug: {
            $eq: props.category?.attributes?.slug
          }
        }
      },
      pagination: {
        page: 1,
        pageSize: 3
      },
      sort: ["publishedAt:desc"],
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const handleOnMouseEnter = $(async () => {
    if (store.posts?.length) return

    store.loading = true

    const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}/posts?${query}`)

    const result = await res.json()

    store.posts = result.data

    store.loading = false
  })

  return (
    <>
      <li class="nav-item dropdown dropdown-fullwidth">
        <a
          class="nav-link dropdown-toggle"
          href={`/${props.category?.attributes?.slug}`}
          onMouseEnter$={() => handleOnMouseEnter()}
        >
          {props.category?.attributes.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="ps-1 bi bi-chevron-down d-none d-lg-inline"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </a>

        <div class="dropdown-menu" aria-labelledby="megaMenu">
          <div class="container">
            <div class="row g-4 p-3 flex-fill">
              {store.posts?.length ? (
                store.posts?.map((item, index) => (
                  <div key={item.id} class="col-sm-6 col-lg-3">
                    <div class="card bg-transparent">
                      <a
                        class="text-reset btn-link"
                        href={`/${props.category?.attributes?.slug}/${item.attributes.slug}`}
                      >
                        <img
                          style="height: 141px;"
                          class="card-img rounded"
                          src={
                            item.attributes?.image?.data?.attributes.formats
                              .thumbnail.url ||
                            `/images/blog/4by3/thumb/0${index + 1}.jpg`
                          }
                          alt={item.attributes?.image?.data?.attributes.name}
                        />
                      </a>
                      <div class="card-body px-0 pt-3">
                        <h6 class="card-title mb-0">
                          <a
                            class="btn-link text-reset fw-bold"
                            href={`/${props.category?.attributes?.slug}/${item.attributes.slug}`}
                          >
                            {item.attributes?.name}
                          </a>
                        </h6>
                        <ul class="nav nav-divider align-items-center text-uppercase small mt-2">
                          <li class="nav-item">
                            <a
                              class="text-reset btn-link"
                              href={`/${props.category?.attributes?.slug}/${item.attributes.slug}`}
                            >
                              {dayjs(item.attributes.publish_date).format(
                                "H:mm | DD MMMM "
                              )}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>No news there</>
              )}

              <div
                class="col-sm-6 col-lg-3"
                dangerouslySetInnerHTML={
                  props.homepage?.attributes?.header_menu_add.html
                }
              ></div>
            </div>
            <div class="row px-3">
              <div class="col-12">
                <ul class="list-inline mt-3">
                  <li class="list-inline-item">Теги:</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  )
})
