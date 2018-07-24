const buildGraph = params => {
  const {g, content} = params;

  // console.log('digraph {');
  content.forEach(contentType => {
    g.setNode(contentType.uid);
    const schema = contentType.schema;

    schema.filter(dataType => {
      return dataType.data_type === 'reference';
    }).map(destination => {
      // console.log(`"${contentType.uid}" -> "${destination.uid}";`);
      g.setEdge(contentType.uid, destination.uid);
      return destination.uid;
    });
  });
  // console.log('}');
}

module.exports = buildGraph;
