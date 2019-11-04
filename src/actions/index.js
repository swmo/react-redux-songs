/*
    named import instead of export default:
    
    import {selectSong} from '../actions';
*/
export const selectSong = (song) => {

    // return a action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};


