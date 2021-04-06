import React from "react";
import "../../styles/AboutCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fab } from "@material-ui/core";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

type AboutProps = {
	data: any
}

const AboutCard: React.FC<AboutProps> = (props) => {
	return (
		<div id="AboutCardContainer">
			<div id="AboutCardInfoBox">
				<h1>Martin Johannes Nilsen</h1>
				<h3>{props.data.aboutText}</h3>
				{/* <div id="AboutCardContactInfo">
					<Fab
						onClick={() =>
							(window.location.href = "mailto:martinjnilsen@icloud.com")
						}
						aria-labelledby="mail-button"
						variant="extended"
						id="AboutCardContactInfoButtonLeft"
						tabIndex="0"
						alt="Send mail to Martin Johannes Nilsen"
						title="Send mail to Martin Johannes Nilsen"
					>
						<FontAwesomeIcon id="FaButtonIcon" icon={faAt} alt="mail-icon" />
						<text id="AboutCardContactInfoTextLeft">
							{props.data.contactInfoText[0]}
						</text>
					</Fab>

					<Fab
						onClick={() => (window.location.href = "tel:004745005502")}
						aria-labelledby="call-button"
						variant="extended"
						id="AboutCardContactInfoButtonRight"
						tabIndex="0"
						alt="Call Martin Johannes Nilsen"
						title="Call Martin Johannes Nilsen"
					>
						<FontAwesomeIcon
							id="FaButtonIcon"
							icon={faPhoneAlt}
							aria-label="call-icon"
						/>
						<text id="AboutCardContactInfoTextRight">
							{props.data.contactInfoText[1]}
						</text>
					</Fab>
				</div> */}
			</div>
			<div id="AboutCardImageDiv">
				<img
					id="AboutCardImage"
					src={"https://firebasestorage.googleapis.com/v0/b/portfoliobymartinnilsen.appspot.com/o/Portrett.JPG?alt=media&token=ba7bb154-7564-488d-9c69-4592b4d80643"}
					alt="Portrait of Martin Johannes Nilsen"
					title="Portrait of Martin Johannes Nilsen"
				/>
			</div>
		</div>
	);
};
export default AboutCard;
