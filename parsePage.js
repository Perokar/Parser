const {getCheerioData} = require(`./req.js`)
module.exports =async (pages,url)=>{
   let $ = await getCheerioData(url);
   let arrItems=[];
   $('.pointer','.part-box-image-wrapper').each(function(i){
      arrItems[i]= $(this).attr('href')
   })
   let pageDataParse = await getDataCycle(arrItems, url)
}

async function getDataCycle(arrayPages, url) {
   let urlBase = url.slice(0, 23)
   let JSONData = {}
   for (let key of arrayPages) {
      let cheerionData = await getCheerioData(urlBase + key);
      JSONData += oneItemParse(cheerionData);
   }
}
   function oneItemParse($) {
      let dataItem = {
         name: $('h1').text(),
         price: $('.price-min').text().trim(),
         photo: 'photo',
         articles: $('.part-articles').text().trim(),
         description: $('._part_detail').contents().filter(function() {
            return this.type === 'text';
         }).text(),
      console.log(dataItem)
   }