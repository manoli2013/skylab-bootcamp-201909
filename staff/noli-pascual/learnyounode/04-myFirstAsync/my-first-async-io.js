const fs = require('fs')


fs.readFile(process.argv[2], 'utf-8', function callback(error, data) {
    
    console.log(data.split('\n').length -1)
 
})



// const fs = require('fs')


// fs.readFile(process.argv[2], function callback(error, data) {
    
//     console.log(data.toString().split('\n').length -1)
 
// })


