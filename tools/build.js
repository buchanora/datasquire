const fs = require('fs')
const execSync = require('child_process').execSync
const prettyBytes = require('pretty-bytes')
const gzipSize = require('gzip-size')

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

console.log('Building CommonJS modules ...');

exec('rm -rf lib');

exec('babel src -d lib --ignore __tests__,test.js', {
  BABEL_ENV: 'cjs'
});

// console.log('\nCopying Scss Theme ...')

// exec('cp src/_theme.scss lib/_theme.scss');
// exec('cp src/_config.scss lib/_config.scss');

// exec('cp src/_theme.scss lib/style_config.scss');
// exec('cp src/_config.scss lib/default_theme.scss');

console.log('\nBuilding ES modules ...');

exec('babel src -d es --ignore __tests__,test.js', {
  BABEL_ENV: 'es'
});

console.log('\nBuilding fieldstack.js ...')

exec('rollup -c -f umd -o umd/fieldstack.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'development'
});

console.log('\nBuilding fieldstack.min.js ...')

exec('rollup -c -f umd -o umd/fieldstack.min.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'production'
});

const size = gzipSize.sync(
  fs.readFileSync('umd/fieldstack.min.js')
);

console.log('\ngzipped, the UMD build is %s', prettyBytes(size));