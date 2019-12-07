describe('Test GetBranches', () => {
    /*beforeAll(async () => {
        await page.goto('http://34.234.137.252:30025');
    });*/
    afterAll(async () => { await jestPuppeteer.close();
    })

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

    it('should go to get-branches and get h2 and h3', async () => {
        await page.click('a[href="/get-branches"]');
        const h2 = await page.evaluate(() => [...document.getElementsByTagName('h2')].map((h2) => h2.innerText));
        const h3 = await page.evaluate(() => [...document.getElementsByTagName('h3')].map((h3) => h3.innerText));
        console.log(h2);
        expect(h2[1]).toContain('Get All Branches');
        expect(h3).toContain('Checkout Master Branch'); // LUCAS DISABLED THIS ONE
    });

    it('should get master branch', async () => {
        //await page.click('a[href="/get-branches"]');
        await Promise.all([
            page.click('a[href="/get-branches"]'),
            page.waitForNavigation({waitUntil: 'networkidle0'})
        ]);
        await page.waitFor(300); //LUCAS ADDED THIS
        const result = await page.evaluate(() => document.getElementById('getBranchesTable').textContent);
        console.log(result);
        expect(result.trim()).toContain('master');
    })

    it('should get both-bad branch', async () => {
        await page.click('a[href="/get-branches"]');
        await page.waitFor(300); //LUCAS ADDED THIS
        const result = await page.evaluate(() => document.getElementById('getBranchesTable').textContent);
        console.log(result);
        expect(result.trim()).toContain('both-bad');
    })
});