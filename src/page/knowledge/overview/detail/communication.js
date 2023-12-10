import React from 'react'
import '../../../css/dt.css';
import img1 from '../../../../img/knowledge/communication/bodan.jpeg'
import Related_articles from '../../../../components/Related_articles';

const communication = () =>{
    const posts = [
        {
            pic : "https://www.psychi.co.uk/cdn/shop/articles/Screenshot_2022-01-18_at_12.56.31.jpg?v=1690555081&width=1790",
            title : "History techniques",
            intro : 'One of today’s predominant forms of mountaineering. The defining feature for classification in thi.......',
            pages: '/types'
        },
        {
            pic : "https://magazine.washington.edu/columns_wordpress/wp-content/uploads/2017/06/MOUNTAINEERS-PSD.jpg",
            title : "History techniques",
            intro : 'The history of various climbing and mountaineering techniques stretches as ......',
            pages:'/history'
        },
        {
            pic:"https://cdn.climbing.com/wp-content/uploads/2016/05/directvoicejpg.jpg?width=730",
            title:"Communication when climbing",
            intro:'The most common form of communication during mountaineering is simply calling with the voice....',
            pages: '/communication'
        },
    ]
    return(
            <div className='test'>
            <h1>Communication when climbing</h1>
            <h3 >Voice communication during the ascent</h3>
            <p>The most common form of communication during mountaineering is simply calling with the voice. Members of a rope team in the majority of cases do not separate from each other to greater distances than a rope length (approx. 50 m), and therefore loud calling suffices completely. The commands chosen must be clear, unmistakable, and loud. Surprisingly, the most frequent problems are with loudness. While it may seem unbelievable, among new people interested in mountaineering there are many who first have to learn how to shout out loud, as they had not previously cultivated within themselves the ability to “shout words”. They either shout inarticulately, or simply “whisper out loud”. Another common mistake is that they don’t shout in the direction of the other person. If the climbers can see each other and maintain eye contact, the caller will mostly reach the other person. But once the other person is beyond the horizon and the climbers don’t see each other, it can seem that the caller is simply shouting somewhere aimlessly into the surrounding space. And yet when poorly directing the shout, its audibility significantly drops. So in conclusion – call loudly, clearly, understandably, and in the direction of the other person.</p>
            <h3 class="wp-block-heading">Basic commands</h3>
            <p>For certain situations certain basic commands have come about by custom, by which climbers mutually communicate what they’re doing or expecting.</p>
            <p>“Belay on!” – expresses the commencement of belaying activity; that is, that one climber is protecting the other from a fall, most often using rope.</p>
            <p>“Off belay!” – a command for terminating the belay: the climber is requesting for the other climber to stop belaying.</p>
            <p>“Up rope!” – an instruction to take in the belay rope.</p>
            <p>“Slack!” – an instruction to let out the belay rope.</p>
            <p>“Climb on!” – a command from the belayer to the climber to head out on the route.</p>
            <p>“Climbing!” – informs the climber that he has set out on the route and is expecting a rope belay from the other climber.</p>
            <p>“Stop!” – an instruction to cease movement, whether climbing or retrieving rope. Of course not belaying (i.e. protecting against a fall); belaying must continue even after stopping. (Belaying can be completed only after the clear command of “Off belay”.)</p>
            <p>“Clear!” – informs on the release of a route or rope (e.g. when rappelling) for use by other members of the team.</p>
            <p>Aside from these basic commands a range of other commands are used which help us communicate a range of other circumstances which can occur when climbing, such as how much rope remains available for use, or that there is risk of rockfall – a rock presently falling is signalled with a call of “Rock!” – or a warning of the need for heightened caution, for example if the person currently climbing is worried that he cannot hold on and might fall into the rope. The exact wording of these additional calls is not generally fixed; it is always simply a question of expressing oneself clearly and understandably.</p>
            <p>In an ideal case, voice communication between two climbers on a single pitch takes the following form:</p>
            <p>Both climbers are together on the ground, the leader sets out on the route, the belayer belays her from a bottom belay station. The leader pulls the rope behind her, and when too little remains for bottom belaying, the belayer calls “Five metres!“. For the leader this is a clear warning that she must look for a good spot for a top belay station. Once she finds and establishes it, she sets up her self-belay and only then calls out “Off belay!”. The belayer in the bottom station unhitches the belay device from the rope and ceases to belay. The leader then takes in the rope to the top station. Once the rope goes taut against the harness of the second, the second calls “That’s me.” This makes clear to the leader that the rope has been pulled in (and has not, for example, been caught in a snag in the rock). The leader in the top belay station places the rope into the belay device and begins to belay with the rope, calling “Belay on”. The second disassembles the bottom belay station and before setting out onto the pitch calls “Climbing!”. The leader from the top belay station confirms by calling “Climb!”, which reassures the second that he is belayed and can set off onto the pitch.</p>
            <h3>Poor audibility and minimal communication</h3>
            <p>It is far from rare for voice communication to fail. Most frequently due to the fact that the top belay station is located distinctly beyond the horizon (e.g. far from the outside corner of a rock, above an overhang, etc.), and not even a loud shout can reach one climber from another. Audibility can also be impeded by a strong wind, rain, or gale. The failure of voice communication can result even from other people. In a number of highly frequented rock regions or artificial climbing walls where a number of climbing teams climb on one spot, calls can become confused between each another, fail to be understood, and most dangerously of all, a confusion of commands between different teams may occur.</p>
            <p>From optimal voice communication it is therefore sometimes good, if not essential, to switch to economic non-verbal communication via signals.</p>
            <p>If the climbers are still in view of each other, there is an option to signal with the hands. For example, a leader who has arranged self-belay at the top belay station can inform the belayer of this face by showing him an open palm of his hand (in this manner it is clear to the belayer that the leader is held on the rock by his own self-belay, and therefore that it is possible to discontinue belaying him by rope).</p>
            <p>Given closer thought one may realise that the majority of commands are not explicitly necessary. A well attuned climbing team can carry out a range of activities without calling commands, as the activities conducted during an ascent are predictable and logically assumable. This does, however, require permanent concentration and careful observation of the rope. There is only a single exception where we cannot get by without communication, and that is the information from the leader that he is prepared to belay the second.</p>
            <p>An example of the deviations (indicated in parentheses and italics) during an ascent with minimised communication as opposed to optimal communication:</p>
            <p>Both climbers are together on the ground, the leader sets out on the route, the belayer belays her from a bottom belay station. The leader pulls the rope behind her, and when too little remains for bottom belaying, the belayer calls “Five metres!” (<em>this can be eliminated; the leader must be capable of correctly estimating the length</em>). For the leader this is a clear warning that she must look for a good spot for a top belay station. Once she finds and establishes it, she sets up her self-belay and only then calls out “Off belay!” (<em>can be eliminated; the leader will pull the rope in even though the belayer will hold the rope through to the end using the belay device</em>). The belayer in the bottom station unhitches the belay device from the rope and ceases to belay. The leader then takes in the rope to the top station. Once the rope goes taut against the harness of the second, the second calls “That’s me.” (<em>can be eliminated</em>) The leader in the top belay station places the rope into the belay device and begins to belay with the rope, calling “Belay on.”(<em>CRITICAL, the only command which must be sounded, since the second thus far does not have clear knowledge as to whether the leader has pulled in the rope or has only climbed to the end of the rope</em>). The second disassembles the bottom belay station and before setting out on the route calls “Climbing!” (<em>can be eliminated, the leader above should already be belaying</em>). The leader from the top belay station confirms by calling “Climb!”, which reassures the second that he is belayed and can set off onto the pitch (<em>can be eliminated</em>).</p>
            <p>Even from the above example it is clear that an ascent with minimal communication is psychologically demanding, there are many opportunities for failure or mistakes and possible complications (i.e. a snagged rope) almost cannot be solved in this manner. At the same time it is entirely necessary for members of a rope team practicing minimal communications to be very experienced and well in tune with each other.</p>
            <p>The necessary command “Belay on!”, by which the leader notifies the second that she has begun belaying with the rope, can be replaced in cases when voice or visual communication is not possible with signals using ropes or radios.</p>
            <p>In the event that we use double rope technique (“twin”), a relatively simple but purposeful measure is to use double ropes that are not the same length. In the event of minimal communication the belaying second in the bottom station will continue to belay even if the shorter rope grows taut. This can mean two situations – a) the leader either climbed to the end of the rope, without having successfully built a top belay station, or b) she already has the top belay station built and is merely pulling in both ropes at the same time. One way or another the leader must end up in the second situation (b), and once she detects that the shorter rope can no longer be pulled upward toward her, she will place the rope in her belay device and pull in the remainder of the longer rope. This retrieving of the longer rope is a clear signal for the second at the belay station below that his fellow climber above now has a station above and is belaying him.</p>
            <p>The difference between the shorter and longer double rope is optimally around 3 metres, a necessary condition is a difference in colour between the two strands of rope.</p>
            <h3>Radios</h3>
            <img className='img_bv' src={img1}></img>
            <p>Small radio transmitters in PMR format which function on the 446 MHz frequency are a proven method for communication among members of a rope team. For mountaineering purposes it is appropriate to be equipped with models that are more impact- and water-resistant. For problem-free communication it is also good for the selected tools to support CTCSS technology (so-called “co-channels”) of which there may be up to 38 as part of one channel. This significantly limits the mutual nuisance of multiple users of radio operations on the same channel. The reach of transmitters in PMR format in the outdoors with no obstacles is approximately 5 km; obstacles in the terrain can significantly reduce the range of the signal. Of course, for the typical length of a pitch this signal range is completely suitable, even in rugged rock terrain. Use of radios finds application mostly in mountains on multi-pitch ascents.</p>
            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/finger-cracks" style={{color:"white"}} class="fb-xfbml-parse-ignore"><i style={{fontSize:"large", color:"white"}} class="fa-brands fa-facebook-f"></i>Share on Facebook</a></div>
            {/* related articles */}
            <Related_articles posts={posts}></Related_articles>
            </div>
    )
}
export default communication ;