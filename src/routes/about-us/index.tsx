import qs from "qs"
import { DocumentHead } from "@builder.io/qwik-city"
import { useStore, component$, useTask$ } from "@builder.io/qwik"

export default component$(() => {
  const store = useStore({ page: null } as any)

  const query = qs.stringify(
    {
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useTask$(async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/about?${query}`
    )
    const result = await response.json()
    store.page = result.data
  })

  return (
    <>
      <section class="pt-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-300 text-center"
                style={`background-image:url(/images/blog/16by9/09.jpg); background-position: center left; background-size: cover;`}
              >
                <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div class="w-100 my-auto">
                    <h1 class="text-white display-4">Про нас</h1>
                    <nav
                      class="d-flex justify-content-center"
                      aria-label="breadcrumb"
                    >
                      <ol class="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                        <li class="breadcrumb-item">
                          <a href="/">
                            <i class="bi bi-house me-1"></i> Головна
                          </a>
                        </li>
                        <li class="breadcrumb-item active">Про нас</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-4 pb-0">
        <div class="container">
          <div class="row">
            <div
              dangerouslySetInnerHTML={store.page?.attributes?.description}
              class="col-xl-9 mx-auto"
            ></div>
          </div>
        </div>
      </section>
    </>
  )
})

export const head: DocumentHead = {
  title: "Про нас - Прозак",
  meta: [
    {
      key: "keywords",
      content:
        "Prozak, прозак, портал про Закарпаття, новини, новини Ужгород, прозак, прозак інфо, про закарпаття, прозак інформаційний антидепресант, prozak.info"
    },
    {
      key: "description",
      content: "Інформаційний портал про Закарпаття"
    }
  ]
}
