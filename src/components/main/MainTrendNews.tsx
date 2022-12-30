import qs from "qs"
import {
  useStore,
  useStyles$,
  component$,
  useServerMount$
} from "@builder.io/qwik"

import styles from "./main-trend-news.css?inline"

export const MainTrendNews = component$(() => {
  useStyles$(styles)
  const store = useStore({ trandingNews: [] })

  const trendQ = qs.stringify(
    {
      filters: {
        type: {
          $eq: "trend"
        }
      },
      pagination: {
        start: 0,
        limit: 3
      },
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useServerMount$(async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/posts?${trendQ}`
    )
    const result = await response.json()
    store.trandingNews = result.data
  })

  return (
    <>
      <section class="py-2">
        <div class="container">
          <div class="row g-0">
            <div class="col-12 bg-primary-soft p-2 rounded">
              <div class="d-sm-flex align-items-center text-center text-sm-start">
                <div class="me-3">
                  <span class="badge bg-primary p-2 px-3">Trending:</span>
                </div>
                <div class="slider">
                  <div class="slider--move">
                    {store.trandingNews?.map((item: any) => (
                      <div class="slider--item">
                        <a href="#" class="text-reset btn-link">
                          {item?.attributes.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
})
