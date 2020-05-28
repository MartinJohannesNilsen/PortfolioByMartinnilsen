import React, {Component} from "react";
import "../../CSS/Footer.css";

class Footer extends Component{
    render(){
        return(
            <div>
                <footer class="page-footer font-small" id="FooterContainer">
                    <div id="FooterText">
                        <text id="FooterTextMB">{this.props.data.footerText}</text><text id="FooterTextMJN">  Martin Johannes Nilsen</text>
                    </div>
                    <div id="FooterLinks">
                        <a id="FooterTextLinks" href="/en" tabindex="0">{this.props.data.footerLanguages[1]}</a>
                        <text id="FooterTextDelimiter"> | </text>
                        <a id="FooterTextLinks" href="/no" tabindex="0"> {this.props.data.footerLanguages[0]}</a>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;
