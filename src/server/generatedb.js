const fs = require("fs");
//const path = require("path");
const movies = [
    {
        Id:1,
        Poster: "https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg",
        Title: "Avengers Endgame",
        Year: 2013,
        Price:100
    },
    {
        Id:2,
        Poster: "https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg",
        Title: "Star Wars",
        Year: 2015,
        Price:200
    },
    {
        Id:3,
        Poster: "https://c4.wallpaperflare.com/wallpaper/763/245/276/suicide-squad-margot-robbie-dc-comics-harley-quinn-wallpaper-preview.jpg",
        Title: "Suicide Squad",
        Year: 2016,
        Price:1200
    },
    {
        Id:4,
        Poster: "https://c4.wallpaperflare.com/wallpaper/846/216/1006/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-preview.jpg",
        Title: "Godzilla",
        Year: 2020,
        Price:500
    },
    {
        Id:5,
        Poster: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
        Title: "Inception",
        Year: 2012,
        Price:400
    },
    {
        Id:6,
        Poster:"https://c4.wallpaperflare.com/wallpaper/1022/525/87/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.jpg", 
        Title: "Lord of the Rings",
        Year: 2016,
        Price:300
    }

]
const data = JSON.stringify({movies});
const fpath = "C:/Users/Utkarsh.Kendre/Desktop/Training/ReactDemo/my-app/src/server/db.json";
fs.writeFile(fpath,data,err=>{
    err?console.log(err) : console.log("looks fine");
})


//const places = fakedb;
//console.log(places);

//console.log("hi");
//console.log(data);
//console.log(path);
//const fakedb = require("fakedb.js");
//console.log(fakedb);