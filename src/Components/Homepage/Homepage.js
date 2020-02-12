import React, {Component} from "react";
import "../../CSS/Homepage.css";

import AboutCard from '../AboutCard/AboutCard';

class Homepage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div id="HomepageContainer">
                <h1>UNDER KONSTRUKSJON</h1>
                <AboutCard />
                
            </div>
        )
    }
    
}
export default Homepage;