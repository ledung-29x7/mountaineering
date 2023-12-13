import React from "react";
import '../../../css/dt.css';
import Related_articles from "../../../../components/Related_articles";
import img1 from '../../../../img/photos/sondoong/1.jpeg';
import img2 from '../../../../img/photos/sondoong/2.jpeg';
import img3 from '../../../../img/photos/sondoong/3.jpeg';
import img4 from '../../../../img/photos/sondoong/4.jpeg';
import img5 from '../../../../img/photos/sondoong/5.jpeg';
import img6 from '../../../../img/photos/sondoong/6.jpeg';
import img7 from '../../../../img/photos/sondoong/7.jpeg';
import img8 from '../../../../img/photos/sondoong/8.jpeg';
import img9 from '../../../../img/photos/sondoong/9.jpeg';



const hhen =()=>{
    const posts =[
        {
            pic:"./photos/1.jpeg",
            title:"Miss H'Hen Nie and her journey to explore Son Doong cave",
            intro:"H'Hen Niê's expedition covered a distance of more than 20km and lasted for 4 days with the presence of Howard Limbert - Head......",
            pages:"/Miss-HHen-Nie-and-her-journey-to-explore-Son-Doong-cave"
        },
        {
            pic:"./photos/2.webp",
            title:"How the Affinity Ice Climbing Clinic is Welcoming BIPOC Ice Climbers",
            intro:"Driving for hours through a winding canyon, we crested the ridge and then rose above the clouds....",
            pages:"/How-the-Affinity-Ice-Climbing-Clinic-is-Welcoming-BIPO-Ice-Climbers"
        },
        {
            pic:"./photos/3.webp",
            title:"How Climbing Holds are Made",
            intro:"Stone Age, the hold supplier for Touchstone climbing gyms, gives us a behind-the-curtain look at how holds are made.",
            pages:"/How-Climbing-Holds-are-Made"
        },
    ]
    return(
        <div className="test">
        <h1>Miss H'Hen Nie and her journey to explore Son Doong cave</h1>
        <img className="img_bv" src={img1}/>
        <p>H'Hen Niê's expedition covered a distance of more than 20km and lasted for 4 days with the presence of Howard Limbert - Head of the expedition of the Royal British Caving Association and members of the national park management board, forest rangers, foreign experts, two famous British photographers...</p>
        <img className="img_bv" src={img2}/>
        <p>As a person who loves exercise and likes to explore and learn about Vietnam's destinations, H'Hen Nie has carefully prepared for this trip. She has also trained herself physically. Practice skills to ensure health for the expedition in Son Doong cave.</p>
        <img className="img_bv" src={img3}/>
        <p>Formerly the Champion of The Amazing Race 2019, H'Hen Nie also has her own experiences, but the beauty must admit that exploring Son Doong cave requires a lot of physical strength and health.</p>
        <img className="img_bv" src={img4}/>
        <p>Every step must follow the instructions of experts and comply with all safety regulations when exploring. As a woman in the group, she must also proactively protect her own safety and not depend on it. rely on the help of other members.</p>
        <img className="img_bv" src={img5}/>
        <p>The trip started from Phong Nha to the entrance of En cave, the boys rested at En cave. H'Hen Niê was extremely excited to explore the stream inside the cave. She shared that although Dak Lak also has clear blue streams like this, she feels a very special comfort and health when she touches the water in the cave.</p>
        <img className="img_bv" src={img6}/>
        <p>"Right now, Hen really feels the smallness of humans in front of the majestic nature" - the beauty emotionally shared.</p>
        <img className="img_bv" src={img7}/>
        <p>In the following days, the group started to go to Son Doong. The road to Son Doong was extremely dangerous. H'Hen Nie had to overcome many underground streams, cliffs and especially high, slippery rocky slopes.</p>
        <img className="img_bv" src={img8}/>
        <p>When arriving at the "Garden of Eden" in the second Sink Hole - one of the extremely beautiful spots of Son Doong cave, Miss H'Hen Niê said she "felt satisfied and all the recent difficulties had disappeared." ”.</p>
        <img className="img_bv" src={img9}/>
        <p>H'Hen Niê confided: "This is truly a trip that makes Hen happy when she gets to touch the largest cave in the world. Through this trip, Hen has had very special experiences for herself and at the same time, Hen also wants to send a message to everyone: If you love nature and exploration, try setting foot once in Son Cave. Doong to feel the majesty that the Creator has bestowed on our country."</p>
          {/* related articles */}
          <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default hhen;