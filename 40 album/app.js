// create a fuction with return value
function makeAlbum(artistName, title, tracks) {
    var album = {
        artistName: artistName, title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Make three albums representing different albums
var album1 = makeAlbum("Taylor Swift", "Fearless");
var album2 = makeAlbum("Ed Sheeran", "Divide", 16);
var album3 = makeAlbum("Beyonce", "Lemonade", 12);
// print each album's information
console.log(album1);
console.log(album2);
console.log(album3);
