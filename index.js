const Graph = require('graphlib').Graph;
const _ = require('lodash');
const getRoots = require('./get-roots');
const buildGraph = require('./build-graph');

const content = require('./content.json').content_types;

let g = new Graph();

buildGraph({g, content});

const contentType = 'faq';
const roots = getRoots({g, contentType});

console.log(`\nROOTS OF '${contentType}':`);
console.log(roots);
console.log(`\nROOTS COUNT ('${contentType}'):`);
console.log(roots.length);