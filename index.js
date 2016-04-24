var pkg = require('./package.json');
var logger = require('sealine.logger')(pkg.name);
try {
  require('less');
} catch (e) {
  console.log('please run ` npm install less --save `');
}

var less = require('less');
module.exports = function(code, config) {
  return new Promise((resolve, reject) => {
    less.render(code, (e, output) => {
      if (e) {
        logger.error(e);
        reject(e);
      }
      resolve(output.css);
    });
  });
}
