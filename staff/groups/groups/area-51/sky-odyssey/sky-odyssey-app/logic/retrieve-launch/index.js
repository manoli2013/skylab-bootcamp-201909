function retrieveLaunch(id, callback) {
    // if (typeof id !== 'string') throw new TypeError(id + ' is not a string');
    // if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    call('GET', undefined, 'https://api.spacexdata.com/v3/launches/' + id, undefined, function (result) {

        if (result.error)
            callback(new Error(result.error))
        else {
            
            callback(undefined, result)
        }
    });
}

