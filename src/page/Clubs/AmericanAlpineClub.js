import img1 from "./American Alpine Club/AAC1.jpg";
import img2 from "./American Alpine Club/AAC2.jpg";
import img3 from "./American Alpine Club/AAC3.jpg";
import img4 from "./American Alpine Club/AAC4.jpg";
import img5 from "./American Alpine Club/AAC5.jpg";
import "../PlacesInVietNam/style.css";
function AAC(){
    return (
        <body>
            <h1>American Alpine Club</h1>
            <img src={img1} alt=""></img>
            <p>The American Alpine Club (AAC) is a non-profit member organization with more than 24,000 members. Its vision is to create "a united community of competent climbers and healthy climbing landscapes." The club is housed in the American Mountaineering Center (AMC) in Golden, Colorado.</p>
            <img src={img2} alt=""></img>
            <p>Through its members, the AAC advocates for American climbers domestically and around the world; provides grants and volunteer opportunities to protect and conserve climbing areas; hosts local and national climbing festivals and events; cares for the nation's leading climbing library and mountaineering museum; manages the Hueco Rock Ranch, New River Gorge Campground, and Grand Teton Climbers' Ranch as part of a larger lodging network for climbers; and annually gives about $100,000 toward climbing, conservation, and research grants that fund adventurers who travel the world.</p>
            <img src={img3} alt=""></img>
            <p>It also maintains regional sections—with both regional staff and volunteers—throughout the United States.</p>
            <img src={img4} alt=""></img>
            <p>The AAC publishes two journals, The American Alpine Journal (AAJ) and Accidents in North American Mountaineering (Accidents), and a Guidebook to Membership annually. Collections of these journals, along with tens of thousands of other climbing-related publications and mountaineering literature, can be found in the Henry S. Hall Jr. American Alpine Club Library, also located in the AMC.</p>
            <img src={img5} alt=""></img>
            <p>The AAC is a 501(c)(3) organization supported by gifts and grants from individuals, corporations and foundations, member dues, and income from lodging, publications and restricted endowments.</p>
        </body>
    );
}
export default AAC;