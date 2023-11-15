import { PostI } from "~/types"
import { useDayjs } from "~/composable/useDayjs"

export const PreviewMidSquareSizePost = (props: {
  partner: boolean
  post: PostI
}) => {
  const dayjs = useDayjs()
  const categorySlug = props.partner
    ? "partner"
    : props.post?.attributes?.category?.data.attributes.slug

  const categoryName = props.partner
    ? "Партенери"
    : props.post?.attributes?.category?.data.attributes.name

  return (
    <div class="card">
      <div class="position-relative">
        <img
          class="card-img"
          src={props.post?.attributes.image?.data?.attributes?.url}
          alt="Card image"
        />
        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
          <div class="w-100 mt-auto">
            <a
              href={`/${categorySlug}/${props.post?.attributes.slug}`}
              class={`badge ${categorySlug}  mb-2`}
            >
              <i class="bi bi-circle-fill me-2 small fw-bold"></i>
              {categoryName}
            </a>
          </div>
        </div>
      </div>
      <div class="card-body px-0 pt-3">
        <h4 class="card-title">
          <a
            class="btn-link text-reset fw-bold"
            href={`/${categorySlug}/${props.post?.attributes.slug}`}
          >
            {props.post.attributes.name}
          </a>
        </h4>
        <p class="card-text">{props.post.attributes.short_description}</p>
        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
          <li class="nav-item">
            {dayjs(props.post?.attributes.publish_date).format(
              "H:mm | DD MMMM "
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}
