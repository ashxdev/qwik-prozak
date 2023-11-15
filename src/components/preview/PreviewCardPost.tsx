import { PostI } from "~/types"
import { useDayjs } from "~/composable/useDayjs"

export const PreviewCardPost = (props: { post: PostI }) => {
  const dayjs = useDayjs()

  return (
    <div class="card mb-4">
      <div class="row">
        <div class="col-md-5">
          <img
            class="rounded-3"
            alt={props.post?.attributes.name}
            src={props.post?.attributes.image?.data?.attributes?.url}
          />
        </div>
        <div class="col-md-7 mt-3 mt-md-0">
          <div class="flex">
            <a
              class={`badge ${props.post?.attributes.category.data.attributes.slug}  mb-2 me-2`}
              href={`/${props.post?.attributes.category.data.attributes.slug}/${props.post?.attributes.slug}`}
            >
              <i class="bi bi-circle-fill me-2 small fw-bold"></i>
              {props.post?.attributes.category.data.attributes.name}
            </a>
            <span>
              {dayjs(props.post?.attributes.publish_date).format(
                "H:mm | DD MMMM "
              )}
            </span>
          </div>
          <h3>
            <a
              class="btn-link stretched-link text-reset"
              href={`/${props.post?.attributes.category.data.attributes.slug}/${props.post?.attributes.slug}`}
            >
              {props.post?.attributes.name}
            </a>
          </h3>
          <p>{props.post.attributes.short_description}</p>
        </div>
      </div>
    </div>
  )
}
