describe('Test You Rang', () => {
    /*beforeAll(async () => {
        await page.goto('http://localhost:30025');
    });*/

    beforeEach(async () => {
        //jest.setTimeout('20000');
        await jestPuppeteer.resetBrowser();
        await page.goto('http://localhost:30025');
    });

    it('should be titled "Main Page Rahimi"', async () => {
        await expect(page.title()).resolves.toMatch('Main Page Rahimi');
    });

    it('should contain BRANCH WORKS MENU', async () => {
        const h2 = await page.evaluate(() => [...document.getElementsByTagName('h2')].map((h2) => h2.innerText));
        console.log(h2);
        expect(h2).toContain('Welcome to BRANCH WORKS MENU!');
    });

    it('should go to you rang and get h2', async () => {
        await page.click('a[href="/you-rang"]');
        const h2 = await page.evaluate(() => [...document.getElementsByTagName('h2')].map((h2) => h2.innerText));
        console.log(h2);
        expect(h2).toContain('You Rang');
       // expect(h2).toContain('Midterm from Calvert'); // LUCAS DISABLED THIS ONE
    });

    /* SINCE useEffects DOESN'T START THE FIST TIME, WE CAN USE 2 TESTS AND FIRST TIME
     SHOULD EXPECT "unknown" RESULT AND THE LATER TIME SHOULD BE THE UPDATED VALUE WHICH IS SYS-ENV YOU-RANG
     OR WE CAN ADD "READY" BOOLEAN VARIABLE TO OUR FUNCTION COMPONENT AND SET IT TO FALSE AND THEN HERE IN TEST
     WE CAN ADD await page.waitForSelector('[data-ready=true]'); BEFORE THE PAGE.EVALUATE FUNCTION AND SET IT TO
     TRUE SO IT CHANGES THE STATE AND STARTS useEffects. THIS WAY WE DON'T NEED EXTRA TEST CASE.


    it('should get you-rang-result', async () => {
        await page.click('a[href="/you-rang"]');
        const result = await page.evaluate(() => document.getElementById('you-rang-result').textContent);
        console.log(result);
        expect(result.trim()).toEqual('unknown');
    })*/

    it('should get you-rang-result', async () => {
        await page.click('a[href="/you-rang"]');
        await page.waitFor(500); //LUCAS ADDED THIS
        const result = await page.evaluate(() => document.getElementById('you-rang-result').textContent);
        console.log(result);
        expect(result.trim()).toEqual('system-environment you rang');
    })
});