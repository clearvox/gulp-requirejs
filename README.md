#gulp-requirejs


## Information

A small, simply, very easy wrapper around the [require.js optimizer](https://github.com/jrburke/r.js) to work with [gulp.js](https://github.com/gulpjs/gulp)

<table>
<tr>
<td>Package</td><td>gulp-requirejs</td>
</tr>
<tr>
<td>Description</td>
<td>Changed the plugin to not alter the rjs call at all. r.js is now in control of saving the result and it is not possible anymore to do other alterations in the stream. This has bin done to be capable of generating sourcemaps!</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>


## Usage

Because the require.js optimizer (_r.js_) is a kind of build system in itself we can't use the `gulp.src([...])` syntax at the moment (I might add this in future), instead this wrapper itself emits a pipable stream, holding a 'virtual' file, in which the result of the r.js build process are saved.

The resulting stream can be treated like a regular `gulp.src(...)` stream.

>NOTE: The built in minification/obfuscation is deactivated by default and can not be switched on. Please use a gulp plugin like gulp-uglify for this.

```javascript
var gulp = require('gulp'),
    rjs = require('gulp-requirejs');

gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl:JS FOLDER,
        name: REQUIRE MAIN FILE,
        out: OUTPUT PATH,
        removeCombined: false,
        findNestedDependencies: true,
        generateSourceMaps: true,
        preserveLicenseComments: false,
        optimize: 'uglify2'
            // standard require.js shim options
        },
        // ... more require.js options
    })
        .pipe(gulp.dest('./deploy/')); // pipe it to the output DIR
});
```

### Error handling

gulp-requirejs will emit errors when you don't pass an options object and if the `baseUrl` or `out` properties are undefined.

The requiere.js optimizer itself might also emit errors; unfortunately there's no way of catching them elegantly at the moment.


## Options

The options object supports the same parameters as the [require.js optimizer](https://github.com/jrburke/r.js).
