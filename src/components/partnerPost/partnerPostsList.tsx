import { PostI } from "~/types"
import { get } from "lodash-es"
import { useDayjs } from "~/composable/useDayjs"
import { component$ } from "@builder.io/qwik"

import DanceLineStudioRandomAdv from "~/components/adv/DanceLineStudioRandomAdv"

export const PartnerPostsList = component$(
  (props: { partnerPosts: PostI[] }) => {
    const dayjs = useDayjs()

    const getImageSrc = (item: PostI) =>
      get(
        item,
        "attributes.image.data.attributes.url",
        "/images/blog/1by1/thumb/01.jpg"
      )

    return (
      <>
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-12">
            <h4 class="mt-4 mb-3">
              <a href="/Novini-partneriv" class="btn-link text-reset fw-bold">
                Новини партнерів
              </a>
            </h4>
            {props.partnerPosts?.map((item: PostI) => (
              <div key={item.id} class="card mb-3">
                <div class="row g-3">
                  <div class="col-4">
                    <img
                      class="rounded"
                      src={getImageSrc(item)}
                      alt={item.attributes.name}
                    />
                  </div>
                  <div class="col-8">
                    <h6>
                      <a
                        href={`/Novini-partneriv/${item.attributes.slug}`}
                        class="btn-link stretched-link text-reset fw-bold"
                      >
                        {item?.attributes.name}
                      </a>
                    </h6>
                    <div class="small mt-1">
                      {dayjs(item.attributes.publish_date).format(
                        "H:mm | DD MMMM "
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="col-12 col-sm-6 col-lg-12 my-4">
            <DanceLineStudioRandomAdv />
          </div>
          <div class="col-12 col-sm-6 col-lg-12 my-4">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3297522505307737"
              crossOrigin="anonymous"></script>
            <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-3297522505307737"
              data-ad-slot="3881119466"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
          </div>
        </div>
      </>
    )
  }
)
