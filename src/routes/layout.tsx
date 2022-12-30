import qs from "qs"
import { Category, Homepage } from "~/types"
import TheHeader from "~/components/header/TheHeader"
import { Footer } from "~/components/footer/Footer"
import { component$, Slot, useServerMount$, useStore } from "@builder.io/qwik"

export default component$(() => {
  const store = useStore({
    categories: [] as Category[],
    homepage: {} as Homepage
  })

  const categoriesQ = qs.stringify({
    encodeValuesOnly: true
  })

  const homepageQ = qs.stringify(
    {
      populate: ["header_add", "header_menu_add"]
    },
    {
      encodeValuesOnly: true
    }
  )

  useServerMount$(async () => {
    const categories = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/categories?${categoriesQ}`
    )
    const result = await categories.json()
    store.categories = result.data

    const homepage = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/homepage?${homepageQ}`
    )
    const homepageResult = await homepage.json()
    store.homepage = homepageResult.data
  })

  return (
    <>
      <TheHeader categories={store.categories} homepage={store.homepage} />

      <main>
        <Slot />
      </main>

      <Footer />
    </>
  )
})
