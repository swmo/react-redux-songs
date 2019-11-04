import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

    function renderSong(song){
        if(song !== null) {
            return (
                <div>
                    <h3>Details for:</h3>
                    <p>
                    Title: {song.title}  <br/>
                    Duration: {song.duration}
                    </p>
                    
                </div>)
        }
        return <div>Please select a song</div>;
    }

    return <div className="ui segment">{renderSong(props.song)}</div>
}

// Convention:
const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
};

export default connect(
    mapStateToProps)(SongDetail);