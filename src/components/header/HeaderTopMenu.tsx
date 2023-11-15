import { useDayjs } from "~/composable/useDayjs"
import { $, useStore, component$ } from "@builder.io/qwik"

export const HeaderTopMenu = component$(() => {
  const dayjs = useDayjs()
  const state = useStore({
    isDarkTheme: false
  })

  const changeZooming = $((fontSize: string) => {
    const doc = document.documentElement

    if (fontSize == "font-sm") {
      doc.classList.remove("font-lg")
      doc.classList.add("font-sm")
    } else if (fontSize == "font-default") {
      doc.classList.remove("font-sm", "font-lg")
    } else {
      doc.classList.remove("font-sm")
      doc.classList.add("font-lg")
    }
  })

  const changeThemeMode = $(() => {
    const theme = localStorage.getItem("data-theme")
    const style = document.getElementById("style-switch")

    if (!style) return

    const changeThemeToDark = () => {
      state.isDarkTheme = true
      localStorage.setItem("data-theme", "dark")
      style.setAttribute("href", "/styles/style-dark.css")
      document.documentElement.setAttribute("data-theme", "dark")
    }

    const changeThemeToLight = () => {
      state.isDarkTheme = false
      localStorage.setItem("data-theme", "light")
      style.setAttribute("href", "/styles/style.css")
      document.documentElement.setAttribute("data-theme", "light")
    }

    if (theme !== "dark") {
      changeThemeToDark()
    } else {
      changeThemeToLight()
    }
  })

  return (
    <div class="navbar-top d-none d-lg-block small">
      <div class="container">
        <div class="d-md-flex justify-content-between align-items-center my-2">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="/contact-us">
                Контакти
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ps-0" href="/about-us">
                Про нас
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/advertisement">
                Реклама
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <div
              class="btn-group me-2"
              role="group"
              aria-label="font size changer"
            >
              <input
                type="radio"
                class="btn-check"
                name="fntradio"
                id="font-sm"
                onClick$={() => changeZooming("font-sm")}
              />
              <label class="btn btn-xs btn-outline-primary mb-0" for="font-sm">
                A-
              </label>

              <input
                type="radio"
                class="btn-check"
                name="fntradio"
                id="font-default"
                onClick$={() => changeZooming("font-default")}
                checked
              />
              <label
                class="btn btn-xs btn-outline-primary mb-0"
                for="font-default"
              >
                A
              </label>

              <input
                type="radio"
                class="btn-check"
                name="fntradio"
                id="font-lg"
                onClick$={() => changeZooming("font-lg")}
              />
              <label class="btn btn-xs btn-outline-primary mb-0" for="font-lg">
                A+
              </label>
            </div>

            <div
              class="modeswitch"
              id="darkModeSwitch"
              onClick$={changeThemeMode}
            >
              <div class="switch">
                <i
                  class={`bi bi-${
                    state.isDarkTheme ? "moon-fill" : "brightness-high"
                  }`}
                ></i>
              </div>
            </div>

            <ul class="nav">
              <li class="nav-item">
                <a
                  target="_blank"
                  class="nav-link px-2 fs-5"
                  href="https://www.facebook.com/prozak.info"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>

              <li class="nav-item">
                <a
                  target="_blank"
                  class="nav-link px-2 fs-5"
                  href="https://www.youtube.com/channel/UCpDjC8hLsxO-AdW7neBV0yg"
                >
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
            </ul>

            <div class="ms-2">{dayjs().format(" DD MMMM YYYY, H:mm")}</div>
          </div>
        </div>
        <div class="border-bottom border-2 border-primary opacity-1"></div>
      </div>
    </div>
  )
})
