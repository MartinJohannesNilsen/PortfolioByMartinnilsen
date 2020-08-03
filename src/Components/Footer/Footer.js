import React from "react";
import "../../CSS/Footer.css";

const Footer = (props) => {
	return (
		<div>
			<footer className="page-footer font-small" id="FooterContainer">
				<div id="FooterText">
					<text id="FooterTextMB">{props.data.footerText}</text>
					<text id="FooterTextMJN"> Martin Johannes Nilsen</text>
				</div>
				<div id="FooterLinks">
					<a id="FooterTextLinks" href="/en" tabIndex="0">
						{props.data.footerLanguages[1]}
					</a>
					<text id="FooterTextDelimiter"> | </text>
					<a id="FooterTextLinks" href="/no" tabIndex="0">
						{" "}
						{props.data.footerLanguages[0]}
					</a>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
