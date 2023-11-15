import { CategoryI, Homepage } from "~/types"
import { FooterHotTopics } from "./FooterHotTopics"
import { FooterCopyright } from "./FooterCopyright"
import { FooterNavigation } from "./FooterNavigation"
import { FooterRecentPost } from "./FooterRecentPost"

import qs from "qs"
import { useStore, component$, useTask$ } from "@builder.io/qwik"

export const TheFooter = component$(
  (props: { categories: CategoryI[]; homepage: Homepage }) => {
    const store = useStore({ recentPosts: [] })

    const recentPostsQ = qs.stringify(
      {
        pagination: {
          start: 0,
          limit: 2
        },
        sort: ["publishedAt:desc"],
        populate: ["image", "category"]
      },
      {
        encodeValuesOnly: true
      }
    )

    useTask$(async () => {
      const response = await fetch(
        `${import.meta.env.VITE_STRAPI_URL}/posts?${recentPostsQ}`
      )
      const result = await response.json()
      store.recentPosts = result.data
    })
    return (
      <footer class="bg-dark pt-5">
        <div class="container">
          <div class="row pt-5">
            <FooterRecentPost posts={store.recentPosts} />

            <FooterNavigation categories={props.categories} />

            <div class="col-sm-6 col-lg-3 mb-4">
              <a href="#">
                <img class="w-100" alt="app-store" src="/images/adv.png" />
              </a>
            </div>
          </div>

          <FooterHotTopics />
        </div>

        <FooterCopyright />
      </footer>
    )
  }
)
