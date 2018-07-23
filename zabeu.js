const content = require('./content.json').content_types;
const Graph = require('graphlib').Graph;
var g = new Graph();

// console.log(content.length);


// content.forEach(element => {
//     const schema = element.schema;
//     console.log(`------------ Getting schema for ${element.uid} --------------`);
//     schema.forEach(schemaElement => {
//         const dataType = schemaElement.data_type ? schemaElement.data_type : '';
//         if (dataType) {
//             if(dataType === 'reference') {
//                 console.log(schemaElement.reference_to);
//             }
//         }
//     });
// });


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
// all.forEach(element => {
//     const outSub = g.outEdges(element.contentTYpe);
//     console.log(outSub);
// })
// console.log(JSON.stringify(all));

// all.forEach(element => {
//     console.log('--------CONTENT TYPE-----------');
//     console.log(element.contentType);
//     console.log(element.references);
//     console.log('-------------------------------');
// })

// console.log('NODES:');
// console.log(g.nodes());
