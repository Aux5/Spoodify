//Build the task form
const songForm = Object.create({}, {
    buildSongForm: {
        value: () => {
            const $songDiv = $("<div>").attr("id", "form");
            $("<input>").attr("id", "name-input").attr("placeholder", "Song Name").appendTo($songDiv);
            $("<input>").attr("id", "album-input").attr("placeholder", "Album").appendTo($songDiv);
            $("<input>").attr("id", "artist-input").attr("placeholder", "Artist").appendTo($songDiv);
            $("<button>").attr("id", "save-btn").text("Save Song").appendTo($songDiv);
            $("<button>").attr("id", "update-btn").text("Edit Song").appendTo($songDiv);
            $songDiv.appendTo($("#Form-container"))
        }
    }
})

module.exports = songForm;