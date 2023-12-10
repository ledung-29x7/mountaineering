import {Link} from 'react-router-dom';
import Alpine from './Alpine';
import AmericanAlpineClub from './AmericanAlpineClub';
import TheJapanMountaineeringAssociation from './The JapanMountaineeringAssociation';
import TheHimalayanClub from './TheHimalayanClub';
import TheNewZealandAlpineClub from './TheNewZealandAlpineClub';
import img1 from "./Alpine/albt.jpg";
import img2 from "./American Alpine Club/AAC1.jpg";
import img3 from "./The Himalayan Club/THC1.jpg";
import img4 from "./The Japan Mountaineering Association/jp1.jpg";
import img5 from "./The NewZealand Alpine Club/nz1.png";
import IntroComponent from '../../components/introComponent';


const Climbung_clubs =()=>{
    return(
        <div>
            <Link className='intro' to={`/Alpine`}>
                <IntroComponent pic={img1} title="The Alpine Club is the world’s first mountaineering club, founded in 1857." intro='The Alpine Club is the world’s first mountaineering club, founded in 1857. It has been at the forefront of worldwide mountaineering development and exploration for over 150 years ....' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/AmericanAlpineClub`}>
                <IntroComponent pic={img2} title="The American Alpine Club is a non-profit member organization" intro='The American Alpine Club is a non-profit member organization with more than 24,000 members....' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/TheJapanMountaineeringAssociation`}>
                <IntroComponent pic={img3} title="The Japan Mountaineering Association (JMA) is a non-profit organization" intro='The Japan Mountaineering Association (JMA) is a non-profit organization that promotes mountaineering and climbing in Japan.....' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/TheHimalayanClub`}>
                <IntroComponent pic={img4} title="The Himalayan Club is a mountaineering club founded in 1928" intro='The Himalayan Club is a mountaineering club founded in 1928 with the objective of encouraging and assisting Himalayan....' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/TheNewZealandAlpineClub`}>
                <IntroComponent pic={img5} title="The New Zealand Alpine Club is a non-profit organization" intro='The New Zealand Alpine Club is a non-profit organization that specializes in mountaineering....' ></IntroComponent>
            </Link>
        </div>
    )
}
export default Climbung_clubs;