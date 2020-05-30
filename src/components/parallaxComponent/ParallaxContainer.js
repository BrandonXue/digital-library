import './ParallaxContainer.css'

import React from 'react';

class ParallaxContainer extends React.Component {
    constructor(props) {
        super(props);

        const relRate = this.props.relRate !== undefined ? this.props.relRate : 0.67;
        this.state = {
            yPos: 0,
            rate: relRate,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.parallaxDrift.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.parallaxDrift.bind(this))
    }

    parallaxDrift(event) {
        let displacement = document.documentElement.scrollTop;
        let translationAmount = -displacement*this.state.rate;
        this.setState({
            yPos: translationAmount + "px"
        });
    }

    render() {
        return (
            <div 
                className="parallaxContainer"
                style={{
                    transform: "translateY(" + this.state.yPos + ")",
                    top: this.props.top,
                }}
            ></div>
        );
    }
}

export default ParallaxContainer;