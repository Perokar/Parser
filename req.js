const axios = require('axios');
const cheerio = require('cheerio');

module.exports = (url)=>{
   axios.get(url,{
        
    })
    .then(resp=>{
        console.log(resp)
        let $= cheerio.load(resp.data);
        $.html();
        console.log($)
    });
    }