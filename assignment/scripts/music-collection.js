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
console.log()
//logged collection to console
function showCollection(array){
  console.log('number of albums in collection:' , array.length);
  for (album of array){
    console.log(album.title , 'by' , album.artist + ',' , 'published in' , album.yearPublished);
  }
}
//function for logging all of a collection's albums' information in sentence form.

showCollection(collection);
//tested function by running function with collection array

function findByArtist(artist){
  let artistArray = [];
  for (album of collection){
    if (album.artist === artist){
      artistArray.push(album);
    }
  }
  return artistArray;
}
//function for showing albums by a certain artist in collection. returns the albums when call function with artist.

console.log('Albums by Odesza, expect two of them:' , findByArtist('Odesza'));
console.log('Albums by Frank Ocean, expect one of them:' , findByArtist('Frank Ocean'));
console.log('Albums by Sylvan Esso. Should expect empty array:' , findByArtist('Sylvan Esso'));
console.log('Albums by Janet Jackson. Should expect empty array:' , findByArtist('Janet Jackson'));
//tested findByArtist function by calling different artists in function - both artists that are in function and artist that aren't
