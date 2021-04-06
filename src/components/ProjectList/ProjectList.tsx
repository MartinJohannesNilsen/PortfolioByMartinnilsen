import React from "react";
import "../../styles/ProjectList.scss";
import "../../styles/_customBootstrap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

type ProjectProps = {
  data: any;
  icon?: any;
};

const ProjectList: React.FC<ProjectProps> = (props) => {
  return (
    <div id="ProjectListContainer">
      <h2 id="ProjectListTitle">{props.data.projectsTitle}</h2>
      <hr id="ProjectListTitleUnderline" />
      <div id="ProjectListCards">
        {props.data.projects
          .slice(0)
          .reverse()
          .map((project: any) => (
            <ProjectCard
              key={project.title}
              data={project}
              linkButtonText={props.data.linkButtonText}
            />
          ))}
      </div>
    </div>
  );
};

type LinkButtonProps = {
  path: string;
  text: string;
  number: number;
  icon?: any;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <div>
      <button
        onClick={() => window.open(props.path, "_blank")}
        tabIndex={0}
        type="button"
        className="btn btn-dark btn-sm ProjectCardLinks"
        aria-labelledby={"Link to this project's" + props.text[props.number]}
      >
        <FontAwesomeIcon
          id="FaButtonIconLarge"
          icon={props.icon}
          aria-label="Desktop icon"
        />
        <text className="buttonText">{props.text[props.number]}</text>
      </button>
    </div>
  );
};

type ProjectCardProps = {
  data: any;
  linkButtonText: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const insertButtons = (data: any, linkButtonText: string) => {
    const isHosted = data.hasOwnProperty("linkToWebsite");
    const hasGitHub = data.hasOwnProperty("linkToGitHub");
    const hasDemoVid = data.hasOwnProperty("linkToDemovideo");
    const hasReadMe = data.hasOwnProperty("linkToReadMe");
    const hasPaper = data.hasOwnProperty("linkToPaper");
    return (
      <React.Fragment>
        {hasGitHub ? (
          <LinkButton
            path={data.linkToGitHub}
            text={linkButtonText}
            number={0}
            icon={faGithub}
          />
        ) : (
          <></>
        )}
        {isHosted ? (
          <LinkButton
            path={data.linkToWebsite}
            text={linkButtonText}
            number={1}
            icon={faDesktop}
          />
        ) : (
          <></>
        )}
        {hasDemoVid ? (
          <LinkButton
            path={data.linkToDemovideo}
            text={linkButtonText}
            number={2}
            icon={faVideo}
          />
        ) : (
          <></>
        )}
        {hasReadMe ? (
          <LinkButton
            path={data.linkToReadMe}
            text={linkButtonText}
            number={3}
            icon={faFile}
          />
        ) : (
          <></>
        )}
        {hasPaper ? (
          <LinkButton
            path={data.linkToPaper}
            text={linkButtonText}
            number={4}
            icon={faFile}
          />
        ) : (
          <></>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="ProjectCardContainer" tabIndex={0}>
      <div id="ProjectCardVerticalLine"></div>
      <div id="ProjectCardInformation">
        <h4>{props.data.title}</h4>
        <h6>{props.data.description}</h6>
        <div id="ProjectCardInformationTechnologies">
          {props.data.technologies.map((t: string) => (
            <button
              key={t}
              type="button"
              tabIndex={-1}
              className="btnCustom btnCustom-outline-warning"
            >
              {t}
            </button>
          ))}
        </div>
        <div id="ProjectCardLinkBox">
          {insertButtons(props.data, props.linkButtonText)}
        </div>
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
