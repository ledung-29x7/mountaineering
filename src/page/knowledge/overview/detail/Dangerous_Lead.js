import React from 'react'
import '../../../css/dt.css';
// import img1 from '../../../../img/knowledge/overview/4.webp'
// import img2 from '../../../../img/knowledge/overview/5.jpg'
// import img3 from '../../../../img/knowledge/overview/6.jpg'
import Related_articles from '../../../../components/Related_articles';

const Dangerous_Lead = () =>{
    const posts = [
        {
            "pic":"/overview/intro/7.webp",
            "title":"The Different Types Of Shelters Used By Mountaineers",
            "intro":"Because the weather conditions on mountains can change without notice, shelters can play a critical role in keeping climbers safe and protected.",
            "pages" : "/Types-Of-Shelters"
        },
        {
            "pic" : "/overview/intro/5.png",
            "title" : "Risk rating system",
            "intro" : "Cliffs and rocks which have ceased to be mere training locations and.......",
            "pages": "/rating"
        },
        {
            "pic":"/overview/intro/6.webp",
            "title":"Mountaineering",
            "intro":"In its original meaning the term “mountaineering” describes an activity leading ........",
            "pages" : "/mountaineering"
        },
    ]
    return(
            <div className='test'>
            <h1>The World’s Most Dangerous Lead</h1>
            <p style={{fontStyle: 'italic', textAlign: 'center'}}>Some climbs, we get up out of sheer stubbornness—or stupidity.</p>
            {/* <img className='img_bv' src={img1}></img> */}
            <h4>Some climbs, we get up out of sheer stubbornness—or stupidity.</h4>
            <p>There is no grace, no carefully applied strength or power, no precision footwork or strategy. There is only effort—the simple fact that, no matter what, you are not letting go. Protection (or lack thereof), fatigue, and conditions be damned; you are going to see this thing through. These ascents rarely leave us with that warm, post-send glow. You feel more like we got away with something.</p>
            <p>When I was 18, back in 1990, two friends and I established one of the first rappel-bolted routes on the granite of the upper Sandia Mountains, above Albuquerque, New Mexico. The climb, Completely Clueless, sits below the 10,000-foot Sandia Crest on the Techweeny Buttress, a small cliff just off the La Luz Trail. At the convergence of the sheer south and west faces is a blunt arête, climbed via the thin, old-school Crankenstein (5.11—ahem, modern 5.12a), at the time protected by quarter-inch buttonheads drilled ground-up, though relatively close together. The wall is perched high in a ponderosa forest, cool breezes washing across its flanks, steep, rugged, complex canyons unfolding to the cholla- and piñon-studded foothills below, the grid of the city humming in the distance.</p>
            <p>Two friends, Lance and Johnny, and I had done Crankenstein in late spring of that year and remarked on the potential for a couple of even more grievous slabs on the water-washed pink rock to its left. Crankenstein, with its matchstick edges, had terrified me; I’d ended up taking a hang on the onsight and very nearly bursting into tears, so disappointed was I with my lack of courage but also just straight-up stressed. (Johnny: “Dude, are you crying?” Me: “No…I’m not sure. Maybe…No. Why?”) I’m not certain why I returned to this wall, other than there just wasn’t much else to climb on, especially during the hot New Mexico summer.</p>
            {/* <img className='img_bv' src={img2}></img> */}
            <p>Two friends, Lance and Johnny, and I had done Crankenstein in late spring of that year and remarked on the potential for a couple of even more grievous slabs on the water-washed pink rock to its left. Crankenstein, with its matchstick edges, had terrified me; I’d ended up taking a hang on the onsight and very nearly bursting into tears, so disappointed was I with my lack of courage but also just straight-up stressed. (Johnny: “Dude, are you crying?” Me: “No…I’m not sure. Maybe…No. Why?”) I’m not certain why I returned to this wall, other than there just wasn’t much else to climb on, especially during the hot New Mexico summer.</p>
            <p>Tap, tap, twist; tap, tap, twist; tap, tap, twist. So it goes when you’re hand-drilling, a tedious, repetitive sequence that cramps and blisters your mitts. We took turns with the hammer and drill, spelling each other, even with the miserly four bolts the route ended up with. Our goal was to put in hardware that would last, and drilling 3/8”-diameter holes 3 inches deep in the compact granite was taking 30 or 45 minutes per hole, leaving us knackered, shredding our soft, city-boy palms.</p>
            <h3>More Great Stories By Matt Samet</h3>
            <p>It was my job to drill the final bolt, the first clip on the climb. I batmanned up while Jeff sat on the rope, the cord tied off in his Tuber belay device with a stopper knot. Tap, tap, twist; tap, tap, twist; tap, tap, twist. So it went for about 20 minutes until, unexpectedly, Tap, tap, twist, SNAP! The drill bit had bound up in the hole, and when I went to twist it I must have applied too much force, because the handle separated, leaving the bit stuck in the rock.</p>
            <p>“Shit, sorry, dude,” I said to Adam, whose drill kit we’d been using. “I think I broke your drill!”</p>
            <p>“You’re too strong for your own good, youth,” he joked. “What were you doing up there?”</p>
            <p>“Just drilling,” I said.</p>
            <p>“Now what?” Jeff asked. “We were basically almost done.”</p>
            <p>I used to be able to recall every hold on every route I’d done, but as the decades—and climbs—accrue that no longer holds true, both for the sheer volume of climbing I’ve done and for the fact that memory fades. I had to look up the Mountain Project description for Completely Clueless, and apparently it’s a sandbag at 5.12- (it’s more like 5.12c), with a 30-foot runout on 5.10 and 5.11 slab past the four bolts to reach the anchor, though with a couple pieces of gear. To me, it sounds like the kind of climb I’d assiduously avoid today; it sounds like a sketchy nightmare.</p>
            {/* <img className='img_bv' src={img3}></img> */}
            <p>But that day, I really, really wanted to lead it. I don’t know why—perhaps to redeem myself for weeny-ing out on Crankenstein, for being a real, well, Tech-weeny on the eponymous buttress. I could have gone home with a toprope ascent, and we were going to have to come back another day to get the bit out and finish drilling the bolt anyway. But for whatever reason—call it stubbornness—I had to lead the climb that instant.</p>
            <p>“I suppose you could,” Adam said. “If you really wanted to… I mean, we’re here.”</p>
            <p>Jeff pointed out that we could rig the rope so it was pre-clipped up through the second bolt, which solved the problem of not having the first bolt installed. But there remained the whole matter of the bit, which protruded a good four inches from the rock.</p>
            <p>“You can’t really fall,” said Adam, and he was right. A slip off the cruxy terrain passing the second and third bolts would deposit me squarely in the vicinity of the bit, which, if I hit it wrong, could shatter my ankle or fillet my leg. I’d need my belayer to either arrest me short, slamming me into the slab, or drop me past the bit, a dodgy proposition with the uneven staging area below. In the end, it didn’t matter—I didn’t fall. My movement was gripped, staccato, and artless, but it got me through, all while I eyed that lethal spike of metal protruding beneath my feet, glinting evilly in the sun.</p>
            <p>Yesterday I redpointed a 35-meter pitch in the cold, a dream line on perfect Kentucky sandstone, chalk dotting the pockets, dimples, and iron-rock creases that made the gently overhanging route just barely possible, the blotches stark white against the grey-green rock, drawing the climber’s eye. I was low blood sugar and sleep-deprived, my arms cramping with vasoconstriction from the icy holds and fatigue from two days in a row of climbing. But I did the route anyway, climbing well past the point where I probably should have let go or fallen, climbing up then down then back up into cruxes, sweating, groaning, fighting for every last hold, my footwork poor, my composure shot, bullying my way through on desire alone. I wasn’t sure when—or if—I’d be back, and it was now or never.</p>
            <p>Will overcame (lack of) skill, and I clipped the chains, relieved, almost happy, having pictured a phantom drill bit protruding from the wall always 15 feet below, reminding me that “The leader must not fall.”</p>
            <p style={{fontStyle: 'italic'}}>Matt Samet is a freelance writer and editor based in Boulder, Colorado.</p>

            {/* related articles */}
            <Related_articles posts={posts}></Related_articles>
            </div>
    )
}
export default Dangerous_Lead ;
