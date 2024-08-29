import { PostI } from "~/types"
import { get } from "lodash-es"
import styles from "./post.css?inline"
import { useDayjs } from "~/composable/useDayjs"
import { component$, useStyles$ } from "@builder.io/qwik"

export const LegacyPost2 = component$((props: { data: PostI }) => {
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
                    <h2 class="text-white display-5">
                      {props.data?.attributes?.name}
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
              <span class="ms-2 small">
                {dayjs(props.data?.attributes?.publish_date).format(
                  "MMMM DD YYYY, H:mm"
                )}
              </span>
              <h1>{props.data?.attributes?.name}</h1>

              <p class="card-text">
                {props.data?.attributes?.short_description
                  ?.replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")
                  .replace(/&amp;nbsp;/g, "")
                  .replace(/<\/?[^>]+(>|$)/g, "")}
              </p>

              <div
                dangerouslySetInnerHTML={props.data?.attributes?.description}
              ></div>
            </div>

            <div class="col-lg-3"></div>
          </div>
        </div>
      </section>
    </>
  )
})
