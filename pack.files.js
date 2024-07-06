const fs = require('fs');

const html = fs.readFileSync('tmp/index.html', 'utf8');
const css = fs.readFileSync('tmp/index.css', 'utf8');
const js = fs.readFileSync('tmp/index.js', 'utf-8');

const packedHtml = html
    .replace(
    '<link href="PACK.INJECT.STYLING">',
    "<style>" + css + "</style>")
    .replace(
    '<link href="PACK.INJECT.SCRIPTS">',
    '<script>' + js + '</script>'
    );

fs.writeFileSync('dist/index.html', packedHtml);