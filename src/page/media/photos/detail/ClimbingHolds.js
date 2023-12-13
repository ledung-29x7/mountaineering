import React from "react";
import '../../../css/dt.css';
import Related_articles from "../../../../components/Related_articles";
import img1 from '../../../../img/photos/ClimbingHolds/1.webp';
import img2 from '../../../../img/photos/ClimbingHolds/2.webp';
import img3 from '../../../../img/photos/ClimbingHolds/3.webp';
import img4 from '../../../../img/photos/ClimbingHolds/4.webp';
import img5 from '../../../../img/photos/ClimbingHolds/5.webp';
import img6 from '../../../../img/photos/ClimbingHolds/6.webp';
import img7 from '../../../../img/photos/ClimbingHolds/6.webp';
import img8 from '../../../../img/photos/ClimbingHolds/6.webp';

const ClimbingHolds =()=>{
    const posts =[
        {
            pic:"./photos/3.webp",
            title:"How Climbing Holds are Made",
            intro:"Stone Age, the hold supplier for Touchstone climbing gyms, gives us a behind-the-curtain look at how holds are made.",
            pages:"/How-Climbing-Holds-are-Made"
        },
        {
            pic:"./photos/4.jpeg",
            title:"France: Land of Wine, Cheese, and Beautiful, Rarely Visited Crags",
            intro:"France’s geologic wonders are as breathtaking as they are limitless, from the limestone precipices of the Verdon Gorge to the sandstone blocs of Fontainebleau­...",
            pages:"/France-Land-of-Wine-Cheese-and-Beautiful-Rarely-Visited-Crags"
        },
        {
            pic:"./photos/5.jpeg",
            title:"Greatest Climbing Photos of 2021",
            intro:"the photographer Jan Novak, “makes me dream about traveling far, meeting new people, and drinking beer as the sun sets after a day of discovering new sectors.” ",
            pages:"/Greatest-Climbing-Photos-of-2021"
        },
    ]
    return(
        <div className="test">
        <h1>How Climbing Holds are Made</h1>
        <img className="img_bv" src={img1}/>
        <p>Modern climbing gyms are works of art, and the holds adorning the walls are the stars of the show. Stone Age, the hold supplier for Touchstone climbing gyms, gives us a behind-the-curtain look at how holds are made.</p>
        <strong>Stage: Shape</strong>
        <img className="img_bv" src={img2}/>
        <p>Shapers saw blocks of artist’s foam into smaller sizes, then progress from rough to precise cuts using a variety of tools. They may remove large amounts of material to start, but they eliminate less and less foam with each cut as the hold takes shape. Shapes are finished using sandpaper or bare hands. Shapers dial in the final form and feel of the hold, loosely grabbing it how they intend it to be used. Attention is paid to every detail, from the anticipated angle of the climber’s fingers when she grabs the final hold to the edges of the bolt hole.</p>
        <strong>Stage: Mold</strong>
        <img className="img_bv" src={img3}/>
        <p>Next a mold for the newly shaped hold is framed. Makers will put the shaped hold into the frame and then pour silicone around it which creates a mold. Legos are a colorful and versatile option to create these frames. Mold makers estimate the necessary height of the frame in relation to the size of the holds. Make the mold too thin and it won’t hold up to multiple pourings; make it too thick, and it wastes expensive silicone. As such, a few corners are cut in the final frame to save material. Walls are taped to ensure smooth faces and easy removal.</p>
        <strong>Stage: Pour</strong>
        <img className="img_bv" src={img4}/>
        <p>After the molds are finished, workers in gas masks and lab coats pour liquid urethane into them to make the holds. Pourers have about eight minutes to empty a bucket before the urethane starts to set. Small voids are added to the back of larger holds to save material and weight. The material is pricey, and heavy holds are difficult to attach to the wall—and dangerous if they come loose.</p>
        <img className="img_bv" src={img5}/>
        <p>Hold please: Urethane, the main ingredient in artificial climbing holds, sets in hand-built molds.</p>
        <strong>Stage: Unmold</strong>
        <img className="img_bv" src={img6}/>
        <p>The urethane sets for 30 minutes before being pulled from the molds. Timing is critical. Unmold too soon, and the holds will lose their shape; unmold too late, and the holds may adhere to the molds, both resulting in an unusable product. After pulling from the molds, they are left to cure for at least four hours and often overnight.</p>
        <strong>Stage: Finish</strong>
        <img className="img_bv" src={img7}/>
        <p>Each hold is sanded to remove excess material. The backs of the holds are leveled and any “tags” on the perimeter of the hold are removed to facilitate bolting to the climbing wall.</p>
        <img className="img_bv" src={img8}/>
        <p>Holds are drilled so that routesetters can easily and securely bolt the holds to the wall. Finally, finished holds are cleaned and racked, where they wait to be boxed and shipped to their gyms.</p>
          {/* related articles */}
          <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default ClimbingHolds;