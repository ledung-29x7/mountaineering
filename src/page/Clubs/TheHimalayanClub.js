import img1 from "./The Himalayan Club/THC1.jpg";
import img2 from "./The Himalayan Club/THC2.jpg";
import img3 from "./The Himalayan Club/THC3.jpg";
import img4 from "./The Himalayan Club/THC4.jpg";
import img5 from "./The Himalayan Club/THC5.jpg";
import "../PlacesInVietNam/style.css";
function TheHimalayanClub(){
    return (
        <body>
            <h1>The Himalayan Club</h1>
            <img src={img1} alt=""></img>
            <p>The Himalayan Club is an organization founded in India in 1928 along the lines of the Alpine Club.</p>
            <img src={img2} alt=""></img>
            <p> The club’s objective is to encourage and assist Himalayan travel and exploration, and to extend the knowledge of the Himalaya and adjoining mountain ranges through science, art, literature, and sport. </p>
            <img src={img3} alt=""></img>
            <p>The club has libraries in Mumbai, New Delhi, Kolkata, and Pune, which have a strong knowledge base in the form of books, maps, expedition reports, publications, and experienced explorers and mountaineers as its members.</p>
            <img src={img4} alt=""></img>
            <p>The club publishes an annual journal called The Himalayan Journal which is the most authentic record of Himalayan mountaineering activity since 1929. All members of the club receive the journal and are encouraged to contribute to it in different ways.</p>
            <img src={img5} alt=""></img>
            <p>The club has set up annual awards in the field of mountaineering and mountain literature in memory of certain prominent members. The awards include the Kekoo Naoroji Book Award for the best book on the Himalaya, and the Jagdish Nanavati Award for Excellence in Mountaineering for an Indian expedition that follows criteria laid out and submits a report that matches the defined guidelines.</p>
        </body>
    );
}
export default TheHimalayanClub;