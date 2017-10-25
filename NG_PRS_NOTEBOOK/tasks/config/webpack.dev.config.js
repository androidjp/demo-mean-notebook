/** Created by CUIJA on 05-19-2017.*/

var webpack = require('webpack');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var baseConfig = require('./base.config');
var webpackBaseConfig = require('./webpack.base.config');

var pathUtil = require('../util/path-util');


const PROTOCOL = 'http://';
const HOST = '10.222.47.212';
const PORT = 9901;

var webpackDevConfig = merge(webpackBaseConfig, {
  devtool: 'source-map',
  output: {
    path: pathUtil.root(baseConfig.dir.build),
    publicPath: PROTOCOL + HOST + ':' + PORT,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.js.map',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
  new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            pathUtil.root('node_modules')
          ) === 0
        );
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: HOST,
    port: PORT,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      children: false,
      timings: true,
      chunks: true,
      chunkModules: false
    },
    proxy: {
      '/api': {///访问带有/api 的请求，都会转发到本地的8080端口
        target: PROTOCOL + HOST +':8888/NJ_DOM_NOTEBOOK', // suppose to update your api to
        secure: false,
        ws: true
      },
        '/meat/api':{
        target: 'http://10.222.29.189:8888',
        secure:false,
        ws:true
      }
    }
  }
});

module.exports = webpackDevConfig;