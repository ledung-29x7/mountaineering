import '../../../css/dt.css'
import Related_articles from '../../../../components/Related_articles'
const mountaineering = () =>{
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
        <div className="test">
            <h1>Mountaineering</h1>
        <p>In its original meaning the term “mountaineering” describes an activity leading to an ascent toward the summit of a mountain. Of course, in contemporary usage the word “mountaineering” expresses an full set of other activities and specialised sporting disciplines. These disciplines are very diverse in format, and certain of them have by now distanced themselves significantly from the original contents of the mountaineering discipline. Despite these differences there nonetheless remains a link of common origin. Aside from their common origin, mountaineering disciplines can be grouped on the basis of simple definition, though it may have a somewhat tautological character: “Mountaineering is movement in mountaineering terrain.” For such a definition to make sense we must first define mountaineering terrain. Mountaineering terrain commonly denotes natural mountain terrain with abrupt slopes, whether rocky, snowy, or icy, and outside of the mountains steep rock and ice terrain, or artificial terrain that imitates natural terrain. When navigating this terrain, part of the route of approach must involve overcoming gravity through the use of one’s own strengths.</p>
        <h2>Mountaineering subdivision</h2>
        <p>In its most basic definition, mountaineering is commonly usually classified based on the motivations of the climber, whether sport climbing or non-sport climbing.</p>
        <p>In the realm of non-sporting motivations purely purposeful motivations are included, such as emotional and aesthetic motivations, e.g. love for nature, as well as unavoidability (as when hikers wander into mountaineering terrain). Activities undertaken for purely purposeful motivations include, for example, when “mountaineering” was performed in ancient times e.g. by crystal hunters, or in contemporary times, when mountaineering is performed by mountain rescue teams or special divisions of the armed forces.</p>
        <p>The most common motivations that lead people to mountaineering are sporting motivations. The sport mountaineer is logically therefore only the person who climbs for athletic incentives, motivated by evaluation of her performance according to athletic criteria; that is, according to levels of complexity (the more complex being what fewer people have achieved, gradually increasing to the most complex, which only one person so far has achieved), and according to levels of purity (the less equipment, the higher the ranking of performance).</p>

        <p>From this perspective it is therefore absolutely inappropriate to identify certain concepts or specific disciplines of the mountaineering sport as “athletic” (e.g. the term “sport climbing” is often erroneously used to describe performance rock climbing). It is necessary to realise that sport mountaineering consists of all disciplines performed for athletic motivations. An athlete can be a Himalayist ascending Everest or a person in low-altitude mountains on rock.</p>

        <h2>Forms of mountaineering</h2>

        <p>Sport mountaineering can be divided into subgroups according to various perspectives.</p>

        <p>A very fundamental perspective is the ethical concept of mountaineering. The term “ethical concept” incorporates elements of motivation, desire, opinions, and habits. The ethical concept can have an extremely large influence on the method and format of the mountaineering activities conducted. According to this perspective we can divide mountaineering into traditional (classic) and gymnastic.</p>

        <p>Depending on the intensity of mountaineering performance we can divide mountaineering, like other sports, by level – peak level, performance level, and recreational level. Another perspective mountaineering can be subdivided by is season in which mountaineering is performed. We can therefore differentiate between summer and winter mountaineering. Mountaineering can also be classified according to the environment in which it is carried out. This environment can be rock, mountains, high altitude mountains with year-round snow and ice, artificial climbing walls, etc. Competitions are organized within certain mountaineering disciplines so we can also differentiate mountaineering into competitive and non-competitive.</p>
        <p>Through the partial combination of all perspectives mentioned above we can also subdivide mountaineering to combine all possible activities grouped under the concept of sport mountaineering. Among the individual activities or disciplines, however, there are no sharp and clear boundaries. On the contrary, a diffusion or blending of the various disciplines and their concepts often occurs, usually on a number of different multiple levels. This gives the sport of mountaineering a significant multi-faceted and diverse quality.</p>

        <h2>The traditional concept of mountaineering</h2>

        <p>The original and fundamental concept of mountaineering. The traditional (sometimes called classic) approach to mountaineering influences a number of mountaineering disciplines. A decisive perspective for classifying these groups is the ethical perspective. The basic principle of traditional mountaineering is the requirement for natural terrain to remain in the same condition after our ascent as it was before our ascent. The idea of “fair play” towards the outdoors is strongly embedded in this principle. Aside from our relationship to nature, this is most commonly expressed in principles which require that a person proceed in a natural manner in his conduct. A person should perform the ascent using his abilities, whether his strength, agility, or stamina, and should not conquer nature (the terrain) using technical devices. The ascent should be a pure competition between human effort and the impassability of nature. </p>
        {/* <img src="./tranditional_concept.jpeg" alt="tranditional concept"> */}

        <p>And yet in the hierarchy of values, human life and health trumps this ideal, and therefore in exceptional cases it is possible to change the natural environment minimally, e.g. by inserting a single piece of protection whose purpose is to prevent fatal injury.</p>

        <p>One of the most significant specific attributes of the traditional approach to mountaineering is therefore a decrease in the use of permanent (fixed) protection in the rock. On the contrary, mobile protection such as knots, chocks, etc. are preferred. This attribute has the consequence that a person must not only have the physical prerequisites necessary to complete an ascent, but also the psychological, because the physical stress is significant when conducting traditional mountaineering. Here a person must be capable of resisting fear. Courage is not, however, the only necessary attribute. No less important is discretion, or more specifically humility combined with forethought.</p>

        <p>For the traditional forms of mountaineering the object is still to climb the entire route up to the summit of the mountain or tower, or some other logical point in the terrain. To finish 5 metres below the summit is the same as if nothing has been climbed at all.</p>

        <p>Important regions for traditional mountaineering in Europe include the rocky terrain of Wales in Great Britain and the sandstone cliffs in Saxony and the Czech Republic. Naturally the primary domain of traditional mountaineering are the very high altitude mountains (Alps, High Tatras, etc.). In the Czech Republic, aside from the aforementioned sandstone, the Jizerské Mountains are another important area for traditional mountaineering.</p>
        <Related_articles posts={posts}></Related_articles>
    </div>
    )
}
export default mountaineering;