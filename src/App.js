import React from 'react';
import './App.css';
//import Header from './components/headerComponent/Header';
import ParallaxHeader from './components/parallaxHeaderComponent/ParallaxHeader';
import Footer from './components/footerComponent/Footer';
import Collage from './components/collageComponent/Collage';
import Collections from './components/collectionsComponent/Collections';
import ParallaxContainer from './components/parallaxComponent/ParallaxContainer';
import Toolbar from './components/toolbarComponent/Toolbar';
import SideDrawer from './components/sideDrawerComponent/SideDrawer';
import Backdrop from './components/backdropComponent/Backdrop';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

drawerTogggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });
};



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
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }


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
        <Toolbar drawerClickHandler={this.drawerTogggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        <ParallaxHeader/>
        <Collage media={media} music={musicList} written={writtenList}/>
        <Collections/>
        <ParallaxContainer top={"25vw"} relRate={0.5}>
        </ParallaxContainer>
        <Footer/>
      </div>
    );
  }

}

export default App;

//<SideDrawer/>
//<Backdrop/>

/*


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

*/