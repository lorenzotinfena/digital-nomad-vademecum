import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://digital-nomad-vademecum.com',
  integrations: [
    starlight({
    components: {
      Footer: './src/components/footer.astro'
    },
    title: 'Digital Nomad Vademecum',
    social: {
      github: 'https://github.com/lorenzotinfena/digital-nomad-vademecum'
    },
    sidebar: [{
      label: 'Introduction',
      link: '/'
    }, {
      label: 'Gear',
      autogenerate: {directory:'gear' }
    }]
  })]
});