
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/intros.css';
import IntroComponent from '../../../components/introComponent';
import Knowledge_img from '../../../img/knowledge/8.jpeg'
const overview =()=>{
    return(
        <div className='knowledges'>
            <Link className='intro' to={`/types`}>
                <IntroComponent pic="https://www.psychi.co.uk/cdn/shop/articles/Screenshot_2022-01-18_at_12.56.31.jpg?v=1690555081&width=1790" title="Type of climbing" intro='One of today’s predominant forms of mountaineering. The defining feature for classification in thi.......' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/history`}>
                <IntroComponent pic="https://magazine.washington.edu/columns_wordpress/wp-content/uploads/2017/06/MOUNTAINEERS-PSD.jpg" title="History techniques" intro='The history of various climbing and mountaineering techniques stretches as ......' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/communication`}>
                <IntroComponent pic="https://cdn.climbing.com/wp-content/uploads/2016/05/directvoicejpg.jpg?width=730" title="Communication when climbing" intro='The most common form of communication during mountaineering is simply calling with the voice....' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/terrain`}>
                <IntroComponent pic="https://mountaineeringmethodology.com/wp-content/uploads/2021/05/typy_terenu-1024x1011.jpg" title="Mountaineering terrain" intro='We can divide mountaineering terrain into various types according to several criteria.......' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/rating`}>
                <IntroComponent pic="https://mojagear.com/wp-content/uploads/2017/03/climbing-grades-explained1.png" title="Risk rating system" intro='Cliffs and rocks which have ceased to be mere training locations and.......' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/mountaineering`}>
                <IntroComponent pic={Knowledge_img} title="Mountaineering" intro='In its original meaning the term “mountaineering” describes an activity leading ........' ></IntroComponent>
            </Link>
        </div>
    )
}
export default overview;