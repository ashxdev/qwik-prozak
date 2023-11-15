import { CategoryI } from "~/types"

export const FooterNavigation = (props: { categories: CategoryI[] }) => {
  return (
    <div class="col-md-6 col-lg-3 mb-4">
      <h5 class="mb-4 text-white">Навігація</h5>
      <div class="row">
        <div class="col-6">
          <ul class="nav flex-column text-primary-hover">
            <li class="nav-item">
              <a class="nav-link pt-0" href="/">
                Головна
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/all-posts">
                Усі новини
              </a>
            </li>

            {props.categories?.map((item) => (
              <li class="nav-item">
                <a
                  class="nav-link"
                  key={item.id}
                  href={"/" + item?.attributes.slug}
                >
                  {item?.attributes.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="col-6  d-none">
          <ul class="nav flex-column text-primary-hover">
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">
                Теги
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Career <span class="badge bg-danger ms-2">2 Job</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Technology
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Startups
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Gadgets
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Inspiration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
