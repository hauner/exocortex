"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tags_1 = require("./plugins/tags");
exports.config = {
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
            type: tags_1.TagsPlugin
        }
    }
};
