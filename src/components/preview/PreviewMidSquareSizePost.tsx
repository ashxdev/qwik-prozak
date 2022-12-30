import { PostI } from '~/types'
import { useDayjs } from '~/composable/useDayjs'

export const PreviewMidSquareSizePost = (props: { post: PostI }) => {
  const dayjs = useDayjs()

  return (
    <div class="card">
      <div class="position-relative">
        <img class="card-img" src={props.post?.attributes.image?.data?.attributes?.url} alt="Card image" />
        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
          <div class="w-100 mt-auto">
            <a href={`/${props.post?.attributes.category.data.attributes.slug}/${props.post?.attributes.slug}`} class="badge bg-warning mb-2">
              <i class="fas fa-circle me-2 small fw-bold"></i>
              {props.post?.attributes.category.data.attributes.name}
            </a>
          </div>
        </div>
      </div>
      <div class="card-body px-0 pt-3">
        <h4 class="card-title">
          <a href="post-single.html" class="btn-link text-reset fw-bold">
            {props.post.attributes.name}
          </a>
        </h4>
        <p class="card-text">{props.post.attributes.short_description}</p>
        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
          <li class="nav-item">{dayjs(props.post?.attributes.createdAt).format('H:mm | DD MMMM ')}</li>
        </ul>
      </div>
    </div>
  )
}
