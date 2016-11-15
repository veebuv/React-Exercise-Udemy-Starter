import React, { PropTypes } from 'react';
import styles from './searchBar.css';

const SearchBar = (props) => (
  <div className={styles.root}>
    <input className={styles.input} onChange={(e) => props.updateText(e.target.value)} />
    <button className={styles.button} onClick={props.fetchSongs}>Get Songs</button>
  </div>
);

SearchBar.propTypes = {
  updateText: PropTypes.func,
  fetchSongs: PropTypes.func,
};

export default SearchBar;
