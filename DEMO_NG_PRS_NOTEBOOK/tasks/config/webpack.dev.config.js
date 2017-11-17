//----------------------------------------------
// DEV 环境
//----------------------------------------------
var os = require('os');

var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var baseConfig = require('./base.config');
var webpackBaseConfig = require('./webpack.base.config');

var pathUtil = require('../util/path.util');

const PROTOCOL = 'http://';
const HOST = '127.0.0.1';
const PORT = 5000;


/**
 * 这里是dev 的部分 webpack config
 */
var webpackDevConfig = merge(webpackBaseConfig,{
    devtool:'source-map',
    output: {
        path: pathUtil.root(baseConfig.dir.build),
        publicPath: PROTOCOL + HOST + ":" + PORT,
        filename: '[name].bundle.js',
        sourceMapFilename:'[name].bundle.js.map',
        chunkFilename:'[id].chunk.js'
    },
    devServer: {
        host: HOST,
        port: PORT
    },
    plugins: [
        ///TODO : add plugins
    ]
})
