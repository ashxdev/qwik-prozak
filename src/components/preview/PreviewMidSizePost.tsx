import { PostI } from '~/types'
import { useDayjs } from '~/composable/useDayjs'

export const PreviewMidSizePost = (props: { post: PostI }) => {
  const dayjs = useDayjs()

  return (
    <div
      class="card card-overlay-bottom card-grid-sm card-bg-scale"
      style={{
        'background-size': 'cover',
        'background-position': 'center left',
        'background-image': `url(${props.post?.attributes.image?.data?.attributes?.url})`
      }}
    >
      <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
        <div class="w-100 mt-auto">
          <a class="badge bg-warning mb-2" href={`/${props.post?.attributes.category.data.attributes.slug}/${props.post?.attributes.slug}`}>
            <i class="fas fa-circle me-2 small fw-bold"></i>
            {props.post?.attributes.category.data.attributes.name}
          </a>
          <h4 class="text-white">
            <a class="btn-link stretched-link text-reset" href={`/${props.post?.attributes.category.data.attributes.slug}/${props.post?.attributes.slug}`}>
              {props.post?.attributes.name}
            </a>
          </h4>
          <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
            <li class="nav-item">{dayjs(props.post?.attributes.createdAt).format('H:mm | DD MMMM ')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
