import React from "react";
import '../../../css/dt.css';
import img1 from '../../../../img/photos/France/1.webp';
import img2 from '../../../../img/photos/France/2.webp';
import img3 from '../../../../img/photos/France/3.webp';
import img4 from '../../../../img/photos/France/4.webp';
import img5 from '../../../../img/photos/France/5.webp';
import img6 from '../../../../img/photos/France/6.webp';

const France =()=>{
    return(
        <div className="test">
        <h1>France: Land of Wine, Cheese, and Beautiful, Rarely Visited Crags</h1>
        <img className="img_bv" src={img1}/>
        <p>France’s geologic wonders are as breathtaking as they are limitless, from the limestone precipices of the Verdon Gorge to the sandstone blocs of Fontainebleau­—and let’s not overlook the granite aiguilles above Chamonix or the balmy seaside cragging of Les Calanques. Wherever your eyes land, this nation of fine food and vin rouge delivers in abundance. Lesser known are its myriad smaller crags and cliffs, places of similar grandeur where you may find yourself the only climbers not speaking French—or perhaps the only climbers at all.</p>
        <img className="img_bv" src={img2}/>
        <p>François Cholet and Wawa (8a/5.13b) at a developing sector, de l’Oreille, Saint-Auban. Legend holds that a hermit lived in the mountain’s caves, such as the one seen in this photo, and was the area’s first climber.</p>
        <img className="img_bv" src={img3}/>
        <p>Benoît Yerly and David Denis are drawn to l’Attraction Désastre (7a/5.11d; 7 pitches), on the Mediterranean, Cap Canaille, between Cassis and La Ciotat. The 90-million-year-old rock of Cap Canaille is a mixed bag of sandstone, limestone, and conglomerate, or “puddingstone.” Climbing on the 1,000-plus-foot cliff is as unusual as the rock, says the photographer Sam Bié: “Alone, facing the Mediterranean, on rock with extraordinary shapes, the climbing is unique.”</p>
        <img className="img_bv" src={img4}/>
        <p>Clément Hilger and Hélène Devofelarere soar with the gulls, La Traversée des Parpelles (4a/5.5) on the Bec de l’Aigle (Beak of the Eagle), a promontory at Cap Canaille that drops 500 feet on one side to the town of Ciotat and overlooks a luxury-yacht yard on the other. “The route is easy,” says Bié, but with the exposure “we were really happy to be roped.” </p>
        <img className="img_bv" src={img5}/>
        <p>Antoine Lorton and Morgan Dallongeville on l’Éperon de l’Ermitage (5c/5.9) at Mont Sainte- Victoire in the south of France. The mountain’s startling geology has inspired artists like Kandinsky, Cézanne, and Picasso.</p>
        <img className="img_bv" src={img6}/>
        <p>Arnaud Petit, Courage Fuyons (7a/5.11d) at Buoux, France, one of the world’s first—early 1980s— sport crags. Initially overrun by climbers, its sharp, technical limestone/sandstone routes have fallen out of fashion in favor of steeper, thuggier climbing. Upside: no crowds.</p>
        </div>
    )
}
export default France;