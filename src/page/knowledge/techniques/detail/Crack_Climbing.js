import React from 'react';
import '../../../css/dt.css';
import ReactPlayer from 'react-player';
import Related_articles from '../../../../components/Related_articles';
import img1 from '../../../../img/knowledge/techniques/Crack_Climbing/1.avif';
import img2 from '../../../../img/knowledge/techniques/Crack_Climbing/2.avif';
import img3 from '../../../../img/knowledge/techniques/Crack_Climbing/3.avif';
import img4 from '../../../../img/knowledge/techniques/Crack_Climbing/4.avif';
import img5 from '../../../../img/knowledge/techniques/Crack_Climbing/5.avif';
import img6 from '../../../../img/knowledge/techniques/Crack_Climbing/6.avif';
import img7 from '../../../../img/knowledge/techniques/Crack_Climbing/7.avif';
const CrackClimbing = () =>{
    const posts=[
        {
            pic:"/techniques/intro/11.jpeg",
            title:"How to Build Anchors for Climbing" ,
            intro:"A climbing anchor is a system made up of individual anchor points that are linked together to create a master point .......",
            pages:"/How-to-Build-Anchors-for-Climbing"
        },
        {
            pic:"/techniques/intro/12.avif",
            title:"How to Belay" ,
            intro:"Typically, every roped climber clinging to a rock face or gym wall has a partner performing a critical role on the ground........",
            pages:"/How-to-Belay"
        },
        {
            pic:"/techniques/intro/13.webp" ,
            title:"Avalanche Rescue Overview" ,
            intro:"Anyone who enjoys winter recreation and ventures beyond carefully managed environments (like ski resorts) needs to be both avalanche aware and rescue ready........",
            pages:"/Avalanche-Rescue-Overview"
        }
    ]
    return(
        <div className='test'>
            <h1>Getting Started Crack Climbing</h1>
            <img className='img_bv' src={img1}></img>
            <p>A crack that runs up a cliff face presents an obvious line to follow while climbing. However, figuring out how to climb a crack can be challenging, especially if you’re new to crack climbing.</p>
            <p>Fundamental to all crack climbing is jamming. Jamming means inserting your hands, feet or limbs into a crack and expanding or torqueing them to create a secure hold. Jamming can be difficult and sometimes painful, but it’s often the only way to climb a crack. With practice, your technique will improve, as will the fun factor.</p>
            <h2>Preparing to Crack Climb</h2>
            <img className='img_bv' src={img2}></img>
            <p>Remove jewelry: It’s smart to take off your rings, watches and bracelets whenever you climb, but it’s especially important when you crack climb. Rough rocks will quickly scratch everything up when you jam your hand in a crack and rings can get caught and cause serious damage to your fingers.</p>
            <p>Tip: Put your rings on a necklace made from a piece of 2–3mm accessory cord.</p>
            <p>Tape your hands: Even with the best technique, if you’re doing lots of crack climbing, you’re going to get scraped up. You can use 1.5 in. wide athletic tape to make tape gloves. These help protect your hands from the inevitable scrapes and let you jam a little harder in a crack. If you’re a beginner, you’ll find this especially helpful as you learn just how hard you need to jam.</p>
            <p>If you’ll be climbing finger-size cracks, you may want to tape around your knuckles. To do this, rip the tape into 0.75 in. strips and wrap the strips around each knuckle several times.</p>
            <h2>Hand Jams</h2>
            <p>Hand jams are generally the easiest type of jam and they’re very secure. Regardless of your hand size, a crack that is about 2 in. wide is typically the right size for hand jams.</p>
            <h3>Video: How to Jam Hand Cracks</h3>
            <ReactPlayer url='https://youtu.be/l4EzbCLfUkc' width='100%' playing={false} controls={true} ></ReactPlayer>
            <h3>How to Hand Jam</h3>
            <p>To make a hand jam, you need to insert your hand into a crack and expand and torque your hand to lock it into place. This can feel weird and painful at first, but with practice you’ll realize that a solid hand jam is one of the most secure holds you’ll find.</p>
            <h4>Hand jam technique:</h4>
            <ul className='ul_li'>
                <li>Insert your hand into the crack</li>
                <li>Cup your hand</li>
                <li>Squeeze your thumb into your palm. (For tight hand cracks, press your thumb into the side of your index finger)</li>
            </ul>
            <p>The squeezing action is what expands your hand and creates the jam. Your fingertips, heel of the palm and the back of your hand will all be in contact with the rock.</p>
            <img className='img_bv' src={img3}></img>
            <p>For wide hand cracks: Twist your hand to fill the space and cam it into place. It usually works best to twist your right hand clockwise and your left hand counterclockwise, regardless of whether your hands are thumbs-up or thumbs-down.</p>
            <p>Where to place a hand jam: Find a constriction in the crack. Slot your wrist into the constriction so that the meaty part of your palm rests on the top of the constriction. This alone will create a fairly secure jam. Cupping your hand and squeezing your thumb will increase the power of the jam.</p>
            <p>Keep it quiet: Once you’ve found a good hand jam, keep your hand from shifting around inside the crack. Lots of movement can scrape up your hand.</p>
            <h2>Foot Jams</h2>
            <img className='img_bv' src={img4}></img>
            <p>Conveniently, a crack that’s sized for hand jams will also readily accept your feet.</p>
            <h4>Foot jam technique:</h4>
            <ul className='ul_li'>
                <li>Bend one knee and turn it outward (your pinkie toe will be turned down toward the ground)</li>
                <li>Insert your toes into the crack with the sole of the shoe touching the side of the crack</li>
                <li>Bring your knee back in line with your body</li>
                <li>Smear your foot into the crack</li>
            </ul>
            <p>Done properly, a foot jam is very secure. You don’t need to put your entire foot into the crack; instead, try inserting your toes to about the ball of your foot. Also, be careful not to torque your foot more than necessary. Over-jamming your foot can really hurt.</p>
            <p>To remove your foot: Reverse the process. Move your knee out to the side, relax the ankle and pull your foot out of the crack.</p>
            <h4>Foot jam tips:</h4>
            <ul className='ul_li'>
                <li>While it’s tempting to insert a foot horizontally into a hand crack and step down, this can sometimes get your foot stuck because the crack is too narrow.</li>
                <li>Don’t forget to look outside the crack for features to put your feet on. You don’t have to rely solely on the crack.</li>
            </ul>
            <h2>Climbing up a Crack</h2>
            <p>Straight cracks: Combine hand and foot jams in an alternating sequence (e.g. right foot, right hand, left foot, left hand). Move efficiently through the moves by swinging your arms in a windmill fashion into the next hand jams. You’ll generally find that inserting your hands with your thumbs up will put you in the most natural and efficient position.</p>
            <p>Curved cracks: For a right-curving crack, it often works best to position your right hand in a thumbs-down position above your left hand, which is in a thumbs-up position. As you make your way up the climb, continue to lead with your right hand, shuffling it along rather than bringing one hand over the other. Reverse this technique for a left-curving crack.</p>
            <p>Reach high: Generally when placing hand jams, you want to reach high. As you climb up and become level with a hand you’ll need to move your hand up.</p>
            <h2>Beyond Hand Jams</h2>
            <img className='img_bv' src={img5}></img>
            <p>Not every crack is sized perfectly for hands. Whether a crack fits just the tips of your fingers or your whole fist, remember that just as with hand jams, expansion and torque are key.</p>
            <h3>Finger Jams</h3>
            <p>For cracks smaller than hand size, finger jams are the answer. You create finger jams by inserting some or all of your fingers into a crack, ideally to the second or third knuckle, and lock them off on a constriction in the crack or by rotating your elbow down to torque your fingers into a jam.</p>
            <p>Footwork: Finger-size cracks require fancy footwork. If the crack is wide enough, turn your foot so your big toe is up and try to get your toes in. You can also press your foot straight onto the crack and smear your foot on the edges of the crack, relying mostly on friction to create the foot hold. Remember to look for holds outside the crack; face holds can be essential to climbing up a finger crack.</p>
            <h3>Video: How to Climb Finger Cracks</h3>
            <a href='https://youtu.be/jzdgWsbGbMc'></a>
            <h3>Fist Jams</h3>
            <p>Fist-size cracks require that you turn your hand so it is either palm up or palm down, make a fist and insert it into the crack. Pressing the outside edge of your index finger and thumb against one side of the crack and the outside edge of your pinkie finger on the other side creates the jam. Clenching your fist causes your hand to expand to lock the jam in place.</p>
            <p>As with hand jams, look for constrictions in the crack where you can slot your wrist with your fist above.</p>
            <img className='img_bv' src={img6}></img>
            <p>Footwork: Fist jams can be challenging, so you’ll need to make sure you use your feet well. The width of a fist-size crack often allows you to insert your foot straight in and stand up without having to worry about getting your foot stuck. You can also try inserting your foot into the crack and torqueing it like you would for a hand-size crack. Stiff shoes work well for climbing fist-size cracks.</p>
            <h3>Off-Width Jams</h3>
            <p>Dreaded by many climbers, off-width cracks are too wide for your hands but too narrow for your whole body.</p>
            <p>Climbing an off-width crack is rarely pretty and often includes grunting and groveling to get to the top. Arm bars, knee jams, heel-toe jams and hand stacking are just some of the advanced techniques you’ll need to employ.</p>
            <p>While climbers often avoid off-widths, know this: With practice the moves will get easier and you may even find you enjoy an off-width crack every now and then.</p>
            <h2>Shoes for Crack Climbing</h2>
            <img className='img_bv' src={img7}></img>
            <p>The right climbing shoes go a long way toward making crack climbing comfortable and fun.</p>
            <p>Go low-profile: Lace-up shoes are preferred for crack climbing because they have a slimmer profile than shoes with hook-and-loop strap closures. Generally, you want to size crack climbing shoes for all-day comfort and make sure your toes lay flat so they can slip into thin cracks. Shoes with some padding can make crack climbing more comfortable.</p>
            <p>Slipper-style shoes have an even slimmer profile than lace-up shoes, making them a good choice for very thin cracks.</p>
            <p>Stiffness: With a shoe that’s too soft, you’ll feel every sharp edge when you jam your foot. With a shoe that’s too stiff you won’t have enough sensitivity to stand on small edges or smear. Look for a shoe that strikes a balance. If you frequently climb hand-sized cracks and wider, shoes on the stiffer end of the spectrum will give you support to make the climbing easier and more comfortable.</p>
            <p>Most climbing shoes have low-cut ankles, however, some shoes are designed to cover the anklebones, providing protection for climbing wider cracks.</p>
             {/* related articles */}
             <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default CrackClimbing ;