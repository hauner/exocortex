"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./plugins/tags");
exports.config = {
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
