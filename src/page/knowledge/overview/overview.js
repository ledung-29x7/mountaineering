
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/intros.css';
import IntroComponent from '../../../components/introComponent';
import Knowledge_img from '../../../img/knowledge/8.jpeg'


// array

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
    {
        pic : "https://mountaineeringmethodology.com/wp-content/uploads/2021/05/typy_terenu-1024x1011.jpg" ,
        title : "Mountaineering terrain" ,
        intro : 'We can divide mountaineering terrain into various types according to several criteria.......',
        pages: '/terrain'
    },
    {
        pic : "https://mojagear.com/wp-content/uploads/2017/03/climbing-grades-explained1.png",
        title : "Risk rating system",
        intro : 'Cliffs and rocks which have ceased to be mere training locations and.......',
        pages : '/rating'
    },
    {
        pic:'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-image-of-mountaineering-in-japan_18th-jan.jpg',
        title:"Mountaineering",
        intro:'In its original meaning the term “mountaineering” describes an activity leading ........',
        pages : '/mountaineering'
    }


]


const overview =()=>{
    return(
            <div className='knowledges'>
            {posts.map((post)=>(
                <Link className='intro' to={post.pages}>
                    <IntroComponent pic={post.pic} title={post.title} intro={post.intro} ></IntroComponent>
                </Link>
            ))}
            </div>  
    )
}
export default overview;