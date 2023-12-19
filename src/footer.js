import React from 'react';
import './footer.css';
import logo from './img/logo2fff.png'


const Footer = () => {
    return (
        <footer>
            <div className='container_footer'>
                <div className='About'>
                    <p className='about_laybel'>About</p>
                    <p className='about_detail'>mountaineering - Blog specializing in climbing activities, providing necessary knowledge and tips for successful climbing trips, reviewing ideal climbing locations as well as good and quality climbing aids quantity.</p>
                    <div className='social'>
                        <a href='https://www.pinterest.com' ><i className="fa-brands fa-pinterest"></i></a>
                        <a href='https://www.facebook.com/aptech.fpt'><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
                <div className='contact'>
                    <img className='logo_footer' src={logo}></img>
                    <p className='ct'> <i class="fa-solid fa-phone"></i>  +84337302288</p>
                    <p className='ct'> <i class="fa-solid fa-location-dot"></i>  No.8-Ton That Thuyet</p>
                    <p className='ct'> <i class="fa-solid fa-envelope"></i> lechungdung29@gmail.com</p>
                </div>
                <div className='map_footer'>
                    <p className='about_laybel' >Address</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1103.8997921725936!2d105.78244912145867!3d21.02803204381706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32ecb92db%3A0x3964e6238a3bd088!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1702448444508!5m2!1svi!2s" width="400px" height="200px" title="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <label className='copyright'>Copyright <i class="fa-regular fa-copyright"></i> FPT Apptech</label>
        </footer>
    )
}
export default Footer ;