const fs = require('fs');
const path = require('path')
const archiver = require('archiver');
const glob = require('glob');
const version = require('../package.json').version;

console.log('Releasing ...');

if (!fs.existsSync(path.resolve('release'))) {
  fs.mkdirSync(path.resolve('release'));
}

const output = fs.createWriteStream(path.resolve(`release/${version}-release.zip`));
const archive = archiver('zip');

archive.pipe(output);

const scriptFiles = glob.sync(`dist/example/**/**.creator.js`, {});

scriptFiles.forEach(function (scriptPath) {
  archive.file(scriptPath, { name: scriptPath.replace('dist/example/', '') });
});

archive.finalize();

console.log('Releasing complete.');
