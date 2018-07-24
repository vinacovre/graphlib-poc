const Graph = require('graphlib').Graph;
const _ = require('lodash');
const getRoots = require('./lib/get-roots');
const buildGraph = require('./lib/build-graph');
const showRoots = require('./lib/show-roots');

const content = require('./res/content.json').content_types;

let g = new Graph();

buildGraph({g, content});

const contentType = 'faq';
const roots = getRoots({g, contentType});

showRoots({roots, contentType});
