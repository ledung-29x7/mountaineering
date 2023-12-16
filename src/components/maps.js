import React from "react";

const Maps=(props)=>{
    const name = props.name;
    const ggmap = props.ggmap
    return(
        <div>
        <h2>Location of {props.name}</h2>
        <iframe className="maps" src={props.ggmap} width="600" height="450" title="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default Maps;