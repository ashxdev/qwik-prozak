import { defineConfig } from "vite"
import { qwikVite } from "@builder.io/qwik/optimizer"
import { qwikCity } from "@builder.io/qwik-city/vite"
import tsconfigPaths from "vite-tsconfig-paths"

const PACKAGE_ROOT = __dirname

export default defineConfig(() => {
  return {
    root: PACKAGE_ROOT,
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600"
      }
    }
  }
})
