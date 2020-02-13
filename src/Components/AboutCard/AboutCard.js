import React, {Component} from "react";
import "../../CSS/AboutCard.css";
import portrait from '../../IMG/Portrett.JPG'


class AboutCard extends Component{
    render(){
        return(
            <div id="AboutCardContainer">
                <div id="AboutCardInfoBox">
                    <h1>Martin Johannes Nilsen</h1>
                    <h3>{this.props.data.aboutText}</h3>
                    <h4><a href="mailto:martinjnilsen@icloud.com">martinjnilsen@icloud.com</a></h4>
                    <h4><a href="tel:004745005502">+47 45005502</a></h4>
                </div>
                <div id="AboutCardImageDiv">
                    <img id="AboutCardImage" src={portrait} alt="Portrait of Martin Johannes Nilsen" />
                </div>
            </div>
        )
    }
    
}
export default AboutCard;