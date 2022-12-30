import { MainHero } from '~/components/main/MainHero'
import type { DocumentHead } from '@builder.io/qwik-city'
import { MainContent } from '~/components/main/MainContent'
import { MainPostRowByCategory } from '~/components/main/MainPostRowByCategory'

import { MainTrendNews } from '~/components/main/MainTrendNews'
import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <>
      <MainTrendNews />

      <MainHero />

      <div class="container">
        <div class="border-bottom border-primary border-2 opacity-1"></div>
      </div>

      <MainContent />

      <div class="container">
        <div class="border-bottom border-primary border-2 opacity-1"></div>
      </div>

      <MainPostRowByCategory title="Спортивні події України та світу" categorySlug="sport" />
    </>
  )
})

export const head: DocumentHead = {
  title: 'Prozak.info'
}
