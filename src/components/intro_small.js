import "./introComponent.css"
const intro_small = (props) =>{
    const pic = props.pic
    const title = props.title

    const scrooltotop =()=>{
        return(
        window.scrollTo({
            top: 0,
            behavior: `smooth`
          })
          )}

    return(
        <div onClick={scrooltotop} className='container_small' style={{display:'flex'}}>
            <img className="picsmall" style={{width:'100px',height:'75px'}} src={pic} alt={title}></img>
            <h3 style={{textAlign:"center",color:'#000',fontSize:'13px'}}>{title}</h3>
        </div>
        
    )
}
export default intro_small;