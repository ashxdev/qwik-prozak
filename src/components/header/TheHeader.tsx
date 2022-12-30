import { Category, Homepage } from '~/types'
import { component$ } from '@builder.io/qwik'
import { HeaderTopMenu } from './HeaderTopMenu'
import { HeaderMainMenu } from './HeaderMainMenu'

export default component$((props: { categories: Category[]; homepage: Homepage }) => {
  const categories = props.categories
  const homepage = props.homepage

  return (
    <header class="navbar-light navbar-sticky header-static">
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />

      <link id="style-switch" rel="stylesheet" type="text/css" href="/styles/style.css" />

      <link id="style-font-awesome" rel="stylesheet" type="text/css" href="/styles/font-awesome/css/all.min.css" />

      <link id="style-bootstrap-icons" rel="stylesheet" type="text/css" href="/styles/bootstrap-icons/bootstrap-icons.css" />

      <HeaderTopMenu />

      <HeaderMainMenu categories={categories} homepage={homepage} />
    </header>
  )
})
