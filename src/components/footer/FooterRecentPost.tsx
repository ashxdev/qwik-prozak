import { PostI } from "~/types"
import { component$ } from "@builder.io/qwik"
import { useDayjs } from "~/composable/useDayjs"

export const FooterRecentPost = component$((props: { posts: PostI[] }) => {
  const dayjs = useDayjs()

  return (
    <div class="col-md-6 col-lg-3 mb-4">
      <h5 class="mb-4 text-white">Останні новини</h5>
      {props.posts.length &&
        props.posts?.map((item) => (
          <div class="mb-4 position-relative" key={item.id}>
            <div>
              <a
                href={"/" + item.attributes.category.data?.attributes.slug}
                class={`badge mb-2 ${item.attributes.category.data?.attributes.slug}`}
              >
                <i class="bi bi-circle-fill me-2 small fw-bold"></i>
                {item.attributes.category.data?.attributes?.name}
              </a>
            </div>
            <a
              href={
                "/" +
                item.attributes.category.data?.attributes.slug +
                "/" +
                item.attributes.slug
              }
              class="btn-link text-white fw-normal"
            >
              {item.attributes?.name}
            </a>
            <ul class="nav nav-divider align-items-center small mt-2 text-muted">
              <li class="nav-item">
                {dayjs(item.attributes?.publish_date).format("H:mm | DD MMMM ")}
              </li>
            </ul>
          </div>
        ))}
    </div>
  )
})
