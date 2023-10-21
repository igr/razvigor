import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkBreaks]
	}
});
