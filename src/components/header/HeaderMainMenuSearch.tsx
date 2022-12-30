import { clsx } from "clsx"
import { useStore, component$ } from "@builder.io/qwik"

export const HeaderMainMenuSearch = component$(() => {
  const store = useStore({ isShowSearch: false })
  return (
    <div class="nav flex-nowrap align-items-center">
      <div class="nav-item dropdown dropdown-toggle-icon-none nav-search">
        <a
          onClick$={() => (store.isShowSearch = !store.isShowSearch)}
          class="nav-link dropdown-toggle"
          role="button"
          href="#"
          id="navSearch"
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          <i class="bi bi-search fs-4"> </i>
        </a>
        <div
          class={clsx([
            "dropdown-menu dropdown-menu-end shadow rounded p-2",
            { show: store.isShowSearch }
          ])}
          aria-labelledby="navSearch"
        >
          <form class="input-group">
            <input
              class="form-control border-success"
              type="search"
              aria-label="Search"
              placeholder="Search"
            />
            <button class="btn btn-success m-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
})
