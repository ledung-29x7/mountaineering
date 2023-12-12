import React from "react";
import '../../../css/dt.css';

import img1 from '../../video/Train_for_rock/1.avif';
import video1 from '../../video/Train_for_rock/Shoulder_External_Rotation_Pull_Apart.mp4';
import video2 from '../../video/Train_for_rock/Shoulder_External_Rotation.mp4';
import video3 from '../../video/Train_for_rock/Shoulder_Internal_Rotation.mp4';
import video4 from '../../video/Train_for_rock/Jump_Squat.mp4';
import video5 from '../../video/Train_for_rock/Single_Leg_Squat.mp4';
import video6 from '../../video/Train_for_rock/Side_Plank_Lateral_Pull.mp4'
import video7 from '../../video/Train_for_rock/Side_Plank_Press.mp4';
import video8 from '../../video/Train_for_rock/Push_Up_Single_Arm_Row.mp4'

const Train_for_rock =()=>{
    return(
        <div className="test">
            <h1>How to Train for Rock Climbing and Bouldering</h1>
            <img className="img_bv" src={img1}></img>
            <p>From your forearms to your feet, you fire up a lot of different muscles when you climb. Rock climbing and bouldering require power for explosive movements, balance to traverse or move up a rock face, endurance to sustain you through long climbs, and a stable core to help you climb better and more efficiently.</p>
            <p>The best way to train for rock climbing is to spend time climbing—whether you do at the gym or the crag. Having a focused strength and endurance training plan will also translate to improvements when you’re taking on the next problem. The following exercises can be done at home and require only a resistance band. This full-body workout challenges your upper half (arms, shoulders, fingers, chest, core) and lower body (quads and glutes).</p>
            <h3>Here’s a general overview on how to train for rock climbing and bouldering:</h3>
            <ul className="ul_li">
                <li>Warm up your body: Take the time to get your body used to a range of movement.</li>
                <li>
                    Crank up the power: Climbing and bouldering require upper body strength, but don’t neglect your lower limbs.
                </li>
                <li>
                    Build endurance: Build up your endurance so your muscles don’t get fatigued too soon and so you can climb continuously on longer routes and over longer periods.
                </li>
                <li>
                    Enhance your balance: Improving your balance will help you position your body better on the wall.
                </li>
            </ul>
            <h2>Training Schedule for Rock Climbing and Bouldering</h2>
            <p>Start these exercises six to eight weeks before you plan to climb or boulder intensely. You’ll see real improvements in strength and endurance over this time. You’ll want to balance these workouts with time in the climbing gym or outdoors. If you have access to a climbing gym or climbing training tools, work on building up hand, finger and grip strength. Depending on how often you’re climbing, perform these exercises two or three times a week.</p>
            <p>To keep your energy up for hours of sustained bouldering or climbing, supplement these exercises with cardio workouts. Rowing on a machine is a good choice to work your upper and lower body. Swimming strengthens your upper body while getting your heart and lungs pumping. Whether it’s biking or working on a gym climbing machine, choose an activity you enjoy. Try to do about 30 minutes of cardio activities two to three times a week in addition to climbing time.</p>
            <h2>Training Exercises for Rock Climbing and Bouldering</h2>
            <p>Keep the following in mind as you train:</p>
            <ul className="ul_li">
                <li>
                    Make the exercises fit your body, not the other way around.
                </li>
                <li>
                    If something doesn’t feel comfortable, make modifications or skip the exercise.
                </li>
                <li>
                    Set your own pace. Increase the repetitions or add more resistance as your training progresses.
                </li>
            </ul>
            <p>Warm up: Start each workout with five to 10 minutes of easy cardio activity such as jogging or jumping jacks. Then follow the guidelines below:</p>
            <ul className="ul_li">
                <li>
                    Inhale during your initial exertion, then exhale as you return to the starting position. Make sure you breathe regularly during faster exercises.
                </li>
                <li>
                    Initially, you’ll want to rest for about 60 to 90 seconds at the end of each exercise. Reduce that rest time to between 30 and 45 seconds as you get more fit or if you want a greater cardio challenge by keeping your heart rate up.
                </li>
                <li>
                    Complete all of the exercises once, then rest for two minutes and repeat the set one or two more times.
                </li>
            </ul>
            <h3>Shoulder External Rotation to a Pull-Apart Exercise</h3>
            <p>The following three exercises warm up your rotator cuff, a group of muscles that helps stabilize your shoulder when you use your arm. The goal is to reduce the chance of a shoulder injury by getting those muscles used to, or aware, of these motions.</p>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
                    Hold a resistance band between your hands with some tension.
                </li>
                <li>
                    Extend your arms out in front of you.
                </li>
                <li>
                    Move your wrists away from each other as you widen the resistance band.
                </li>
                <li>
                    Repeat 10 times.
                </li>
            </ol>
            <p>Tips and modifications: Avoid shrugging your shoulders.</p>
            <h3>Shoulder External Rotation Exercise</h3>
            <video width='100%' controls >
                <source src={video2} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
                    Use a resistance band that you can secure at slightly above shoulder height.
                </li>
                <li>
                    Stand facing the band and grab the end of it with your left hand.
                </li>
                <li>
                    Your left elbow should be out to your side at shoulder level. Your palm should face down and out in front of you.
                </li>
                <li>
                    Move your forearm up and back so your arm now forms half of a football goal post (or a cactus arm). Try not to move your elbow as you pull up on the resistance band and return it to the original position.
                </li>
                <li>
                    Do 15-20 reps on each arm.
                </li>
            </ol>
            <p>Tips and modifications: Keep your back straight and avoid dropping your elbows. Keep your chin slightly tucked.</p>
            <h3>Shoulder Internal Rotation Exercise</h3>
            <video width='100%' controls>
                <source src={video3} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
                    Use a resistance band that you can secure at slightly above shoulder height.
                </li>
                <li>
                    Stand facing away from the band.
                </li>
                <li>
                    Grab the end of the band with your left hand; your left elbow should be out to your side at shoulder level with your forearm up at a 90-degree angle and forming half of a football goal post (or a cactus arm).
                </li>
                <li>
                    Move your arm and pull the band forward while keeping your elbow steady. Slowly return to the 90-degree angle.
                </li>
                <li>
                    Do 15-20 reps on each arm.
                </li>
            </ol>
            <p>Tips and modifications: Keep your back straight and avoid dropping your elbows.</p>
            <h3>Jump Squat Exercise</h3>
            <p>This strength exercise conditions your legs for power while climbing and falling, as well as dynamic moves. Jumping off a wall and landing is something you’ll do frequently when working on challenging bouldering problems.</p>
            <video width='100%' controls>
                <source src={video4} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
                    Start with your feet shoulder-width apart and then squat down until your thighs are at least parallel with the ground.
                </li>
                <li>
                    Keep your chest up, your feet flat and your knees over your toes.
                </li>
                <li>
                    As you come up from the squat, push through heels and explode up and jump a few inches off the ground.
                </li>
                <li>
                    Land softly and quietly, and immediately go into another squat.
                </li>
                <li>
                    Do 15-20 times.
                </li>
            </ol>
            <h3>Single-Leg Squat Exercise</h3>
            <p>This exercise works your quads and glutes while challenging your balance. It simulates climbing positions and movements you’ll make as you extend your leg to find footholds.</p>
            <video width='100%' controls>
                <source src={video5} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
            Balancing on one leg, lift and extend the opposite leg out in front of you.
                </li>
                <li>
                    Relax your shoulders and engage your abs, keeping your body weight centered over the standing leg.
                </li>
                <li>
                    Keep your arms straight out in front for balance and your chest up.
                </li>
                <li>
                    Lower yourself down into a single-leg squat.
                </li>
                <li>
                    Push into your heel on the standing leg to help you up.
                </li>
                <li>
                    Do 15 times on each leg. Rest for 30 seconds between legs.
                </li>
            </ol>
            <p>Tips and modifications: If you find this too challenging, set up a chair behind you so you’re sitting into it.</p>
            <h3>Side Plank with a Lateral Pull-Down Exercise</h3>
            <p>This exercise works several muscles you engage to pull yourself up, including your lats and shoulders. It also works your glutes and obliques to develop upper body and core strength to keep you stable.</p>
            <video width='100%' controls>
                <source src={video6} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
                    Use a resistance band that you can secure about 2 to 3 feet off the ground.
                </li>
                <li>
                    Get in the side plank position with your head facing toward the band: Lie on your side and place your elbow under your shoulder and stack your feet one on top of the other.
                </li>
                <li>
                    Hold the resistance band in your top hand and keep your shoulders perpendicular to the floor as you engage your abs. Tighten your glutes and lift your torso off the floor.
                </li>
                <li>
                    Maintain this position while pulling the band from overhead down toward your shoulder, stopping when your elbow is near the side of your ribs. Be sure to keep tension in the band from the extended position to the tucked position.
                </li>
                <li>
                    Do 15 reps on each side.
                </li>
            </ol>
            <p>Tips and modifications: If this is too challenging, you can modify the exercise by crossing your top leg in front of your lower leg, or going down onto knees.</p>
            <h3>Side Plank with Overhead Press with Band Exercise</h3>
            <p>This exercise works on your deltoids, upper trapezoid and triceps to help you pull yourself up.</p>
            <video width='100%' controls>
                <source src={video7} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
                    Use a resistance band that you can secure about 2 to 3 feet off the ground.
                </li>
                <li>
                    Get in the side plank position with your head facing away from the band: Lie on your side and place your elbow under your shoulder and stack your feet one on top of the other.
                </li>
                <li>
                    Hold the resistance band in your top hand and keep your shoulders perpendicular to the floor as you engage your abs. Tighten your glutes and lift your torso off the floor.
                </li>
                <li>
                    Maintain this position while pressing the band from shoulder height up overhead, locking out the elbow.
                </li>
                <li>
                    The band should have tension throughout the movement.
                </li>
                <li>
                    Do 15 times each side. Rest for 30 seconds between sides.
                </li>
            </ol>
            <p>Tips and modifications: If this is too challenging, you can modify the exercise by crossing your top leg in front of your lower leg, or going down onto knees.</p>
            <h3>Pushup with Single Arm Row Exercise</h3>
            <p>This exercise works your arms and shoulders for stronger climbing. The pushups strengthen your pecs and triceps while the arm rows focus on your lats and biceps.</p>
            <video width='100%' controls>
                <source src={video8} type="video/mp4"></source>
            </video>
            <ol className="ul_li">
                <li>
                    Begin in a pushup position with hands on dumbbells and feet set wide apart.
                </li>
                <li>
                    Lower your body down in a straight line. After you push back up, row one elbow back, bringing the dumbbell up toward the rib cage.
                </li>
                <li>
                    Return dumbbell to ground and do another pushup.
                </li>
                <li>
                    Row the other elbow back, bringing the dumbbell up toward the opposite rib cage.
                </li>
                <li>
                    Maintain a plank position throughout the exercise by keeping the body straight from head to toe. Do not let hips rotate; keep chin slightly tucked looking at the ground ahead of you.
                </li>
                <li>
                    Do 10-15 reps on each arm.
                </li>
            </ol>
            <p>Tips and modifications: If you are unable to maintain a stable trunk while on your feet, drop to the knees to complete the exercise.</p>
        </div>
    )
}
export default Train_for_rock;