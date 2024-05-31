import { PostI, CategoryI } from "~/types"
import { useGetCategoryData } from "~/shared/loaders"
import Category from "~/components/category/Category"
import type { DocumentHead } from "@builder.io/qwik-city"
import { component$, Resource, useSignal } from "@builder.io/qwik"

type CategoryData = {
  posts: PostI[]
  category: CategoryI
  categories: CategoryI[]
}

export { useCategories, useGetCategoryData } from "~/shared/loaders"

export default component$(() => {
  const getCategoryData = useGetCategoryData()
  const categoryData = useSignal<CategoryData>(getCategoryData.value || [])

  return (
    <Resource
      value={categoryData}
      onPending={() => <div>Loading...</div>}
      onResolved={({ posts, category, categories }) => (
        <Category
          posts={posts}
          category={category}
          partner={false}
          categories={categories || []}
        />
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
