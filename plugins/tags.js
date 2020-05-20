const {registerPlugin} = require('@scullyio/scully');

const TagsPluginName = 'tags';

const validator = async options => {
  return [];
};


async function tagsPlugin(route, config) {
  return [
    {
      route: '/tags/angular',
      type: TagsPluginName
    },
    {
      route: '/tags/rxjs',
      type: TagsPluginName
    },
  ];
}

registerPlugin('router', TagsPluginName, tagsPlugin, validator);

module.exports.TagsPlugin = TagsPluginName;
module.exports.tagsPlugin = tagsPlugin;
