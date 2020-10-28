const tron = require('gulp-tron');
const upath = require('upath');

const projectName = upath.basename(__dirname);
const prefix = projectName + ':';


// Create BuildConf Item #1
const build1 = {
    name: 'build1',
    builder: (rtb) => console.log(rtb.name + ' executed.'),
    preBuild: (rtb) => console.log(rtb.name + ' preBuild called.'),
    postBuild: (rtb) => console.log(rtb.name + ' postBuild called.'),
};

// Create BuildConf Item #2
const build2 = {
    name: 'build2',
    builder: (rtb) => console.log(rtb.name + ' executed.'),
    preBuild: (rtb) => console.log(rtb.name + ' preBuild called.'),
    postBuild: (rtb) => console.log(rtb.name + ' postBuild called.'),
};

// Create BuildConf for main
const main = {
    name: '@build',
    builder: (rtb) => console.log(rtb.name + ' executed.'),
    preBuild: (rtb) => console.log(rtb.name + ' preBuild called.'),
    postBuild: (rtb) => console.log(rtb.name + ' postBuild called.'),

    dependencies: tron.parallel(build1, build2),
    triggers: tron.series(build1, build2)
};

tron.createProject({ build1, build2, main }, {prefix});
