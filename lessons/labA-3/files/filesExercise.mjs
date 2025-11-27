import { readFile, writeFile } from "fs/promises"

async function readAndFilter(){
    const promise = readFile("liga.json")
    const bytes = await promise
    //console.log(bytes)
    const array = JSON.parse(bytes)
    //console.log(array)
    const filteredArray = 
    return filteredArray
}

async function saveResult(filteredTeams){
    
}

async function main(){
    const filteredTeams = async readAndFilter()
    saveResult(filteredTeams)
    console.log("Done")
}

main()
