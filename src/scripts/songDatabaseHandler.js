const songDatabaseHandler = Object.create({}, {
            postSong: {
                value: (newSongObject) => {
                    return $.ajax({
                        url: "http://localhost:3000/songs",
                        method: "POST",
                        data: newSongObject
                    })
                }

            },
            getAllSongs: {
                value: () => {
                    return $.ajax("http://localhost:3000/songs")
                }
            },
            getSongs: {
                value: (id) => {
                    return $.ajax({
                        url: `http://localhost:3000/songs/${id}`,
                        method: "GET"
                    })
                }
            },
            putSong: {
                value: (updateSong) => {
                    console.log("database", updateSong)
                    return $.ajax({
                        url:`http://localhost:3000/tasks/${updateSong.id}`,
                        method: "PUT",
                        data: {
                            name: updateSong.name,
                            album: updateSong.album,
                            artist: updateSong.artist
                        }
                    })
                }
            },
                deleteSong: {
                    value: (id) => {
                        return $.ajax({
                            url:`http://localhost:3000/songs/${id}`,
                            method: "DELETE",
                        })
                    }
                }
            })

            module.exports = songDatabaseHandler