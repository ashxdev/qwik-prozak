import qs from "qs"
import { PostI } from "~/types"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useMainCategories } from "~/routes/layout.tsx"
import type { DocumentHead } from "@builder.io/qwik-city"
import { component$, Resource, useSignal } from "@builder.io/qwik"
import { PreviewCardPost } from "~/components/preview/PreviewCardPost"
import { SideBarCategoryList } from "~/components/side-bar/SideBarCategoryList"

type CategoryData = { posts: PostI[] }

export const useGetAllPost = routeLoader$(async () => {
  const postsQ = qs.stringify(
    {
      sort: ["publish_date:desc"],
      pagination: {
        page: 1,
        pageSize: 100
      },
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const posts = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/posts?${postsQ}`
  )
  const result = await posts.json()

  return {
    posts: result.data
  }
})

export default component$(() => {
  const getCategoryData = useGetAllPost()
  const mainCategories = useMainCategories()
  const categoryData = useSignal<CategoryData>(getCategoryData.value || [])

  return (
    <Resource
      value={categoryData}
      onPending={() => <div>Loading...</div>}
      onResolved={({ posts }) => {
        return (
          <>
            <section class="pt-4">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="border p-4 text-center rounded-3">
                      <h1>Усі новини</h1>
                      <nav
                        class="d-flex justify-content-center"
                        aria-label="breadcrumb"
                      >
                        <ol class="breadcrumb breadcrumb-dots m-0">
                          <li class="breadcrumb-item">
                            <a href="/">
                              <i class="bi bi-house me-1"></i> Головна
                            </a>
                          </li>
                          <li class="breadcrumb-item active">Усі новини</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="position-relative pt-0">
              <div class="container" data-sticky-container>
                <div class="row">
                  <div class="col-lg-9">
                    {posts?.map((item) => (
                      <PreviewCardPost post={item} key={item.id} />
                    ))}

                    <button type="button" class="btn btn-primary-soft w-100">
                      Завантажити ще
                      <i class="bi bi-arrow-down-circle ms-2 align-middle"></i>
                    </button>
                  </div>

                  <div class="col-lg-3 mt-5 mt-lg-0">
                    <div data-sticky data-margin-top="80" data-sticky-for="767">
                      <SideBarCategoryList categories={mainCategories.value} />

                      <div class="row">
                        <div class="col-12 col-sm-6 col-lg-12 my-4">
                          <a href="/" class="d-block card-img-flash">
                            <img src="/images/adv.png" alt="adv" />
                          </a>
                          <div class="smaller text-end mt-2">
                            ads via{" "}
                            <a href="#" class="text-muted">
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
          </>
        )
      }}
    />
  )
})

export const head: DocumentHead = {
  title: "Усі новини | Прозак - Інформаційний антидепресант",
  meta: [
    {
      key: "keywords",
      content:
        "Prozak, прозак, портал про Закарпаття, новини, новини Ужгород, прозак, прозак інфо, про закарпаття, прозак інформаційний антидепресант, prozak.info"
    },
    {
      key: "description",
      content: "Усі новини - Інформаційний портал про Закарпаття"
    }
  ]
}
