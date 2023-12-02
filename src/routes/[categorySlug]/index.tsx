import qs from "qs"
import { get } from "lodash-es"
import { PostI, CategoryI } from "~/types"
import { routeLoader$ } from "@builder.io/qwik-city"
import Category from "~/components/category/Category"
import type { DocumentHead } from "@builder.io/qwik-city"
import { component$, Resource, useSignal } from "@builder.io/qwik"

type CategoryData = { posts: PostI[]; category: CategoryI }

export const useCategories = routeLoader$(async (requestEvent) => {
  const categoriesQ = qs.stringify(
    {
      filters: {
        slug: {
          $ne: requestEvent.params.categorySlug
        }
      },
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const categories = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/categories?${categoriesQ}`
  )
  const result = await categories.json()
  return result.data as CategoryI[]
})

export const useGetCategoryData = routeLoader$(async (event) => {
  const postsQ = qs.stringify(
    {
      sort: ["publish_date:desc"],
      filters: {
        category: {
          slug: {
            $eq: event.params.categorySlug
          }
        }
      },
      pagination: {
        page: 1,
        pageSize: 6
      },
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const categoryQ = qs.stringify(
    {
      filters: {
        slug: {
          $eq: event.params.categorySlug
        }
      },
      populate: ["image"]
    },
    {
      encodeValuesOnly: true
    }
  )

  const posts = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/posts?${postsQ}`
  )
  const result = await posts.json()

  const category = await fetch(
    `${import.meta.env.VITE_STRAPI_DOCKER_URL}/categories?${categoryQ}`
  )
  const categoryResult = await category.json()

  return {
    posts: result.data,
    category: get(categoryResult.data, 0)
  }
})

export default component$(() => {
  const getCategoryData = useGetCategoryData()
  const categoryData = useSignal<CategoryData>(getCategoryData.value || [])

  return (
    <Resource
      value={categoryData}
      onPending={() => <div>Loading...</div>}
      onResolved={({ posts, category }) => (
        <Category posts={posts} category={category} partner={false} />
      )}
    />
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const data = resolveValue(useGetCategoryData)

  return {
    title: `${data?.category?.attributes?.name} - Прозак`,
    meta: [
      { content: data?.category?.attributes?.name, key: "keywords" },
      {
        content: data?.category?.attributes?.short_description,
        key: "description"
      }
    ]
  }
}
