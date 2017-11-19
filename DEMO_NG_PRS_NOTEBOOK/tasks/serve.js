//--------------------------
// 本地调试task
//--------------------------

var gulp = require("gulp");
var gutil = require("gulp-util");

var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");
var addDevServerEntryPoints = require("webpack-dev-server/lib/util/addDevServerEntrypoints");

///导入 dev 的webpack配置
var webpackDevConfig = require("./config/webpack.dev.config");

gulp.task("serve", function() {
  gutil.log("Webpack building dev ...........");
  gutil.log(
    webpackDevConfig.devServer.host + ":" + webpackDevConfig.devServer.port
  );

  //// ????????????
  addDevServerEntryPoints(webpackDevConfig, webpackDevConfig.devServer);
  
  /// 封装 webpack 的配置
  var compilerConfig = webpack(webpackDevConfig);


  /// 启动 Webpack Dev Server
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
