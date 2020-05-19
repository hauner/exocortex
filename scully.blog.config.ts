import {ScullyConfig} from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "blog",
  outDir: './docs',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  },
  extraRoutes: [
    '/tags',
    '/tags/angular',
    '/tags/rxjs'
  ]
};
