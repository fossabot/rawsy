const {name} = require('./package.json')

module.exports = {
  name: name,
  preset: '@stencil/core/testing',
  coverageDirectory: "../..",
}
