import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import expressiveCode from 'astro-expressive-code'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

// Astro configuration for GitHub Pages project site hosting under /9ether
export default defineConfig({
  site: 'https://bernardwilkes1991.github.io/9ether',
  base: '/9ether',
  integrations: [
    react(), 
    sitemap(),
    expressiveCode({
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      themes: ['material-theme-lighter', 'material-theme-darker'],
      defaultProps: {
        showLineNumbers: true,
      },
    }),
    mdx(), 
    robotsTxt()
  ],
})