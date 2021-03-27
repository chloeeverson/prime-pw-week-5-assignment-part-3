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
//
