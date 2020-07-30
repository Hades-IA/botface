const puppeteer = require('puppeteer');
require('dotenv/config');
//image
/*(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.env.TARGT_ENV);
    await page.screenshot({ path: 'face.png' });

    await browser.close();

})();


//pdf
(async  () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.env.TARGT_ENV, { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'hn.pdf', format: 'A4' });

    await browser.close();
})();
*/



(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var timeOut = 60 * 1000;
    page.setDefaultTimeout(timeOut)

    await page.goto('https://www.facebook.com/');




    try {
        await page.type('input[name="email"]', process.env.EMAIL_ENV, { delay: 300 });
        await page.type('input[name="pass"]', process.env.PASSOWRLD_ENV, { delay: 300 });
        await page.keyboard.press("Enter");
    } catch (error) {
        console.log('ja logado')

    }



    await page.waitFor(timeOut / 2);


    await page.goto(process.env.TARGT_ENV).catch(erro => {
        console.log(erro);
    });
    var counter = 0;
    await page.waitFor(10 * 1000)

    let selector = 'div[aria-label="Curtir"]';
    await page.$$eval(selector, elements => {
        elements.map(async like => {

            await like.click()
            return

        })
    });


    await browser.close();


    // iput name =email  iput name= pass


    // like document.querySelector('div[aria-label="Curtir"]')


})();