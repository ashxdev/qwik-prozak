import { CategoryI, Homepage } from "~/types"
import { component$ } from "@builder.io/qwik"
import { HeaderCookie } from "./HeaderCookie"
import { HeaderTopMenu } from "./HeaderTopMenu"
import { HeaderMainMenu } from "./HeaderMainMenu"

export default component$(
  (props: { categories: CategoryI[]; homepage: Homepage }) => {
    const categories = props.categories
    const homepage = props.homepage

    return (
      <header class="navbar-light navbar-sticky header-static">
        <link
          as="style"
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Rubik:wght@400;500;700&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Rubik:wght@400;500;700&display=swap"
          />
        </noscript>

        <link
          type="text/css"
          rel="stylesheet"
          id="style-switch"
          href="/styles/style.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          id="style-bootstrap-icons"
          href="/styles/bootstrap-icons/bootstrap-icons.css"
        />
        <HeaderCookie />

        <HeaderTopMenu />

        <HeaderMainMenu categories={categories} homepage={homepage} />
      </header>
    )
  }
)
