import React from "react";
import './contact.css'
const Contact =()=>{
    return(
        <div className="contact_container">
        <div className="contact_ct">
            <h2 className="h2_contact">Contact</h2>
            <label>Our Address:</label><br/>
            <p><strong>8 Ton That Thuyet Street, My Dinh Ward, Tu Liem District, Hanoi</strong></p>
            <label>Email us :</label><br/>
            <p><strong>lechungdung29@gmail.com</strong></p><br/>
            <label>Phone:</label><br/>
            <p><strong>+84337302288</strong></p>
        </div>
        <div className="contact_form">
            <h2 className="h2_contact">Send us your questions</h2>
            <form>
                <input className="input " type="text" required placeholder="Your name"></input><br/>
                <input className="input " type="email" required placeholder="Your email"></input><br/>
                <input className="input " type="phone" required pattern="[0-9]{10,12}" placeholder="Your phone"></input><br/>
                <textarea style={{padding:'20px'}} className="input " placeholder="Content"></textarea><br/>
                <button className="contact_button">SEND US</button>
            </form>
        </div>
        </div>
    );
}
export default Contact;