const request = require("request");
const cheerio = require("cheerio");
const getMatchDetails = require("./match");

function getAllMatches(link){
    request(link , function(error , response , data){
        processData(data);  
    })
}


function processData(html){
    // get links of all the matchess !!!
    let ch = cheerio.load(html);
    let allATags = ch('a[data-hover="Scorecard"]');          //it is selector in single quotes
    //console.log(allATags.length);
    //here the total number of objects in ch are 60, therefore we have to make a loop so that we can access
    //every href key of each object
    for(let i=0 ; i<allATags.length ; i++){
        let matchLink = "https://www.espncricinfo.com"+ch(allATags[i]).attr("href");
        getMatchDetails(matchLink);
    }
}


//here the allMatches module is exporting the function getAllMatches() function
//NOTE - There are two ways to export functions or data within javascript files 
//multiple export -> here an object is created in primary file and all values are inherited as the key values of the object created in primary file
//single export -> here only the value or the function is exported to the primary file , following is an example 
module.exports = getAllMatches;