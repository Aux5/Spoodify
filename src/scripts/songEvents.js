const songDatabaseHandler = require("./songDatabaseHandler");
const songPrinter = require("./songPrinter");

$("#Form-container").on("click", "#save-btn", () => {
    const songNameInput = $("#name-input").val();
    const albumInput = $("#album-input").val();
    const artistInput = $("#artist-input").val();
    const newSong = {
        name: name,
        album: albumInput,
        artist: artistInput,
    }

    songDatabaseHandler.postSong(newSong)
        .then((SongInfo) => {
            console.log("taskInfo", taskInfo)
            $("#name-input").val("").attr("placeholder", "Song Name")
            $("#album-input").val("").attr("placeholder", "Album")
            $("#artist-input").val("").attr("placeholder", "Artist")
            return songDatabaseHandler.getAllSongs()
        })
        .then(songsArray => {
            songPrinter.printSongs(songsArray)
        })
})


let updateSongID;

$("#Container").on("click", ".update-btn", () => {

    updateSongID = $(event.target).parent().attr("id")
    songDatabaseHandler.getSong(updateSongID)
        .then((response) => {
            console.log("response", response)
            $("#name-input").val(response.name)
            $("#album-input").val(response.details)
            $("#artist-input").val(response.date)
        })
})

$("#Form-container").on("click", "#update-btn", () => {
    const nameameInput = $("#name-input").val();
    const albumInput = $("#album-input").val();
    const artistInput = $("#artist-input").val();
    const updateSong = {
        id: updateSongID,
        name: nameInput,
        album: albumInput,
        artist: artistInput,
    }
    songDatabaseHandler.putSong(updateSong)
        .then(() => {
            return songDatabaseHandler.getAllSongs()
        })
        .then((songsArray) => {
            songPrinter.printSongs(songsArray)
        })
})


$("#Container").on("click", ".save-btn", () => {
    const songID = $(event.target).parent().attr("id")
    songDatabaseHandler.deleteSong(songID)
        .then(() => {
            return songDatabaseHandler.getAllSongs()
        })
        .then((songsArray) => {
            songPrinter.printSongs(SongsArray)
        })
})