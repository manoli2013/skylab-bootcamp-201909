const http = require('http')
const urls = process.argv.slice(2)
const results = []
const counter = 0

let acum = '' //body

let getData = (callback) => { //getBody
    
    urls.forEach(url => {
        http.get(url, (response => {
            
        }))
    })
    
    http.get(url, (response) => {
        response.on('data', (chunk) => {
            acum += chunk
        })
        response.on('end', () => {
            return callback()
        })
    })
}

getData(function () {
    console.log(acum.length)
    console.log(acum)
})


