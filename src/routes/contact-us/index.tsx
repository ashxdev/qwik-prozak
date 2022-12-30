import styles from "./contact-us.css?inline"
import { DocumentHead } from "@builder.io/qwik-city"
import { component$, useStylesScoped$ } from "@builder.io/qwik"

export default component$(() => {
  useStylesScoped$(styles)

  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-9 mx-auto text-center">
              <h1 class="display-4">Контакти</h1>
              <nav
                class="d-flex justify-content-center"
                aria-label="breadcrumb"
              >
                <ol class="breadcrumb breadcrumb-dots mb-0">
                  <li class="breadcrumb-item">
                    <a href="/">
                      <i class="bi bi-house me-1"></i>Головна
                    </a>
                  </li>
                  <li class="breadcrumb-item active">Контакти</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-4">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <iframe
                class="w-100 h-300 grayscale"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3344.3903252230616!2d22.290578674889826!3d48.62562061668944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1668444130625!5m2!1sen!2sua"
                width="600"
                height="450"
                style="border:0;"
                loading="lazy"
              ></iframe>

              <div class="row mt-5">
                <div class="col-sm-6 mb-5 mb-sm-0">
                  <h3>Що до будь-яких питань &gt;</h3>
                  <address>88000 Ужгород, Україна</address>
                  <p>
                    Телефонуйте:&nbsp;
                    <a href="#" class="text-reset">
                      <u>(+380) 95 308 8778</u>
                    </a>
                  </p>
                  <p>
                    Пишіть:&nbsp;
                    <a href="mailto:mail.prozak@gmail.com" class="text-reset">
                      <u>mail.prozak@gmail.com</u>
                    </a>
                  </p>
                </div>
              </div>

              <hr class="my-5" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
})

export const head: DocumentHead = {
  title: "Контакти - Прозак"
}
