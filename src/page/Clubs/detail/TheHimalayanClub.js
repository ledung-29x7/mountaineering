import React from "react";
import Maps from "../../../components/maps";
import img1 from "../../../img/clubs/The Himalayan Club/THC1.jpg";
import img2 from "../../../img/clubs/The Himalayan Club/THC2.jpg";
import img3 from "../../../img/clubs/The Himalayan Club/THC3.jpg";
import img4 from "../../../img/clubs/The Himalayan Club/THC4.jpg";
import img5 from "../../../img/clubs/The Himalayan Club/THC5.jpg";
function TheHimalayanClub(){
    return (
        <div className="test">
            <h1>The Himalayan Club</h1>
            <img className="img_bv" src={img1} alt=""></img>
            <p>The Himalayan Club is an organization founded in India in 1928 along the lines of the Alpine Club.</p>
            <img className="img_bv" src={img2} alt=""></img>
            <p> The club’s objective is to encourage and assist Himalayan travel and exploration, and to extend the knowledge of the Himalaya and adjoining mountain ranges through science, art, literature, and sport. </p>
            <img className="img_bv" src={img3} alt=""></img>
            <p>The club has libraries in Mumbai, New Delhi, Kolkata, and Pune, which have a strong knowledge base in the form of books, maps, expedition reports, publications, and experienced explorers and mountaineers as its members.</p>
            <img className="img_bv" src={img4} alt=""></img>
            <p>The club publishes an annual journal called The Himalayan Journal which is the most authentic record of Himalayan mountaineering activity since 1929. All members of the club receive the journal and are encouraged to contribute to it in different ways.</p>
            <img className="img_bv" src={img5} alt=""></img>
            <p>The club has set up annual awards in the field of mountaineering and mountain literature in memory of certain prominent members. The awards include the Kekoo Naoroji Book Award for the best book on the Himalaya, and the Jagdish Nanavati Award for Excellence in Mountaineering for an Indian expedition that follows criteria laid out and submits a report that matches the defined guidelines.</p>
            <Maps name='The Himalayan Club' ggmap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.939608471216!2d72.8248173859068!3d18.987326096644757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce61cf2d05e5%3A0x629e22d379588135!2sTurf%20Estate%2C%20315%2C%20Shakti%20Mills%20Ln%2C%20Mahalakshmi%2C%20Mumbai%2C%20Maharashtra%20400011%2C%20%E1%BA%A4n%20%C4%90%E1%BB%99!5e0!3m2!1svi!2sus!4v1702802189941!5m2!1svi!2sus"></Maps>
        </div>
    );
}
export default TheHimalayanClub;