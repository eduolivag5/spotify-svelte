import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				spotify: {
					black: '#191414',
					dark: '#121212',
					green: '#1DB954',
					gray: '#282828'
				}
			}
		}
	},
	plugins: []
} satisfies Config;
