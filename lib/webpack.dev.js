const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',

  // 开启文件监听，默认值 false
  watch: false,
  // 只有开启文件监听时，watchOptions 才有意义
  watchOptions: {
    // 默认为空，不监听的文件或者文件夹，支持正则匹配
    ignored: /node_modules/,
    // 监听等待变化 300ms 再去执行，默认 300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
    poll: 1000,
  },

  devServer: {
    // contentBase: "./dist", // webpack v4
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
  },
  stats: 'errors-only',
};

module.exports = merge(baseConfig, devConfig);
