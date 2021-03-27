console.log('***** Music Collection *****')

let collection = [];
//created new variable collection and set it to empty array
function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album
}
//created addToCollection function which makes album from items called then adds to collection array then returns the album created.
console.log(addToCollection('Blonde', 'Frank Ocean' , 2016));
console.log(addToCollection('Amygdala', 'DJ Koze' , 2013));
console.log(addToCollection("Summer's Gone", 'Odesza' , 2012));
console.log(addToCollection('In Return', 'Odesza' , 2014));
console.log(addToCollection('Teens Of Denial', 'Car Seat Headrest' , 2016));
console.log(addToCollection('Love What Survives', 'Mount Kimbie' , 2017));
//called function - made albums and returned them to Console
console.log('album collection:' , collection);
//logged collection to console 
