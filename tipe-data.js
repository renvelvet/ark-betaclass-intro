const string = 'ararara'
const number = 123
const bool = false
const object = {nama:'renma', umur:21}
const array= [1,2,3]
const array1= ['a','b','c','d','e']
const array2= [
    {nama:'renma', umur:21},
    {nama:'ran', umur:20},
    {nama:'ren', umur:21}
]
const json = {
    status: 'success',
    result: {
        person: {
            nama: 'user',
            id: 1,
            email: 'email@gmail.com',
            hobbies:['lari','berenang']
        }
    }
}

console.log(`${string} ${number}`)
console.log(`nama: ${object.nama}, umur: ${object.umur}`)

for (i in array2) {
    console.log(array2[i].nama)
}

const functionn = (obj) => {
    console.log(`arrow function ${obj}`)
}

functionn('biru')