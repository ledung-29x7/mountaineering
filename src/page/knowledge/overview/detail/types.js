import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/dt.css';

import Intro_related from '../../../../components/intro_related';
import img1 from '../../../../img/knowledge/1.jpg';
import img2 from '../../../../img/knowledge/2.jpg';
import img3 from '../../../../img/knowledge/3.jpg';
import img4 from '../../../../img/knowledge/4.jpg';
import img5 from '../../../../img/knowledge/5.jpg';
import img6 from '../../../../img/knowledge/6.jpg';
import img7 from '../../../../img/knowledge/7.jpg';


const type =() =>{
    return (
        <React.Fragment>
        <div className='test'>
            <h1>Mountaineering disciplines</h1>
            <h2>Rock climbing</h2>
            <p>One of todays predominant forms of mountaineering. The defining feature for classification in this group is the environment in which mountaineering takes place, namely cliffs. Whether they are cliffs a few dozen metres high, hundreds of metres, or boulders in the forest. On cliffs it is possible to pursue mountaineering either through the traditional or gymnastic concepts depending on the conditions and how people approach it in the given region. Within the Czech Republic cliff mountaineering is usually divided into two parts. Sandstone mountaineering and climbing other rock terrain formed of minerals other than sandstone (e.g. limestone or granite cliffs). A widely used mountaineering term for these rocks is also the designation of “non-sandstone” cliff, or “non-sandstone cliff mountaineering”. The reason for this division is the significant difference in qualities of sandstone cliffs from other rocks.</p>
            <img className='img_bv' src={img1} alt='img1'/>
            <h2>Sandstone mountaineering</h2>
            <p>A specific type of cliff mountaineering is sandstone mountaineering in Saxony and Bohemia. The local sandstone cliffs are mostly composed of soft and delicate sandstone, which has a significant influence on the form of mountaineering carried out on them.</p>
            <p>It is not possible to climb when wet, it is not possible to use hard mobile protection made of metal. Out of consideration for the rock, strict principles of the traditional concept of mountaineering are often applied. Permanently fixed points of protection are only sparsely placed and in the most essential locations. Climbing is psychologically demanding.</p>
            <img className='img_bv' src={img2}/>
            <h2>Bouldering</h2>
            <p>As the name would suggest, this consists mostly of climbing on boulders. Their height as a rule ranges from 2-5 metres. They are climbed without protection; when failing to hold the rock one jumps to the ground. This mountaineering discipline is very close in character to actual gymnastics. During her performance the climber lies close to the ground, with no psychological stressors of fear of the climb, and can fully attempt the most gruelling climbing movements. She either climbs to the top of the boulder, or she crosses (traverses) the boulder to the side. In bouldering the lines of the ascent routes tend to be precisely demarcated, even down to a specific instruction to grab certain handholds and footholds; sometimes the ascent begins from a sitting or lying down position.</p>
            <p>Bouldering is also carried out on artificial climbing walls, where bouldering races are most often organised.</p>
            <p>In some cases bouldering terrain can lie high above the ground, when a fall may begin to become a source of fear. This boundary has not been precisely established, however. From bouldering climbing one may therefore transition suddenly to unbelayed solo climbing.</p>
            <h2>Ice mountaineering</h2>
            <p>Mountaineering terrain need not consist only of rock; it can also be ice. This element became part of mountaineering as a result of high altitude mountains reaching regions of year-round snow and ice. Here mountaineers were forced first on glaciers, then on the faces of mountain peaks, to come to terms with progress on ice using special techniques for which ice axes and ice cleats (crampons) are used. Some of them started to enjoy it, developed these ice techniques further, and mainly sought out ice terrain in winter even beyond the high altitude mountain environment. Today the majority of climbs using this discipline take place outside of high altitude mountains, mostly in frozen waterfalls in mountain valleys during winter.</p>
            <img className='img_bv' src={img3}/>
            <p>From ice mountaineering other disciplines were developed, such as modern mixed climbing and drytooling. This development is a result of the fact that the more difficult icefalls were recognised to be those with sections of interrupted ice, i.e. with exposed rock. In the pursuit of maximum performance climbers began to seek out such routes, where there was less and less ice, until it was necessary to apply ice axes and crampons to rock. This discipline is sometimes called modern mixed climbing. With the decrease in ice on the route this discipline then becomes drytooling.</p>
            <p>Ice climbing, and later drytooling, have been included in race climbing as well. For these races artificial climbing walls with ice elements are constructed. Climbing for complexity and speed forms the basis for competition in ice bouldering as well.</p>
            <h2>Mountain and high altitude mountaineering</h2>
            <p>This is another form of mountaineering which is defined by the setting in which it is carried out. This setting is the mountains. It is the original terrain in which the sport called mountaineering first came about. However, the concept of a “mountain” is rather broad, and therefore to be more exact we use a classification into categories of high altitude mountains, very high altitude mountains, and extremely high altitude mountains.</p>
            <p>We refer to high altitude mountains in cases of a non-extreme high altitude environment, where as a rule there are relative height differences reaching a threshold of 1,500 m and their absolute height (above sea level) does not exceed approx. 2,000 to 2,500 m (such as the Krkonoše, the Scottish Highlands, the Western Tatras - the Roháč mountains); very high altitude mountains are designated by a typical high altitude mountain, glacial formed relief with great height differences exceeding 1,500 m and whose height above sea level ranges as a rule from 2,500 to 5,000 m (these are the high altitude mountains typical e.g. of Europe; the Alps, the High Tatras, the Apennines, the Pyrenees); extremely high altitude mountains are usually defined as mountains exceeding the threshold of 5,000 m (such as the Caucasus, Pamir, Himalayas in the Eurasian continental landmass, or e.g. the Cordilleras and Andes in the Americas).</p>
            <img className='img_bv' src={img4}/>
            <p>The form of mountaineering carried out within a given mountain range is influenced, aside from its height above sea level, by whether year-round snow and ice is found in the mountain range. For mountaineering purposes, a distinction is also made between glaciated and non-glaciated mountains.</p>
            <p>Cliff mountaineering usually takes place in lower non-glaciated high altitude mountains; ascents as a rule are long, spanning several rope pitches; a high altitude mountain climate persists here, ascents are longer.</p>
            <p>In very high altitude non-glaciated mountains the difficulties increase: distances are somewhat greater, orientation problems grow numerous, and the climate is recognisably harsher.</p>
            <p>In very high altitude glaciated mountains a significant break occurs in the character of the environment. Higher placed sections of the valleys are filled with ice, on the slopes of the mountain there is year-round snow. Special gear must be used for navigating the snow and ice. Above approx. 3,000 m complications are added due to the height above sea level and the necessity for acclimatisation.</p>
            <p>In high altitude mountains and very high altitude non-glaciated mountains one can encounter more pitch routes through terrain modified for gymnastic climbing. Of course, there aren't many of them. The rough majority of these mountains fall under the traditional concept of mountaineering. In very high altitude glaciated mountains the environment itself by its inaccessibility demands traditional mountaineering.</p>
            <p>In extremely high altitude mountains the environment is mostly so extreme that people must often seek assistance either in the form of organised or technical measures. The result of organised measures is so-called expedition mountaineering, whose essence is the transfer of the problem of a small group to a large group of people whose work is carefully organised. Objectives and summits are then reached only by a select group which represents the efforts of the entire expedition. Technical assistance in extremely high altitude mountains, in addition to special gear, are most markedly exemplified by the use of oxygen tanks, which reduce the negative influence of the high altitude above sea level. Nonetheless, even in extremely high altitude mountains and their extreme conditions mountaineering is carried out according to the traditional concept. The expression of this effort is the so-called “Alpine style” which consists of transferring methods of progress from very high altitude mountains to extremely high altitude mountains. Particularly in the Himalayas in heights above 8,000 m above sea level this is one of the most demanding mountaineering activities.</p>
            <h2>BigWall</h2>
            <p>A special discipline in multi-pitch climbing is the so-called bigwall. It consists of an ascent up a high face which is extremely steep and unbroken. These faces as a rule require special tactics and resources that distinguish the ascent from other disciplines, thereby giving rise to the perception of a separate discipline altogether. Bigwall tactics can be used in mountains, very high altitude mountains, and extremely high altitude mountains. Bigwall climbing first came about in the USA in the Yosemite region. In Europe the more widely known bigwalls are in Norway (Trollrygen, Kjerag), or Italy (Qualido).</p>
            <h3>Winter mountaineering</h3>
            <p>The name itself would suggest that winter mountaineering is simply any mountaineering carried out during the winter season. That would not, however, be accurate. For one thing, it necessarily consists of activities performed in the outdoors in order for winter to have any influence. Another necessary condition is that the terrain must have a completely changed character in winter compared to the summer season. In some countries there is no great emphasis placed on this distinction, whereas in the Slovak Tatras or the Scottish Highlands this criteria is considered essential. Changes in terrain between winter and summer in European climate zones tend to occur in non-glaciated high altitude mountains.&nbsp; Non-glaciated high altitude mountains are blocked in by snow in winter, ice forms on the faces of peaks, and the appearance of the mountain range thereby changes completely. Mountaineering carried out here then fully merits the designation of winter mountaineering and forms a distinct mountaineering discipline.</p>
            <img className='img_bv' src={img5}/>
            <h3>High altitude hiking</h3>
            <p>The most original form of mountaineering. Ascent routes during high altitude hiking very often conform to the routes of the discoverers of mountains or pioneers of mountaineering. Apart from a motivation to ascend to a mountain summit or other objective, high altitude hiking also involves a desire to travel mountain ranges and to better learn their ways. Ascents navigated here usually do not have any sections exceeding UIAA grade III along the route.</p>
            <img className='img_bv' src={img6}/>
            <h3>Protected climbing routes (klettersteig, via ferrata)</h3>
            <p>The most significant embodiment of the recreational level of mountaineering. It is a mountaineering route made accessible and secured with artificial means, whether iron clamps, ladders, chains, or steel cord running through the terrain. First the popular mountain tours were relatively sparsely secured, copying the natural terrain line. These tours were later included as part of high altitude hiking. Gradually, however, this discipline spread even to steep rock faces. Designated routes intersect vertical and overhanging faces, where industrial construction methods of installing artificial aids superficially serve for overcoming gravity. If we apply strict logic here, it is a form of “recreational technical climbing”.</p>
            <h3>Artificial climbing walls</h3>
            <p>In a natural setting, favourable weather is an essential condition for carrying out a mountaineering climb. And that's not always available. The first motivation for building artificial climbing walls was an effort to avoid the influence of weather. The second motivation was then the need for performance gymnastic climbers to gain a training environment where they could train even outside the summer climbing season. The first artificial mountaineering walls, which imitate a cliff setting, therefore began to crop up in a larger number with the development of the gymnastic concept of mountaineering.</p>
            <p>Artificial climbing walls are used primarily for training, and for mountaineers of all categories and disciplines.</p>
            <p>The gymnastic concept of performance climbing on artificial climbing walls has its most meaningful form in races on artificial climbing walls. Race climbing on artificial climbing walls is purely a competitive discipline within mountaineering which includes all the usual characteristics of races such as rules, judges, and degrees of victory. Races are organised for climbing complexity, speed, bouldering, and for climbing on artificial ice or drytooling.</p>
            <img className='img_bv' src={img7}/>
            <h3>Ski-Mountaineering</h3>
            <p>Ski-Mountaineering is a summary term including all mountaineering activities carried out in the mountains along with skiing in free terrain. In the original concept this consisted primarily of connecting a mountaineering ascent with a ski descent, or mountain ski crossings. Such a concept of ski-mountaineering is considered one of the traditional forms of mountaineering.</p>
            <p>An easier form of ski-mountaineering is called mountain ski touring, and the original term “ski-mountaineering” nowadays refers to a more difficult form of performing this sport.</p>
            <p>Competitions in ski-mountaineering are also organised which in recent times have gained significant popularity.</p>
            <h3>Interdisciplines</h3>
            <p>At the conclusion of this overview of mountaineering forms and disciplines we should also mention interdisciplines, where elements of mountaineering extend into other sports or activities. Mountaineering combined with speleology is called speleoalpinism, mountaineering in combination with paragliding is called paraglidealpinism. Among the new interdisciplines we can also include, for example, the presently popular canyoning.</p>
            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/finger-cracks" style={{color:"white"}} class="fb-xfbml-parse-ignore"><i style={{fontSize:"large", color:"white"}} class="fa-brands fa-facebook-f"></i>Share on Facebook</a></div>
        </div>
        <div className='test'>
            <h1 className='items'>
                Related articles
            </h1>
            <div className='related'>
                <Link className='intro' to={`/rating`}>
                    <Intro_related  pic="https://mojagear.com/wp-content/uploads/2017/03/climbing-grades-explained1.png" title="Risk rating system"></Intro_related>
                </Link>
                <Link className='intro' to={`/terrain`}>
                    <Intro_related  pic="https://mountaineeringmethodology.com/wp-content/uploads/2021/05/typy_terenu-1024x1011.jpg" title="Mountaineering terrain"></Intro_related>
                </Link>
                <Link className='intro' to={`/history`}>
                    <Intro_related  pic="https://magazine.washington.edu/columns_wordpress/wp-content/uploads/2017/06/MOUNTAINEERS-PSD.jpg" title="History of mountaineering"></Intro_related>
                </Link>
            </div>
        </div>
        </React.Fragment>
    )
}
export default type;