const tron = require('gulp-tron');
const upath = require('upath');
const fs = require('fs');

//--- samples
// const selector = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
fs.readdirSync('./samples').forEach((name) => {
    // if (!selector.includes(parseInt(name))) return;
    const dirPath = './samples/' + name;
    if (fs.statSync(dirPath)) {
        let exConfig = upath.join(dirPath, 'gulpfile.js');
        if (fs.existsSync(exConfig)) require('./' + exConfig);
    }
});

//--- main
const buildAll = { name: '@build-all', triggers: tron.getBuildNames(/@build$/) };
const cleanAll = { name: '@clean-all', triggers: tron.getBuildNames(/@clean$/) };
tron.createProject({ buildAll, cleanAll });
