import React from 'react';
import './Header.css'
import logo from './logo.svg'

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-header-text">Digital Library</h1>
                <img className="App-logo" src={logo} alt="Digital Library Logo"/>
            </header>
        );
    }
}

export default Header;
