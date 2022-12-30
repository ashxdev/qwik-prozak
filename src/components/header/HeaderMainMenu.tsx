import { Category, Homepage } from '~/types'
import { component$ } from '@builder.io/qwik'
import { HeaderMainMenuSubItem } from './HeaderMainMenuSubItem'

interface HeaderProps {
  categories?: Category[]
  homepage: Homepage
}

export const HeaderMainMenu = component$((props: HeaderProps) => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img class="navbar-brand-item light-mode-item" src="/logo.png" alt="logo" />
          <img class="navbar-brand-item dark-mode-item" src="/logo.png" alt="logo" />
        </a>

        <button
          class="navbar-toggler ms-auto"
          type="button"
          aria-expanded="false"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span class="text-body h6 d-none d-sm-inline-block">Menu</span>
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Головна
              </a>
            </li>
            {props.categories?.map((item) => (
              <HeaderMainMenuSubItem category={item} homepage={props.homepage} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
})
