import React, {Component} from "react";
import "../../CSS/Homepage.css";
import AboutCard from '../AboutCard/AboutCard';
import LinkCard from '../LinkCard/LinkCard';
import ProjectList from '../ProjectList/ProjectList';
import Footer from '../Footer/Footer';
import { Fab } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

let data = require('../../TextData/EnglishText.json');

class Homepage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){

        $(window).scroll(function() {
            if ($(this).scrollTop() > 220) {
                $('#HomePageToTopButton:hidden').stop(true, true).fadeIn();
            } else {
                $('#HomePageToTopButton').stop(true, true).fadeOut();
            }
        });

        if(window.location.href.includes("/no")){
            data = require('../../TextData/NorwegianText.json');
        }
        else if(window.location.href.includes("/en")){
            data = require('../../TextData/EnglishText.json');
        }

        return(
            <div id="HomepageContainer">
                <div id="HomePageTitle"><h1>{data.title}</h1></div>
                
                <AboutCard data={data}/>
                <LinkCard data={data}/>
                <ProjectList data={data}/>
                <Footer data={data}/>
                <a onClick={() => {$('html, body').animate({scrollTop: '0'}, 1500);}}><Fab id="HomePageToTopButton" aria-label="to top">
                    <FontAwesomeIcon id="FaButtonIcon" icon={faAngleUp} alt="Press this button for scrolling up to the top"/>
                </Fab>
                </a>
            </div>
        )
    }
    
}
export default Homepage;