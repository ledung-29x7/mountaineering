import React from "react";
import '../../../css/dt.css';
import Related_articles from "../../../../components/Related_articles";
import img1 from '../../../../img/photos/GreatestClimbing/1.webp';
import img2 from '../../../../img/photos/GreatestClimbing/2.webp';
import img3 from '../../../../img/photos/GreatestClimbing/3.webp';
import img4 from '../../../../img/photos/GreatestClimbing/4.webp';
import img5 from '../../../../img/photos/GreatestClimbing/5.webp';
import img6 from '../../../../img/photos/GreatestClimbing/6.webp';
import img7 from '../../../../img/photos/GreatestClimbing/7.webp';



const GreatestClimbing =()=>{
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
        <h1>Greatest Climbing Photos of 2021</h1>
        <img className="img_bv" src={img1}/>
        <img className="img_bv" src={img2}/>
        <p>Nicolas Favresse and the stonker rock of Ulan Bator (7B+/V8+), Rocklands, South Africa. “This kind of image,” says the photographer Jan Novak, “makes me dream about traveling far, meeting new people, and drinking beer as the sun sets after a day of discovering new sectors.”</p>
        <img className="img_bv" src={img3}/>
        <p>The Cathedral Quarries above Little Langdale in England’s Lake District are owned and managed by the National Trust, which keeps the “crag” open for climbing. Quarryman’s Arête is one gem hidden within the earth, and is seen here being established by Adam Hocking, with Will Jackson holding the cord. The route earned a rating of XS, an unconventional UK grade, as the climb has just a single bolt at two-thirds height and doesn’t fit within the normal rating system. The closest estimate to a Yosemite Decimal System rating would be 5.12.</p>
        <img className="img_bv" src={img4}/>
        <p>The pandemic closed many climbing gyms, forcing enterprising climbers like Łukasz Kudła outside last winter to climb on local rocks, such as the Komoniecki Cave in Poland’s Outer Carpathians. “After more than 60 minutes of approach, we were still shivering, and it was hard to warm up,” says the photographer Piotrek Deska. “Maybe it wasn’t a perfect climbing day, but I went home happy.”</p>
        <img className="img_bv" src={img5}/>
        <p>Mark McGivern on Thriller (23/5.11c), one of the few quality multi-pitch climbs established on Mount Brown in South Australia by the prolific new-router Garry Phillips. The line, on the Hidden Face, is committing: Once you rappel in, you either climb out or swim. The latter option is unappealing, as the route faces the great Southern Ocean, which stretches unbroken for thousands of miles to Antarctica.</p>
        <img className="img_bv" src={img6}/>
        <p>Caterina Maiullari on Omo de Panza Sit (7B/V8), Pietra del Toro, Campomaggiore, Basilicata, Italy. Maiullari, 27, from Apulia, Italy, began climbing five years ago, and is the first Southern Italian woman to climb 8A/V11. “Climbing to me is a need, beyond just a passion,” says Maiullari. “It helps me to channel and filter out emotions. It may sound surreal, but climbing is the only thing that helps me to meditate and live happily: If I’m angry, climbing calms me down; if I’m happy, climbing excites me; if I’m sad, it uplifts me. Climbing keeps my heart and mind awake, even in [tough times] when everything else seems to fall apart.”</p>
        <img className="img_bv" src={img7}/>
        <p>Shae McCarl, age 13, grapples with pitch one of Heinous Cling (5.12a), Smith Rock, Bend, Oregon. “I love crimpy faces, so Heinous Cling is one of my favorite routes at Smith,” says McCarl. “It’s also the first lead route I ever climbed outside, so it’s an extra-special climb for me.”</p>
        <p>Peñón del Fraile, Gibacoa, Cuba. First and only sector in Cuba so far that includes beach and climbing a perfect combination. This climbing area gave rise to the national sport climbing competition in Cuba 2020. Climber Adrián Pérez (Bad Trip 5+) Photo: Jorge Luis Pimentel</p>
        <p>Nina Caprez and the edging testpiece Tough Enough (8c/5.14b; 1,200 feet), East Face of Karambony, Tsaranoro Valley, Madagascar. When you first get on the face, it looks like a “perfectly smooth wall, no holds anywhere to be seen,” says Caprez. But then miniscule grips appear, and every move becomes “a slow and subtle shift in balance.” Photo: Jan Novak</p>
        <p>The photographer Leo Zhukov had a vision: He wanted to show the uncluttered geometry of an indoor wall, but no gym would let him strip all the holds. Then he heard about The North Wall, under construction in Saint Petersburg, Russia. There, he could perform his magic. “I decided to make a shot in the darkness, and to mark out the edges and lines of the wall with light,” he says. You can see the result as Ania Pirania climbs the gym’s first-ever route. Photo: Leo Zhukov</p>
          {/* related articles */}
          <Related_articles posts={posts}></Related_articles>
        </div>

    )
}
export default GreatestClimbing;