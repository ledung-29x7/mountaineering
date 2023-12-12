import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/Chris_Sharmas_Sleeping_Lion_Project.mp4';


const Chris_Sharmas =()=>{
    return(
        <div className="test">
            <h1>Chris Sharma's Sleeping Lion Project</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>
                If confirmed at the grade, Sharma’s ascent of Sleeping Lion makes him just one of a tiny handful of climbers to have climbed two or more F9b+ routes after Adam Ondra, Alex Megos, Stefano Ghisolfi and Seb Bouin. Remarkable, however, Sharma – now 41 years old – is the oldest climber to have climbed that grade. His ascent of Sleeping Lion comes almost exactly a decade after his first F9b+ when he made the second ascent of La Dura Dura at Oliano, Spain. His last major first ascent was El bon Combat (F9b/+) way back in 2015.
            </p>
            <p>
                Sharma bolted and started trying the project back in 2021. In December of last year, he climbed his ‘side-project’ and neighbouring route, La Reina Mora (F9a). Along with the famous La Rambla (F9a+) and La Reina Mora, Sleeping Lion is the only other route on that area of the cliff.  Sharma describes Sleeping Lion as, “one of the best routes I’ve ever put up”. His first ascent comes after Sharma has spent the last few years developing his climbing wall business in Spain and, alongside his wife, raising a young family.
            </p>
            <p>
                Having made the first ascent in 2001 of Biographie at Ceuse, the first ever sport route graded F9a+, Sharma went on to make a series of impressive F9b first ascents including Jumbo Love at Clark Mountain (2008), Golpe de Estado at Siurana (2008), Neanderthal at Santa Linya (2009), First Round First Minute at Margalef (2011), Fight or Flight at Oliana (2011) and Stoking the Fire at Santa Linya (2013) before making – as previously mentioned - the second ascent of La Dura Dura (F9b+) in 2013 and the first ascent of El bon Combat (F9b/+) in 2015. In addition, Sharma has also developed numerous cutting-edge Deep Water Solo climbs (DWS) and boulder problems.
            </p>
            <p>
                Sharma also has other long-term projects in Spain including a multi-pitch route at Mont-Rebei. Back in 2008 he bolted another super-impressive line at Margalef; despite Sharma coming close to climbing the line Alex Megos made the first ascent of Perfecto Mundo (F9b+). Now, having climbed Sleeping Lion, all eyes will be on Sharma to see what he turns to next and whether he can keep his incredible form rolling.
            </p>

        </div>
    );
}
export default Chris_Sharmas;