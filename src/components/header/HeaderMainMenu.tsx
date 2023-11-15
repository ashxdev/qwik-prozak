import { clsx } from "clsx"
import { CategoryI, Homepage } from "~/types"
import { useStore, component$ } from "@builder.io/qwik"
import { HeaderMainMenuSubItem } from "./HeaderMainMenuSubItem"

interface HeaderProps {
  homepage: Homepage
  categories?: CategoryI[]
}

export const HeaderMainMenu = component$((props: HeaderProps) => {
  const store = useStore({ isShowMobileMenu: false })

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            class="navbar-brand-item light-mode-item"
            src="/logo.png"
            alt="logo"
          />
          <img
            class="navbar-brand-item dark-mode-item"
            src="/logo.png"
            alt="logo"
          />
        </a>

        <button
          class="navbar-toggler ms-auto"
          type="button"
          aria-expanded="false"
          data-bs-toggle="collapse"
          aria-label="Toggle navigation"
          aria-controls="navbarCollapse"
          data-bs-target="#navbarCollapse"
          onClick$={() => (store.isShowMobileMenu = !store.isShowMobileMenu)}
        >
          <span class="text-body h6 d-none d-sm-inline-block">Меню</span>
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class={clsx([
            "collapse navbar-collapse",
            { show: store.isShowMobileMenu }
          ])}
          id="navbarCollapse"
        >
          <ul class="navbar-nav navbar-nav-scroll mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Головна
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/all-posts">
                Усі новини
              </a>
            </li>
            {props.categories?.map((item) => (
              <HeaderMainMenuSubItem
                key={item.id}
                category={item}
                homepage={props.homepage}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
})
