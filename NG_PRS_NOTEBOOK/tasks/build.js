var gulp = require("gulp");
var gutil = require("gulp-util");
var sequence = require("gulp-sequence");

var webpack = require("webpack");

/**
 * production environment
 */
var webpackProdConfig = require("./config/webpack.prod.config");

gulp.task("webpack", function(done) {
  gutil.log("Webpack building....");
  webpack(webpackProdConfig, function(error, stats) {
    if (error) {
      throw new gutil.PluginError("webpack", error);
    }
    gutil.log(stats.toString(webpackProdConfig.stats));
    gutil.log("Webpack build done");
    done();
  });
});

gulp.task("build", sequence(["clean"], ["webpack"]));
