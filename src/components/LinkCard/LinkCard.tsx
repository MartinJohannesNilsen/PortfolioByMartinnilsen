import React from "react";
import "../../styles/LinkCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LinkCard = (props: any) => {
	return (
		<div id="LinkCardContainer">
			<div className="LinkCardBox" id="LinkCardBox1">
				<a
					href="https://github.com/Martinnilsen99"
					target="_blank"
					rel="noopener noreferrer"
					tabIndex={0}
					id="LinkCardBoxATag"
				>
					<div>
						<FontAwesomeIcon
							icon={faGithub}
							className="LinkCardIcon"
							id="LinkCardIcon1"
							aria-label="Martin Johannes Nilsen's GitHub"
						/>
					</div>
				</a>
			</div>
			<div className="LinkCardBox" id="LinkCardBox2">
				<a
					href="https://www.linkedin.com/in/martinnilsen99/"
					target="_blank"
					rel="noopener noreferrer"
					tabIndex={0}
					id="LinkCardBoxATag"
				>
					<div>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="LinkCardIcon"
							aria-label="Martin Johannes Nilsen's linkedIn"
						/>
					</div>
				</a>
			</div>
			<div className="LinkCardBox" id="LinkCardBox3">
				<a
					href={props.data.cvPath}
					target="_blank"
					tabIndex={0}
					id="LinkCardBoxATag"
				>
					<div>
						<img
							src={require("../../assets/Icons/CV_Icon.png")}
							className="LinkCardIcon"
							id="LinkCardIcon3"
							alt="Martin Johannes Nilsen's CV"
						/>
					</div>
				</a>
			</div>
		</div>
	);
};
export default LinkCard;
