import { CategoryI } from "~/types"
import { component$ } from "@builder.io/qwik"
import { usePostStyle } from "~/composable/usePostStyle"
import CategorySideBarList from "./CategorySideBarList.tsx"
import DanceLineStudioRandomAdv from "~/components/adv/DanceLineStudioRandomAdv.tsx"


export default component$(
  (props: { categorySlug: string; categories: CategoryI[] }) => {
    usePostStyle(props.categorySlug)

    return (
      <div data-sticky data-margin-top="80" data-sticky-for="767">
        <CategorySideBarList categories={props.categories} />
        <div class="col-12 col-sm-6 col-lg-12 my-4">
          <DanceLineStudioRandomAdv />

          <div class="text-end mt-2">
            <a href="/all-posts" class="text-muted">
              <u>Усі новини</u>
            </a>
          </div>

          <div class="col-12 col-sm-6 col-lg-12 my-4">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3297522505307737"
              crossOrigin="anonymous"></script>
            <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-3297522505307737"
              data-ad-slot="3881119466"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          </div>
        </div>
      </div>
    )
  }
)
