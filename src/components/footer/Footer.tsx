import { FooterRecentPost } from "./FooterRecentPost"
import { FooterNavigation } from "./FooterNavigation"
import { FooterHotTopics } from "./FooterHotTopics"
import { FooterCopyright } from "./FooterCopyright"

export const Footer = () => {
  return (
    <footer class="bg-dark pt-5">
      <div class="container">
        <div class="row pt-5">
          <FooterRecentPost />

          <FooterNavigation />

          <div class="col-sm-6 col-lg-3 mb-4">
            <a href="#">
              <img class="w-100" alt="app-store" src="/images/adv.png" />
            </a>
          </div>
        </div>

        <FooterHotTopics />
      </div>

      <FooterCopyright />
    </footer>
  )
}
