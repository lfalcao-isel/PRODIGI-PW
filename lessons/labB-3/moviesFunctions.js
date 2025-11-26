
async function playWithMovies() {
    const promise = fetch("https://api.sampleapis.com/movies/animation")
    console.log("promise = " + promise)
    const resp = await promise // res represents an HTTP response: headers + body
    console.log("resp.status = " + resp.status)        // Status code
    console.log("resp.body = " + resp.body)          // ReadbleStream
    const textPromise = resp.text() // Promise<String>
    console.log("resp.text() = " + textPromise)
    // console.log("await resp.text() = " + (await textPromise))
    // console.log("JSON.parse((await resp.text()) = " + (JSON.parse(await textPromise)))
    const arr = JSON.parse(await textPromise)
    arr.forEach(movie => console.log(movie))
}

async function fetchMovies() {
    const resp = await fetch("https://api.sampleapis.com/movies/animation")
    const movies = await resp.json()
    console.log(movies[0])
    
}


async function main() {
    // playWithMovies()
    fetchMovies()
}

main()