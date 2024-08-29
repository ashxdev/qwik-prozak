import { PostI } from "~/types"
import { useDayjs } from "~/composable/useDayjs"

export const PreviewSmallSizePost = (props: { post: PostI }) => {
  const dayjs = useDayjs()

  return (
    <div
      class="card card-overlay-bottom card-grid-sm card-bg-scale"
      style={{
        "background-size": "cover",
        "background-position": "center left",
        "background-image": `url(${props.post?.attributes.image?.data?.attributes?.url})`
      }}
    >
      <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
        <div class="w-100 mt-auto">
          <a
            class={`badge ${props.post?.attributes.category.data?.attributes?.slug}  mb-2`}
            href={`/${props.post?.attributes.category.data?.attributes?.slug}/${props.post?.attributes?.slug}`}
          >
            <i class="bi bi-circle-fill me-2 small fw-bold"></i>
            {props.post?.attributes.category.data?.attributes?.name}
          </a>
          <h4 class="text-white">
            <a
              href={`/${props.post?.attributes.category.data?.attributes?.slug}/${props.post?.attributes?.slug}`}
              class="btn-link stretched-link text-reset"
            >
              {props.post?.attributes?.name}
            </a>
          </h4>
          <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
            <li class="nav-item">
              {dayjs(props.post?.attributes.publish_date).format(
                "H:mm | DD MMMM "
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
