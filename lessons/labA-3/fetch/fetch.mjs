async function fetchMovies(){
    const promise = fetch("https://api.sampleapis.com/movies/animation")
    const response = await promise
    const array =  await response.json()
    console.log(array)

}

function main(){
    fetchMovies()

}

main()