import styles from "./main-trend-news.css?inline"
import { useStyles$, component$ } from "@builder.io/qwik"
import { useMainTrendNews } from "../../routes/index.tsx"

export const MainTrendNews = component$(() => {
  useStyles$(styles)
  const trandingNews = useMainTrendNews()

  return (
    <>
      <section class="py-2">
        <div class="container">
          <div class="row g-0">
            <div class="col-12 bg-primary-soft p-2 rounded">
              <div class="d-sm-flex align-items-center text-center text-sm-start">
                <div class="me-3">
                  <span class="badge bg-primary p-2 px-3">Популярне:</span>
                </div>
                <div class="slider">
                  <div class="slider--move">
                    {trandingNews.value?.map((item: any) => (
                      <div key={item.id} class="slider--item">
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
