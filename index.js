const content = require('./content.json').content_types;
const Graph = require('graphlib').Graph;
const _ = require('lodash');
const getRoots = require('./get-roots');
let g = new Graph();

let all = [];
content.forEach(contentType => {
  g.setNode(contentType.uid);
  const schema = contentType.schema;
  const references = schema
    .filter(dataType => dataType.data_type === 'reference')
    .map(destination => {
      // console.log(`Seting edge \from ${contentType.uid} to ${destination.uid} `);
      g.setEdge(contentType.uid, destination.uid);
      return destination.uid;
  });

  all.push({
    contentType: contentType.uid,
    references
  });
});
console.log(g.inEdges('navbar').length);

const contentType = 'footer';
const roots = getRoots(g, contentType);
const flattenRoots = _.flattenDeep(roots);

console.log(`\nROOTS OF '${contentType}':`);
console.log(flattenRoots);
console.log(`\nROOTS COUNT ('${contentType}'):`);
console.log(flattenRoots.length);