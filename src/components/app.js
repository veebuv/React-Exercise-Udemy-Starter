import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import styles from './app.css';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './songItem/songItem';
import SongList from './songList/songList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: '',
      tracks: null,
      selectedTrack: null,
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song).then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks, selectedTrack } = this.state;
    return (
      <div className={styles.root}>
        <SearchBar
          updateText={(song) => this.setState({ song })}
          fetchSongs={this.fetchSongs}
        />
        {this.state.tracks ? <SongItem songData={selectedTrack || tracks.items[0]} /> : null}
        {this.state.tracks ? <SongList
          selectSong={(song) => this.setState({ selectedTrack: song })}
          listOfSongs={tracks.items}
        /> : null}
      </div>
    );
  }
}
