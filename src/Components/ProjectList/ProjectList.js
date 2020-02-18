import React, {Component} from "react";
import "../../CSS/ProjectList.css";
import "../../CSS/customBootstrap.css"
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab } from '@material-ui/core';
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';


class ProjectList extends Component{
    render(){
        return(
            <div id="ProjectListContainer">
                <h2 id="ProjectListTitle">{this.props.data.projectsTitle}</h2>
                <hr id="ProjectListTitleUnderline" />
                {this.props.data.projects.slice(0).reverse().map(project => (
                    <ProjectCard data={project} linkButtonText={this.props.data.linkButtonText}/>
                ))}
            </div>
        )
    }
    
}

class ProjectCard extends Component{
    render(){

        function checkIfHosted(data, linkButtonText){
            const isHosted = data.hasOwnProperty('linkToWebsite');
            if(isHosted){
                return (
                    <div>
                        <button onClick={() => window.open(data.linkToWebsite, '_blank')} tabindex="0" type="button" class="btn btn-dark btn-sm ProjectCardLinks" aria-labelledby="Link to this project's website">
                            <FontAwesomeIcon id="FaButtonIconLarge" icon={faDesktop} alt="Desktop icon"/>
                            <a id="AboutCardContactInfoTextLeft" >{linkButtonText[1]}</a>
                        </button>
                    </div> 
                );
            }
            return null
        }

        return(
            <div class="ProjectCardContainer" tabindex="0">
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
                    <div>
                        <button onClick={() => window.open(this.props.data.linkToGitHub, '_blank')} tabindex="0" type="button" class="btn btn-dark btn-sm ProjectCardLinks" aria-labelledby="Link to this project's Github">
                            <FontAwesomeIcon id="FaButtonIconLarge" icon={faGithub} alt="GitHub icon"/>
                            <a id="AboutCardContactInfoTextLeft">{this.props.linkButtonText[0]}</a>
                        </button>
                    </div> 
                    {checkIfHosted(this.props.data, this.props.linkButtonText)}
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