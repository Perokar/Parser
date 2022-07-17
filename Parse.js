const cheerio = require('cheerio');
const axios = require('axios')
function startParse(url){
    let baseUrl= url;
    let pages=[];
    getPage(baseUrl)
    function getPage(url){
        console.log(url)
        axios.get(url,{
            headers:{
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62'
            }
        })
        .then(async (resp)=>{
            let sortPages= new Set (await getNumbers(await resp.data))
            console.log(sortPages)
        })
        async function getNumbers(data){
            let $ = await cheerio.load(data);
            $.html();
            let liPage= $('.page-link').parent().last().hasClass('disabled');
            console.log(liPage)
            $('.page-link').each((i,elem)=>{
                pages.push(elem.attribs.href);
            });
            let lastPage = pages[pages.length-2];
            if (!liPage){
                getPage(baseUrl+lastPage)
            }
            else{
                return pages;
            }
        }
};
}
    
module.exports= {startParse}

