function retrieveLaunch(idLaunch,id, token, callback) {
    // if (typeof id !== 'string') throw new TypeError(id + ' is not a string');
    // if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    call('GET', undefined, `https://api.spacexdata.com/v3/launches/${idLaunch}` , undefined, function (result) { 

        if (result.error) return callback(new Error(result.error))

        call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result2 => {

            const { data: { favs = [] } } = result2

            result.isFav = favs.includes(result.flight_number)

            callback(undefined, result)

        })

    });
}