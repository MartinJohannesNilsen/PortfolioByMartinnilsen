import React, {Component} from "react";
import "../../CSS/AboutCard.css";
import portrait from '../../IMG/Portrett.JPG'


class AboutCard extends Component{
    render(){
        return(
            <div id="AboutCardContainer">
                <div id="AboutCardInfoBox">
                    <h1>Martin Johannes Nilsen</h1>
                    <p>Jeg er en 20 år gammel gutt i fra Rygge, Østfold. Startet på dataingeniørstudiet  ved NTNU i Trondheim rett etter vgs, for å oppsøke en utdanning innen IT.  Jeg er en motivert person som jobber godt både selvstendig og i team. Ser på meg selv som en utdadvent person, og er glad i å møte nye mennesker og bygge nettverk.</p>
                    <a href={process.env.PUBLIC_URL + '/media/Martin_Johannes_Nilsen_CV.pdf'} target="_blank"><button type="button" class="btn btn-outline-light btn-lg"> CV </button></a>
                    <a href="https://github.com/Martinnilsen99" target="_blank"><button type="button" class="btn btn-outline-light btn-lg"> GitHub </button></a>
                </div>
                <div>
                    <img id="AboutCardImage" src={portrait} alt="Portrait of Martin Johannes Nilsen" />
                </div>
                
            </div>
        )
    }
    
}
export default AboutCard;