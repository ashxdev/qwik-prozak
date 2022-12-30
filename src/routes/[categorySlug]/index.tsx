import { useLocation } from "@builder.io/qwik-city"
import { component$ } from "@builder.io/qwik"

export default component$(() => {
  const location = useLocation()

  return (
    <div>
      <h1>SKU cate</h1>
      <p>Pathname: {location.pathname}</p>
      <p>Sku Id: {location.params.categorySlug}</p>
    </div>
  )
})

/*
 <Category :data="category.data[0].attributes"  :articles="articles.data" />

const { data: category } = await useFetch(
  `${import.meta.env.VITE_STRAPI_URL}/categories?filters[slug]=${route.params.categoryslug}`,
  { pick: ["data"] }
);

const { data: articles } = await useFetch(
  `${import.meta.env.VITE_STRAPI_URL}/articles?filters[category][slug][$eq]=${route.params.categoryslug}&populate[0]=image`,
  { pick: ["data"] }
);
 */
