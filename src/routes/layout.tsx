import qs from "qs"
import { CategoryI, Homepage } from "~/types"
import { component$, Slot } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import TheHeader from "~/components/header/TheHeader"
import { TheFooter } from "~/components/footer/TheFooter"
import type { RequestHandler } from "@builder.io/qwik-city"

export const useHomePage = routeLoader$(async () => {
  const homepageQ = qs.stringify(
    {
      populate: ["header_add", "header_menu_add"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const homepage = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/homepage?${homepageQ}`
  )
  const homepageResult = await homepage.json()
  return homepageResult.data as Homepage
})

export const useCategories = routeLoader$(async () => {
  const categoriesQ = qs.stringify({
    encodeValuesOnly: true
  })

  const categories = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/categories?${categoriesQ}`
  )
  const result = await categories.json()
  return result.data as CategoryI[]
})

export const useMainCategories = routeLoader$(async () => {
  const mainCategoriesQ = qs.stringify(
    {
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const categories = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/categories?${mainCategoriesQ}`
  )
  const result = await categories.json()
  return result.data as CategoryI[]
})

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5
  })
}

export default component$(() => {
  const homepage = useHomePage()
  const categories = useCategories()

  return (
    <>
      <TheHeader categories={categories.value} homepage={homepage.value} />

      <main>
        <Slot />
      </main>

      <TheFooter categories={categories.value} homepage={homepage.value} />
    </>
  )
})
