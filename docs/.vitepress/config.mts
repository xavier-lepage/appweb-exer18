import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 18",
  description: "Revue de code documentée",
  base: '/appweb-exer18/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Xavier Lepage', link: '/xavier-lepage' },
          { text: 'Jérémie Paquin', link: '/jeremie-paquin' }
        ]
      }
    ],
  }
})
