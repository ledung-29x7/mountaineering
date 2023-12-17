import img1 from "../../../img/clubs/The Alpine Club/1.PNG";
import img2 from "../../../img/clubs/The Alpine Club/2.jpg";
import img3 from "../../../img/clubs/The Alpine Club/3.webp";
import '../../css/club_css.css';
function TheAlpineClub(){
    return (
        <div className="test">
            <h1>The Alpine Club</h1>
            <div className="logoACC"><img className="logo" src={img1} alt=""></img></div>
            <h3>1. A brief history of the Club</h3>
            <h5>1.1. History</h5>
            <p>The Alpine Club was founded on 22 December 1857 by a group of British mountaineers at Ashley's Hotel in London. The original founders were active mountaineers in the Alps and instrumental in the development of alpine mountaineering during the Golden Age of Alpinism (1854–1865). E. S. Kennedy was the first chairman of the Alpine Club but the naturalist, John Ball, was the first president. Kennedy, also the first vice-president, succeeded him as president of the club from 1860 to 1863. In 1863, the club moved its headquarters to the Metropole Hotel.</p>
            <div className="float"><img src={img2}></img><br></br>
            <span>Title page from Peaks, Passes, and Glaciers, 1859, edited by John Ball, first president of the Alpine Club</span>
            </div>
            <p>The Alpine Club is specifically known for having developed early mountaineering-specific gear including a new type of rope. The goal was to engineer a strong and light rope that could be carried easily. A committee of the club tested samples from suppliers and prepared a specification in the early 1900s. The official Alpine Club Rope was then made by John Buckingham of Bloomsbury. It was made from three strands of manila hemp, treated to be rot proof and marked with a red thread of worsted yarn.[5] From the 19th century British mountaineers and members of the Alpine Club were instrumental in the popularisation of mountainteering in Norway among the international mountaineering community, with William Cecil Slingsby's influential book, Norway, the Northern Playground. The Alpine Club was the role model of the Norwegian Alpine Club, the third oldest of its kind worldwide.</p>
            <p>The present Alpine Club members remain extremely active in the Alps and the Greater Ranges, as well as in mountain arts, literature and science.</p>
            <p>For many years it had the characteristics of a London-based Gentlemen's club, including a certain imprecision in the qualification for membership (said to have been 'A reasonable number of respectable peaks'). Until 1974, the club was strictly for men only, but in 1975, within months of membership being opened to women, a merger with the Ladies' Alpine Club was agreed, and the Club thus gained about 150 new members.[6] By the last quarter of the 20th century, the club had evolved into Britain's senior mountaineering club, with a clear qualification for membership, for both men and women, and an 'aspirant' grade for those working towards full membership. However, it still requires prospective members to be proposed and seconded by existing members.</p>
            <h5>1.2. The Mission of the Alpine Club</h5>
            <p><strong>Our Vision:</strong> "The Alpine Club exists to facilitate access to and exploration of the mountainous regions of the world; provide a forum for members to meet, climb and share information, both internally and with the wider mountaineering community; support mountain arts, science and literature; act as a thought leader in mountain ecology, access and sustainability; and provide a platform for international collaboration."</p>
            <p>The AC promotes a code of climbing ethics which seeks to protect mountains, mountain regions and their people from any harmful impact by climbers. The club is globally recognized as influential on these issues. Your membership will add to the weight of influence that we can bring to bear and allows you a voice.</p>
            <img src={img3}></img>
            <span>Members of the Alpine Club</span>
            <h3>2. Awards</h3>
            <p>Volunteers are the heart and soul of The Alpine Club of Canada. Season to season, day in and day out for over a century, our volunteers run the sections, write articles, lead trips, protect the alpine environment and demonstrate their commitment to the club.</p>
            <p>Our volunteers know the mountains. Every season, and in every part of Canada, volunteer trip leaders take enthusiastic groups and new members on climbing, hiking and skiing outings. Sometimes for an afternoon and sometimes for weeks at a time. Our volunteers are skilled, dedicated, giving and tireless. Without them there is simply no Alpine Club.</p>
            <p>The ACC Volunteer Awards are intended to recognize those of our members who have made significant contributions in furthering the aims and goals of The Alpine Club of Canada and Canadian mountaineering in general. These Awards are one small way that we hope to show them our appreciation.</p>
        </div>
    );
}
export default TheAlpineClub;