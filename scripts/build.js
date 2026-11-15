import {copyFile} from 'node:fs/promises';
await copyFile('node_modules/three/build/three.module.min.js','public/three.module.js');
console.log('Frontend ready in public/');
