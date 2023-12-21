import React from "react";
import Maps from "../../../components/maps";
import img1 from "../../../img/clubs/American Alpine Club/AAC1.jpeg";
import img2 from "../../../img/clubs/American Alpine Club/2.png";
import img3 from "../../../img/clubs/American Alpine Club/3.jpg";
import img4 from "../../../img/clubs/American Alpine Club/4.jpg";
import img5 from "../../../img/clubs/American Alpine Club/5.jpg";
import '../../css/dt.css'
function AAC(){
    return (
        <div className="test">
            <img className="img_bv" src={img1}></img>
            <li><strong>MISSION:</strong> To share and support our passion for climbing and respect for the places we climb.</li>
            <li><strong>VISION:</strong> A united community of competent climbers and healthy climbing landscapes. </li>
            <li><strong>AUDIENCE:</strong> Everyone who loves climbing.</li>
            <li><strong>CORE VALUES:</strong> Authoritative climbing information, knowledge and resources benefit and inspire us and future generations. Advocacy and leadership advance our climbing interests and promote conservation. Community and competency strengthen and embolden us to push our limits.</li>
            <h3>1. A brief history of the Club</h3>
            <p>Read Honorary President William Lowell Putnam's Speech on Club History: "A Great Many Years"</p>
            <img className="img_bv" src={img2}></img><br></br>
            <span>AAC founding member Fanny Bullock Workman.</span>
            <p>Established in 1902 by the nation's leading climbers and conservationists, The American Alpine Club promotes and preserves the climbing way of life. The Mission Statement reads: "We provide knowledge and inspiration, conservation and advocacy, and logistical support for the climbing community." The AAC evolved from a social club for elite adventurers located on the East Coast to a more centrally located Denver-area organization that actively participates in international dialogue about environmental policy, high altitude safety and medicine, innovation in alpine tools, clothing and survival technologies, sponsors expeditions, and investigates controversies in the world of exploration.</p>
            <p>John Muir (1838-1914), considered by some to be a founder of the wilderness preservation movement, was the American Alpine Club's second president (1908-1910). Four women, including Annie Peck (1850-1935) and Fanny Bullock Workman (1859-1925), were among the founding members, all of them trouser-wearing suffragettes and strong leaders. Peck was the first to summit Peru's 22,205' Mt. Huascaran in 1908. Workman, along with her husband William, was a Himalayan cartographer and explorer, and competed quite publicly with Peck for the women's altitude record.</p>
            <p>The AAC was associated through its officials and members with many significant American and International organizations, including the Appalachian Mountain Club, Sierra Club, Explorer's Club, Canadian Alpine Club and Alpine Club of Britain, and it was integral to the founding of the Union International des Associations d'Alpinism (UIAA) in 1930 and the Arctic Institute of North America in 1948. The AAC was central in the formation, in 1940, of the 10th Mountain Division of the U.S. Army, an elite division specializing in warfare in harsh alpine conditions.</p>
            <p>Starting with Muir, the club has held a central role in environmental conservation, developing relationships with the U.S. Forest Service and National Park Service to balance land use with preservation needs in addressing ethics, access, wilderness management, registration, huts, and roads. The AAC's Access committee, begun in the 1980s, spun off to become the Access Fund, a nation-wide non-profit focusing on keeping climbing areas open while supporting environmental protection. In 2006, the AAC, in concert with The Mountain Institute, founded the Alpine Conservation Partnership, an organization dedicated to protecting and restoring the world's alpine environments.</p>
            <p>The American Alpine Club, along with the National Geographic Society and the National Science Foundation, sponsored and participated in some of the most significant exploration of mountain regions in the world, including the 1939 summit attempt on K2, 1963 first American summit of Everest, and the 1966 summit of Antarctica's Mt. Vinson. Expeditions have been and continue to be negotiated to some of the most remote and politically inaccessible areas of the world in Pakistan, Nepal, China, South America, Cuba, and Russia, at times with the help of usefully placed AAC officials. For example, the AAC president from 1938-40 was James Grafton Rogers. In 1960, he was Undersecretary to the State Department and therefore able to coordinate collaboration between the State Department, U.S. Navy, and the AAC to plan an expedition to the Antarctic. AAC member and past official Mark Udall has served as the senior U.S. Senator from Colorado, and on the Committees for Armed Services and Energy and Natural Resources.</p>
            <h3>2. Awards</h3>
            <p>The American Alpine Club proudly presents yearly awards to those with outstanding achievements in conservation, climbing and mountaineering, mountain literature, and dedication to the Club.</p>
            <li><strong>Honorary Members</strong>- Honorary Membership is the highest award the AAC has to offer. It is given to those individuals who have had a lasting and highly significant impact on the advancement of the climbing craft. The AAC is proud to recognize the following individuals.</li>
            <img className="img_bv" src={img3}></img>
            <span>AAC Honorary Member Fred Beckey with Former President Mark Kroese</span>
            <li><strong>The Robert Hicks Bates Award</strong>- Robert Hicks Bates, a renowned explorer, alpinist, Peace Corps director and educator, accomplished numerous first ascents in Alaska and was a member of the American expeditions to K2 in 1938 and 1953. His literary contributions describing the K2 expeditions and his life of adventure in the mountains inspired young American climbers. He served the American Alpine Club in many capacities: member of the editorial board of the American Alpine Journal, Board member, President and Honorary President. Above all, he devoted his life to promoting the education and development of American youth through his years as a teacher at Phillips Exeter Academy, service with the Peace Corps, and other endeavors. To recognize his many contributions to American mountaineering and education of our nation's youth, the American Alpine Club established the "Robert Hicks Bates Award" for outstanding accomplishment by a young climber. It is to recognize a young climber who in the judgment of the selection committee has demonstrated exceptional skill and character in the climbing or mountaineering arts and has outstanding promise for future accomplishment.</li>
            <img className="img_bv" src={img4}></img>
            <span>2017 Bates Awardee Mason Earle.</span>
            <li><strong>The David Brower Conservation Award</strong>- David R. Brower, an active alpinist and member of the famed 10th Mountain Division with over seventy first ascents across the country, was a pioneer in the environmental movement in this country and abroad. He was twice nominated for the Nobel Peace Prize for his work in conservation. Brower was the first Executive Director of the Sierra Club, founder of Friends of the Earth, and serves as Chairman of Earth Island Institute. His commitment to conservation contributed substantially to the establishment of sound global environmental practices. Brower was a lifetime member of the AAC and served as the organization's Vice President from 1956-58. The David R.Brower Award, created in 1991, is an annual award recognizing leadership and commitment to preserving mountain regions worldwide. The awardee, whose active personal role deserves public recognition, has made an important difference as a pathfinder, innovator and on the ground contributor who has motivated others to take action.</li>
            <img className="img_bv" src={img5}></img>
            <span>Angelo Heilprin Citation Award Winners</span>
            <Maps name="American Alpine Club" ggmap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6134.348316236791!2d-105.223213!3d39.758198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b9acd8fba232b%3A0x94b1ee2161486d9f!2sAmerican%20Alpine%20Club%20Library!5e0!3m2!1svi!2sus!4v1702801785690!5m2!1svi!2sus"></Maps>
        </div>
    );
}
export default AAC;