import { PostI } from "~/types"

export const PreviewXsSizePost = (props: { post: PostI }) => {
  return (
    <div class="card pe-3">
      <div class="position-relative">
        <img
          class="card-img"
          alt="Card image"
          src={props.post?.attributes.image?.data?.attributes?.url}
        />
        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
          <div class="w-100 mb-auto d-flex justify-content-end"></div>
          <div class="w-100 mt-auto">
            <a
              class={`badge ${props.post.attributes.category?.data.attributes.slug} mb-2`}
              href={`/${props.post?.attributes.category?.data.attributes.slug}/${props.post?.attributes.slug}`}
            >
              <i class="bi bi-circle-fill me-2 small fw-bold"></i>
              {props.post?.attributes.category?.data.attributes.name}
            </a>
          </div>
        </div>
      </div>
      <div class="card-body px-0 pt-3">
        <h5 class="card-title">
          <a
            class="btn-link text-reset fw-bold"
            href={`/${props.post?.attributes.category?.data.attributes.slug}/${props.post?.attributes.slug}`}
          >
            {props.post?.attributes.name}
          </a>
        </h5>
      </div>
    </div>
  )
}
