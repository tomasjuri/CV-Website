const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const distDir = path.resolve(__dirname, '../dist');
    const indexPath = `file://${distDir}/index.html`;

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(indexPath, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: path.join(distDir, 'Tomas_Jurica_CV.pdf'),
        printBackground: true,
        format: 'A4',
        margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
    });

    await browser.close();
    // eslint-disable-next-line no-console
    console.log('✅  Generated PDF at dist/Tomas_Jurica_CV.pdf');
})(); 