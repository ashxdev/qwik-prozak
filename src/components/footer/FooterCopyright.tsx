export const FooterCopyright = () => {
  return (
    <div class="bg-dark-overlay-3 mt-5">
      <div class="container">
        <div class="row align-items-center justify-content-md-between py-4">
          <div class="col-md-6">
            <div class="text-center text-md-start text-primary-hover text-muted">
              ©2022
              <a
                href="https://www.webestica.com/"
                class="text-reset btn-link"
                target="_blank"
              >
                Webestica
              </a>
              . All rights reserved
            </div>
          </div>
          <div class="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
            <div class="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
              <a
                class="dropdown-toggle text-primary-hover"
                href="#"
                role="button"
                id="languageSwitcher"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English Edition
              </a>
              <ul
                class="dropdown-menu min-w-auto"
                aria-labelledby="languageSwitcher"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    German{" "}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    French
                  </a>
                </li>
              </ul>
            </div>
            <ul class="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Terms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Privacy
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-0" href="#">
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
