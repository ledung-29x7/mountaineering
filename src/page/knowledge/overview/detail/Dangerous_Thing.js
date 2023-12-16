import React from 'react'
import '../../../css/dt.css';
// import img1 from '../../../../img/knowledge/overview/7.webp'
// import img2 from '../../../../img/knowledge/overview/8.webp'
// import img3 from '../../../../img/knowledge/overview/9.webp'
import Related_articles from '../../../../components/Related_articles';

const Dangerous_Thing = () =>{
    const posts = [
        {
            "pic" : "/overview/intro/2.jpeg",
            "title" : "History techniques",
            "intro" : "The history of various climbing and mountaineering techniques stretches as ......",
            "pages": "/history"
        },
        {
            "pic":"https://i.pinimg.com/564x/fe/1a/85/fe1a853917af43f54f8d2a1630796733.jpg",
            "title":"Climbing Is F’in Dangerous. Here’s How to Stay Safe In the Red Zone.",
            "intro":"Understand danger to stay out of out of harm’s way",
            "pages" : "/Climbing-Is-F’in-Dangerous"
        },
        {
            "pic":"/overview/intro/3.webp",
            "title":"Communication when climbing",
            "intro":"The most common form of communication during mountaineering is simply calling with the voice....",
            "pages": "/communication"
        },
    ]
    return(
            <div className='test'>
            <h1>The Most Dangerous Thing About Bouldering (Isn’t What You Think)</h1>
            <p style={{fontStyle: 'italic', textAlign: 'center'}}>An experience on the purple boulder problem at the gym altered the author's life course in an unexpected way.</p>
            {/* <img className='img_bv' src={img1}></img> */}
            <p>I still remember the problem that changed my life: a purple-tape “advanced-minus” in the Arena bouldering cave at the Boulder Rock Club (BRC), Colorado. Twelve years ago now, autumn 2010—a lifetime, nearly a generation. It’s rare that you remember plastic problems unless they stand out for their quality or bizarre movement. The problems are transient, you do them and move on, and you never pay them another thought. Really, this one was no different.</p>
            <p>Until it was.</p>
            <p>The Arena is tall, the lip of the wall topping out at 18 feet. The padding below is ample, but still, if you whiff a dyno high up or going for the lip, you’ll feel the impact in your back and knees, especially if don’t know how to stunt roll. More than once, I’ve jumped down from below the lip rather than make a pumped, barely controlled leap. Twenty years ago, I’d have gone for it more implicitly; now, not so much.</p>
            <p>Back in 2010 gyms were still using setting tape, and this problem had purple grips plus purple tape. The BRC resets the Arena once a month, on a Friday morning, and the wall is popular that afternoon and the weekend after. I climbed at the Arena the Saturday morning after a reset, with the grips still fresh. Purple tape stood out for its aggressive sideways lunge-and-match to a sloping jug about 10 feet up: a hold that looked like “Grimace,” the plump, grape-hued character from the McDonald’s commercials—an even shittier, proto-Barney. If you missed the leap or stalled on Grimace then swung off, your momentum carried you sideways, making for big, spectacular “Superman” falls. Advanced minus is usually an approachable grade (roughly V2­–V3) for most climbers, but this one felt harder than normal, though I’m pretty sure I stuck Grimace on my first try.</p>
            <p>My wife, though, not so much.</p>
            <p>My phone rang that afternoon, while I was at home working, probably writing some book that nobody would ever read.</p>
            <p>“I think I hurt my ankle bouldering at the BRC,” my wife said. She’d gone bouldering after me, after running some errands in town. “I’m OK, but I’m driving home now.”</p>
            <p>“Wait, what? You hurt your ankle but you’re driving?”</p>
            <p>“Yeah. I limped out to the parking lot and got in my car, but it really hurts to weight my foot.”</p>
            <p>“Are you OK?”</p>
            <p>“I think so. I’m not sure. Maybe?”</p>
            <p>“Want me to come get you?”</p>
            <p>“No. I’m already halfway home. I’ll be there in five minutes.”</p>
            <p>I met Kristin in the parking lot by the pool at our condominiums and helped her hobble inside. She posted up on the couch, her leg elevated on pillows, while I got ice and our 85-pound hound dog, Clyde, licked her hand, sensing her distress.</p>
            <p>“How did you fall?” I asked, bringing an ice pack over. “What happened?”</p>
            <p>“I missed a dyno,” she said. “And I fell weird—like, sideways. And just landed wrong.”</p>
            <p>“Was it the one with purple tape, on the right side of the wall?” I asked. “That thing was heinous.”</p>
            <p>“Yes!” she said, her eyes lighting up. “How did you know?”</p>
            <p>“Because I almost missed that lunge too. And I remember thinking, ‘I really, really don’t want to miss this lunge.’”</p>
            <p>“Well, I missed it.”</p>
            <p>“Shit,” I said.</p>
            <p>“Shoot,” Kristin said.</p>
            <p>These days, whether I’ve worked all day or been out climbing, there is a guaranteed one hour of chores at the day’s end—though most days, it’s two.</p>
            <p>It doesn’t matter how fried I am from work, or pumped or weather-beaten or buzzing (from a rare send) from climbing. The chores need to happen. No. Matter. What. This is my wife’s and my reality in a three-child household, not to mention the dog and the two cats we’ve somehow accrued, with their various needs. Laundry needs to be run and then folded; the dishwasher needs to be loaded and then emptied; the diaper pail and recycling need to be taken out; lunchboxes need to be emptied, cleaned, and reloaded for the next day; clothes and shoes need to be picked up off the floor and put in their proper places; toilets need  scrubbed and the floors vacuumed; groceries need ordered and then untold bags of provisions put away; dinner needs to be made and the table set, then bused, then my wife and I need to make sure homework and piano and violin practice are happening in a timely and organized fashion, all in the few precious hours before bedtime, when the kids are often tired, cranky, and bickering with each other as only siblings can.</p>
            {/* <img className='img_bv' src={img2}></img> */}
            <p>That’s just the baseline stuff. Then, there are the unforeseen incidents and the incidentals.</p>
            <p>One day some years ago, when my older son was potty training and his younger brother was still in diapers, I kept trying to get us out the door to a local family-fun center to play video games. However, what should have been a 10-minute pack-and-go departure turned into an hour-long debacle, in which each brother, alternately, kept either soiling his underwear or filling a diaper: back and forth, over and over. Another time, my younger son was sitting on the potty and accidentally dropped a toy airplane in there; the cost to remove it, and not have our upstairs bathroom flooding with sewage, was $250. The brothers have put so may dings in the doors, paint, and drywall roughhousing and hitting each other with plastic swords that I no longer notice and have given up on fixing the damage until the kids settle down, not to mention the curtain rods, window screens, and screen doors that seem to only last a day or two in a pristine, functional state. The noise levels in our house are rock concert–level, and the only time my kids don’t run up and down the stairs, vibrating the frame of our home and sending the cats skittering under the furniture, is when they’re sick (and poised to transmit whatever virus they picked up to Mom and Dad). In fact, it’s so chaotic at our house that most of my climbing partners, when we’re carpooling, prefer to pick me up outside like an Uber driver. And I can’t say I blame them.</p>
            <p>As you might imagine, all this leaves Kristin and I exhausted, as parents of young children so often are. But I wouldn’t trade it for anything—I love my kids dearly. When my boys come up and spontaneously hug me and say, “I love you, dada,” or when my daughter toddles over and asks with her big blue eyes and little pink hands and trademark, all-purpose word “Mombi” to sit in my lap and share my dinner salad, I feel as joyful as if I’d just clipped the chains on a year-long project. Parenting is not for everyone, and it’s rarely compatible with climbing your best or having the money, time, and freedom to travel, but this is my life now and I do my best to embrace the dual realities of being a father and a climber. (Kristin has more or less stopped climbing to devote herself to motherhood, having been more of a self-described “gym bunny” in the first place—a casual.)</p>
            {/* <img className='img_bv' src={img3}></img> */}
            <p>So how did you get here? you’re probably wondering. And what the hell does this have to do with climbing—and purple tape? Well, everything and nothing. You see, when Kristin fell way back in 2010, she broke her talus bone; her injury turned out to be no mere sprain, but a complicated, potentially crippling break, likely made worse by her driving home from the Boulder Rock Club, working the pedals in her stick-shift Honda CRV. Fortunately, her surgery went well, but in the aftermath, while healing and with her leg immobilized, she developed a blood clot. This required blood thinners, and her doctor advised her to stop taking birth control while on the thinners. And, well, you can see where I’m headed…</p>
            <p>Our first child was born in November 2011, our second in 2014, our third last year. I mean, once you have one kid, you may as well have another, and once you have two, you may as well have three, and so on. And so, here we are. So, thank you, purple tape. You have shown me just how dangerous bouldering can be. It’s not just flappers, tweaked fingers, knees, and shoulders, and rolled ankles we have to worry about; it’s so much more. In fact, it’s everything.</p>
            <p style={{fontStyle: 'italic'}}>Matt Samet is a freelance writer and editor based in Boulder, Colorado.</p>

            {/* related articles */}
            <Related_articles posts={posts}></Related_articles>
            </div>
    )
}
export default Dangerous_Thing ;
