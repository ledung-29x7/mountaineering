import "./introComponent.css"

const introComponent = (props) =>{
    const pic = props.pic
    const title = props.title
    const intro = props.intro

    return(
        <>
        <div className='location_detail' style={{width:'300px',backgroundImage:`url(${pic})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            {/* <img className="pic" src={pic} alt={title}></img> */}
            <h4 style={{textAlign:"center",color:'#fff',padding:'70px 20px',fontSize:'20px'}}>{title}</h4>
        </div>
        <p style={{color:'#666666', fontSize:'14px', fontWeight:'400', width:'300px', margin:'0px'}}>{intro}</p>
        </>
    )
}
export default introComponent;
