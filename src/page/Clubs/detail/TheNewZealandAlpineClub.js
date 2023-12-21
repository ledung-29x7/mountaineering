import React from "react";
import Maps from "../../../components/maps";
import img1 from "../../../img/clubs/The New Zealand Alpine Club/1.jpg";
import img2 from "../../../img/clubs/The New Zealand Alpine Club/2.jpg";
import img3 from "../../../img/clubs/The New Zealand Alpine Club/3.jpg";

function TheNewZealandAlpineClub(){
    return(
        <div className="test">
            <h1>The New Zealand Alpine Club</h1>
            <img className="img_bv" src={img1} alt=""></img>
            <h3>1. A Brief History of The Club</h3>
            <p>The New Zealand Alpine Club (NZAC) was founded in 1891 and is one of the oldest alpine clubs in the world. The NZAC is the national climbing organisation in New Zealand and is a member of the Union Internationale des Associations d'Alpinisme. It has over 4000 members who are spread across twelve sections, eleven in New Zealand and one in Australia, plus members in other countries. It runs a national office based in Christchurch.</p>
            <p>The NZAC was founded on 28 July 1891 at Warner's Commercial Hotel in Christchurch. Leonard Harper (Christchurch) was voted as the inaugural chairman in absentia; he had left for England on 25 July (and while away, it was discovered that he had embezzled money; hence he did not return). Frederick Hutton (Christchurch), Edward Sealy (Timaru), Malcolm Ross (Dunedin), and John Holland Baker (Wellington) were the inaugural vice-presidents. Arthur Paul Harper, Leonard Harper's son, was the inaugural secretary and treasurer.</p>
            <p><strong>Strategy: </strong>The Board is responsible for delivering an NZAC Strategic Plan. The Plan describes where we want to go, how we want to get there and creates measures to know if we’ve been successful. The current plan was confirmed in September 2020 and has a 5 year life span.</p>
            <p><strong>Club Purpose: </strong>Encourage mountaineering, rock climbing and allied activities, and the enjoyment and conservation of mountain regions, bring together those interested in climbing, do anything necessary or helpful for the above purposes.</p>
            <h3>2. Awards</h3>
            <h5>2.1. Bill Denz Award</h5>
            <p><strong>Bill Denz</strong> (1951-1983) was a true iconoclast. His short but spectacular climbing career had a transformational effect on the progression of hard climbing in Aotearoa New Zealand during the 1970s and early 80s. Born in London to a New Zealand father and English mother, Denz moved to Dunedin with his family when he was two. He started going into the mountains with the Otago Tramping Club and in 1969 he joined the New Zealand Army to normalize his life after an unsettled childhood. In Waiouru, he used all his leave to further develop alpine skills on Mt Ruapehu. A very successful three weeks of climbing at Aoraki/Mount Cook over the summer of 1970-71 culminated with a solo Grand Traverse of Aoraki in early 1971. A few months later, Denz quit the army to return to Dunedin where he took up study at Otago University and climbed whenever he could. Over the next four years, Denz climbed numerous cutting edge first ascents in the Mount Cook region and on untouched big walls in the Darrans. Climbs included the Balfour Face of Mt Tasman, solos of Mt Tasman, Dampier, Caroline Face, and the South Face of Aoraki and two homegrown-styled big wall climbs on the towering north faces of Marian and Sabre. First winter ascents included the South Face of Douglas, the South and North Faces of Hicks, the Sheila Face of Aoraki and the Balfour Face.  </p>
            <img src={img2}></img>
            <p>Never satisfied, Denz moved to California in 1978 to improve his rock climbing and gain big wall experience. In Yosemite, he made early repeats of Excalibur and Pacific Ocean Wall on El Capitan. The following year he spent five months in Patagonia attempting Cerro Torre. Persistent storms ended his 13th and final attempt 80 metres below the summit. In 1980, Denz moved to Alaska, where he made the first ascent of the coveted East Face of Kitchatna Spire with Scott Woolums. Solo expeditions to the Himalaya followed. The first ascent and traverse of Kusum Kanguru and two attempts on the unclimbed Menlungtse. In Europe, a planned winter solo of the North Wall of the Eiger was only stalled by bad weather.</p>
            <img src={img3}></img><br/>
            <span>Bill Denz Trophy (featuring one of Bill's own cams)</span>
            <Maps name='The New Zealand Alpine Club' ggmap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8162158154323!2d172.6534622762976!3d-43.54787278297816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189fbb2d4b501%3A0x9e734f7106a181ec!2sNew%20Zealand%20Alpine%20Club%20Inc.!5e0!3m2!1svi!2sus!4v1702802394648!5m2!1svi!2sus"></Maps>
        </div>
    );
}
export default TheNewZealandAlpineClub;