import { component$ } from "@builder.io/qwik"
import DLSBachataLadyStyleAdv from "~/components/adv/DLSBachataLadyStyleAdv"


export const PartnerPostRightSideBar = component$(() => {
  return (
    <div data-sticky data-margin-top="80" data-sticky-for="991">
      <h4>Поширити</h4>
      <ul class="nav text-white-force">
        <li class="nav-item">
          <a
            class="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-facebook"
            href="#"
          >
            <i class="bi bi-facebook align-middle"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-twitter"
            href="#"
          >
            <i class="fab fa-twitter-square align-middle"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-linkedin"
            href="#"
          >
            <i class="fab fa-linkedin align-middle"></i>
          </a>
        </li>
      </ul>
      <div class="mt-4">
        <DLSBachataLadyStyleAdv />
      </div>
    </div>
  )
})
