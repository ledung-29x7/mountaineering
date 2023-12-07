import "./introComponent.css"

const intro_related = (props) =>{
    const pic = props.pic
    const title = props.title
    const intro = props.intro

    return(
        <div className='location_detail' style={{width:'300px',backgroundImage:`url(${pic})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            {/* <img className="pic" src={pic} alt={title}></img> */}
            <h4 style={{textAlign:"center",color:'#fff',padding:'70px 20px',fontSize:'20px'}}>{title}</h4>
        </div>
        
    )
}
export default intro_related;