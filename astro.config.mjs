import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lorenzotinfena.github.io',
	base: 'digital-nomad-vademecum',
	integrations: [
		starlight({
			title: 'Digital nomad vademecum',
			social: {
				github: 'https://github.com/lorenzotinfena/digital-nomad-vademecum',
			},
			sidebar: [
				{
					label: 'Tech',
					items: [
						{ label: 'tech', link: '/' },
					],
				}
			],
		}),
	],
});