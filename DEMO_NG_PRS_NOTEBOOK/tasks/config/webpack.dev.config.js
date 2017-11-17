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
        /// 声明一个前端构建时的环境变量
        // 这种变量的作用：
        // 1. 前端文件中 可见：通过 `process.env.NODE_ENV` 得到
        // 2. 浏览器中无法得到
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: ''
            }
        })
    ]
})
