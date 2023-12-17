import React from "react";
import Maps from "../../../components/maps";
import img1 from "../../../img/clubs/The New Zealand Alpine Club/nz1.png";
import img2 from "../../../img/clubs/The New Zealand Alpine Club/nz2.jpg";
function TheNewZealandAlpineClub(){
    return(
        <div className="test">
            <h1>The New Zealand Alpine Club</h1>
            <img className="img_bv" src={img1} alt=""></img>
            <p>The New Zealand Alpine Club (NZAC) was founded in 1891 and is one of the oldest alpine clubs in the world. The NZAC is the national climbing organization in New Zealand and is a member of the Union Internationale des Associations d’Alpinisme. It has over 4000 members who are spread across twelve sections, eleven in New Zealand and one in Australia, plus members in other countries</p>
            <img className="img_bv" src={img2} alt=""></img>
            <Maps name='The New Zealand Alpine Club' ggmap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8162158154323!2d172.6534622762976!3d-43.54787278297816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189fbb2d4b501%3A0x9e734f7106a181ec!2sNew%20Zealand%20Alpine%20Club%20Inc.!5e0!3m2!1svi!2sus!4v1702802394648!5m2!1svi!2sus"></Maps>
        </div>
    );
}
export default TheNewZealandAlpineClub;