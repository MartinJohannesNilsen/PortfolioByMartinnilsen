import React from "react";
import "../../Styles/Footer.scss";

const Footer = (props) => {
	return (
		<div>
			<footer className="page-footer font-small" id="FooterContainer">
				<div id="FooterText">
					<text id="FooterTextMB">{props.data.footerText}</text>
					<text id="FooterTextMJN"> Martin Johannes Nilsen</text>
				</div>
				<div id="FooterLinks">
					<a
						id="FooterTextLinks"
						href="/en"
						tabIndex="0"
						alt="Set the language of Martin Johannes Nilsen's portfolio to english"
						title="Set the language of Martin Johannes Nilsen's portfolio to english"
					>
						{props.data.footerLanguages[1]}
					</a>
					<text id="FooterTextDelimiter"> | </text>
					<a
						id="FooterTextLinks"
						href="/no"
						tabIndex="0"
						alt="Set the language of Martin Johannes Nilsen's portfolio to norwegian"
						title="Set the language of Martin Johannes Nilsen's portfolio to norwegian"
					>
						{" "}
						{props.data.footerLanguages[0]}
					</a>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
