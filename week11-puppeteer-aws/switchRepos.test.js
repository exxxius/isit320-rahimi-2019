describe('Test switch Repos', () => {
    /*beforeAll(async () => {
        await page.goto('http://34.234.137.252:30025');
    });*/

    beforeEach(async () => {
        //jest.setTimeout('20000');
        await jestPuppeteer.resetBrowser();
        await page.goto('http://34.234.137.252:30025/');
    });

    it('should be titled "Main Page Rahimi"', async () => {
        await expect(page.title()).resolves.toMatch('Main Page Rahimi');
    });

    it('should contain BRANCH WORKS MENU', async () => {
        const h2 = await page.evaluate(() => [...document.getElementsByTagName('h2')].map((h2) => h2.innerText));
        console.log(h2);
        expect(h2).toContain('Welcome to BRANCH WORKS MENU!');
    });

    it('should go to checkgitignore and get h1', async () => {
        await page.click('a[href="/selectRepo"]');
        const h2 = await page.evaluate(() => [...document.getElementsByTagName('h2')].map((h2) => h2.innerText));
        console.log(h2);
        expect(h2[1]).toContain('Select Repository');
    });

    it('should get system-environment server in table', async () => {
        await page.click('a[href="/selectRepo"]');
        await page.waitFor(500);
        const result = await page.evaluate(() => document.getElementById('serverTable').textContent);
        console.log(result);
        expect(result.trim()).toContain('system-environment');
    });

    it('should get repoName row in the table git-ignore-tests', async () => {
        await page.click('a[href="/selectRepo"]');
        await page.waitFor(500);
        const result = await page.evaluate(() => document.getElementById('repoName-row0').textContent);
        console.log(result);
        expect(result.trim()).toContain('git-ignore-tests');
    });

    it('should get repoName row in the table prog272-rahimi-2017', async () => {
        await page.click('a[href="/selectRepo"]');
        await page.waitFor(500);
        const result = await page.evaluate(() => document.getElementById('repoName-row1').textContent);
        console.log(result);
        expect(result.trim()).toContain('prog272-rahimi-2017');
    });

    it('should get repoName row in the table isit320-rahimi-2019', async () => {
        await page.click('a[href="/selectRepo"]');
        await page.waitFor(500);
        const result = await page.evaluate(() => document.getElementById('repoName-row2').textContent);
        console.log(result);
        expect(result.trim()).toContain('isit320-rahimi-2019');
    });

    it('should get workingDir unknown', async () => {
        await page.click('a[href="/selectRepo"]');
        const result = await page.evaluate(() => document.getElementById('workingDir-row').textContent);
        console.log(result);
        expect(result.trim()).toContain('unknown');
    });

    // SELECT REPO FROM DROPDOWN LIST
    it('should set workingDir prog272-rahimi-2017 on dropdown list and change workingDir in the table', async () => {
        await page.click('a[href="/selectRepo"]');
        let selectElem = await page.waitForSelector("#workingDirSelect");
        let optionElem = await page.waitForSelector("#workingDirSelect > option:nth-child(2)");

        // use manually trigger repoName change event
        await page.evaluate((optionElem, selectElem) => {
            optionElem.selected = true;
            const event = new Event('change', {bubbles: true});
            selectElem.dispatchEvent(event);
        }, optionElem, selectElem);

        await page.click('button[id="setDirButton"]');
        await page.waitFor(500);
        const result = await page.evaluate(() => document.getElementById('workingDir-row').textContent);
        console.log(result);
        expect(result.trim()).toContain('prog272-rahimi-2017');
    });

    it('should set workingDir isit320-rahimi-2019 on dropdown list and change workingDir in the table', async () => {
        await page.click('a[href="/selectRepo"]');
        let selectElem = await page.waitForSelector("#workingDirSelect");
        let optionElem = await page.waitForSelector("#workingDirSelect > option:nth-child(3)");

        // use manually trigger repoName change event
        await page.evaluate((optionElem, selectElem) => {
            optionElem.selected = true;
            const event = new Event('change', {bubbles: true});
            selectElem.dispatchEvent(event);
        }, optionElem, selectElem);

        await page.click('button[id="setDirButton"]');
        await page.waitFor(500);
        const result = await page.evaluate(() => document.getElementById('workingDir-row').textContent);
        console.log(result);
        expect(result.trim()).toContain('isit320-rahimi-2019');
    });
    it('should set workingDir git-ignore-tests on dropdown list and change workingDir in the table', async () => {
        await Promise.all([
            page.click('a[href="/selectRepo"]'),
            page.waitForNavigation({waitUntil: 'networkidle0'})
        ]);
        let selectElem = await page.waitForSelector("#workingDirSelect");
        let optionElem = await page.waitForSelector("#workingDirSelect > option:nth-child(1)");

        // use manually trigger repoName change event
        await page.evaluate((optionElem, selectElem) => {
            optionElem.selected = true;
            const event = new Event('change', {bubbles: true});
            selectElem.dispatchEvent(event);
        }, optionElem, selectElem);

        await page.click('button[id="setDirButton"]');
        await page.waitFor(500);
        const result = await page.evaluate(() => document.getElementById('workingDir-row').textContent);
        console.log(result);
        expect(result.trim()).toContain('git-ignore-tests');
    });
});