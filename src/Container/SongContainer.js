import React, { Component } from 'react';
// import SongList from '../Components/SongList';

class SongContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        songs: []
      };
    //binding comes here
  }


componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  const request = new XMLHttpRequest();
  request.open('GET', url);

  request.addEventListener("load", () => {
    if (request.status !== 200) return;
    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);
    this.setState({songs: data.feed.entry})
    console.log(data.feed.entry);
  });

  request.send();
}

render(){
  return(
    <div>
      <h2>Song Container</h2>

    </div>
  )
}
}

export default SongContainer;
