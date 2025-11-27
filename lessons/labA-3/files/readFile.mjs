//The Promise object represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value.

import { readFile } from "fs/promises"

async function readFileLigaJson(){
    const promise = readFile("liga.json")
    const bytes = await promise
    //console.log(bytes)
    const array = JSON.parse(bytes)
    //console.log(array)
    return array
}

async function main(){
    const teams = await readFileLigaJson()
    console.log(teams)
    console.log("Done")
}

main()