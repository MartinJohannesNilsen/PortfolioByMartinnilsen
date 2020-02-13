import React, {Component} from "react";
import "../../CSS/Homepage.css";

import AboutCard from '../AboutCard/AboutCard';
import LinkCard from '../LinkCard/LinkCard';
import Footer from '../Footer/Footer';

let data = require('../../TextData/EnglishText.json');

class Homepage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){

        if(window.location.href.includes("/no")){
            data = require('../../TextData/NorwegianText.json')
        }

        return(
            <div id="HomepageContainer">
                <h1>{data.title}</h1>
                <AboutCard data={data}/>
                <LinkCard data={data}/>
                <Footer data={data}/>
            </div>
        )
    }
    
}
export default Homepage;