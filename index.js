const content = require('./content.json').content_types;
const Graph = require('graphlib').Graph;
const _ = require('lodash');
let g = new Graph();

let all = [];
content.forEach(contentType => {
  g.setNode(contentType.uid);
  const schema = contentType.schema;
  const references = schema
    .filter(dataType => dataType.data_type === 'reference')
    .map(destination => {
      console.log(`Seting edge from ${contentType.uid} to ${destination.uid} `);
      g.setEdge(contentType.uid, destination.uid);
      return destination.uid;
    });

  all.push({contentType: contentType.uid, references});
});
console.log(g.inEdges('navbar').length);

const getRoots = contentType => {
  const predecessors = g.predecessors(contentType);

  if (!predecessors) {
    throw new Error(`There \is \no content type named '${contentType}'`);
  }

  if (predecessors.length === 0) {
    return contentType;
  }

  return predecessors.map(contentType => getRoots(contentType));
}

const contentType = 'footer';
const roots = getRoots(contentType);
const flattenRoots = _.flattenDeep(roots);

console.log(`\nROOTS OF '${contentType.toUpperCase()}':`);
console.log(flattenRoots);
console.log(`\nROOTS COUNT ('${contentType.toUpperCase()}'):`);
console.log(flattenRoots.length);
