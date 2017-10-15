/** Created by CUIJA on 05-19-2017.*/

var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var baseConfig = require('./base.config');

var pathUtil = require('../util/path-util');

module.exports = {
  entry: {
    main: './src/main.js',
    styles: './src/styles.css'///带着一个css文件
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [///在整个项目中，用require加载文件时，会自动判断是什么类型的文件，然后分支去做
      {
        test: /\.html$/,
        exclude: pathUtil.root(baseConfig.dir.src, 'index.html'),
        loader: 'ng-cache-loader?prefix=[dir]/[dir]/[dir]'
      },
      {
        test: /\.css$/,
        exclude: pathUtil.root(baseConfig.dir.src, 'app'),
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],/// 使用 css-loader 作为解析器
          fallback: ['style-loader'] //然后给到 style-loader
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
        test: /\.(woff|woff2|svg|ttf|eot)$/,
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