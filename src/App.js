import React from 'react';
import './App.css';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Bookcase from './components/bookcaseComponent/Bookcase';

class App extends React.Component {
  
  render() {
    let books = [
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
        <Header className='Header'/>
        <Bookcase className='Bookcase' bookList={books}/>
        <Footer className='Footer'/>
      </div>
    );
  }

}

export default App;
