//-------------------------------------------
// 不会怎么改动的webpack config
//-------------------------------------------

var path = require('path');
var webpack = require('webpack');
//为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var baseConfig = require('./base.config');

var pathUtil = require('../util/path.util');

module.exports = {
  entry: {
    main: './src/main.js',
    styles: './src/styles.css'
  },
  resolve: {
    /// 查找文件时 自动补全的文件后缀
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        /**
             *  非 src/ 目录下的 xxx.html 文件， 
             *  都会使用 `ng-cache-loader` 进行加载，变成一个`angularjs`中的`view template`.
             */
        test: /\.html$/,
        exclude: pathUtil.root(baseConfig.dir.src, 'index.html'),
        loader: 'ng-cache-loader?prefix=[dir]/[dir]/[dir]'
      },
      {
        test: /\.css$/,
        exclude: pathUtil.root(baseConfig.dir.src, 'app'),
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: ['style-loader']
        })
      },
      {
        test: /\.css$/,
        include: pathUtil.root(baseConfig.dir.src, 'app'),
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: ['style-loader']
        })
      },
      {
        //// 对于所有entry解析到到的文件中，根据不同的资源文件的后缀名，使用不同的loader
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          useRelativePath: true,
          publicPath: './',
          name: '[name].[ext]'
        }
      },
      {
        /// 对所有entry解析到的字体文件，都会用file-loader进行处理
        test: /\.(woff|woff2|svg|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          useRelativePath: false,
          publicPath: './',
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: []
};
