const _ = require('lodash');

const getRoots = params => {
  const {g, contentType} = params;
  const predecessors = g.predecessors(contentType);

  if (!predecessors)
    throw new Error(`There is no content type named '${contentType}'`);

  if (predecessors.length === 0)
    return contentType;

  return predecessors.map(contentType => getRoots({g, contentType}));
}

const flattenRoots = params => {
  const {g, contentType} = params;
  const roots = getRoots({g, contentType});
  if(roots === contentType)
    return [roots];
  return _.flattenDeep(roots);
}

module.exports = flattenRoots;
