//Print to DOM

const songDatabaseHandler = require("./songDatabaseHandler")

const songPrinter = Object.create({}, {
    printSongs: {
        value: function () {
            $("#Container").empty();
            songDatabaseHandler.getAllSongs().then((songsArray)=>{

                songsArray.forEach(song => {
                    const $songDiv = $("<div>").attr("id", song.id)
                    $("<h4>").text(`Song - ${song.name}`).appendTo($songDiv);
                    $("<p>").text(`Album - ${song.album}`).appendTo($songDiv);
                    $("<p>").text(`Artist - ${song.artist}`).appendTo($songDiv);
                    $($songDiv).append("<input type='checkbox' class= 'check'>");
                    $("<button>").text("Delete").addClass("Delete-btn").appendTo($songDiv);
                    $("<button>").text("Edit").addClass("edit-btn").appendTo($songDiv);
                    $($songDiv).appendTo("#Container");
                })
            })
        }
    }
})
songPrinter.printSongs()
module.exports = songPrinter;