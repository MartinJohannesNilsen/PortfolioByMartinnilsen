import React, {Component} from "react";
import "../../CSS/Footer.css";

class Footer extends Component{
    render(){
        return(
            <div>
                <footer class="page-footer font-small" id="FooterContainer">
                    <div class="footer-copyright text-center py-3">
                        <a id="FooterTextMB">{this.props.data.footerText}</a><a id="FooterTextMJN">  Martin Johannes Nilsen</a>
                    </div>
                    <div id="FooterLinks">
                        <a id="FooterTextLinks" href="#/no">{this.props.data.footerLanguages[0]}</a>
                        <a id="FooterTextDelimiter"> | </a>
                        <a id="FooterTextLinks" href="/"> {this.props.data.footerLanguages[1]}</a>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;
