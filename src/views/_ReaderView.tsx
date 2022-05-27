import { FC } from "react";
import { ProjectProps } from "../components/ProjectList/ProjectElement";
import { ArticleProps } from "./FeaturedInView";

type ReaderViewProps = {
  ids: string[];
  about: {
    subtitle: string[];
    text: string[];
  };
  projects: {
    title: string;
    buttonTexts: string[];
    listOfProjects: [ProjectProps];
  };
  featuredIn: {
    title: string;
    readButtonText: string;
    copyButtonText: string;
    articles: [ArticleProps];
  };
  contact: {
    text: string[];
    links: [
      {
        text: string;
        value: string;
        copyText?: string;
      }
    ];
  };
};

const create_link_row = (project: ProjectProps, buttonTexts: string[]) => {
  let elements = [];
  if (project.linkToGitHub) {
    elements.push(
      <a href={project.linkToGitHub} target="_blank">
        {buttonTexts[1]}
      </a>
    );
  }
  if (project.linkToWebsite) {
    elements.push(
      <a href={project.linkToWebsite} target="_blank">
        {buttonTexts[2]}
      </a>
    );
  }
  if (project.linkToDemovideo) {
    elements.push(
      <a href={project.linkToDemovideo} target="_blank">
        {buttonTexts[3]}
      </a>
    );
  }
  if (project.linkToReadMe) {
    elements.push(
      <a href={project.linkToReadMe} target="_blank">
        {buttonTexts[4]}
      </a>
    );
  }
  if (project.linkToPaper) {
    elements.push(
      <a href={project.linkToPaper} target="_blank">
        {buttonTexts[5]}
      </a>
    );
  }
  let res: any = [];
  elements.map((elem, key) => {
    res.push(elem);
    if (key < elements.length - 1) {
      res.push(<a> • </a>);
    }
  });
  return <p>{res}</p>;
};

const ReaderView: FC<ReaderViewProps> = (props) => {
  // const ReaderView: FC = (props) => {
  return (
    <article
      style={{
        position: "absolute",
        top: "-9999px !important",
        left: "-9999px !important",
      }}
    >
      <h2>Martin Johannes Nilsen | Portfolio</h2>

      {/* About */}
      <h2>
        <span className="header">{props.ids[0]}</span>
      </h2>
      {props.about.text.map((t) => (
        <p>{t}</p>
      ))}

      {/* Projects */}
      <h2>
        <span className="header">{props.ids[1]}</span>
      </h2>
      {props.projects.listOfProjects
        .slice()
        .reverse()
        .map((t) => (
          <>
            <h4>
              <span className="header">{t.title}</span>
            </h4>
            <p>{t.description}</p>
            {create_link_row(t, props.projects.buttonTexts)}
          </>
        ))}

      {/* Featured in */}
      <h2>
        <span className="header">{props.featuredIn.title}</span>
      </h2>
      {props.featuredIn.articles.map((t) => (
        <>
          <h4>
            <span className="header">{t.title}</span>
          </h4>
          <p>{t.description}</p>
          <a href={t.url} target="_blank">
            {props.featuredIn.readButtonText}
          </a>
        </>
      ))}

      {/* Contact */}
      <h2>
        <span className="header">{props.ids[2]}</span>
      </h2>
      {props.contact.text.map((t) => (
        <>
          <p>{t}</p>
        </>
      ))}
      {props.contact.links
        .slice()
        .reverse()
        .map((link, key) => {
          let elements = [];
          if (link.hasOwnProperty("copyText")) {
            elements.push(<a>{link.value}</a>);
          } else {
            elements.push(
              <a href={link.value} target="_blank">
                {link.text}
              </a>
            );
          }
          if (key < props.contact.links.length - 1) {
            elements.push(<a> • </a>);
          }
          return elements;
        })}
    </article>
  );
};
export default ReaderView;
