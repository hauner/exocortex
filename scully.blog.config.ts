import {ScullyConfig} from '@scullyio/scully';
import {TagsPlugin} from './plugins/tags';
import {HeaderRenderer} from './plugins/blog';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "blog",
  outDir: './dist/static',
  defaultPostRenderers: [
    // HeaderRenderer
  ],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      },
    },
    '/tags/:tag': {
      type: TagsPlugin
    }
  }
};
