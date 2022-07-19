const cheerio = require('cheerio');
const axios = require('axios')
async function startParse(url) {
    let baseUrl = url;
    let pages = [];
    getPage(baseUrl, getNumbers);
    async function getPage(url, stepFunc) {
        let resp = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62'
            }
        });
        let sortPages = new Set(await stepFunc(resp.data));
        if (sortPages.size > 0) {
            sortPages.delete(undefined)
           // parsePage([...sortPages])
        }
    }
    async function getNumbers(data) {
        let $ = await cheerio.load(data);
        $.html();
        let liPage = $('.page-link').parent().last().hasClass('disabled');
        $('.page-link').each((i, elem) => {
            pages.push(elem.attribs.href);
        });
        let lastPage = pages[pages.length - 2];
        if (!liPage) {
            getPage(baseUrl + lastPage, getNumbers)
        } else {
            return pages;
        }
    }
// i work about it 
    // async function parsePage(url,pages) {
    //     let resp = await axios.get(url, {
    //         headers: {
    //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62'
    //         }
    //     });
    //     let $ = cheerio.load(resp.data);
    //     $.html();
    // }
}


module.exports = {
    startParse
}