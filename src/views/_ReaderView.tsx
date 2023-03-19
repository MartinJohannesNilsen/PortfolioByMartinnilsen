import { FC } from "react";
import { ProjectProps, ReaderViewProps } from "../types";

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
  return (
    <article
      style={{
        position: "absolute",
        zIndex: -1,
      }}
    >
      <h2>
        {props.language === "norwegian"
          ? "Portefølje | Martin Johannes Nilsen"
          : "Portfolio by Martin Johannes Nilsen"}
      </h2>

      {/* About */}
      <h2>
        <span className="header">{props.ids[0]}</span>
      </h2>
      {props.landing.cards.map((t, key) => (
        <div key={key}>
          <h4>{t.topic}</h4>
          <p>{`${t.title} ${t.text}`}</p>
        </div>
      ))}

      {/* Projects */}
      <h2>
        <span className="header">{props.ids[1]}</span>
      </h2>
      {props.projects.projects
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
        <span className="header">{props.ids[2]}</span>
      </h2>
      {props.featuredIn.articles.map((t, key) => (
        <div key={key}>
          <h4>
            <span className="header">{t.title}</span>
          </h4>
          <p>{t.description}</p>
          <p>{`(${t.publisher.name}, ${new Date(t.date).toLocaleDateString(
            props.language === "norwegian" ? "nb-NO" : "en-GB",
            { year: "numeric", month: "short", day: "numeric" }
          )}, ${t.readTimeMinutes} ${
            props.language === "norwegian" ? "min å lese" : "min read"
          })`}</p>
          <a href={t.url} target="_blank">
            {props.featuredIn.readButtonText}
          </a>
        </div>
      ))}

      {/* Contact */}
      <h2>
        <span className="header">{props.ids[3]}</span>
      </h2>
      <p>{props.footer.text}</p>
      {props.footer.links
        .slice()
        .reverse()
        .map((link, key) => {
          let elements = [];
          if (link.hasOwnProperty("copyText")) {
            elements.push(<a key={key}>{link.value}</a>);
          } else {
            elements.push(
              <a href={link.value} key={key} target="_blank">
                {link.text}
              </a>
            );
          }
          if (key < props.footer.links.length - 1) {
            elements.push(<a> • </a>);
          }
          return elements;
        })}
    </article>
  );
};
export default ReaderView;
