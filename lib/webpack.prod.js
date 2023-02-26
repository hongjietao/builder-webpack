const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const prodConfig = {
  mode: 'production',
  plugins: [
    // css 文件指纹
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),

    // scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 通过cdn引入，降低打包速度
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@18/umd/react.production.min.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry:
            'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ],

  optimization: {
    // minimize: true, // 可省略，默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
    minimizer: [
      // 压缩css文件
      new CssMinimizerPlugin(),
      // 压缩 js 文件
      new TerserPlugin(),
    ],

    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          // test: /(react|react-dom)/,
          // name: "vendors",
          // chunks: "all",
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
