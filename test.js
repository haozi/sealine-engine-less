var lessEngine = require('./index.js');

var lesscode = `
  @width : 50px;
  body {
    width : @width * 2
  }
`;

lessEngine(lesscode, {}).then(css => {
  console.log(css);
});
