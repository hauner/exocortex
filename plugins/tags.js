const {registerPlugin} = require('@scullyio/scully');

const TagsPlugin = 'tags';

const validator = async options => {
  return [];
};


async function tagsPlugin(route, config) {
  return [
    {
      route: '/tags/angular',
      type: TagsPlugin
    },
    {
      route: '/tags/rxjs',
      type: TagsPlugin
    },
  ];
}

registerPlugin('router', TagsPlugin, tagsPlugin, validator);
module.exports.tagsPlugin = tagsPlugin;
