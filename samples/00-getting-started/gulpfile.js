const tron = require('gulp-tron');
const upath = require('upath')

const basePath = upath.relative(process.cwd(), __dirname);
const projectName = upath.basename(__dirname);
const prefix = projectName + ':';

const srcRoot = upath.join(basePath, 'assets');
const destRoot = upath.join(basePath, 'www');


const scss = {
    name: 'scss',
    builder: (rtb) => {
        const sass = tron.require('gulp-sass');

        //--- build using gulp
        // const gulp = require('gulp');
        // const { src, dest } = rtb.conf;
        // gulp.src(src).pipe(sass().on('error', sass.logError)).pipe(gulp.dest(dest));

        // better way to do the same job is using rtb(run-time-builder) API
        rtb.src().pipe(sass().on('error', sass.logError)).dest();
    },
    src: upath.join(srcRoot, 'scss/**/*.scss'),
    dest: upath.join(destRoot, 'css'),
}

const scripts = {
    name: 'babel',
    builder: (rtb) => rtb.src().pipe(tron.require('gulp-babel')()).dest(),
    src: upath.join(srcRoot, 'js/**/*.js'),
    dest: upath.join(destRoot, 'js'),
    npmInstall: ['@babel/core']
}

const build = {
    name: '@build',
    triggers: tron.parallel(scss, scripts),
    clean: upath.join(destRoot, '{css,js}')
}

const watcher = {
    name: '@watch',
    builder: 'watcher',
    watch: upath.join(destRoot, '**/*.html'),
    browserSync: { server: destRoot }
}

const cleaner = { name: '@clean', builder: 'cleaner'};

tron.createProject({ build, watcher, cleaner }, { prefix });
