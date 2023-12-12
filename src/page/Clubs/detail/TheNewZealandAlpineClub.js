import img1 from "../../../img/clubs/The New Zealand Alpine Club/nz1.png";
import img2 from "../../../img/clubs/The New Zealand Alpine Club/nz2.jpg";
function TheNewZealandAlpineClub(){
    return(
        <div className="test">
            <h1>The New Zealand Alpine Club</h1>
            <img className="img_bv" src={img1} alt=""></img>
            <p>The New Zealand Alpine Club (NZAC) was founded in 1891 and is one of the oldest alpine clubs in the world. The NZAC is the national climbing organization in New Zealand and is a member of the Union Internationale des Associations d’Alpinisme. It has over 4000 members who are spread across twelve sections, eleven in New Zealand and one in Australia, plus members in other countries</p>
            <img className="img_bv" src={img2} alt=""></img>
        </div>
    );
}
export default TheNewZealandAlpineClub;