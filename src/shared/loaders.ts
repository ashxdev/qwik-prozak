import qs from "qs"
import { get } from "lodash-es"
import { CategoryI } from "~/types"
import { routeLoader$ } from "@builder.io/qwik-city"

export const useCategories = routeLoader$(async (requestEvent) => {
    const categoriesQ = qs.stringify(
        {
            filters: {
                slug: {
                    $ne: requestEvent.params.categorySlug || "partner"
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
            sort: ["publish_date:asc"],
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

    const categoriesQ = qs.stringify(
        {
            filters: {
                slug: {
                    $ne: event.params.categorySlug || "partner"
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


    const categories = await fetch(
        `${import.meta.env.VITE_STRAPI_DOCKER_URL}/categories?${categoriesQ}`
    )
    const categoriesData = await categories.json()

    return {
        posts: result.data,
        category: get(categoryResult.data, 0),
        categories: categoriesData.data as CategoryI[],
    }
})

