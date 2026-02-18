import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://joseph-fajen.github.io',
  base: '/agentic-coding-companion',
  integrations: [
    starlight({
      title: 'Agentic Coding Companion',
      description: 'A scannable reference guide for agentic coding methodologies from the Dynamous course.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/joseph-fajen/agentic-coding-companion' },
      ],
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: '1. Setup',
          autogenerate: { directory: '01-setup' },
        },
        {
          label: '2. Planning (Layer 1)',
          autogenerate: { directory: '02-planning-layer-1' },
        },
        {
          label: '3. Planning (Layer 2)',
          autogenerate: { directory: '03-planning-layer-2' },
        },
        {
          label: '4. Implementation',
          autogenerate: { directory: '04-implementation' },
        },
        {
          label: '5. Validation',
          autogenerate: { directory: '05-validation' },
        },
        {
          label: '6. Iteration',
          autogenerate: { directory: '06-iteration' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/joseph-fajen/agentic-coding-companion/edit/main/',
      },
      customCss: [],
    }),
  ],
});
