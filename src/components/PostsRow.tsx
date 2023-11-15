import { PostI } from "~/types"
import { PreviewXsSizePost } from "~/components/preview/PreviewXsSizePost"

export const PostsRow = (props: {
  title: string
  posts: PostI[]
  categorySlug: string
}) => {
  return (
    <section class="pt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mb-4 d-md-flex justify-content-between align-items-center">
              <h2 class="m-0">
                <i class="bi bi-megaphone"></i>&nbsp;
                {props.title}
              </h2>
              <a href={props.categorySlug} class="text-body small">
                <u>Всі новини: {props.title}</u>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          {props.posts?.map((item) => (
            <div
              key={item.id}
              class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            >
              <PreviewXsSizePost post={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
