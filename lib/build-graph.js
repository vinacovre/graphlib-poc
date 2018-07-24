const buildGraph = params => {
  const {g, content} = params;
  const elements = [];
  content.forEach(contentType => {
    g.setNode(contentType.uid);
    const schema = contentType.schema;

    const references = schema.filter(dataType => {
      return dataType.data_type === 'reference';
    }).map(destination => {
      // console.log(`Seting edge \from ${contentType.uid} to ${destination.uid} `);
      g.setEdge(contentType.uid, destination.uid);
      return destination.uid;
    });

    elements.push({contentType: contentType.uid, references});
  });
  // console.log(g.inEdges('navbar').length);
}

module.exports = buildGraph;
