import React from "react";
import Maps from "../../../components/maps";
import img1 from "../../../img/clubs/American Alpine Club/AAC1.jpeg";
import img2 from "../../../img/clubs/American Alpine Club/AAC2.jpeg";
import img3 from "../../../img/clubs/American Alpine Club/AAC3.jpg";
import img4 from "../../../img/clubs/American Alpine Club/AAC4.jpg";
import img5 from "../../../img/clubs/American Alpine Club/AAC5.jpg";
import '../../css/dt.css'
function AAC(){
    return (
        <div className="test">
            <h1>American Alpine Club</h1>
            <img className="img_bv" src={img1} alt=""></img>
            <p>The American Alpine Club (AAC) is a non-profit member organization with more than 24,000 members. Its vision is to create "a united community of competent climbers and healthy climbing landscapes." The club is housed in the American Mountaineering Center (AMC) in Golden, Colorado.</p>
            <img className="img_bv" src={img2} alt=""></img>
            <p>Through its members, the AAC advocates for American climbers domestically and around the world; provides grants and volunteer opportunities to protect and conserve climbing areas; hosts local and national climbing festivals and events; cares for the nation's leading climbing library and mountaineering museum; manages the Hueco Rock Ranch, New River Gorge Campground, and Grand Teton Climbers' Ranch as part of a larger lodging network for climbers; and annually gives about $100,000 toward climbing, conservation, and research grants that fund adventurers who travel the world.</p>
            <img className="img_bv" src={img3} alt=""></img>
            <p>It also maintains regional sections—with both regional staff and volunteers—throughout the United States.</p>
            <img className="img_bv" src={img4} alt=""></img>
            <p>The AAC publishes two journals, The American Alpine Journal (AAJ) and Accidents in North American Mountaineering (Accidents), and a Guidebook to Membership annually. Collections of these journals, along with tens of thousands of other climbing-related publications and mountaineering literature, can be found in the Henry S. Hall Jr. American Alpine Club Library, also located in the AMC.</p>
            <img className="img_bv" src={img5} alt=""></img>
            <p>The AAC is a 501(c)(3) organization supported by gifts and grants from individuals, corporations and foundations, member dues, and income from lodging, publications and restricted endowments.</p>
            <Maps name="American Alpine Club" ggmap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6134.348316236791!2d-105.223213!3d39.758198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b9acd8fba232b%3A0x94b1ee2161486d9f!2sAmerican%20Alpine%20Club%20Library!5e0!3m2!1svi!2sus!4v1702801785690!5m2!1svi!2sus"></Maps>
        </div>
    );
}
export default AAC;