const fs = require('fs');

console.log('Generating TJ favicon...');

// For now, let's create an SVG-based approach and then provide instructions
const svgContent = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" fill="#444" rx="2"/>
  <text x="8" y="12" font-family="Arial" font-size="8" font-weight="bold" text-anchor="middle" fill="white">TJ</text>
</svg>`;

fs.writeFileSync('tj_favicon.svg', svgContent);
console.log('✅ Created SVG favicon template: tj_favicon.svg');
console.log('');
console.log('To convert to ICO format:');
console.log('1. Open tj_favicon.svg in a web browser');
console.log('2. Take a screenshot or use online converter like convertio.co');
console.log('3. Convert to ICO format with 16x16, 32x32, and 48x48 sizes');
console.log('4. Replace src/assets/img/favicon.ico with the new file'); 