const songDatabaseHandler = require("./songDatabaseHandler");
const songPrinter = require("./songPrinter");

$("#Form-container").on("click", "#save-btn", () => {
    const songNameInput = $("#name-input").val();
    const albumInput = $("#album-input").val();
    const artistInput = $("#artist-input").val();
    const newSong = {
        name: songNameInput,
        album: albumInput,
        artist: artistInput,
        watchted: "test"
    }

    songDatabaseHandler.postSong(newSong)
        .then(() => {
            // console.log("songInfo", songInfo)
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

$("#Container").on("click", ".edit-btn", () => {

    updateSongID = $(event.target).parent().attr("id")
    songDatabaseHandler.getSongs(updateSongID)
        .then((response) => {
            console.log("response", response)
            $("#name-input").val(response.name)
            $("#album-input").val(response.album)
            $("#artist-input").val(response.artist)
        })
})

$("#Form-container").on("click", "#update-btn", () => {
    const nameInput = $("#name-input").val();
    console.log($("#name-input").val())
    const albumInput = $("#album-input").val();
    const artistInput = $("#artist-input").val();
    const updateSong = {
        id: updateSongID,
        name: nameInput,
        album: albumInput,
        artist: artistInput,
        watchted: "test"
    }
    songDatabaseHandler.putSong(updateSong)
        .then(() => {
            return songDatabaseHandler.getAllSongs()
        })
        .then((songsArray) => {
            songPrinter.printSongs(songsArray)
        })
})


$("#Container").on("click", ".Delete-btn", () => {
    const songID = $(event.target).parent().attr("id")
    songDatabaseHandler.deleteSong(songID)
        .then(() => {
            return songDatabaseHandler.getAllSongs()
        })
        .then((songsArray) => {
            songPrinter.printSongs(SongsArray)
        })
        location.reload()
})