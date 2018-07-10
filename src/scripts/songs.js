const songFormBuilder = require("./songFormBuilder");
const songPrinter = require("./songPrinter");

songFormBuilder.buildSongForm()

const printOnPageLoad = () => {
    $.ajax ("http://localhost3000/songs")
    .then((songs) => {
        songPrinter.printSongs(songs);

    })
}

printOnPageLoad();