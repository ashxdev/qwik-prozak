import { PostI } from '~/types'

export const PostsRow = (props: { title: string; posts: PostI[] }) => {
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
              <a href="#" class="text-body small">
                <u>Всі новини: {props.title}</u>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          {props.posts?.map((item) => (
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div class="card pe-3">
                <div class="position-relative">
                  <img class="card-img" src="/images/blog/4by3/07.jpg" alt="Card image" />
                  <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div class="w-100 mb-auto d-flex justify-content-end">
                      <div class="text-end ms-auto">
                        <div class="icon-md bg-white-soft bg-blur text-white fw-bold rounded-circle" title="8.5 rating">
                          8.5
                        </div>
                      </div>
                    </div>
                    <div class="w-100 mt-auto">
                      <a href="#" class="badge bg-info mb-2">
                        <i class="fas fa-circle me-2 small fw-bold"></i>Marketing
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0 pt-3">
                  <h5 class="card-title">
                    <a href="post-single-3.html" class="btn-link text-reset fw-bold">
                      {item?.attributes.name}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
