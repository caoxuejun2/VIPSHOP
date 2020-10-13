const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
gulp.task("copy-html",function(){
  return gulp.src("./html/*.html")
  .pipe(htmlmin({
    removeEmptyAttributes :true,
    collapseWhitespace :true,
  }))
  .pipe(gulp.dest("dist/"))
  .pipe(connect.reload())
})
gulp.task("images",function(){
  return gulp.src("./img/*.{jpg,png}")
  .pipe(gulp.dest("dist/img"))
  .pipe(connect.reload())
})
gulp.task("script",function(){
  return gulp.src(["./js/*.js","!gulpfile.js"])
  .pipe(gulp.dest("dist/js"))
  .pipe(connect.reload())
})
gulp.task("data",function(){
  return gulp.src(["./data/*.json","!package.json"])
  .pipe(gulp.dest("dist/data"))
  .pipe(connect.reload())
})
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const minifycss = require("gulp-minify-css")
const rename = require("gulp-rename")
gulp.task("sassIndex",function(){
  return gulp.src("./scss/index.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload())
})
gulp.task("sassList",function(){
  return gulp.src("./scss/list.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("list.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload())
})
gulp.task("build", ["copy-html", "images", "script", "data", "sassIndex","sassList"]);
gulp.task("watch",function(){
  gulp.watch("./html/*.html",["copy-html"])
  gulp.watch("./img/*.{jpg,png}",["images"])
  gulp.watch(["./js/*.js","!gulpfile.js"],["script"])
  gulp.watch("./scss/index.scss",["sassIndex"])
  gulp.watch("./scss/list.scss",["sassList"])
  gulp.watch(["./data/*.json","!package.json"],["data"])
})
const connect = require("gulp-connect")
gulp.task("server",function(){
  connect.server({
    root:"dist",
    port:5000,
    livereload:true
  })
})
gulp.task("default", ["watch", 'server']);