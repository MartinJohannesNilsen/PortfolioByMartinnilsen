import React, {Component} from "react";
import "../../CSS/AboutCard.css";
import portrait from '../../IMG/Portrett.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fab } from '@material-ui/core';
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


class AboutCard extends Component{
    render(){
        return(
            <div id="AboutCardContainer">
                <div id="AboutCardInfoBox">
                    <h1>Martin Johannes Nilsen</h1>
                    <h3>{this.props.data.aboutText}</h3>
                    <div id="AboutCardContactInfo">
                        <Fab onClick={() => window.location.href="mailto:martinjnilsen@icloud.com"} aria-labelledby="mail-button" variant="extended" id="AboutCardContactInfoButtonLeft" tabindex="0" alt="Send mail to Martin Johannes Nilsen">
                            <FontAwesomeIcon id="FaButtonIcon" icon={faAt} alt="mail-icon"/>
                            <text id="AboutCardContactInfoTextLeft">{this.props.data.contactInfoText[0]}</text>
                        </Fab>  
                    
                        <Fab onClick={() => window.location.href="tel:004745005502"} aria-labelledby="call-button" variant="extended" id="AboutCardContactInfoButtonRight" tabindex="0" alt="Call Martin Johannes Nilsen">
                            <FontAwesomeIcon id="FaButtonIcon" icon={faPhoneAlt} alt="call-icon"/>
                            <text id="AboutCardContactInfoTextRight">{this.props.data.contactInfoText[1]}</text>
                        </Fab>
                    </div>
                </div>
                <div id="AboutCardImageDiv">
                    <img id="AboutCardImage" src={portrait} alt="Portrait of Martin Johannes Nilsen" />
                </div>
            </div>
        )
    }
    
}
export default AboutCard;