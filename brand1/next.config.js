const withTM = require('next-transpile-modules')(['common'])
const compose = require('next-compose')

module.exports = compose([
    withTM
]);
