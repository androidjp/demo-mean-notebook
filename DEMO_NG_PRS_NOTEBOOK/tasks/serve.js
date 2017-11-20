//--------------------------
// 本地调试task
//--------------------------

var gulp = require("gulp");
var gutil = require("gulp-util");
var sequence = require("gulp-sequence");

var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");
var addDevServerEntrypoints = require("webpack-dev-server/lib/util/addDevServerEntrypoints");

/**
 *  dev environment
 */
var webpackDevConfig = require("./config/webpack.dev.config");

gulp.task("serve", function() {
  gutil.log("Webpack building.");
  gutil.log(
    webpackDevConfig.devServer.host + ":" + webpackDevConfig.devServer.port
  );
  addDevServerEntrypoints(webpackDevConfig, webpackDevConfig.devServer);
  var compilerConfig = webpack(webpackDevConfig);
  new WebpackDevServer(
    compilerConfig,
    webpackDevConfig.devServer
  ).listen(
    webpackDevConfig.devServer.port,
    webpackDevConfig.devServer.host,
    function(error) {
      if (error) {
        throw new gutil.PluginError("webpack", error);
      }
    }
  );
});

//-----------------------------------
//webpack-dev-server 参考网址：
//https://doc.webpack-china.org/configuration/dev-server/
//-----------------------------------
