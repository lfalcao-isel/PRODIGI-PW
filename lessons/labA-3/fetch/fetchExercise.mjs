async function fetchMovies(){
    const promise = fetch("https://api.sampleapis.com/movies/animation")
    const response = await promise
    const array = await response.json()
    const titles = 
    return titles

}

function saveTitles(titles){


}

function main(){
    const filteredTeams = async readAndFilter()
    saveResult(filteredTeams)
    console.log("Done")
}

main()