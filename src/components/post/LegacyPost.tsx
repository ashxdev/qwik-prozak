import styles from "./post.css?inline"
import { component$, useStyles$ } from "@builder.io/qwik"

export const LegacyPost = component$((props: { legacyPost: string }) => {
  useStyles$(styles)

  return (
    <>
      <section class="pt-2 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="card bg-dark-overlay-5 overflow-hidden card-bg-scale h-300 text-center"
                style={`background-image:url()}); background-position: center left; background-size: cover;`}
              >
                <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div class="w-100 my-auto">
                    <h2 class="text-white display-5">З архіву новин</h2>
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
      <section class=" pb-1 pb-lg-5">
        <div class="container">
          <div class="row">
            <div
              class="col-12"
              dangerouslySetInnerHTML={props.legacyPost}
            ></div>
          </div>
        </div>
      </section>
    </>
  )
})
