const path = require('path');
const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function (config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }

  config = rewireLess(config, env)

  return config;
}