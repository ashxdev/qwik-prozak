import { CategoryI } from "~/types"
import { component$ } from "@builder.io/qwik"

export default component$((props: { categories: CategoryI[] }) => {
  return (
    <div class="row g-2">
      <h5>Інші категорії</h5>
      {props.categories?.map((item) => (
        <div
          key={item.id}
          class={`d-flex justify-content-between align-items-center  rounded p-2 position-relative ${item.attributes.slug} mb-2`}
        >
          <h6 class="m-0 text-white">{item.attributes.name}</h6>
          <a
            href={`/${item.attributes.slug}`}
            class={`text-dark stretched-link ${item.attributes.slug} mb-2`}
          ></a>
        </div>
      ))}
    </div>
  )
})
