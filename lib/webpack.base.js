module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/, // test 指定匹配规则
        exclude: /node_modules/,
        use: ['babel-loader'], // use 指定使用的loader
      },
      {
        test: /\.css$/, // 解析 css
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 链式调用，从右往左执行
      },
      {
        test: /\.less$/, // 解析 less
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|svg|png|jpeg)$/, // 解析图片资源
        type: 'asset/resource', // webpack 5 解析资源方式
        generator: {
          // 指定输出路径
          filename: 'img/[name]_[hash:8][ext]',
        },
        // use: "file-loader", // 已过时，webpack4才使用
      },
    ],
  },
};
