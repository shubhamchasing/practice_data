/*
Response:
{
        600dc3b5d617e547a0e74cb9": {
            "name": "Mitchell Fitzgerald",
            "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
            "address": "48 Flatlands Avenue, Cutter, North Dakota",
            address: {
                streetAddress: '48 Flatlands Avenue',
                neighbour: 'Cutter',
                city: 'North Dakota'
            },
            "company": "Scenty"
        },
        600dc3b5c4e60ba2ebf06569: {
        "name": "Howell Faulkner",
        "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
        address: {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
        },
        "company": "Fleetmix"
    }
}
*/

const userDetailsArray = require("./data");

const result = userDetailsArray.reduce((acc,curr) => {
    let id = curr['id']
    acc[id] = {...curr,address:{...curr.address}}
    delete acc[id][id]
    return acc
},{})
console.log(result)
//console.log(userDetailsArray)
