import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

    function renderSong(selectedSong){
        if(selectedSong !== null) {
            return <div>{selectedSong.title}</div>
        }
        return null;
    }
    
    return <div className="ui segment">{renderSong(props.selectedSong)}</div>
}

// Convention:
const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    };
};

export default connect(
    mapStateToProps)(SongDetail);