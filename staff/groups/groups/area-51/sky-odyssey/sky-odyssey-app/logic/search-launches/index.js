function searchLaunches(query, callback) {
    //validaciones

    call('GET', undefined, 'https://api.spacexdata.com/v3/launches/' + query, undefined, (output) => {debugger
        if(output.error) {
            callback(new Error(error.message))
        }
        else {
            callback(undefined, output)
        }
    })
}