const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://34.234.137.252:30025');
    await page.click('a[href="/you-rang"]');
    // Second time click allows for useEffects to get implemented.
    //await page.click('a[href="/you-rang"]');
    await page.waitFor(1000);
    const h2 = await page.evaluate(() => [...document.getElementsByTagName('h2')].map((h2) => h2.innerText));
    console.log(h2);

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
            result: document.getElementById('you-rang-result').textContent
        };
    });

    console.log('Dimensions:', dimensions);

    await browser.close();
})();
