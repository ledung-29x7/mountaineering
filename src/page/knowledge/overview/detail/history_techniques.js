import React from 'react'
import '../../../css/dt.css';
import { Link } from 'react-router-dom';
import IntroComponent from '../../../../components/introComponent';
import img1 from '../../../../img/knowledge/history/Hans_Fiechtl_(1883-1925).jpg'
import img2 from '../../../../img/knowledge/history/290px-Hans_Dulfer.jpg'
import img3 from '../../../../img/knowledge/history/otto-herzog-portrait.jpg'
import Related_articles from '../../../../components/Related_articles';
const history_techniques = () =>{
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
        <h1>History of mountaineering techniques</h1>
        <p>The history of various climbing and mountaineering techniques stretches as far back in the past as the first activity of a person in the mountains. While the first trip to the mountains were motivated by non-sporting interests entirely, nonetheless the techniques of progress which made the first mountain expeditions possible were developed at that time. The beginnings of the development of specialised climbing techniques in the modern sense of the word can be dated at least to Europe in the 16th century, when the hunting of chamois or the collection of minerals for jewellery purposes began to spread, particularly in the Alps. The majority of hunters or mineral collectors were recruited from the residents of mountain villages and gradually became sought-after mountain guides. In those days people headed into the mountains out of a desire for learning reflected in the dissemination of knowledge of the ductility of the landscape. The first methodical guide for mountaineers of the time was the essay by J. Simler of Zurich “On the difficulties of travel in the Alps”, which in addition to information on natural, morphological and weather conditions also offered a series of organised tips on how to deal with avalanche hazards, how to avoid cracks in glaciers, as well as how to use rope and shoes fixed with points.</p>
        <p>Ascent techniques at that time were simple and entirely purposeful. Where hands and feet did not suffice, a ladder, beam or wooden rod assisted. The primary actors of these simple processes were local highlanders, for whom guiding visitors to the mountains became a welcome opportunity for additional earnings, and later in certain cases even their primary source of sustenance. Their main clientele were romantic travellers, and often also scientists exploring the mountain ranges. The names of most pioneers of climbing techniques of the time are not known to history, despite the fact that it was these that had the main share not only of definitive understanding of high altitude mountains, but also in the emergence of mountaineering as such.</p>
        <p>And yet it was only the 19th century that brought purely sporting ambitions to the mountains. After conquering the majority of summits in renowned and accessible high altitude mountains, only the most difficult peaks remained unconquered in Europe, and after these a search ensued for new and more difficult routes to those summits that had already been reached. There came about the time of the emergence of the mountaineering sport. Emergent professional associations of mountain guides and the first mountaineering societies would play a key role in its subsequent evolution. The sporting objectives of the time lay primarily in the Alps, and all the first societies, without exception, even put the Alps in their names. And thus the term “Alpinism” was also born, which describes mountaineering activity, albeit somewhat imprecisely, to this day.</p>
        <p>Technical climbing was developed in dependency on the increasing difficulty of ascents and technical advances. The history of mountaineering was forged by the names of great personalities and their audacious first ascents, which often shifted the entire sport quantitatively forward. Such instances occurred, for example, in the year 1865, when the dramatic first ascent of the Matterhorn took place, achieved by E. Whymper and M. Croz. In the year 1878, after the successful passages of C. Dent along the north face of Grand Dru, the era of the big walls began, which reached its peak in the year 1938 with the first ascent of the face of Eiger, which was accomplished by A. Heckmair, L. Vörg, F. Kasparek and H. Harrer. At the same time in the twenties and thirties of the 20th century the main drive of mountaineering gradually shifted focus to the world&#8217;s high altitude mountains. This development was delayed by World War II, but soon after its completion in the year 1950 people first summited an 8,000-meter peak. These were the mountaineers M. Herzog and L. Lachenal, and their first ascent on the Annapurna in Nepal.</p>
        <img src={img1}></img>
        <p className='note'>Hans_Dülfer</p>
        <p>Of course, the expansion of the mountaineering sport would not have been possible without the technical advances and development of the individual climbing and protection techniques. In this area three “innovators” arose from the climbers living at the turn of the 19th and 20th centuries. These were Hans Fiechtl, Otto Herzog and Hans Dülfer. Herzog first used and later perfected the fireman’s carabiner for mountaineering purposes, and developed protection techniques with their use in a protection system. The classic flat piton is called a “fichtl” in the Czech Republic to this day after Fiechtl, who was one of the first to use a hammered piton. However, the greatest personality with the widest swath was most likely Dülfer, after whom a series of climbing techniques remained, namely crack climbing, pendulum traverses, rappelling techniques, and the use of rope pulls in upward progress; that is, for the most part, techniques used to this day. At the same time he perfected the techniques of Herzog and Fiechtl, who opened an unusually wide range of opportunities.</p>
        <div style={{display:'flex'}}>
            <div style={{margin:'10px'}}><img src={img2}></img>
            <p className='note'>Hans Fiechtl (1883-1925)</p>
            </div>
            <div style={{margin:'10px'}}>
            <img src={img3}></img>
            <p className='note'>Otto Herzog </p>
            </div>
        </div>
        <p>The arrival of these to their time of huge technological possibilities had a significant influence on other directions in mountaineering. Until that time the most significant ascents were free climbed, and the leading personalities of mountaineering strongly propagated this style of mountaineering. In the early days of mountaineering it was no wonder, since the only alternative was chipping footholds and handholds into the rock, or using artificial protection in the form of iron ladders and chains, which the initial generation of mountaineering sportsmen could not accept. And yet thanks to new technical aids in the course of the first half of the 20th century, opportunities were created for shifting performance higher and at the same time maintaining a sporting value to mountaineering. This era began in the thirties of the 20th century and reached its peak in the sixties and seventies of this century. The era of technical climbing came about, which became the dominant style of all noteworthy ascents. During technical climbing the mountaineer richly uses diverse aids which help him hang onto the rock and advance upward. This enabled mountaineers to enter the most inaccessible rock faces and carry out ascents along routes which had previously been unthinkable.</p>
        <p>Nonetheless, no tree grows to the heavens, and every method one day exhausts its potential to achieve an effect. A crisis occurred in the seventies of the 20th century. Methods of bolting, that is, embedding pitons into drilled openings, broke into technical climbing. It was soon seen that when implementing the maximum number of technical aids it would be possible to climb every face, to conquer any route, and a person always succeeded. Guaranteed success is the nail in the coffin of every sport. Slowly the admiration for those who achieved such ascents began to subside.</p>
        <p>A new generation of mountaineers logically searched for the lost thread of development where technical climbing had interrupted it. Difficult ascents with limited technical resources became an ideal. This marked the return to free climbing. One of the first prophets of these new ideas as applied in the mountains was Reinhold Messner. As one of the first he grasped that, while it could be possible with the application of all techniques thus far it to conquer every face or mountain, mountaineering thereby loses its sporting spirit. Sport mountaineering, in his opinion, began where the mountaineer sets the rules himself in order that he might overcome obstacles with his own strength, resilience, and will. He overturned all excesses and defined the principles of the “Alpine style,” which was immediately transferred to the greatest world high altitude mountains.</p>
        <p>However, the ideal of free climbing had not disappeared entirely from Europe prior to this. It had been maintained in the region of the sandstone rocks of Saxony and Bohemia, where it had been strictly maintained since the beginning of the 20th century. Thanks to the emigration of one of the leading mountaineers of Saxony, Fritz Wiessner, to the USA, this ideal of free climbing began to grow in America as well, primarily in cliff terrain outside of the mountains. Thereby the particular discipline of cliff mountaineering can about, which was focussed on free climbing.</p>
        <p>Free climbing was completely established at the turn of the seventies and eighties of the 20th century. Reinhold Messner returned it to the mountains, and the Americans to the cliffs. Henceforth technical aids were used exclusively for belaying against falls, and were not intended to aid the upward progress of the climber. This idea of free climbing gives direction to the development of the sport and its technical aids to this day.</p>
        <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/finger-cracks" style={{color:"white"}} class="fb-xfbml-parse-ignore"><i style={{fontSize:"large", color:"white"}} class="fa-brands fa-facebook-f"></i>Share on Facebook</a></div>
        {/* related articles */}
        <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default history_techniques;