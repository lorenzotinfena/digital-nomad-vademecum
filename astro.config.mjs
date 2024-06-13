import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://lorenzotinfena.github.io',
  base: 'digital-nomad-vademecum',
  integrations: [
    starlight({
    components: {
      Footer: './src/components/footer.astro'
    },
    title: 'Digital nomad vademecum',
    social: {
      github: 'https://github.com/lorenzotinfena/digital-nomad-vademecum'
    },
    sidebar: [{
      label: 'Getting started',
      link: '/'
    }, {
      label: 'Possessions',
      items: [{
        label: 'tech',
        link: '/possessions/tech'
      }]
    }]
  })]
});