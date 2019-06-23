/* Your job is to sign each of these promising young music stars to the 
appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
Then invoke the appropriate function for each of the following artists and place 
the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old*/

const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []

const createFunkRapArtist = (name, age, genre) =>{
    return {
        "name": name,
        "age": age,
        "genre": genre,
    }
}

const createCountryBlueArtist = (name, age, genre) => {
    return {
        "name": name,
        "age": age,
        "genre": genre,
    }
}

const createPopArtist = (name, age, genre) => {
    return {
        "name": name,
        "age": age,
        "genre": genre,
    }
}

chattenRecords.push(createCountryBlueArtist("Bruce Atkins", 23, "Country"))
chattenRecords.push(createCountryBlueArtist("Bartholomew Danielson", 23, "Bluegrass"))
chattenRecords.push(createCountryBlueArtist("Avilee Dallas", 22, "country"))

jumpStopRecords.push(createFunkRapArtist("Dre Funkz", 25, "funk"))
jumpStopRecords.push(createFunkRapArtist("Dusta Grimes", 21, "rap"))
jumpStopRecords.push(createFunkRapArtist("Loyoncé Branis", 27, "rap"))

polarRecords.push(createPopArtist("Jensen Brown", 20, "pop"))
polarRecords.push(createPopArtist("Austin Kinkaid", 22, "pop"))

console.log("jump", jumpStopRecords)
console.log("chatten", chattenRecords)
console.log("polar", polarRecords)