const cheerio = require('cheerio');
const axios = require('axios');
const {getCheerioData} = require(`./req.js`);
const getTagOnPage = require('./parsePage.js');
async function startParse(url) {

    let pageTag = '.page-link';
    let baseUrl = url;
    let pages = [];
    getPage(baseUrl,getNumbers)

    async function getPage(url,getSummPage) {
        return getCheerioData(url).then(cherioData=>getSummPage(cherioData))
    }
    async function getNumbers(data) {
        let liPage = data(pageTag).parent().last().hasClass('disabled');
        data(pageTag).each((i, elem) => {
            pages.push(elem.attribs.href);
        });
        let lastPage = pages[pages.length - 2];
        if (!liPage) {
            getPage(baseUrl + lastPage, getNumbers)
        } else {
            let setPages = new Set(pages);
            setPages.delete(undefined);
            setPages.delete('#')
            getTagOnPage([...setPages],url);
        }
    }
// i work about it 
    async function parsePage(url,pages) {
      //  console.log(pages)
        // let resp = await axios.get(url, {
        //     headers: {
        //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62'
        //     }
        // });
        // let $ = cheerio.load(resp.data);
        // let cheerioHtml= $.html();

    }

}


module.exports = {
    startParse
}