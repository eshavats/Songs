//Action Creator

export const selectSong = (song) => {
    //Returns an Action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};