import React, {Component} from "react";
import "../../CSS/AboutCard.css";
import portrait from '../../IMG/Portrett.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
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
                        <a href="mailto:martinjnilsen@icloud.com"><Fab aria-label="to top">
                            <FontAwesomeIcon id="HomePageToTopButtonIcon" icon={faAt} alt="Send mail to martinjnilsen@icloud.com"/>
                        </Fab>
                        </a>
                        <a href="tel:004745005502"><Fab aria-label="to top">
                            <FontAwesomeIcon id="HomePageToTopButtonIcon" icon={faPhoneAlt} alt="Call +47 45005502"/>
                        </Fab>
                        </a>
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