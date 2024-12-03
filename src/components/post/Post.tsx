import { PostI } from "~/types"
import { get } from "lodash-es"
import styles from "./post.css?inline"
import { useDayjs } from "~/composable/useDayjs"
import { PostRightSideBar } from "./PostRightSideBar"
import { component$, useStyles$ } from "@builder.io/qwik"

export const Post = component$((props: { data: PostI }) => {
  useStyles$(styles)

  const dayjs = useDayjs()

  const getImageSrc = () =>
    get(
      props.data,
      "attributes.image.data.attributes.url",
      "/img/entertrainment/enter1.jpg"
    )

  return (
    <>
      <section class="pt-2 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="card bg-dark-overlay-5 overflow-hidden card-bg-scale h-300 text-center"
                style={`background-image:url(${getImageSrc()}); background-position: center left; background-size: cover;`}
              >
                <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div class="w-100 my-auto">
                    <a
                      href={`/${props.data.attributes.category.data.attributes.slug}`}
                      class={
                        props.data.attributes.category.data.attributes.slug +
                        " badge  mb-2"
                      }
                    >
                      <i class="bi bi-circle-fill me-2 small fw-bold"></i>
                      {props.data.attributes.category.data.attributes.name}
                    </a>
                    <h2 class="text-white display-5">
                      {props.data.attributes.name}
                    </h2>
                    <ul class="nav nav-divider text-white-force align-items-center justify-content-center">
                      <li class="nav-item">
                        <div class="nav-link">
                          <div class="d-flex align-items-center text-white position-relative"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-1 pb-lg-5">
        <div class="container position-relative">
          <div class="row">
            <div class="col-lg-9">
              <a
                href={`/${props.data.attributes.category.data.attributes.slug}`}
                class={
                  props.data.attributes.category.data.attributes.slug +
                  " badge  mb-2"
                }
              >
                <i class="bi bi-circle-fill me-2 small fw-bold"></i>
                {props.data.attributes.category.data.attributes.name}
              </a>
              <span class="ms-2 small">
                {dayjs(props.data.attributes.publish_date).format(
                  "MMMM DD YYYY, H:mm"
                )}
              </span>
              <h1>{props.data.attributes.name}</h1>

              <p
                class="lead"
                dangerouslySetInnerHTML={
                  props.data?.attributes?.short_description
                }
              ></p>

              <div
                dangerouslySetInnerHTML={props.data?.attributes?.description}
              ></div>
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3297522505307737"
                crossOrigin="anonymous"></script>
              <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-3297522505307737"
                data-ad-slot="3536841823"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </div>

            <div class="col-lg-3">
              <PostRightSideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
})
