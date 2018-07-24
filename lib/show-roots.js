const showRoots = params => {
  const {roots, contentType} = params;
  console.log(`\nROOTS OF '${contentType}':`);
  console.log(roots);
  console.log(`\nROOTS COUNT ('${contentType}'):`);
  console.log(roots.length);
}

module.exports = showRoots;
