import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Christmas Tree is nice', duration:'5:02'},
        { title: 'Here we are', duration:'3:49'},
        { title: 'Champions', duration:'2:22'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    };
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
