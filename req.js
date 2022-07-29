const axios = require('axios');
const cheerio = require('cheerio');

async function getCheerioData(url){
    let resp = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62'
        }
    });
    let $ = cheerio.load(resp.data);
    $.html();
    return $;
}
module.exports = {getCheerioData}