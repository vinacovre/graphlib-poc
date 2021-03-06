const _ = require('lodash');
const Graph = require('graphlib').Graph;
const getRoots = require('./lib/get-roots');
const showRoots = require('./lib/show-roots');

let g = new Graph();

g.setNode('main');
g.setNode('sub');
g.setNode('footer');

g.setEdge('main', 'sub', 'references');
g.setEdge('sub', 'footer', 'references');
g.setEdge('main2', 'sub', 'references');
g.setEdge('main3', 'sub', 'references');
g.setEdge('sub', 'footer2', 'references');
g.setEdge('footer2', 'sub_footer', 'references');
g.setEdge('sub_footer', 'navbar', 'references');
g.setEdge('heading_tag', 'navbar', 'references');
g.setEdge('title1', 'heading_tag', 'references');
g.setEdge('title2', 'heading_tag', 'references');

console.log('NODES:');
console.log(g.nodes());

console.log('\nEDGES:');
console.log(g.edges());

// Which edges leave node 'sub'?
const outSub = g.outEdges('sub');
// console.log(`\nEdges leaving sub: \n${JSON.stringify(outSub, null, 2)}`);

// Which edges enter and leave node 'sub'?
const bothSub = g.nodeEdges('sub');
// console.log(`\nEdges entering & leaving sub: ${JSON.stringify(bothSub, null, 2)}`);

const predecessorsSub = g.predecessors('sub');
// console.log(`\nPredecessors of sub: ${JSON.stringify(predecessorsSub, null, 2)}`);

const contentType = 'navbar';
const roots = getRoots({g, contentType});

showRoots({roots, contentType});
