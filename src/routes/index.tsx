import qs from "qs"
import { PostI } from "~/types"
import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { MainHero } from "~/components/main/MainHero"
import type { DocumentHead } from "@builder.io/qwik-city"
import { MainContent } from "~/components/main/MainContent"
import { MainTrendNews } from "~/components/main/MainTrendNews"
import { MainPostRowByCategory } from "~/components/main/MainPostRowByCategory"

export const useSocialPosts = routeLoader$(async () => {
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
      sort: ["publishedAt:desc"],
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const socialPosts = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/posts?${socialPostsQ}`
  )
  const result = await socialPosts.json()
  return result.data as PostI[]
})

export const usePartnerPosts = routeLoader$(async () => {
  const partnerPostsQ = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 6
      },
      sort: ["publish_date:desc"],
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const partnerPosts = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/partner-posts?${partnerPostsQ}`
  )
  const resultPartner = await partnerPosts.json()
  return resultPartner.data as PostI[]
})

export const useTopPosts = routeLoader$(async () => {
  const topPostsQ = qs.stringify(
    {
      filters: {
        type: {
          $eq: "main"
        }
      },
      pagination: {
        page: 1,
        pageSize: 4
      },
      sort: ["publishedAt:desc"],
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const topPosts = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/posts?${topPostsQ}`
  )

  const result = await topPosts.json()
  return result.data as PostI[]
})

export const useMainTrendNews = routeLoader$(async () => {
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
      sort: ["publishedAt:desc"],
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/posts?${trendQ}`
  )
  const result = await response.json()
  return result.data
})

export default component$(() => {
  return (
    <>
      <MainTrendNews />

      <MainHero />

      <div class="container">
        <div class="border-bottom border-primary border-2 opacity-1"></div>
      </div>

      <MainContent />

      <div class="container">
        <div class="border-bottom border-primary border-2 opacity-1"></div>
      </div>

      <MainPostRowByCategory
        categorySlug="sport"
        title="Спортивні події України та світу"
      />
    </>
  )
})

export const head: DocumentHead = {
  title: "Прозак - Інформаційний антидепресант",
  meta: [
    {
      name: "description",
      content: "Prozak.info - Інформаційний портал про Закарпаття, новини Закарпаття, новини Ужгороду"
    }
  ]
}
