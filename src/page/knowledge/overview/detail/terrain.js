import React from 'react'
import '../../../css/dt.css';
import Related_articles from '../../../../components/Related_articles';
import img1 from '../../../../img/knowledge/terrain/1.jpeg'
import img2 from '../../../../img/knowledge/terrain/2.png'
const terrain = ()=>{
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
    return (
        <div className='test'>
        <h1>Mountaineering terrain</h1>
        <p>We can divide mountaineering terrain into various types according to several criteria. On the one hand according to whether it is natural or artificial terrain. Artificial terrain can also be varied; here we typically include artificial climbing walls, which tend most often to be built of metal construction with wooden panels, or if they are located outdoors, out of concrete. Among artificial mountaineering terrain we also include structures which originally served a different purpose, but which for certain reasons “caught the mountaineer’s eye” and the habit developed of climbing them. Bridge pillars often fall into this category. As far as natural mountaineering terrain is concerned, its subdivision is also possible according to several criteria. On the one hand we can divide natural terrain according to the type of material, such as rock, ice, or snow. Distinction is further possible from a geomorphological perspective, such as rock terrain (the aforementioned rocky regions) and mountain ranges. Rocky regions traditionally in the Czech Republic and Germany are divided into sandstone rocks and non-sandstone rocks. Non-sandstone rocks can be divided according to the type of mineral (e.g. limestone karst, granite rock, phonolite, basalt, etc.) where each of these minerals has certain specific characteristics for climbing. Mountain ranges are divided into glaciated and non-glaciated mountains according to whether glaciers appear in them. According to height above sea level, the shape of mountain peaks, relative height about the surrounding lowlands and according to where the snow line appears in relation to the height of the mountain range, certain mountain ranges can then be identified as high altitude mountains. These are then divided into low altitude, very high altitude, and extremely high altitude mountains.</p>
        <img className='img_bv' src={img1} />
        <h2>Topography diagrams</h2>
        <p>Mountaineering terrain and the routes of mountaineering ascents in particular tend to be described using simple schematics, cartograms and mountaineering topography symbols. In the planning phase these diagrams help us to create our own idea of the terrain through which our ascent route leads. Gradually during the ascent these diagrams can greatly help us navigate the face. Using topography symbols we can above all draw the direction of the ascent route and the format of the terrain through which the ascent leads. Of course no less important are details about the complexity of climbing in the individual sections of the ascent route, the identification of key climbing spots, the distribution and frequency of intermediate protection, belay stations, or bivouacs. A ruler on the side helps us calculate the dimensions of the ascent. It either gives metre height (in German, Hohenmeter), or rope pitches in metres (in German, Seilmeter). The method of measurement selected should be written in the diagrams, or in the case of a guidebook it can be explained in its introductory chapters. If there is a significant traverse in the ascent route a ruler tends to be drawn horizontally directly in the diagram and placed in such a way as to properly express the length of the traverse. It is very practical to have your diagram with you during the ascent on a single sheet of paper prepared in your pocket for immediate reference. Diagrams are often found in mountaineering guidebooks. During the ascent itself mountaineers do not often carry an entire book (guidebook) with them, but only a copy of the ascent in question; it is therefore practical prior to departure on a climb to obtain a copy of the necessary ascents on individual sheets of paper. In older guidebooks but also in many contemporary guidebooks the unified UIAA topography symbols do not tend to be used exclusively. It is always necessary to pay attention to the legend in the guidebook to clarify the correct meaning of the symbols ahead of time.</p>
        <img className='img_bv' src={img2}></img>
        <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/finger-cracks" style={{color:"white"}} class="fb-xfbml-parse-ignore"><i style={{fontSize:"large", color:"white"}} class="fa-brands fa-facebook-f"></i>Share on Facebook</a></div>
        <Related_articles posts={posts}></Related_articles>
        </div>

    )
}
export default terrain ;