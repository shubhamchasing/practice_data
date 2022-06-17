/*Response:
[
    [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }],
    [{id: 600dc3b5c4e60ba2ebf06569, name: Howell Faulkner"}, { city: "Florida" }, { company: "Fleetmix" }]
]

*/

const userDetailsArray = require('./data');

let result = userDetailsArray.reduce((acc,curr) =>{
    let info = [{'id': curr['id'], 'name': curr['name']}, {'city':curr['address']['city']}, {'company': curr['company']}]
    acc.push(info)
    return acc
},[])

console.log(result)