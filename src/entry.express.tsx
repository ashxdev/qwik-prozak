/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for the Express HTTP server when building for production.
 *
 * Learn more about Node.js server integrations here:
 * - https://qwik.builder.io/docs/deployments/node/
 *
 */
import {
  createQwikCity,
  type PlatformNode
} from "@builder.io/qwik-city/middleware/node"
import qwikCityPlan from "@qwik-city-plan"
import { manifest } from "@qwik-client-manifest"
import render from "./entry.ssr"
import express from "express"
import { fileURLToPath } from "node:url"
import { join } from "node:path"

import qs from "qs"
import fetch from "node-fetch"
import { v4 as uuidv4 } from "uuid"
import compression from "compression"

declare global {
  interface QwikCityPlatform extends PlatformNode {}
}

// import compression from 'compression';

// Directories where the static assets are located
const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist")
const buildDir = join(distDir, "build")

// Allow for dynamic port
const PORT = process.env.PORT ?? 3008

// Create the Qwik City Node middleware
const { router, notFound } = createQwikCity({
  render,
  qwikCityPlan,
  manifest
  // getOrigin(req) {
  //   // If deploying under a proxy, you may need to build the origin from the request headers
  //   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto
  //   const protocol = req.headers["x-forwarded-proto"] ?? "http";
  //   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host
  //   const host = req.headers["x-forwarded-host"] ?? req.headers.host;
  //   return `${protocol}://${host}`;
  // }
})

// Create the express server
// https://expressjs.com/
const app = express()

// Enable gzip compression
// app.use(compression());

// Static asset handlers
// https://expressjs.com/en/starter/static-files.html
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }))
app.use(express.static(distDir, { redirect: false }))
app.use(express.static("public"))

// custom route for get rss feed
app.get("/rss/feed/articles", function (req, res) {
  res.redirect("/rss")
})

app.get("/rss", async (_, res) => {
  function addLeadingZero(num: number) {
    let numString = num.toString()
    while (numString.length < 2) numString = "0" + num
    return numString
  }

  function buildRFC822Date(dateString: string) {
    const dayStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthStrings = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]

    const timeStamp = Date.parse(dateString)
    const date = new Date(timeStamp)

    const day = dayStrings[date.getDay()]
    const dayNumber = addLeadingZero(date.getDate())
    const month = monthStrings[date.getMonth()]
    const year = date.getFullYear()
    const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(
      date.getMinutes()
    )}:00`
    const timezone = date.getTimezoneOffset() === 0 ? "GMT" : "BST"

    //Wed, 02 Oct 2002 13:00:00 GMT
    return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezone}`
  }
  const postsQ = qs.stringify(
    {
      filters: {
        ukr_net: {
          $eq: true
        }
      },
      pagination: {
        page: 1,
        pageSize: 100
      },
      sort: ["publishedAt:desc"],
      populate: ["image", "category"]
    },
    {
      encodeValuesOnly: true
    }
  )

  async function getPosts() {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/posts?${postsQ}`
    )
    const result = (await response.json()) as any

    return result?.data || []
  }

  function buildRssItems(items: any) {
    return items
      .map((item: any) => {
        return `
        <item>
          <title>${item.attributes.name}</title>
          <link>http://prozak.info/${
            item.attributes.category.data.attributes.slug
          }/${item.attributes.slug}</link>
          <description>${item.attributes.short_description}</description>
          <author>ashxdev@gmail.com (Admin User)</author>
          <category>${item.attributes.short_description}</category>
          <guid isPermaLink="false">${uuidv4()}</guid>
          <pubDate>${buildRFC822Date(item.attributes.publish_date)}</pubDate>
        </item>
        `
      })
      .join("")
  }

  const rssFeed = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prozak.info</title>
    <link>http://prozak.info/</link>
    <description>Prozak.info інформаційний портал чітких новин</description>
    <language>ua-UA</language>
    <managingEditor>ashxdev@gmail.com (Administrator User)</managingEditor>
    <pubDate>${buildRFC822Date(new Date().toISOString())}</pubDate>
    <lastBuildDate>${buildRFC822Date(new Date().toISOString())}</lastBuildDate>
    <generator>express js</generator>
    <docs>http://www.rssboard.org/rss-specification</docs>
    <image>
      <url>https://qwik.prozak.info/Prozak.info_rss.png</url>
      <title>Prozak.info</title>
      <link>https://prozak.info/</link>
    </image>
    <atom:link href="https://prozak.info/rss" rel="self" type="application/rss+xml"/>
     ${buildRssItems(await getPosts())}
  </channel>
  </rss>`

  res.set("Content-Type", "application/rss+xml")
  res.send(rssFeed)
})
// Use Qwik City's page and endpoint request handler
app.use(router)

// Use Qwik City's 404 handler
app.use(notFound)

console.log("import.meta.env.VITE_STRAPI_URL")
fetch(`${import.meta.env.VITE_STRAPI_URL}/posts}`)
  .then((response) => response.text())
  .then((body) => {
    console.log(body)
  })

// Start the express server
app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`Server started: http://localhost:${PORT}/`)
})
