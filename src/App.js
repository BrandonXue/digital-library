import React from 'react';
import './App.css';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Collage from './components/bookcaseComponent/Collage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // Test data
      music: [
        {
          title: "Never Gonna Give You Up",
          artist: "Rick Astley",
          album: "Never Gonna Give You Up (Pianoforte)",
        },
        {
          title: "Sandstorm",
          artist: "Darude",
          album: "Sandstorm (The Remixes)",
        },
      ],
      written: [
        {
          title: "The Cat in the Hat",
          author: "Dr. Seuss",
          publisher: "Random House",
        },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          publisher: "Charles Scribner's Sons",
        },
      ],
    };
  }
  
  render() {
    let musicList = this.state.music;
    let writtenList = this.state.written;
    let media = [
      {
        title: "title1",
        author: "author1",
      },
      {
        title: "title2",
        author: "author2",
      },
      {
        title: "title3",
        author: "author3",
      },
      {
        title: "title4",
        author: "author4",
      },
      {
        title: "title5",
        author: "author5",
      },
      {
        title: "title6",
        author: "author6",
      },
      {
        title: "title7",
        author: "author7",
      },
      {
        title: "title8",
        author: "author8",
      },
    ];

    return (
      <div className="App">
        <Header/>
        <Collage media={media} music={musicList} written={writtenList}/>
        <Footer/>
      </div>
    );
  }

}

export default App;
