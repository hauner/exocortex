import {HandledRoute} from "@scullyio/scully";

const {registerPlugin} = require('@scullyio/scully');

function tagsPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    {
      type: 'tags',
      route: '/tags/angular'
    },
  ]);
}

registerPlugin('router', 'tags', tagsPlugin);
