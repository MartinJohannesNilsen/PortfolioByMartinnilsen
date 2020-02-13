import React, {Component} from "react";
import "../../CSS/ProjectList.css";


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
                </div>
                <div id="ProjectCardLinks"></div>
                <div id="ProjectCardImage">
                    <img src={require("../../IMG/ProjectImages/" + this.props.data.imgPath)} />
                </div>
                
            </div>
        )
    }
    
}
export default ProjectList;