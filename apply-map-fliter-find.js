const student = [
    {
        name : 'sajib',
        Id : 32
    },
    {
        name : 'Nayem',
        Id : 42
    },

    {
        name : 'Khan',
        Id : 67
    }
]


// const result = student.map( s => s.name )
// console.log(result)

// const ids = student.map( s => s.Id)
// console.log(ids)


// const result = student.filter ( s => s.Id < 40 ) 
// console.log(result)



const result = student.find ( s => s.Id > 40 ) 
console.log(result)