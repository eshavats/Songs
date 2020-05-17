import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: "Yellow", duration: "4:09"},
        {title: "Clocks", duration: "5:15"},
        {title: "Trouble", duration: "4:47"},
        {title: "Speed of sound", duration: "5:23"}  
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED")
    {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});