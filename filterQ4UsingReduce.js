/*
Response:
{
      600dc3b5d617e547a0e74cb9": {
            information: ["Mitchell Fitzgerald", "North Dakota", "Scenty"]
      }
}
*/

const userDetailsArray = require("./data");

let result = userDetailsArray.reduce((acc,curr) =>{
    if(curr['address']['city'] === "North Dakota"){
        acc[curr['id']] = {'information' : [curr['name'], curr['address']['city'], curr['company']]}
    }
    return acc
},{})

console.log(result)