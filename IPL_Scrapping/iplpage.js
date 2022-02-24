const request = require("request");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595", function(error, response, data){
    processData(data);
})

function processData(link){
    let ch = cheerio.load(link);
    let aTag = ch(".widget-items.cta-link a");
    //here we can use attr function direct on aTag object to find the href key of the object within the object of aTag
    let allMatchesLink = "https://www.espncricinfo.com" + aTag.attr("href");  
    getAllMatches(allMatchesLink);                                            
}