const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const ssrConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/, // 解析 css
        use: 'ignore-loader', // 链式调用，从右往左执行
      },
      {
        test: /\.less$/, // 解析 css
        use: 'ignore-loader', // 链式调用，从右往左执行
      },
    ],
  },
  stats: 'errors-only',
};

module.exports = merge(baseConfig, ssrConfig);
