import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxHeader.css';
import logo from './logo.svg'
import libraryImage from './TrinityLibrary.jpg'

class ParallaxHeader extends React.Component {
    render() {
        return(
            <div className = "parallaxHeader">
              <Parallax bgImage = {libraryImage} className = "parallaxImage" strength = {-500}>
                  <div className = "header">
                    <h1 className = "childElem"> Digital </h1>
                    <h1 className = "childElem"> Archive </h1>
                    <img className = "appLogo" src={logo} alt="Digital Library Logo"/>
                  </div>
              </Parallax>
            </div>
        );
    }
}
    
export default ParallaxHeader;


// ==============================================================================================================================

// Test CSS data

/*
const insideStyles = {
  background: "rgba(34,34,34,0.60)",
  color: "white",
  left: "50%",
  top: "25vw",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%,-50%)",
  display: "flex",
  flexDirection: "row",
  backdropFilter: "blur(3px)",
  zIndex: "99",
};

const parallaxStyles = {
  height: "50vw",
  width: "100vw",
};

const chilkd ={
  margin: "1vw",
};

*/

// ==============================================================================================================================

/*
// Test Images

// previous digital library image
import libraryImage from './dig-lib-image.jpg'

const testImage1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const testImage2 = 
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";

*/

// ==============================================================================================================================