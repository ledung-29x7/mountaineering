import React from 'react'
import '../../../css/dt.css';
import img1 from '../../../../img/knowledge/rating/UIAA-EN.jpg';
import img2 from '../../../../img/knowledge/rating/image.png';
import img3 from '../../../../img/knowledge/rating/t3.jpg'
const rating = ()=>{
    return (
        <div className='test'>
            <h1>Risk rating system</h1>
            <h3>Style of climb as a criterion of difficulty</h3>
            <p>Cliffs and rocks which have ceased to be mere training locations and have become a location for sport achievement have played a significant role in the developing of evaluating performance according to complexity levels, and their wider use has led to an increased focus on the method by which a climb has been achieved. The AF (All Free) style was developed in the Alps as the first recognised sport style of free climbing, where the climber uses only natural points for advancement and overcomes the route with his/her own strength. From the perspective of top climbers the rating is diminished by the fact that the climber can use any point of protection for rest. A newer, and more sporting (meaning more complex) method was implemented by Kurt Albert, who began marking all routes climbed AF without resting and in one go with a red dot at the approach. Thus the RP style (Red Point) came about. Certain climbers do not consider a route as having been climbed if it was not climbed using RP– that is, without falling and without rest. Often this requires extensive practice and preparation before such a route can be climbed by the climber. Even more highly ranked is the OS method (On Sight). OS assumes that the climber, without knowing the route, having trained or carefully examined the route using rappelling, simply comes and climbs – understandably using RP style. OS and RP are uncommonly difficult, and therefore for the average climber the RK style (Rotkreis) is more common, which allows falls and unsuccessful attempts without leaders having to retrieve their rope and begin again after every fall.</p>
            <p>When free climbing without protection at height, this style is called free-solo. It is of course very dangerous. It is necessary to bear in mind that even the best preparation for an ascent can never completely eliminate such events as the crumbling of a handhold or other occurrences. Only an experienced and cool-headed climber can dare to climb using such a method, as the consequences in the event of a fall are fatal; the risk of death is clearly quite imminent.</p>
            <h3>Rating systems</h3>
            <p>It is entirely understandable that mountaineering like any other sport must have rules established for rating performance. Mountaineering performance has two parts: on the one hand complexity, or an expression of how exhausted we will be after a climb, and then difficulty, which designates what sort of obstacles we will need to overcome on the route. A basic tool for assessment are rating systems, of which there are many, and which were developed separately in different regions at different times. When combined with details about the style of climb, a relatively accurate picture of the complexity of the ascent itself and the capabilities of the climber can be achieved.</p>
            <p>The process of classifying ascents itself is a very subjective matter. The degree of difficulty is proposed by the first ascentionist, and other climbers then confirm or modify this according to their own opinions. It is therefore a long-term process. Subjectivity is expressed primarily by the fact that if a climber contributing to the rating of a route is strict towards himself, he will create a so-called hard classification (a more complex ascent is rated with a lower grade); while if they overestimate their ascents, they will create a so-called soft classification (the ascent has a higher grade than it deserves).</p>
            <p>The actual construction of a rating system can be one of two types, either a closed or an open rating system. A closed system has a maximum level of difficulty established, and if a climbed route is more complex, an older ascent route must be reassessed at a lower level. In comparison an open rating system always adds another, higher grade to its range when an ascent is climbed that is more difficult than has existed thus far. Closed rating systems were used in the early days of mountaineering when it was thought that the complexity of an ascent could not be increased any further. And yet the stormy development of mountaineering overturned this notion, and repeated increase of performance brought the realisation that the boundaries of human ability are inestimable, and to this state an open rating system is better suited.</p>
            <p>The UIAA international mountaineering organisation attempted to compile a unified standard rating system. While this system is not used exclusively everywhere and while original local systems are retained in some places, “conversion tables” always exist applied primarily to the UIAA rating system. Other propagated methods of classifying ascents are the French, American, Russian, and British rating systems. In the Czech Republic the Saxony rating system is used on sandstone terrain in addition to the UIAA system, while a proprietary rating system is used in the Iser Mountains.</p>
            <p>But the territory doesn’t always have to be a decisive criteria for the peculiarity of a rating system. Often rating systems are also part of disciplines (e.g. a bouldering rating system) or according to terrain (a rating system for ice and mixed climbing).</p>
            <p>The UIAA rating system is based in structure on the Welzenbach rating system, used particularly in the Alps (named after its founder, the prominent Austrian mountaineer W. Welzenbach).</p>
            <p>The Welzenbach rating system had six numerically designated grades starting with the easiest, grade I. Later it followed the Italian model of marking each grade with subgrades using the symbols plus (+) and minus (-), which results in a total of 12 options for differentiating difficulty levels.</p>
            <p>The rating system thereby defined was called the Internacionale Alpenskala in the year 1947, and became a direct basis for creation of the UIAA rating system, whose final version was definitively approved in the year 1971.</p>
            <h3>UIAA rating system</h3>
            <img className='img_bv' src={img1}></img>
            <p><strong>I</strong> – Easy. The simplest form of rock climbing, however not terrain only and exclusively for walking. Hands are necessary to ensure balance.</p>
            <p><strong>II</strong> – Moderately difficult: Beginning climbing, during which the technique of three fixed points is required.</p>
            <p><strong>III</strong> – Fairly difficult: Intermediate protection recommended on certain exposed places.</p>
            <p><strong>IV</strong> – Difficult: Climbing experience is essential, sections of this grade usually require more intermediate protection.</p>
            <p><strong>V</strong> – Very difficult: Climbing now places significant demands on the training of the climber. Often this already involves overhanging sections.</p>
            <p><strong>VI</strong> – Unusually difficult: Good technique and reliable protection is essential.</p>
            <p><strong>VII</strong> – Extremely difficult: High exposure often associated with few protection options, even excellent climbers need special preparation for each type of rock in order to climb ascents of this grade without a fall.</p>
            <p><strong>VIII</strong> through <strong>X</strong> – Grading of previous complexities, requiring very specific training. Usually this complexity level is inaccessible to climbers who do not train on artificial climbing walls and who do not devote a significant part of their training plan to specific strengthening. Regular climbing at these complexity levels is exclusive to top athletes.</p>
            <p><strong>XI</strong> – Current boundaries of climbing capability. As a rule, the prior practicing of the route is essential, and not even top climbers are capable of repeating sections at this grade frequently. Ideal conditions, excellent form, and complete concentration on performance are essential for success. This grade of complexity tends to be often completed with previously placed protection.</p>
            <p>The UIAA rating system is upwardly open. For more precise differentiation the signs plus (+) and minus (-) are added to the numerical grade, where plus means increased difficulty. According to UIAA principles the ascent should always be described by the author or drawn in a unifying method using topographic marks. The UIAA rating system distinguishes between free climbing, expressed by a rating system, and aid climbing, designated by the grades A0 through A5. The use of expansive pitons (bolts) is designated with the letter “e” (e.g. A4e).</p>
            <p><strong>Details of the UIAA classification system</strong>: The basic data includes the date of first ascent and the names of the authors, the classification of the hardest climbing spot, a description and diagram of the ascent.</p>
            <p>Additional data is composed of information on the character of the terrain (face height, total length of ascent, length of key sections, grade, rock, ice, flowing water, objective danger and retreat options), character of climbing (climbing techniques, quantity of necessary aids, bivouac placement, average time of ascent, data necessary for orientation), and general data (comparison to known ascents in the region, assessment from the perspective of aesthetics).</p>
            <h3>Rating system for aid climbing</h3>
            <img className='img_bv' src={img2}/>
            <p><strong>A0</strong> – Piton or other protection is used either as handhold or foothold, basically gripping or stepping on piton.</p>
            <p><strong>A1</strong> – Pitons or other protection are easily placed, not much strength is necessary for aid climbing section, the section is relatively short.</p>
            <p><strong>A2</strong> – Pitons or other protection are placed with a bit more difficulty, however they hold passably, the section requiring aid climbing is longer.</p>
            <p><strong>A3</strong> – Difficult placement of pitons or other protection, which do not hold as well, a longer section.</p>
            <p><strong>A4</strong> – Very poor placement of pitons or other protection, necessity of using special pitons or hooks, very difficult.</p>
            <h2>Classification systems for ice climbing</h2>
            <img className='img_bv' src={img3}/>
            <p>Most often we can encounter three rating systems:</p>
            <ul><li>original Scottish rating system</li><li>international rating system for ice climbing</li><li>Water Ice (WI) rating system.</li></ul>
            <h3>Scottish rating system for ice climbing</h3>
            <p><strong>I</strong> Ascent in ice and snow with incline of 45° minimum</p>
            <p><strong>II</strong> Ascent of ice with incline of 45° minimum with at least a 5 m section at 60° incline</p>
            <p><strong>III</strong> Ascent with a 45 m section of ice with an incline of 60°, 10 m section with incline of 70° and 2 m section with incline of 90°</p>
            <p><strong>IV</strong> Ascent with 45 m section of ice with incline of 70°, 15 m section at 80° and 5 m section at 90°</p>
            <p><strong>V</strong> Ascent with 45 m section of ice with incline of 80° and 20 through 30 m section at 90°</p>
            <p><strong>VI</strong> Ascent with 45 m section of ice with incline of 90°</p>
            <h3>International classification system for climbing in ice</h3>
            <p>This classification system is more appropriate for the assessment of ice ascents in mountain settings. It has two parts.</p>
            <p>The first part assesses the complexity and risk of routes using seven grades.</p>
            <p><strong>I</strong> Short ascent, without objective danger, simple descent.</p>
            <p><strong>II</strong> Marginal objective danger for a short section of the ascent route, descent can be managed without protection, or only brief rappelling.</p>
            <p><strong>III</strong> Longer approach, actual ascent route also longer, objective danger on a longer section of the route. Good protection options. Descent by rappelling.</p>
            <p><strong>IV</strong> Long ascent route with difficult approach under face, objective danger along entire ascent route. Difficult descent.</p>
            <p><strong>V</strong> Long ascent route, high level of climber required, quality gear. Objective danger great, exposure, avalanche. Very difficult descent.</p>
            <p><strong>VI</strong> Very long ascent route, on which more than one day is needed. Objective danger great, falls of seracs, rocks, and avalanches. Very difficult descent.</p>
            <p><strong>VII</strong> Several day climb, significant objective danger, unstable ice. Descent just as horrible as ascent.</p>
            <p>The second part of the international rating system for ice climbing assigns difficulty to the actual climbing, this part has nine levels from grade 1 to grade 9.</p>
            <p><strong>1</strong> Ascent possible only with crampons</p>
            <p><strong>2</strong> Quality ice with one somewhat longer section at 60° incline</p>
            <p><strong>3</strong> Mostly quality ice with incline of 70° to 80°, good options for protection in the ice, belay stations in rock</p>
            <p><strong>4</strong> Ice of acceptable quality with incline of 75° to 85°, good protection options in the ice</p>
            <p><strong>5</strong> Ice of acceptable quality with incline of 85° to 90°, good protection options</p>
            <p><strong>6</strong> Ice vertical with occasional moderate icicle overhangs, variable quality of ice and protection</p>
            <p><strong>7</strong> Long vertical and overhanging ice (icicles), ice occasionally without adhesion, protection in some places dubious</p>
            <p><strong>8</strong> Increased difficulty, ice mostly non-adhesive, protection in rock as well</p>
            <p><strong>9</strong> Completely non-adhesive ice in overhangs, frequent break off from the rock, balance climbing, very often protection in the rock</p>
            <h3>WI classification system for ice climbing difficulty</h3>
            <p>Another classification system is the WI (Water Ice) system, which is more focused on climbing along ice formations, frozen waterfalls, often even outside of a high altitude mountain setting. The actual WI rating system expresses the difficulty of ice climbing, for higher grades the plus (+) and minus (-) signs are used for finer distinction.</p>
            <p>Aside from this the designation “E” is also used, which expresses complexity and objective danger. There are six of these grades from E1 through E6. For E1 this consists of safe recreational ice climbing, for E6 it is a “nightmare” full of risks.</p>
            <p><strong>WI1</strong> Ice with incline of 45-60º, ice is compact and of good quality, protection can be placed in almost every spot of the route.</p>
            <p><strong>WI2</strong> Ice with incline of 60°-70°, ice is compact and of good quality, protection options are good.</p>
            <p><strong>WI3</strong> Ice with incline of 70°-80°, ice is compact, steep passages alternate with rest spots with good options for placing protection.</p>
            <p><strong>WI4</strong> Constant ice incline of 80°, small icicles.</p>
            <p><strong>WI5</strong> Constant ice incline of 80°, steep passages are longer and with more icicles.</p>
            <p><strong>WI5</strong>+ Ice incline of 90°, continuous climbing in vertical ice, ice is compact, icicles are firm.</p>
            <p><strong>WI6</strong> Continuous climbing in vertical ice, predominantly along fragile and hollow ice and free standing stalactites, thin glacial ice with incline of 80°-85°, climbing along vertical icicles.</p>
            <p><strong>WI6+</strong> Continuous climbing in vertical and moderate overhangs of ice, thin and isolated icicles.</p>
            <p><strong>WI7</strong> Icefalls, or short and extremely difficult individual passages in overhanging ice and along icicles, often in combination with rock climbing.</p>
            <p><strong>WI7+</strong> Overhanging compact ice, very thin free standing and overhanging icicles, this layer of ice in terrain with incline of 85°-90° and icicles in overhanging terrain, climbing often combined with rock climbing.</p>
            <h3>Classification system for modern mixed climbing</h3>
            <p>Modern mixed climbing is on the boundary between ice climbing and drytooling. It uses its own specific classification. Individual grades are marked with the letter “M” after which an Arabic letter indicates the value. It is an open classification system, the highest obtainable grade at present is M 14.</p>
            <h3>Bouldering classification system</h3>
            <p> After years of development two classification systems were ultimately established, the French Fb system and the American V system. The Fb system (the name is derived from the name of the popular French bouldering region Fontainebleau) more or less copies the French system for rock climbing, except that it is significantly harder. For distinction from common rock climbing systems the abbreviation “Fb” is written before the grade. The American bouldering system is relatively simple, each harder ascent receives a higher grade, designations from V0 to the current V15 are used.</p>
            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/finger-cracks" style={{color:"white"}} class="fb-xfbml-parse-ignore"><i style={{fontSize:"large", color:"white"}} class="fa-brands fa-facebook-f"></i>Share on Facebook</a></div>
        </div>
    )
}
export default rating;