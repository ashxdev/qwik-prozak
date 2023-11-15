export const FooterCopyright = () => {
  return (
    <div class="bg-dark-overlay-3 mt-5">
      <div class="container">
        <div class="row align-items-center justify-content-md-between py-4">
          <div class="col-md-6">
            <div class="text-center text-md-start text-primary-hover text-muted">
              ©2023
              <a
                href="https://www.webestica.com/"
                class="text-reset btn-link"
                target="_blank"
              >
                Prozak.info
              </a>
              . All rights reserved
            </div>
          </div>
          <div class="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
            <div class="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
              <a class=" text-primary-hover" href="#">
                Українська версія
              </a>
            </div>
            <ul class="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
              <li class="nav-item">
                <a class="nav-link" href="/contact-us">
                  Контакти
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about-us">
                  Про нас
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-0" href="/cookie-policy">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
