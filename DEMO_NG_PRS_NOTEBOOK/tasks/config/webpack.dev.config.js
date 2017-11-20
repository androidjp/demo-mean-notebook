//----------------------------------------------
// DEV 环境
//----------------------------------------------
var webpack = require("webpack");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var baseConfig = require("./base.config");
var webpackBaseConfig = require("./webpack.base.config");

var pathUtil = require("../util/path.util");

//-----------------------------
// Dev web server  Config
//-----------------------------
const PROTOCOL = "http://";
const HOST = "127.0.0.1";
const PORT = 5000;

/**
 * 这里是dev 的部分 webpack config
 * 
 * -- devtool
 * -- output
 * -- devServer
 * -- plugins
 * 
 */
var webpackDevConfig = merge(webpackBaseConfig, {
  devtool: "source-map",
  output: {
    path: pathUtil.root(baseConfig.dir.build),
    publicPath: PROTOCOL + HOST + ":" + PORT,
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].bundle.js.map",
    chunkFilename: "[id].chunk.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    }),
    /// 声明一个前端构建时的环境变量
    // 这种变量的作用：
    // 1. 前端文件中 可见：通过 `process.env.NODE_ENV` 得到
    // 2. 浏览器中无法得到
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"'
      }
    }),
    /**
         * vendor 是这个插件实例的对象名。
         * 作用：将 node__modules 中的第三方库如：  Angular 等
         * ，与业务相关的代码，进行瓜分。分成不同的文件。
         */
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return (
          module.resource &&
          /\*.js$/.test(module.resource) &&
          module.resource.indexOf(pathUtil.root("node_modules")) === 0
        );
      }
    }),
    /**
         * 指定 模板 html文件 已经 favicon.ico
         */
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    }),

    new ExtractTextPlugin({
      filename: "[name].bundle.css"
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  /// 配置了 webpack-dev-server 的信息
  devServer: {
    host: HOST,
    port: PORT,
    //------------[
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
    // ]------------
    proxy: {
      "/api": {
        target: PROTOCOL + HOST + ":9911/NJ_DOM_NOTEBOOOK",
        secure: false,
        ws: true
      }
    }
  }
});

module.exports = webpackDevConfig;
