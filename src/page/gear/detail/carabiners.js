import React from "react";
import '../../css/dt.css';
import img1 from '../../../img/gear/carabiners/1.jpeg'
import img2 from '../../../img/gear/carabiners/2.jpeg'
import img3 from '../../../img/gear/carabiners/3.jpeg'
import img4 from '../../../img/gear/carabiners/4.jpeg'
import img5 from '../../../img/gear/carabiners/5.jpeg'
import img6 from '../../../img/gear/carabiners/6.jpeg'
import img7 from '../../../img/gear/carabiners/7.jpeg'
import img8 from '../../../img/gear/carabiners/8.jpeg'
import img9 from '../../../img/gear/carabiners/9.jpeg'
import img10 from '../../../img/gear/carabiners/10.jpeg'
import img11 from '../../../img/gear/carabiners/11.jpeg'
import img12 from '../../../img/gear/carabiners/12.jpeg'
import img13 from '../../../img/gear/carabiners/13.jpeg'
import img14 from '../../../img/gear/carabiners/14.jpeg'


const carabiners =()=>{
    return(
        <div className="test">
            <h1>Which types of carabiners are used for climbing?</h1>
            <p>Carabiners are used in a wide variety of situations. This is why there are so many different types available. New models are introduced to the market every year. Locking carabiners, non-locking carabiners, non-load-bearing accessory carabiners, quickdraw carabiners, HMS carabiners, screwgates, twistlocks... sometimes it's hard to keep track. There are three main types of carabiner: </p>
            <h3>1. non-load-bearing (accessory) carabiners, 2. basic or normal carabiners (often referred to as non-locking carabiners) and 3. locking carabiners.</h3>
            <img className="img_bv" src={img1}></img>
            <p>You'll see all kinds of weird and wonderful carabiners. For example, heart-shaped, animal-shaped etc. These nonload-bearing carabiners come in all shapes and sizes. Many of them are intended for use as ornaments only, i.e. on your key ring or the zip on your backpack. However, you can also use them to attach your chalk bag or climbing shoes to your harness or to secure a bottle to your rucksack. Please note: as the name clearly implies – non-loadbearing carabiners must never be used for climbing. They are not certified as personal protective equipment (PPE) against falling. As such, non-load-bearing accessory carabiners do not have to conform to a standard or undergo special batch testing.</p>
            <img className="img_bv" src={img2}></img>
            <p>Ice screw clips are a special type of non load-bearing carabiner. When climbing ice or mixed routes in winter, you often need to carry a large selection of ice screws for protection. Ice screw clips are essential for securely storing these sharp pieces of equipment on your harness and keeping them close to hand. Other types of carabiners are not as effective; the ice screws would be difficult to clip or unclip from your harness and they would get in the way. Many climbing harnesses have dedicated ice screw clip attachment points. Just to reiterate: never use a carabiner for personal protection unless it conforms to EN standard 12275 or 362. Other carabiners are non load-bearing carabiners. This applies to ice screw clips too.</p>
            <img className="img_bv" src={img3}></img>
            <h3>NORMAL CARABINERS (PPE)</h3>
            <p>Normal carabiners are basic connectors with a gate, but no gate locking mechanism. Generally, they're used in quickdraws. They can be purchased either separately or as a quickdraw set. Normal carabiners (aka basic carabiners) handle more easily than a locking carabiner, but are also easier to open accidentally. In situations where ease and speed of clipping and unclipping are more important than additional security provided by a locking gate, use a normal carabiner. Please note: only use normal carabiners in quickdraws or a redundant system.</p>
            <img className="img_bv" src={img4}/>
            <p>Normal carabiners come with straight (aka standard) or bent gates. Bent gates simplify clipping the rope into the quickdraw by helping to gently guide the rope in. However, use straight gates for clipping into bolts. The straight gate prevents the carabiner from getting caught in the bolt.</p>
            <img className="img_bv" src={img5}/>
            <p>Wire gate carabiners are an alternative to solid gate carabiners. Wire gate carabiners have three important advantages:</p>
            <p>
                1.wire gates tend to freeze up less makes them ideal for use in even the most extreme conditions.
            </p>
            <p>
                2.the gate is thinner and therefore lighter
            </p>
            <p>
                3.the lighter wire gate also reduces any whiplash effect on the gate (aka gate lash). More about whiplash effect later, in "Risks and Dangers".
            </p>
            <p>
                Wire gate carabiners also have a disadvantage due to their shape, or more specifically, their nose. Allow us to explain.
            </p>
            <h3>Carabiner nose design (Nose vs. Keylock)</h3>
            <p>Not everyone knows that the nose design of a carabiner also determines its strength. Carabiners are designed to be loaded lengthwise with the gate closed. In general, gate-open strength is less than half than when the gate is fully closed. There are two main forms of carabiner nose design. Older carabiners often have a hooked nose which the wire gate snaps into. Newer normal carabiners are mainly designed with the key lock closure system (sometimes called a "clean nose"). Instead of a hooked nose, there is also a T-shape design; the "key" on the end of the milled nose snaps into the correspondingly milled "lock" in the gate, like a jigsaw piece. Wire gate carabiners mainly have a nose design.</p>
            <p>The notch and the hooked nose design has a significant disadvantage. Gear such as slings, webbing, or wire can easily snag on the hooked nose (aka nose-hook) and prevent the carabiner from closing properly. This is particularly dangerous as carabiners with a hooked nose and notch design can get caught in a bolt. This dramatically reduces their strength. If loaded during a fall, fall energy acts like a lever on the open carabiner and can bend it or in the worst case break it altogether. So when clipping a carabiner with a nose notch: always check that it has closed fully and can't snag. In this respect, the key lock system has a big advantage</p>
            <img className="img_bv" src={img6}/>
            <h2>LOCKING CARABINERS</h2>
            <p>Locking carabiners do exactly what they say on the tin. They're available with a range of different locking mechanisms. In situations where a failing carabiner in the safety chain would have serious consequences, they are particularly important. Always use locking carabiners for belaying, abseiling, roping up on glaciers and at building belays. Locking carabiners with less complex opening mechanisms are also used in quickdraws to provide extra protection. New, innovative designs hit the market every year.</p>
            <p>Locking carabiners offer maximum safety and yet need to remain easy to handle. This is where the differentlocking mechanisms come in.</p>
            <p>Locking carabiners fall into two main groups: manual locking and auto-locking (aka self-closing or self-locking) carabiners. As you might expect, manual locking carabiners have a manual locking mechanism which you have to actively close. Auto-locking carabiners are self closing, and shut automatically as soon as you release the gate.</p>
            <img className="img_bv" src={img7}/>
            <h3>Manual locking carabiners</h3>
            <p>You have to actively close carabiners with a manual locking mechanism (e.g. screwgates). When it comes to handling, this makes them slower than auto-locking carabiners. Yet, manual locking carabiners have their advantages. For example, at a belay stance. If you've not closed the locking mechanism, you can use a manual locking carabiner like a normal snap gate carabiner. Whereas auto-locking carabiners have to be released, opened and held open for every new element to be added.</p>
            <img/>
            <p>To lock a screwgate, close the gate and do it up by tightening the internally threaded sleeve, by twisting it up the thread. This then locks the screwgate. Always check that you've done it up properly. It's also recommended to twist the barrel back half a turn to ensure that it's not over- tightened and that you can still open it. Check that the threaded sleeve runs smoothly, as only then will it be possible to operate the carabiner with one hand. To open a screwgate, twist the sleeve back down again. Take care when using a screwgate as an HMS carabiner to belay a partner with an Italian hitch. In certain situations, the knot can run over the screwgate and open it. Always check that the braking rope is running correctly on the back bar side of the carabiner. When mountaineering and in particular when roping up on glaciers, it is recommended to use an auto-locking carabiner rather than a screwgate. This is because the vibrations from walking can slowly cause a screwgate to open.</p>
            <img className="img_bv" src={img8}/>
            <p>The Belay Master has a guard that additionally secures the screwgate locking mechanism. Like all screwgates, you first have to close the carabiner manually. Once the sleeve has been tightened, the large plastic guard is snapped into place. The guard prevents the screwgate from opening accidentally. This makes the Belay Master ideal for use as an HMS carabiner or for roping-up on glaciers. The plastic guard also prevents the carabiner from twisting and holds it in correct alignment. This position prevents cross-loading. It's possible to close a Belay Master with one hand, but this takes time and requires practice. To open the gate, release the guard, and then unscrew the locking sleeve. Please note: the Belay Master is not suitable for use with certain tubular belay devices and tubular devices with assisted braking. The plastic guard may prevent certain belay devices from pivoting freely. This applies in particular to semi-automatic belay devices (e.g. Eddy).</p>
            <h3>AUTOMATIC LOCKING GATES</h3>
            <p>Automatic locking carabiners (aka safelock carabiners or safebiners) have a spring-loaded gate mechanism that shuts automatically as soon as you release it. The internal spring in this type of carabiner ensures that the gate locks automatically and remains closed. This makes them quick to handle and ensures they immediately lock. However, you do have to completely unlock the gate before you can open the carabiner again.</p>
            <img className="img_bv" src={img9}/>
            <p>Twist-lock carabiners have a twisting sleeve. You have to open them by turning the sleeve by approximately 90° before you can open the gate. With a bit of practice though, twist-lock carabiners are easy to use. The same as with screwgates, care is needed when using carabiners with a twist-lock gate for belaying with an Italian hitch. This is because if the rope is positioned wrongly, it can unintentionally open the gate.</p>
            <img className="img_bv" src={img10}/>
            <p>EDELRID developed a slider gate locking system for carabiners which locks quickly and is easy to use with one hand. You slide back the small bar on the outside of the gate to open it. Because it's so simple to open, this type of carabiner is ideal for all situations where you need to quickly and safely clip a locking carabiner. We also use it in our quickdraws for this reason. Slider carabiners are easy to handle and offer greater safety than normal carabiners. As there is no threaded sleeve, slider carabiners can also rotate freely. Most other carabiners with sleeves often get caught in bolts. This means that slider carabiners prevent the risk of snagging in a bolt or belay device and prevent potential cross-loading. In addition, carabiners with a slider gate locking mechanism are significantly lighter than other locking carabiners.</p>
            <img className="img_bv" src={img11}/>
            <p>Triple-lock carabiners require three separate actions to open the carabiner. There are two different types: push-and-twist and pull-and-twist. You either move the sleeve up (push) or down (pull) and then twist it to unlock it and open the gate. This offers extra safety compared to standard twist-lock carabiners. Hoever one-handed operation is pretty difficult and requires practice.</p>
            <img className="img_bv" src={img12}></img>
            <p>Ball-lock carabiners are a special type of triple-lock carabiner. You press in the ball on the sleeve before you can turn it. This unlocks the ball-lock sleeve. With a bit of practice, ball-lock carabiners are easy to use.</p>
            <img className="img_bv" src={img13}/>
            <img className="img_bv" src={img14}/>
            <p>These carabiners combine a slider gate locking mechanism with an internal spring bar. As such, they have two completely automatic locking mechanisms which are completely independent from one another. The carabiner will only open when both the spring bar is pushed up and the slider mechanism is released. Opening the spring bar on its own, or releasing the slider on its own is not sufficient to open the gate. As it is deliberately complicated to combine both movements, these carabiners are very safe. In addition, the spring bar holds the carabiner in the correct position and ensures that it cannot be cross-loaded. The extra safety makes this type of carabiner ideal for use with most belay devices, for belaying with an Italian hitch and for roping up on glaciers. Yet, some tubular belay devices with assisted braking should not be used with this type of carabiner. This is because they get caught on the carabiner's inner spring bar which prevents their assisted braking function. The downside to the enormous very high level of safety that sliders with a safelock offer is that the combination of slider plus safelock is difficult to open with one hand.</p>

        </div>
    )
}
export default carabiners ;