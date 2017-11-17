/**
 * simple webpack config  file
 */

 var path = require('path');
 var webpack = require('webpack');

 var htmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry:{
         main:'./src/main.js'
     },
     output:{
         path:path.resolve('public'),
         publicPath:'',
         filename:'[name].bundle.js',
         chunkFilename:'[id].[hash].bundle.js'
     },
     resolve:{
         extensions:['.js']
     },
     plugins:[
         new htmlWebpackPlugin({
             template:'src/index.html',
             favicon:'src/favicon.ico'
         })
     ]
 };

