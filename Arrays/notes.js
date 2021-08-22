const notes = [{
    title: 'Next Trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habbits',
    body: 'I should eat a bit better'
}, {
    title: 'Office mods',
    body: 'Buy a new screen'
}]

const findNote = function(notes, noteTitle) {
    return notes.find(note => {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'office mods')
console.log(note)

// const index = notes.findIndex((note, index) => {
//     console.log(note)
//     return note.title === 'Habbits'
// })


const filterNotes = function(notes, filterText){
    return notes.filter(note => {
        const isTitleMatch = note.title.toLowerCase().includes(filterText.toLowerCase()) 
        const isBodyMatch = note.body.toLowerCase().includes(filterText.toLowerCase())
        return isTitleMatch||isBodyMatch 
    })
}

console.log(filterNotes(notes, 'ne'))


const sortNotes = function(notes){
    return notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        }
        return 0
    })
}

console.log(sortNotes(notes))