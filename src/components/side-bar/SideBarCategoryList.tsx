import { CategoryI } from "~/types"
import { component$ } from "@builder.io/qwik"
import { usePostStyle } from "~/composable/usePostStyle"

export const SideBarCategoryList = component$(
  (props: { categories: CategoryI[] }) => {
    const { getPostStyle } = usePostStyle()

    return (
      <div>
        <h4 class="mt-4 mb-3">Популярні категорії</h4>
        {props.categories?.map((item) => (
          <div
            key={item.id}
            class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4"
            style={`
                      background-image: url(${
                        getPostStyle(item?.attributes.slug).backgroundImage
                      });
                      background-size: cover;
                      background-position: center left;
                      `}
          >
            <div class="p-3">
              <a
                href={"/" + item?.attributes.slug}
                class="stretched-link btn-link fw-bold text-white h5"
              >
                {item?.attributes.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }
)
