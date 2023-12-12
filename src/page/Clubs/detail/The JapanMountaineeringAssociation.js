import img1 from "../../../img/clubs/The Japan Mountaineering Association/jp1.jpg";
import img2 from "../../../img/clubs/The Japan Mountaineering Association/jp2.jpg";
function TheJapanMountaineeringAssociation(){
    return (
        <div className="test">
            <h1>The Japan Mountaineering Association</h1>
            <img className="img_bv" src={img1} alt=""></img>
            <p>The Japan Mountaineering Association is a mountaineering organization in Japan. It was founded in 1930 and is the largest mountaineering organization in Japan1. The organization has proposed a new name, “Japanese Mountaineering Sport Climbing Association”, which aims to link traditional values of mountain climbing and modern competition climbing</p>
            <img className="img_bv" src={img2} alt=""></img>
        </div>
    );
}
export default TheJapanMountaineeringAssociation;