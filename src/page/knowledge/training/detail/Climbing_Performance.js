import React from "react";
import '../../../css/dt.css';
import ReactPlayer from "react-player";

import img1 from '../../../../img/knowledge/trainning/Climbing_Performance/1.webp';
import img2 from '../../../../img/knowledge/trainning/Climbing_Performance/2.webp';
import img3 from '../../../../img/knowledge/trainning/Climbing_Performance/3.webp';
import img4 from '../../../../img/knowledge/trainning/Climbing_Performance/4.webp';
import img5 from '../../../../img/knowledge/trainning/Climbing_Performance/5.webp';
import img6 from '../../../../img/knowledge/trainning/Climbing_Performance/6.webp';
import img7 from '../../../../img/knowledge/trainning/Climbing_Performance/7.webp';
import img8 from '../../../../img/knowledge/trainning/Climbing_Performance/8.webp';
import img9 from '../../../../img/knowledge/trainning/Climbing_Performance/9.webp';
import img10 from '../../../../img/knowledge/trainning/Climbing_Performance/10.webp';

const Climbing_Performance =()=>{
    return(
        <div className="test">
            <h1>Use Your Pelvic Floor to Optimize Your Climbing Performance</h1>
            <p style={{fontStyle:'italic', textAlign:'center'}}>Pelvic problems are overwhelmingly prevalent—but they do not need to be accepted as part of life.</p>
            <img className="img_bv" src={img1}></img>
            <h2>Introduction</h2>
            <p>Climbing is a meditative practice—it requires unobstructed attention and focus. For many, this is the appeal of the sport. But what happens when something in your body is distracting you from the wall? At the very least it can limit your climbing performance, and, at worst, it can stop you from getting on the wall completely. Worries about leakage or pelvic pain might be annoying for some and can be debilitating for others. These experiences are so common; it is estimated that 1 in 4 females have symptoms of a pelvic floor disorder.1 Other studies estimate between 18-80% of female athletes experience urinary incontinence.2 But while pelvic problems are overwhelmingly prevalent, they do not need to be accepted as part of life. It’s just a sign that your pelvic floor, like any other muscle in your body, needs some love and attention.</p>
            <h2>Signs and Symptoms</h2>
            <p>It is likely that you or someone you know has experienced pelvic floor dysfunction. In our society, we often shy away from conversations about “the black box of the pelvis” due to the stigma surrounding it. If someone does speak up, they will often be told that these problems are common and “just the way it is” as we age or after giving birth. While these problems are common, they are absolutely not normal. Even as a young adult who has never given birth, I used to experience some pelvic dysfunction when I hopped down from a boulder problem or quickly reached for a hold. Many people stop climbing altogether when these issues appear—but it doesn’t have to be this way.</p>
            <p>So when should you be concerned? What should you look for? And what can you do about it? Let’s discuss.</p>
            <p>There are an array of possible signs and symptoms associated with pelvic floor dysfunction, many of which can be masked by pain and dysfunction in other body areas such as the low back or hips. Allow me to categorize a few base issues inorder to simplify pelvic floor dysfunction. Keep in mind that this list is non-exhaustive; if you are experiencing any pelvic-related issues not expressly outlined below please consult a pelvic floor doctor of physical therapy or physician.</p>
            <h3>Unwanted Leaking</h3>
            <p>People may be diagnosed with incontinence or overactive bladder. Leaking can be of urine, gas, or feces. This could be due to an underactive or overactive pelvic floor. It is helpful to seek the assistance of a pelvic floor physical therapist to determine the cause of leakage. This way, the correct treatments can be utilized. However, there are some pelvic floor basics, discussed later, which can be helpful for most people to master. </p>
            <h4 style={{fontStyle:'italic'}}>Symptoms: </h4>
            <ul className="ul-li">
                <li>Involuntary leakage</li>
                <li>Can occur at rest or with increased intra-abdominal pressure (exertion, coughing, sneezing, laughing)</li>
                <li>Urgency to use the bathroom </li>
                <li>Urgency with involuntary loss of urine</li>
            </ul>
            <h3>Prolapse</h3>
            <p>Otherwise known as a descent of tissues. Some may present with symptoms, others may not. Organs are intact but due to weakness or lack of support, one organ may be leaning on another depending on the type of prolapse. The body is still strong and resilient, it just needs a little extra support.</p>
            <h4 style={{fontStyle:'italic'}}>Symptoms: </h4>
            <ul className="ul-li">
                <li>Sensation of a bulge or pressure in the rectum or vagina</li>
            </ul>
            <h3>Pelvic Girdle Pain</h3>
            <p>Simple, yet complex at the same time. Pain originating from the pelvic floor may present as hip pain, low back pain, or pain in the pelvis itself. For this reason, it is important to assess all of these structures to get to the root of the issue. Pain does not always correlate with damage or injury. Pain is affected by stress, trauma, mental state, nutrition, coping strategies, social support, previous experience, and a laundry list of other factors aside from physical body structure. The experience of pain is unique to the individual so it is difficult to generalize.</p>
            <h4 style={{fontStyle:'italic'}}>Symptoms: </h4>
            <ul className="ul-li">
                <li>Pelvic pain</li>
                <li>Hip pain or tightness</li>
                <li>Thigh pain</li>
                <li>Low back pain or tightness</li>
            </ul>
            <h3>Diastasis Recti</h3>
            <h4 style={{fontStyle:'italic'}}>Symptoms: </h4>
            <p>Otherwise known as abdominal doming or coning. It is common postpartum but can affect people of any sex or gender. It is simply stretching of the fascia, or strong connective tissue, in the outermost layer of the abdominals. It is best to have this assessed by a doctor of physical therapy to determine if and how it may be impacting function.</p>
            <ul className="ul-li">
                <li>Coning of the abdomen</li>
                <li>Visible space between abdominals</li>
            </ul>
            <img className="img_bv" src={img2}></img>
            <p style={{fontStyle:'italic', textAlign:'center'}}>Click on the photo to read about the efficacy and challenges in the treatment of diastasis recti abdominis.</p>
            <img className="img_bv" src={img3}></img>
            <p style={{fontStyle:'italic', textAlign:'center'}}>Click on the photo above to learn more about pelvic health physiotherapy.</p>
            <p>Notes for pregnant or postpartum athletes:</p>
            <ul className="ul-li">
                <li>It is highly encouraged to work with a pelvic floor doctor of physical therapy throughout pregnancy and as soon as possible postpartum. This can alleviate, prevent, or reduce the severity of common complications experienced throughout pregnancy, delivery, and postpartum including tearing, pelvic pain, diastasis recti, and incontinence.</li>
                <li>Symptoms listed previously apply the same way but may require additional guidance by medical providers to manage effectively.</li>
                <li>Any abnormal pain or bleeding is a reason to seek immediate medical attention.</li>
            </ul>
            <h2>Assessment</h2>
            <h3>Abdominal Bracing</h3>
            <ul className="ul-li">
                <li>Demonstrating how you brace can give information on how your pelvic floor responds to pressure from breathing or other high-intensity tasks. It can also provide insight into the coordination and strength of the pelvic floor. If bracing provokes symptoms, then retraining this foundational movement will be helpful.</li>
                <li>To test this, you should brace your core like someone was about to jump on your stomach. Another way to think about this, if you lift weights, is to brace as if you were about to do a heavy squat. If this provokes your symptoms or if you feel like your pelvic floor is descending/moving toward the ground this could be part of the problem.</li>
                <li>A proper brace involves stiffness without bearing down. Many people find success with this by imagining drawing their hip bones together. You should still be able to breathe. Incorporating the pelvic floor properly is discussed later. </li>
            </ul>
            <h3>Hip Mobility</h3>
            <ul className="ul-li">
                <li>Tightness in muscles surrounding the pelvis has a direct impact on the pelvic floor. Many muscles in your hip, thigh, and low back directly connect to the pelvis and can contribute to pelvic dysfunction. Aside from self-reported tight hips, one way to assess your mobility is to examine your climbing. When you attempt a drop knee or high step, does your body have to move away from the wall to be successful? If so, you may benefit from the mobility exercises described later. Hip mobility is essential to both the efficient and optimal function of the pelvic floor.</li>
            </ul>
            <h3>Activity-Dependent Symptoms</h3>
            <ul className="ul-li">
                <li>If symptoms are provoked by functional movements such as coughing, sneezing, jumping, or squatting this can indicate weakness or lack of coordination of the pelvic floor. It is especially important to note if these things happen right away or if it takes some time for symptoms to present. This is just a reflection of muscle fatigue or improper motor control and is something that can significantly improve with the right exercises.</li>
            </ul>
            <h2>The Rock Rehab Pyramid</h2>
            <div style={{display:'flex'}}> 
                <div>
                    <p>The Rock Rehab Pyramid is a framework developed by Dr. Jared Vagy to help climbers self-manage climbing injuries. The pyramid consists of four phases: 1) Pain, inflammation, and tissue overload, 2) Mobility, 3) Strength, and 4) Movement. This rehabilitation and injury prevention program begins at the bottom of the pyramid and progressively advances up until you fully recover. For more science-based, injury prevention and rehabilitation information designed specifically for climbers check out the book <a href="https://theclimbingdoctor.com/product/climb-injury-free-5/">Climb Injury-Free.</a></p>
                </div>
                <div>
                <img style={{width:'300px'}} className="img_bv" src={img4}></img>
                </div>
            </div>
            <h3>Unload exercises:</h3>
            <p>1. Reduce the load</p>
            <ul className="ul-li">
                <li>If you experience leakage or discomfort when descending from a route or boulder problem, consider returning to the ground with more control. For a boulder problem that means climbing down as far as possible before dropping. On belay, have your belayer lower you to the ground slowly.</li>
                <li>Consider top roping until things are under control if you prefer to boulder.</li>
            </ul>
            <p>2. Diaphragmatic Breathing</p>
            <ul className="ul-li">
                <li>The pelvic floor responds to the actions of the diaphragm meaning that breathing is an integral component of pelvic floor rehab. Laying on your back and practicing deep belly breaths can help manage pressure on the pelvic floor and relax the muscles. This can be performed daily or as needed throughout a climbing session or the day.</li>
                <li>If you have difficulty feeling pelvic floor movement, some people have more success in sitting so they can feel their muscles expand into the surface beneath them.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/e_onUXdZBpE' width="500px" playing={false} controls={true}></ReactPlayer>
            <p>3. Control Intra-abdominal pressure</p>
            <ul className="ul-li">
                <li>If you are just learning to manage your symptoms, try to avoid holding your breath during difficult moves. Holding the breath increases pressure on the pelvic floor musculature and can result in leakage or abdominal bulging if the muscles aren’t prepared to handle that load. Utilize a slow exhale to control the pressure in your abdomen before you reach for a risky move or take a high step.</li>
            </ul>
            <p>4. Supine feet up or feet elevated bridge</p>
            <ul className="ul-li">
                <li>This recovery position can help alleviate bothersome symptoms. This position reduces the force of gravity on the pelvic floor muscles for temporary relief if your muscles become fatigued. The bridge is a progression or an option if you’re someone who doesn’t like to stay still. It has the added benefit of strengthening the glutes which are essential to maintaining pelvic floor strength.</li>
                <li>Like any other muscle, the pelvic floor muscles become fatigued and need rest breaks to work efficiently. You can spend as much or as little time in this position as you like, 5 minutes daily spread out as needed is a great goal.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/-AaVYG4JB64' width="500px" playing={false} controls={true}></ReactPlayer>
            <h3>Mobility exercises:</h3>
            <p>1. Hip Internal Rotation</p>
            <ul className="ul-li">
                <li>Obturator internus is often associated with pelvic floor dysfunction. It is an external rotator of the hip and therefore can limit internal rotation as it’s stretched. Maintaining mobility in this motion can assist in the proper balance of the hip and pelvic floor musculature. Internal rotation is also necessary for using a drop knee while climbing. This muscle can be tight even in athletes without symptoms so it is important to maintain hip mobility to optimize climbing performance.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/Y_lceWEbaP0' width="500px" playing={false} controls={true}></ReactPlayer>
            <p>2. Pelvic tilt – Cat/Cow and Child’s Pose</p>
            <ul className="ul-li">
                <li>Anterior and posterior pelvic tilts place the pelvic floor muscles in positions where one side may be facilitated and the other side inhibited. For example, tucking your hips underneath you allows the back side of the pelvic floor to contract well, while the front side can’t contract as well. However, it is important to maintain mobility and control in both of these positions for climbing. Practicing them off the wall can help you get comfortable controlling and sensing your pelvic floor when you’re on the wall. These exercises can assist in improving spinal mobility, or maintaining what you already have. They are also excellent positions to practice diaphragmatic breathing and pelvic floor contract/relax coordination.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/ZQqB_FKXNL8' width="500px" playing={false} controls={true}></ReactPlayer>
            <p>3. Adductor Stretch</p>
            <ul className="ul-li">
                <li>The hip adductors, or the muscles of your inner thigh, connect your pelvis to your knee and help bring your legs together. They have a direct impact on the pelvic floor. Often dysfunction in the pelvic floor can lead to tightness in these muscles or vice versa. Tightness in these muscles can also make it difficult to stay close to the wall when high-stepping. For both of these reasons, it is essential to maintain the mobility of the adductors.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/rVo0WLO6NFg' width="500px" playing={false} controls={true}></ReactPlayer>
            <h3>Strength exercises:</h3>
            <p>3. Adductor Stretch</p>
            <ul className="ul-li">
                <li>A common analogy used for this exercise is to think of the pelvic floor as a house. Typically, the main level is the middle resting position of the pelvic floor muscles. The attic is a contraction where you pull/lift things up. The basement is where you would bear down as if you were trying to push something out. Practicing going from the main level (relaxed) to the attic (contracted) in small steps can help you build control and coordination of the pelvic floor.</li>
                <li>An important concept is that a pelvic floor contraction is more than just a squeeze. There is a squeeze to start, but to fully engage all layers of the pelvic floor there must also be a lift. My favorite way to imagine this is a jellyfish bringing its tentacles together for the squeeze and pulling up for the lift. The bear down would be the tentacles spreading out.</li>
                <li>For strengthening the pelvic floor it is more effective to perform shorter sessions more frequently throughout the week. A minimum of 3x weekly but up to 7 is appropriate.3 Allow your pelvic floor to relax and open with an inhale (main level of the house). Then contract and lift up to the attic as you exhale. Fully relax at the end of the exhale. Accumulate 5 minutes, at least twice a day. It may take some time to fully be able to sense the contraction and relaxation but keep practicing and it will happen.</li>
                <li>As you master the exercise, practice going to the attic in smaller steps. Start with a small contraction, followed by moderate, then stronger, and finally as strong as you can. Then, climb your way back down. This will allow you to master different levels of pelvic floor contraction depending on what the situation needs.</li>
            </ul>
            <p>2. Dead Bug</p>
            <ul className="ul-li">
                <li>Don’t let the name fool you, this is an awesome exercise! It helps bring the pelvic floor control from the elevator exercise to more functional movements. For daily activities, it is important to be able to control the pelvic floor while your body is moving. A dead bug progression begins to incorporate pelvic floor coordination with the movement of the arms and legs.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/z0XuiZIYIRE' width="500px" playing={false} controls={true}></ReactPlayer>
            <p>3. Bird Dog</p>
            <ul className="ul-li">
                <li>This exercise is similar to the previous ones but targets the muscles of your back body. To maintain balance in our body it is essential to work in all directions of movement. This exercise is also one that has been found to activate the pelvic floor effectively.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/12fSWK9bxtk' width="500px" playing={false} controls={true}></ReactPlayer>
            <p>4. Adductor “Copenhagen” plank</p>
            <ul className="ul-li">
                <li>Strengthening the adductors is essential to maintaining a well-functioning pelvic floor. In most traditional workout programs there are few exercises to target the adductors despite their contribution to many functional movements. Adductors bring the legs together but also can assist the hamstrings in bending the knee and extending the hip. As one example, this is helpful for pushing down from a high step to reach the next hold.</li>
            </ul>
            <ReactPlayer url='https://youtu.be/SLeXZc_fFEM' width="500px" playing={false} controls={true}></ReactPlayer>
            <h3>Movement exercise:</h3>
            <p>1. The knack</p>
            <ul className="ul-li">
                <li>To help mitigate symptoms in the short term, the “knack” is an excellent option. The goal with this is to retrain your body to activate your pelvic floor prior to certain movements. Normally, this happens naturally but dysfunctional muscles often aren’t contributing their fair share of the effort. It is simply a quick pelvic floor contraction before events that cause leaking. For example, coughing, sneezing, laughing, jumping, or high-stepping to reach the next hold.</li>
            </ul>
            <p>2. Jumping intensity</p>
            <ul className="ul-li">
                <li>Warm up for climbing with smaller dynamic movements such as smaller jumps before progressing to explosive movements like dynos. Ensure that you use the knack before these if you experience leakage. Practice small jumps on off days or following your climbing session to retrain your body to adapt to the demands of climbing.</li>
            </ul>
            <p>3. Positioning on the wall</p>
            <ul className="ul-li">
                <li>Tipping your pelvis forward (anterior pelvic tilt) will allow the vaginal and urethral openings to close more easily. Tipping your pelvis backward (posterior pelvic tilt) will allow the rectal opening to close more easily. Paying attention to the position of your pelvis when dysfunction and symptoms arise can help you avoid provocative positions in the short term.</li>
                <li>Common climbing movements, such as a high step with the knee out, will shorten pelvic floor muscles on one side while stretching them on the other. A drop knee or deep squat will help relax the pelvic floor. While none of these movements need to be avoided completely, it can be helpful to determine which positions may provoke or alleviate your symptoms. This way you can stick with symptom-relieving positions and slowly ease back into the more difficult ones.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>Pelvic floor dysfunction is common and treatable. Addressing this area can only benefit climbers by encouraging increased hip mobility and strength, core stability, and proper breathing. If you or someone you know experiences any of the symptoms discussed, these exercises may be an excellent starting point. If you are already being treated by a pelvic floor physical therapist that is less familiar with climbing, the information discussed may be a great adjunct to your care.</p>
            <h2>See a Doctor of Physical Therapy</h2>
            <p style={{fontStyle:'italic'}}>If you have signs and symptoms consistent with pelvic floor dysfunction, or symptoms that are different from what was discussed in this article, you should consider contacting a pelvic floor doctor of physical therapy for a more thorough examination and assessment. </p>
            <p>Many of these conditions are best treated with the help of a physical therapist or OB/GYN. If you are pregnant or postpartum a pelvic floor doctor of physical therapy should be an essential member of your care team. This will ensure optimal outcomes for you and your baby, in addition to progressing your climbing goals through it all!</p>
            <p>If you experience a sudden change in bladder or bowel function, and/or abnormal or excessive bleeding seek immediate medical attention.</p>
            <h2>About the Author</h2>
            <div style={{display:'flex'}}> 
                <div>
                    <p>Sam Lemminger is a physical therapist in Fort Collins, CO. I love to treat orthopedics, pelvic health, and neuro diagnoses. I attended the University of Wisconsin – Madison for my bachelor’s degree in Exercise and Movement Science and was also on the cheerleading team. After participating in organized sports for my whole life, I was looking for new ways to stay active and started climbing. I started with bouldering but have recently been spending more time top roping. I love being on the wall because it’s therapeutic and makes me feel strong. Aside from climbing I love to run, do yoga and CrossFit, bake, and spend time outdoors.</p>
                    <p>You can connect with me on Instagram <a href="https://www.instagram.com/samlemm/">@samlemm</a> or email me at sclemminger@gmail.com.</p>
                </div>
                <div>
                <img style={{width:'300px'}} className="img_bv" src={img5}></img>
                </div>
            </div>
            <h2>About the Contributors</h2>
            <div style={{display:'flex'}}> 
                <div>
                    <p>Dr. Jared Vagy “The Climbing Doctor,” is a doctor of physical therapy and an experienced climber, has devoted his career and studies to climbing-related injury prevention, orthopedics, and movement science. He authored the Amazon best-selling book <a href="https://theclimbingdoctor.com/product/climb-injury-free-5/">Climb Injury-Free</a>, and is a frequent contributor to Climbing Magazine. He is also a professor at the University of Southern California, an internationally recognized lecturer, and a board-certified orthopedic clinical specialist.</p>
                    <p>To learn more about Dr. Vagy you can visit <a href="https://theclimbingdoctor.com/">theclimbingdoctor.com</a> or visit him on Instagram <a href="https://www.instagram.com/theclimbingdoctor/?hl=en">@theclimbingdoctor</a> or YouTube <a href="https://www.youtube.com/c/TheClimbingDoctor">youtube.com/c/TheClimbingDoctor</a></p>
                </div>
                <div>
                <img style={{width:'300px'}} className="img_bv" src={img6}></img>
                </div>
            </div>
            <div style={{display:'flex'}}> 
                <div>
                    <p>Kevin Cowell is a physical therapist, clinical instructor, and rock climber based out of Broomfield, CO. Kevin owns and operates The Climb Clinic (located at G1 Climbing + Fitness) where he specializes in rehab and strength training for climbers and mountain athletes. He found his passion for climbing in Colorado while attending Regis University for his Doctorate of Physical Therapy and has since become a Certified Strength & Conditioning Coach (CSCS), Board-Certified Orthopaedic Clinical Specialist (OCS), and a Fellow of the American Academy of Orthopaedic Manual Physical Therapy (FAAOMPT).</p>
                    <p>You can contact Kevin via email at kevin@theclimbclinic.com or by visiting <a href="https://www.theclimbclinic.com/">www.theclimbclinic.com</a>. Also, be sure to follow Kevin at <a href="https://www.instagram.com/theclimbclinic/?hl=en">@theclimbclinic</a> on Instagram for free rehab and strength training resources.</p>
                </div>
                <div>
                <img style={{width:'300px'}} className="img_bv" src={img7}></img>
                </div>
            </div>
            <div style={{display:'flex'}}> 
                <div>
                    <p>Julien Descheneaux is a master of physical therapy who dedicates himself exclusively to rock climbing injuries, having treated over 1,200 climbers. He’s been covering Quebec competitions as a certified Sport First Responder since 2014. He is also the author of the online class “Climbing injuries at the upper quadrant” for the Quebec PT Board (OPPQ) and gives regular clinics and conferences on the subject. He founded PhysioHR in 2016, the first PT clinic inside a rock climbing gym in Canada and is currently the resident PT at Bloc Shop Chabanel.</p>
                    <p>You can contact Julien via email at julienlephysio@gmail.com or by visiting <a href="https://www.physioescalade.com/">https://www.physioescalade.com/</a>.</p>
                </div>
                <div>
                <img style={{width:'300px'}} className="img_bv" src={img8}></img>
                </div>
            </div>
            <div style={{display:'flex'}}> 
                <div>
                    <p>Todd Bushman is a doctor of physical therapy, clinical instructor, Certified Strength and Conditioning Specialist (CSCS), and climber of mountain, rock, ice, and plastic. Todd is a dedicated climbing specialist based out of Bozeman, MT where he practices full time. He is actively pursuing advanced training to become a Certified Orthopedic Manual Therapist (COMT) through the North American Institute of Orthopedic Manual Therapy. Todd is also available for remote consultation regarding climbing injuries, movement analysis, and strength training.</p>
                    <p>You can contact Todd via email at todd.climbingcoach@gmail.com or visit him <a href="https://www.instagram.com/try.hard.pt/">@try.hard.pt on Instagram.</a></p>
                </div>
                <div>
                <img style={{width:'300px'}} className="img_bv" src={img9}></img>
                </div>
            </div>
            <div style={{display:'flex'}}> 
                <div>
                    <p>Carly Post is a physical therapist in Los Angeles, California. She is passionate about climbing and enjoys helping people move better and optimize their ability to participate in their lives to their fullest potential. She can be reached at carlypos@usc.edu and on Instagram at <a href="https://www.instagram.com/carlypost/">@carlypost</a></p>
                </div>
                <div>
                <img style={{width:'300px'}} className="img_bv" src={img10}></img>
                </div>
            </div>
            <h2>The Research</h2>
            <ol className="ul-li">
                <li>Wu JM, Vaughan CP, Goode PS, et al. Prevalence and Trends of Symptomatic Pelvic Floor Disorders in U.S. Women. Obstet Gynecol. 2014;123(1):141-148. doi:<a href="https://go.skimresources.com/?id=156240X1688880&isjs=1&jv=15.4.2-stackpath&sref=https%3A%2F%2Fwww.climbing.com%2Fskills%2Ftraining-pelvic-floor-athletes%2F&url=https%3A%2F%2Fdoi.org%2F10.1097%2FAOG.0000000000000057&xs=1&xtz=-420&xuuid=4d5cc86d85d00d01b804c6d2b8c7d90a&xjsf=other_click__auxclick%20%5B1%5D">10.1097/AOG.0000000000000057.</a></li>
                <li>Rebullido TR, Gómez-Tomás C, Faigenbaum AD, Chulvi-Medrano I. The Prevalence of Urinary Incontinence among Adolescent Female Athletes: A Systematic Review. J Funct Morphol Kinesiol. 2021;6(1):12. doi:<a href="https://go.skimresources.com/?id=156240X1688880&isjs=1&jv=15.4.2-stackpath&sref=https%3A%2F%2Fwww.climbing.com%2Fskills%2Ftraining-pelvic-floor-athletes%2F&url=https%3A%2F%2Fdoi.org%2F10.3390%2Fjfmk6010012&xs=1&xtz=-420&xuuid=4d5cc86d85d00d01b804c6d2b8c7d90a&xjsf=other_click__auxclick%20%5B1%5D">10.3390/jfmk6010012.</a></li>
                <li>García-Sánchez E, Ávila-Gandía V, López-Román J, Martínez-Rodríguez A, Rubio-Arias JÁ. What Pelvic Floor Muscle Training Load is Optimal in Minimizing Urine Loss in Women with Stress Urinary Incontinence? A Systematic Review and Meta-Analysis. Int J Environ Res Public Health. 2019;16(22):4358. doi:10.3390/ijerph16224358.</li>
                <li>Siff LN, Hill AJ, Walters SJ, Walters G, Walters MD. The Effect of Commonly Performed Exercises on the Levator Hiatus Area and the Length and Strength of Pelvic Floor Muscles in Postpartum Women. Urogynecology. 2020;26(1):61-66. doi:<a href="https://journals.lww.com/fpmrs/abstract/2020/01000/the_effect_of_commonly_performed_exercises_on_the.8.aspx">10.1097/SPV.0000000000000590.</a></li>
                <li>Comparative effects of selected abdominal and lower limb exercises in the recruitment of the pelvic floor muscles: Determining adjuncts to Kegel’s exercises – Journal of Bodywork and Movement Therapies. Accessed October 18, 2022. <a href="https://go.skimresources.com/?id=156240X1688880&isjs=1&jv=15.4.2-stackpath&sref=https%3A%2F%2Fwww.climbing.com%2Fskills%2Ftraining-pelvic-floor-athletes%2F&url=https%3A%2F%2Fwww.bodyworkmovementtherapies.com%2Farticle%2FS1360-8592%2821%2900212-6%2Ffulltext&xs=1&xtz=-420&xuuid=4d5cc86d85d00d01b804c6d2b8c7d90a&xjsf=other_click__auxclick%20%5B1%5D">https://www.bodyworkmovementtherapies.com/article/S1360-8592(21)00212-6/fulltext.</a></li>
            </ol>
        </div>  
    )
}
export default Climbing_Performance;