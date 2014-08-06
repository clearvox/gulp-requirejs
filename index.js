var gutil       = require('gulp-util'),
    requirejs   = require('requirejs'),
    PluginError = gutil.PluginError

// Consts
const PLUGIN_NAME = 'gulp-requirejs';


module.exports = function(opts) {

    'use strict';

    if (!opts) {
        throw new PluginError(PLUGIN_NAME, 'Missing options array!');
    }

    if (!opts.out && typeof opts.out !== 'string') {
        throw new PluginError(PLUGIN_NAME, 'Only single file outputs are supported right now, please pass a valid output file name!');
    }

    if (!opts.baseUrl) {
        throw new PluginError(PLUGIN_NAME, 'Pipeing dirs/files is not supported right now, please specify the base path for your script.');
    }

    // create the stream and save the file name (opts.out will be replaced by a callback function later)

    // just a small wrapper around the r.js optimizer, we write a new gutil.File (vinyl) to the Stream, mocking a file, which can be handled
    // regular gulp plugins (i hope...).

//     try {
        optimize(opts);
//     } catch (err) {
//         _s.emit('error', err);
//     }



    // return the stream for chain .pipe()ing
    return;
}

// a small wrapper around the r.js optimizer
function optimize(opts) {
    console.log('optimizing for requireJs');
    requirejs.optimize(opts);
}
