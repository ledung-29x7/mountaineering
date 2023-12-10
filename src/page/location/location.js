import React from 'react';
import { Link } from 'react-router-dom';
import '../css/intros.css'
import IntroComponent from '../../components/introComponent';
import Taybac from '../../img/location/vietnam/north.jpg';
import Dropdown from './Dropdown';
import React, {useState} from 'react';
const Location =()=>{
    const [click, setClick]=useState(false);
    const [dropdown,setDropdown]= useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);
    const onMouseEnter = ()=>{
        if(window.innerWidth <960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    }
    const onMouseLeave = ()=>{
        if(window.innerWidth <960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }
    return(
        <div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Locations<i className='fas fa-caret-down'/></Link>
                {dropdown &&<Dropdown/>}
            </li>
        </ul>
        </div>
    )
}
export default Location;