const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'new-setu-ref.html');
const html = fs.readFileSync(srcPath, 'utf8');

const outDir = path.join(__dirname, '..', 'public');
fs.mkdirSync(outDir, { recursive: true });

let counter = 0;
const manifest = [];

const dataUriRegex = /data:([a-zA-Z0-9+/.-]+);base64,([A-Za-z0-9+/=]+)/g;

let stripped = html.replace(dataUriRegex, (match, mime, b64) => {
  counter++;
  let ext = 'bin';
  if (mime.includes('png')) ext = 'png';
  else if (mime.includes('jpeg') || mime.includes('jpg')) ext = 'jpg';
  else if (mime.includes('svg')) ext = 'svg';
  else if (mime.includes('webp')) ext = 'webp';
  else if (mime.includes('gif')) ext = 'gif';

  const fname = `asset-${counter}.${ext}`;
  const buf = Buffer.from(b64, 'base64');
  fs.writeFileSync(path.join(outDir, fname), buf);
  manifest.push({ index: counter, mime, ext, bytes: buf.length, file: fname });
  return `/${fname}`;
});

fs.writeFileSync(path.join(__dirname, '..', 'new-setu-ref-stripped.html'), stripped, 'utf8');
fs.writeFileSync(path.join(__dirname, 'assets-manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`Extracted ${counter} assets`);
console.log(manifest.map(m => `${m.file} (${(m.bytes/1024).toFixed(1)}KB)`).join('\n'));
