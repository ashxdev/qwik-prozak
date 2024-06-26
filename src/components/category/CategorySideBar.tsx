import { CategoryI } from "~/types"
import { component$ } from "@builder.io/qwik"
import { usePostStyle } from "~/composable/usePostStyle"
import CategorySideBarList from "./CategorySideBarList.tsx"

export default component$(
  (props: { categorySlug: string; categories: CategoryI[] }) => {
    usePostStyle(props.categorySlug)

    return (
      <div data-sticky data-margin-top="80" data-sticky-for="767">
        <CategorySideBarList categories={props.categories} />
        <div class="col-12 col-sm-6 col-lg-12 my-4">
          <a href="#" class="d-block card-img-flash">
            <img src="/images/adv.png" alt="adv" />
          </a>
          <div class="text-end mt-2">
            <a href="/all-posts" class="text-muted">
              <u>Усі новини</u>
            </a>
          </div>
        </div>
      </div>
    )
  }
)
