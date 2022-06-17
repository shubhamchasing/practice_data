/*Response : 
[{
            streetAddress: '48 Flatlands Avenue',
            neighbour: 'Cutter',
            city: 'North Dakota'
        }, {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
}]
*/

const userDetailsArray = require("./data")

const resultUsingReduce = userDetailsArray.reduce((acc, curr) => {
    acc.push(curr.address)
    return acc
}, [])

console.log(resultUsingReduce) 

const resultUsingMap = userDetailsArray.map((value) => value.address)

console.log(resultUsingMap)