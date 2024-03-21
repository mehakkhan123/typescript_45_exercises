// create a fuction with return value
function makeAlbum(artistName:string, title:string, tracks?:number)
{
    let album:{artistName:string, title:string, tracks?:number} =
     {
artistName:artistName, title:title
    }
    if(tracks)
    {
        album.tracks = tracks;
    }
    return album;
}
// Make three albums representing different albums
let album1 = makeAlbum("Taylor Swift", "Fearless");
let album2 = makeAlbum("Ed Sheeran", "Divide", 16);
let album3 = makeAlbum("Beyonce", "Lemonade", 12);
// print each album's information
console.log(album1);
console.log(album2);
console.log(album3);
