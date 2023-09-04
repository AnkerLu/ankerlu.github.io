// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // head
    head: {
      title: "MyMap Playground: Map out your ideas with AI",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover",
        },
        {
          hid: "description",
          name: "description",
          content:
            "",
        },
        // meta keyword
        {
          hid: "Keywords",
          name: "Keywords",
          content:
            "",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "og:title",
          property: "og:title",
          content: "MyMap Playground: Map out your ideas with AI",
        },
        // {
        //   hid: "og:description",
        //   property: "og:description",
        //   content: "MyMap Playground: Map out your ideas with AI",
        // },
        {
          hid: "og:image",
          property: "og:image",
          content: "/playground/opengraph.png",
        },
        // twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "MyMap Playground: Map out your ideas with AI",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "/playground/opengraph.png",
        },
      ],
      link: [
        // { rel: "icon", type: "image/svg+xml", href: "/playground/favicon.svg" },
        { rel: "icon", type: "shortcut-icon", href: "/playground/favicon.ico" },
        // {
        //   // 字体文件
        //   rel: 'stylesheet',
        //   type: 'text/css',
        //   href: '//yarnpkg.com/en/package/normalize.css',
        // },
      ],
    },

    // baseURL: '/playground',
  },
  // css
  css: ["~/assets/css/main.css"],

  typescript: {
    strict: true,
    shim: false,
  },

  modules: ["@element-plus/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
});
