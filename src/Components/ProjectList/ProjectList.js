import React from "react";
import "../../Styles/ProjectList.scss";
import "../../Styles/_customBootstrap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const ProjectList = (props) => {
	return (
		<div id="ProjectListContainer">
			<h2 id="ProjectListTitle">{props.data.projectsTitle}</h2>
			<hr id="ProjectListTitleUnderline" />
			{props.data.projects
				.slice(0)
				.reverse()
				.map((project) => (
					<ProjectCard
						key={project.title}
						data={project}
						linkButtonText={props.data.linkButtonText}
					/>
				))}
		</div>
	);
};

const ProjectCard = (props) => {
	const insertButtons = (data, linkButtonText) => {
		const isHosted = data.hasOwnProperty("linkToWebsite");
		const hasGitHub = data.hasOwnProperty("linkToGitHub");
		const hasDemoVid = data.hasOwnProperty("linkToDemovideo");
		const hasReadMe = data.hasOwnProperty("linkToReadMe");
		const hasPaper = data.hasOwnProperty("linkToPaper");
		return (
			<React.Fragment>
				{hasGitHub ? (
					<div>
						<button
							onClick={() => window.open(data.linkToGitHub, "_blank")}
							tabIndex="0"
							type="button"
							className="btn btn-dark btn-sm ProjectCardLinks"
							aria-labelledby="Link to this project's Github"
						>
							<FontAwesomeIcon
								id="FaButtonIconLarge"
								icon={faGithub}
								alt="GitHub icon"
							/>
							<text id="AboutCardContactInfoTextLeft">{linkButtonText[0]}</text>
						</button>
					</div>
				) : (
					<></>
				)}
				{isHosted ? (
					<div>
						<button
							onClick={() => window.open(data.linkToWebsite, "_blank")}
							tabIndex="0"
							type="button"
							className="btn btn-dark btn-sm ProjectCardLinks"
							aria-labelledby="Link to this project's website"
						>
							<FontAwesomeIcon
								id="FaButtonIconLarge"
								icon={faDesktop}
								alt="Desktop icon"
							/>
							<text id="AboutCardContactInfoTextLeft">{linkButtonText[1]}</text>
						</button>
					</div>
				) : (
					<></>
				)}
				{hasDemoVid ? (
					<div>
						<button
							onClick={() => window.open(data.linkToDemovideo, "_blank")}
							tabIndex="0"
							type="button"
							className="btn btn-dark btn-sm ProjectCardLinks"
							aria-labelledby="Link to this project's demovideo"
						>
							<FontAwesomeIcon
								id="FaButtonIconLarge"
								icon={faVideo}
								alt="Video icon"
							/>
							<text id="AboutCardContactInfoTextLeft">{linkButtonText[2]}</text>
						</button>
					</div>
				) : (
					<></>
				)}
				{hasReadMe ? (
					<div>
						<button
							onClick={() => window.open(data.linkToReadMe, "_blank")}
							tabIndex="0"
							type="button"
							className="btn btn-dark btn-sm ProjectCardLinks"
							aria-labelledby="Link to this project's ReadMe"
						>
							<FontAwesomeIcon
								id="FaButtonIconLarge"
								icon={faFile}
								alt="Video icon"
							/>
							<text id="AboutCardContactInfoTextLeft">{linkButtonText[3]}</text>
						</button>
					</div>
				) : (
					<></>
				)}
				{hasPaper ? (
					<div>
						<button
							onClick={() => window.open(data.linkToPaper, "_blank")}
							tabIndex="0"
							type="button"
							className="btn btn-dark btn-sm ProjectCardLinks"
							aria-labelledby="Link to this project's paper"
						>
							<FontAwesomeIcon
								id="FaButtonIconLarge"
								icon={faFile}
								alt="Video icon"
							/>
							<text id="AboutCardContactInfoTextLeft">{linkButtonText[4]}</text>
						</button>
					</div>
				) : (
					<></>
				)}
			</React.Fragment>
		);
	};

	return (
		<div className="ProjectCardContainer" tabIndex="0">
			<div id="ProjectCardVerticalLine"></div>
			<div id="ProjectCardInformation">
				<h4>{props.data.title}</h4>
				<h6>{props.data.description}</h6>
				<div id="ProjectCardInformationTechnologies">
					{props.data.technologies.map((t) => (
						<button
							key={t}
							type="button"
							tabIndex="-1"
							className="btnCustom btnCustom-outline-warning"
						>
							{t}
						</button>
					))}
				</div>
			</div>
			<div id="ProjectCardLinkBox">
				{insertButtons(props.data, props.linkButtonText)}
			</div>
			<div id="ProjectCardImage">
				<img
					src={props.data.imgPath}
					alt={'Image/icon for "' + props.data.title + '"'}
				/>
			</div>
		</div>
	);
};
export default ProjectList;
