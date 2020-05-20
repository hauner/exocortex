import {ScullyConfig} from '@scullyio/scully';
import './plugins/tags';


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "blog",
  outDir: './docs',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      },
    },
    '/tags/:tag': {
      type: 'tags'
    }
  },
};
