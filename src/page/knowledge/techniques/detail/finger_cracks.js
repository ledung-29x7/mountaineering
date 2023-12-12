import React from "react";
import '../../../css/dt.css';
import Related_articles from "../../../../components/Related_articles";
import ReactPlayer from "react-player";
import img1 from '../../../../img/knowledge/techniques/finger_cracks/1.avif'
import img2 from '../../../../img/knowledge/techniques/finger_cracks/2.avif'
import img3 from '../../../../img/knowledge/techniques/finger_cracks/3.avif'
import img4 from '../../../../img/knowledge/techniques/finger_cracks/4.avif'

const finger_cracks =()=>{
    const posts =[
        {
            pic:"/techniques/intro/9.avif",
            title:"Crevasse Rescue Skills",
            intro:"Rescue skills are critical in mountaineering. As you’re traveling on glaciated terrain,.......",
            pages:"/Crevasse-Rescue-Skills"
        },
        {
            pic:"/techniques/intro/10.avif",
            title:"Getting Started Crack Climbing" ,
            intro:"A crack that runs up a cliff face presents an obvious line to follow while climbing........",
            pages:"/Getting-Started-Crack-Climbing"
        },
        {
            pic:"/techniques/intro/11.jpeg",
            title:"How to Build Anchors for Climbing" ,
            intro:"A climbing anchor is a system made up of individual anchor points that are linked together to create a master point .......",
            pages:"/How-to-Build-Anchors-for-Climbing"
        },
    ]
    return(
        <div className="test">
            <h1>How to Climb Finger Cracks</h1>
            <img className="img_bv" src={img1}></img>
            <p>If you have basic crack climbing technique but are ready to step it up to the next level, it’s time to learn how to climb a finger crack. This article teaches you the basics of finger crack climbing, including finger jams, ringlocks and footwork.</p>
            <ReactPlayer url='https://www.youtube.com/watch?v=jzdgWsbGbMc&t=61s' width="100%" playing={false} controls={true}></ReactPlayer>
            <h2>Finger Jams</h2>
            <p>For cracks that are smaller than hand size, finger jams are the answer. You create finger jams by inserting some or all of your fingers into a crack, ideally to the second or third knuckle, and lock them off on a constriction in the crack or rotate your elbow down to torque your fingers into a jam. Think of a key going into a lock: You insert and twist.</p>
            <img className="img_bv" src={img2}/>
            <p>
                To find the best finger jam you’ll need to experiment with placing different fingers in the crack. A crack that is too small to fit your index and middle finger might fit your pinkie and ring finger perfectly.
            </p>
            <p>
                To get your index and middle finger into the crack try placing your fingers in with your hand in a thumb-down position. If the crack is too small to fit those fingers, turn your hand thumb up and insert your pinkie and ring finger. 
            </p>
            <p>
                When a finger crack starts to get a little wider, try what’s called a ringlock to make a secure jam.
            </p>
            <h3>Ringlock technique:</h3>
            <ul className="ul_li">
                <li>
                    Touch the tips of your thumb and index finger together to make an “OK” sign
                </li>
                <li>
                    Insert the finger-circle into the crack with your elbow up
                </li>
                <li>
                    Stack additional fingers on top of your index finger until you meet the width of the crack
                </li>
                <li>
                    Bring your elbow down to lock the jam into place
                </li>
            </ul>
            <img className="img_bv" src={img3}/>
            <img/>
            <h2>footwork</h2>
            <img className="img_bv" src={img4}/>
            <p>
                Finger-size cracks require fancy footwork. If the crack is wide enough, turn your foot so your big toe is up and try to get your toes in. You can also press your foot straight onto the crack and smear your foot on the edges of the crack, relying mostly on friction to create the foothold.
            </p>
            <p>
                Remember to look for holds outside the crack; face holds can be essential to climbing up a finger crack.
            </p>

             {/* related articles */}
             <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default finger_cracks ;