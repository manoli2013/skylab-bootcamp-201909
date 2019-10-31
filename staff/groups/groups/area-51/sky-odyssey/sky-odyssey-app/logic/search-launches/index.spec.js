jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('search Launches', () => {

    let query = '2018'

    // beforeEach(done => {
    //     debugger
    //     call('GET', undefined, 'https://api.spacexdata.com/v3/launches/past', undefined, launches => {
    //         query = launches.error ? new Error(launches.error) : launches.shuffle()[0].flight_year
    //         done()
    //     })
    // })

    describe('user is logged in', () => {

        let name, surname, email, password, favs = []
        let response
        let credentials

        beforeEach(done => {

            name = `name-${Math.random()}`
            surname = `surname-${Math.random()}`
            email = `email-${Math.random()}@mail.com`
            password = `password-${Math.random()}`
            favs = []// o random // o favs.push(1)

            call('GET', undefined, 'https://api.spacexdata.com/v3/launches/past', undefined, launchesPast => {
                const launches = launchesPast.filter(launchPast => launchPast.launch_year >= query && launchPast.launch_year <= query)
                let selectLaunches = launches.error ? new Error(launches.error) : launches.shuffle().slice(0, 5)
                selectLaunches.forEach(launch => favs.push(launch.flight_number))

                call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password, favs }, result => {
                    response = result.error ? new Error(result.error) : result.status

                    call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
                        if (result.error) done(new Error(result.error))
                        else {
                            credentials = result.data

                            done()
                        }
                    })
                })
            })

        })

        it('the use should find the indicated year', done => {
            
            const { id, token } = credentials

            searchLaunches(id, token, query, (error, launches) => {

                expect(launches).toBeInstanceOf(Object) //puede devolver un único objeto
                // expect(launches.length).toBeGreaterThan(0).NO SE PUEDE

                let checkFav = 0

                launches.forEach(({ isFav, launch_date_local: date, launch_success: success, mission_name: mission, launch_site: { site_name_long: site }, launch_year: year, links: { flickr_images: images }, details, links: { mission_patch: logo, video_link: video} }) => {

                    expect(date).toBeDefined()
                    expect(success).toBeDefined()
                    expect(mission).toBeDefined()
                    expect(site).toBeDefined()
                    expect(year).toBeDefined()
                    expect(year).toBe(query)
                    expect(images).toBeDefined()
                    expect(images).toBeInstanceOf(Array)
                    expect(details).toBeDefined()
                    expect(logo).toBeDefined()
                    expect(video).toBeDefined()
                    expect(isFav).toBeDefined()

                    if (isFav) checkFav++

                })

                expect(favs.length).toBe(checkFav)

                done()

            })


        })

    })

    describe('anonymous user', () => {
        //el done lo utilizamos para que pare, pq es una func asincrona

        it('should find the indicated year', done => {

            searchLaunches(undefined, undefined, query, (error, launches) => {

                expect(launches).toBeInstanceOf(Object) //puede devolver un único objeto
                // expect(launches.length).toBeGreaterThan(0).NO SE PUEDE

                launches.forEach(({ launch_date_local: date, launch_success: success, mission_name: mission, launch_site: { site_name_long: site }, launch_year: year, links: { flickr_images: images }, details, links: { mission_patch: logo, video_link: video, youtube_id: youtubeID } }) => {

                    expect(date).toBeDefined()
                    expect(success).toBeDefined()
                    expect(mission).toBeDefined()
                    expect(site).toBeDefined()
                    expect(year).toBeDefined()
                    expect(year).toBe(query)
                    expect(images).toBeDefined()
                    expect(images).toBeInstanceOf(Array)
                    expect(details).toBeDefined()
                    expect(logo).toBeDefined()
                    expect(video).toBeDefined()
                    expect(youtubeID).toBeDefined()

                })

                done()

            })


        })

        // TODO ERRORS



    })















})