"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tags_1 = require("./plugins/tags");
var blog_1 = require("./plugins/blog");
exports.config = {
    projectRoot: "./src",
    projectName: "blog",
    outDir: './docs',
    defaultPostRenderers: [
        blog_1.HeaderRenderer
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
