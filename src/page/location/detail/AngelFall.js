import Maps from '../../../components/maps';
import img1 from '../../../img/location/Angel Fall/1.jpg';
import img2 from '../../../img/location/Angel Fall/2.jpg';
function AngelFall(){
    return (
        <body>
            <h1>Angel Fall Mount</h1>
            <h3>1. Geographical location</h3>
            <p>The waterfall has been known as Angel Falls since the mid-20th century; they are named after Jimmie Angel, a U.S. aviator, who was the first person to fly over the falls. Angel's ashes were scattered over the falls on 2 July 1960.</p>
            <img src={img1}></img>
            <span>Angel Falls, Bolívar State, Venezuela</span>
            <p>The common Spanish name Salto Ángel derives from his surname. In 2009, President Hugo Chávez announced his intention to change the name to the purported original indigenous Pemon term ("Kerepakupai-Merú", meaning "waterfall of the deepest place"), on the grounds that the nation's most famous landmark should bear an indigenous name. Explaining the name change, Chávez reportedly said, "This is ours, long before Angel ever arrived there... this is indigenous land." However he later said that he would not decree the change of name, but was only defending the use of Kerepakupai Vená.</p>
            <h3>2. Climbing in Angel Fall</h3>
            <p>The aim of this classic expedition to Venezuela is to climb the tabletop mountain (tepui) of Auyán-tepui and to abseil down the world’s highest waterfall, Angel Falls.</p>
            <p>To get to the summit you and the team will first undertake a trek through the Canaima National Park, along the route which was charted in 1937 when American aviator and adventurer Jimmie Angel was forced to descend through the jungle on foot to reach civilisation after he crash-landed on the summit.</p>
            <img src={img2}></img>
            <Maps name="Angel Fall" ggmap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.093684444919!2d-62.53671196120631!3d5.968913548503975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dc6be717030a879%3A0x73210e8bf60fdfe7!2zVGjDoWMgbsaw4bubYyDDgW5nZWw!5e0!3m2!1svi!2s!4v1702833799493!5m2!1svi!2s"></Maps>
        </body>
    );
}
export default AngelFall;