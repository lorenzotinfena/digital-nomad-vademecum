import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://digitalnomadvademecum.com',
  integrations: [
    starlight({
    components: {
      Footer: './src/components/footer.astro'
    },
    head: [
    {
      tag: 'meta',
      attrs: {
        name: 'google-site-verification',
        content: 'MVwP7LlKAwuMiXw6kdr0biaLWjtC-9jpqBaULMa3OM0'
      },
    }
    ],
    title: 'Digital nomad vademecum',
    social: {
      github: 'https://github.com/lorenzotinfena/digital-nomad-vademecum'
    },
    sidebar: [{
      label: 'Getting started',
      link: '/'
    }, {
      label: 'Gear',
      items: [{
        label: 'Tech',
        link: '/gear/tech'
      }]
    }]
  })]
});