//[{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }]
 const userDetailsArray = require('./data');

 let result = userDetailsArray.reduce((acc,curr)=>{
    if(curr['address']['city'] === "North Dakota"){
        acc.push({'id' : curr['id'], 'name': curr['name']}, {'city' : curr['address']['city']}, {'company':curr['company']})
    }
    return acc
},[])

console.log(result)