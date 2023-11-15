import { component$ } from "@builder.io/qwik"
import { usePostStyle } from "~/composable/usePostStyle"
import CategorySideBarList from "./CategorySideBarList.tsx"
import { useCategories } from "../../routes/[categorySlug]/index"

export default component$((props: { categorySlug: string }) => {
  usePostStyle(props.categorySlug)
  const categories = useCategories()

  return (
    <div data-sticky data-margin-top="80" data-sticky-for="767">
      <CategorySideBarList categories={categories.value} />
      <div class="col-12 col-sm-6 col-lg-12 my-4">
        <a href="#" class="d-block card-img-flash">
          <img src="assets/images/adv.png" alt="" />
        </a>
        <div class="smaller text-end mt-2">
          <a
            href="http://legacy.prozak.info"
            target="_blank"
            class="text-muted"
          >
            <u>Архів новини</u>
          </a>
        </div>
      </div>
    </div>
  )
})
