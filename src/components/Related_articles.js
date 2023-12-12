import React from "react";
import IntroComponent from "./introComponent";
import { Link } from "react-router-dom";
const Related_articles=(props)=>{
    var posts = props.posts
    const scrooltotop =()=>{
        return(
        window.scrollTo({
            top: 0,
            behavior: `smooth`
          })
          )
    }
    return(
        <div onClick={scrooltotop}>
            <h1 className='items'>Related articles</h1>
            <div style={{display:'flex'}}>
                {posts.map((post)=>(
                    <Link className='intro' to={post.pages}>
                        <IntroComponent pic={post.pic} title={post.title} intro={post.intro} ></IntroComponent>
                    </Link>
                ))}
                </div>
        </div>
    )
}
export default Related_articles;