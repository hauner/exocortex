const {registerPlugin} = require('@scullyio/scully');

const HeaderRendererName = 'header-renderer';

function headerRenderer(html, route) {
  return Promise.resolve(html);
}

const validator = async conf => [];
registerPlugin('render', HeaderRendererName, headerRenderer, validator);

module.exports.HeaderRenderer = HeaderRendererName;
module.exports.headerRenderer = headerRenderer;
