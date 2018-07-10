//Print to DOM
const songPrinter = Object.create({}, {
    printSongs: {
        value: function (songsArray) {
            $("#Container").empty();
            songsArray.forEach((song) => {
                const $songDiv = $("<div>").attr("id", song.id)
                $("<h4>").text(song.name).appendTo($songDiv);
                $("<p>").text(song.details).appendTo($songDiv);
                $("<p>").text(song.date).appendTo($songDiv);
                $("<button>").text("Delete").addClass("Delete-btn").appendTo($songDiv);
                $("<button>").text("Edit").addClass("edit-btn").appendTo($songDiv);
                $($songDiv).appendTo("#Container");
            })
        }
    }
})

module.exports = songPrinter;