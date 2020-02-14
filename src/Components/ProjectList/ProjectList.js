import React, {Component} from "react";
import "../../CSS/ProjectList.css";
import "../../CSS/customBootstrap.css"
import Button from '@material-ui/core/Button';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ProjectList extends Component{
    render(){
        return(
            <div id="ProjectListContainer">
                <h2 id="ProjectListTitle">{this.props.data.projectsTitle}</h2>
                <hr id="ProjectListTitleUnderline" />
                {this.props.data.projects.slice(0).reverse().map(project => (
                    <ProjectCard data={project}/>
                ))}
            </div>
        )
    }
    
}

class ProjectCard extends Component{
    render(){
        return(
            <div class="ProjectCardContainer">
                <div id="ProjectCardVerticalLine"></div>
                <div id="ProjectCardInformation">
                    <h4>{this.props.data.title}</h4>
                    <h6>{this.props.data.description}</h6>
                    <div id="ProjectCardInformationTechnologies">
                        {this.props.data.technologies.map(t => (
                            <button type="button" tabindex="-1" class="btnCustom btnCustom-outline-warning">{t}</button>
                        ))}
                    </div>
                </div>
                <div id="ProjectCardLinkBox">
                    
                </div>
                <div id="ProjectCardImage">
                    <img src={require("../../IMG/ProjectImages/" + this.props.data.imgPath)} />
                </div>
                
            </div>
        )
    }
    
}
export default ProjectList;

/*
    <FontAwesomeIcon icon={faGithub} id="ProjectCardLink" alt="Martin Johannes Nilsen's GitHub"/>
*/