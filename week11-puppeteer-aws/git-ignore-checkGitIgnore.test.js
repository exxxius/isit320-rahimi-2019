describe('Test checkGitIgnore', () => {
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
        await page.click('a[href="/checkgitignore"]');
        const h1 = await page.evaluate(() => [...document.getElementsByTagName('h1')].map((h1) => h1.innerText));
        console.log(h1);
        expect(h1[1]).toContain('GitIgnore Test');
    });

    it('should get master branch', async () => {
        await page.click('a[href="/checkgitignore"]');
        await page.waitFor(500); //LUCAS ADDED THIS
        const result = await page.evaluate(() => document.getElementById('branchTable').textContent);
        console.log(result);
        expect(result.trim()).toContain('master');
    })

    it('should get both-bad branch', async () => {
        await page.click('a[href="/checkgitignore"]');
        await page.waitFor(300); //LUCAS ADDED THIS
        const result = await page.evaluate(() => document.getElementById('branchTable').textContent);
        console.log(result);
        expect(result.trim()).toContain('both-bad');
    })
    it('should get both-bad branch', async () => {
        await page.click('a[href="/checkgitignore"]');
        await page.waitFor(300); //LUCAS ADDED THIS
        const result = await page.evaluate(() => document.getElementById('branchTable').textContent);
        console.log(result);
        expect(result.trim()).toContain('bundle.js*.js.map.c9');
    })

});