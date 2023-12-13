import React from "react";
import '../../../css/dt.css';
import Related_articles from "../../../../components/Related_articles";
import img1 from '../../../../img/photos/StoneNudes/1.webp';
import img2 from '../../../../img/photos/StoneNudes/2.webp';
import img3 from '../../../../img/photos/StoneNudes/3.webp';
import img4 from '../../../../img/photos/StoneNudes/4.webp';
import img5 from '../../../../img/photos/StoneNudes/5.webp';

const StoneNudes =()=>{

    const posts =[
        {
            pic:"./photos/3.webp",
            title:"How Climbing Holds are Made",
            intro:"Stone Age, the hold supplier for Touchstone climbing gyms, gives us a behind-the-curtain look at how holds are made.",
            pages:"/How-Climbing-Holds-are-Made"
        },
        {
            pic:"./photos/4.jpeg",
            title:"France: Land of Wine, Cheese, and Beautiful, Rarely Visited Crags",
            intro:"France’s geologic wonders are as breathtaking as they are limitless, from the limestone precipices of the Verdon Gorge to the sandstone blocs of Fontainebleau­...",
            pages:"/France-Land-of-Wine-Cheese-and-Beautiful-Rarely-Visited-Crags"
        },
        {
            pic:"./photos/5.jpeg",
            title:"Greatest Climbing Photos of 2021",
            intro:"the photographer Jan Novak, “makes me dream about traveling far, meeting new people, and drinking beer as the sun sets after a day of discovering new sectors.” ",
            pages:"/Greatest-Climbing-Photos-of-2021"
        },
    ]
    return(
        <div className="test">
        <h1>Stone Nudes Are Coming Back! Dean Fidelman Reveals All (in an interview)</h1>
        <img className="img_bv" src={img1}/>
        <p>At 66, Dean Fidelman, one of the original Stonemasters, has lived enough life to know when it’s time to embark on another phase as an artist. He’s also known—and photographed— some of Yosemite’s most iconic climbers, including Lynn Hill, Dean Potter, and Tom Frost. And he recently launched his fifth Kickstarter for the 21st edition of his Stone Nudes calendar.</p>
        <p>Fidelman thought he’d moved on from Stone Nudes after making his 20th calendar in 2019, but the circumstances of the pandemic ended up drawing him back to this emotional exploration of bodies in landscapes. This time, he’s partnering with Catrina Dacosta, a gifted emerging climber and artist taking after his footsteps. He also shifted to digital four years ago, after Renan Ozturk gave him a Sony camera—which has allowed him to incorporate color into a project that was previously black and white.</p>
        <p>I caught up with Fidelman by phone, and we talked about his continued journey into what he calls deconstruction–how this edition of Stone Nudes is yet another branching exploration of his lifelong fascination with the human form at play in the natural world. Our interview has been edited for length and clarity.</p>
        <img className="img_bv" src={img2}/>
        <p><strong>Climbing: </strong>Can you tell me about photographing the Stonemasters?</p>
        <p><strong>Fidelman: </strong>Chris Wagner lent me a Bronica camera around 1977. It was one of those old square cameras that you had to look down into, and [it] was all wrong for climbing but good for rich and beautiful photographs. Around the ‘70s we were all reading Carlos Castaneda, all trying to free climb and solo. I was not great at climbing––I was pretty good––but because I understood soloing and bouldering, the climbing photographic process made sense to me and felt very natural. This was still all construction, not yet deconstruction. Figuring out the foundation and getting it to make sense. Around then I was also working at Foto Carrier. At the time it was the only black-owned photo lab in Los Angeles. They were flexible, let me come and go, and didn’t mind that I was high [so long as] I did good work. On Monday mornings, I’d soak my hand covered with gobis in the stop bath, which is essentially sodium, to clean them out.</p>
        <p><strong>Climbing: </strong>I’d love to hear about your roots as an artist.</p>
        <p><strong>Fidelman: </strong>Deconstruction is important to me, in terms of examining my process. It all goes back to influence, and how you find it. Growing up you’d see certain photographers’ work, mostly in books or exhibitions. Early work that made an impression on me included Ansel Adams, Glen Denny, Tom Frost. They were all influenced by the masters. Climbing and photography both started for me around the age of 15. </p>
        <p>Ego is an important driver, especially for artists. They say you largely have five options to take as a person: bad, average, good, great, and elite. I remember when another young photographer told me that he thought my work was “good.” “Fuck you,” I said, “Your stuff is also good. So you think we’re at the same level?” “No, that’s not what I mean,” he said. It’s that kind of ego that either drives you forward or keeps you from progressing. You have to be super honest with yourself. As an artist, if you want to grow, you have to be honest.</p>
        <p><strong>Climbing:</strong>What does climbing look like for you these days?</p>
        <p><strong>Fidelman:</strong>Climbing is just movement and fun for me. Pushing grades was never really my thing. But since I live in Yosemite I get out pretty often. What upsets me, honestly, is how no one is advocating for the dirtbags––no one’s fighting the establishment. Everyone wants to partner with NPS. No one’s fighting against permit systems or reservations. </p>
        <p><strong>Climbing: </strong>You recently designed the Yosemite Climbing Museum? What was that like?</p>
        <p><strong>Fidelman: </strong>After seeing a lot of art in museums, I realized that there are three or four things that make up each generation’s portfolio. I wanted to figure out what the correlations are and whether there’s a generational linkage. What I found for Yosemite are climbing photographs, landscapes, and photographs of people hanging out. Together, those give you the big picture. The goal of a photograph, and of a museum, is to show the big picture through those details.</p>
        <p>Within the gallery itself, I brought in the still-life photography experience I had in New York. For the displays and display cases, you need to see the shadows, so I brought in slabs of granite. Putting the museum together let me dig into the history. There was a photo of Glen Denny from the mid 1960s, where everyone was gathered around a topo near a car, a pack of Marlboros in the frame. In the 1970s, Richard Harrison was drawing a topo on top of the hood of a car, smoking a cigarette. The same elements. Climbers never want to be too far from their cars.</p>
        <img className="img_bv" src={img3}/>
        <p><strong>Climbing: </strong>When were you in New York?</p>
        <p><strong>Fidelman: </strong>The only wrong turn I had was thinking that I needed to make money. In the 1980s, I went there to work in fashion and editorial photography, but I ended up doing still-life. There was a studio system, where everyone worked within studios––photographing lawnmowers, exercise equipment, whatever. They liked me, how I was a dude from LA. There were all kinds of influences. I went to the same parties as Robert Maplethorpe and was in his loft where you could see his images. Seeing all of that, the person making the images, helped me understand what you needed to bring to really make something. I learned that you don’t need much equipment to make a compelling photo.</p>
        <p>The time I spent shooting fashion taught me everything I needed to know about working with people, and it set a base for Stone Nudes. When you’re making a fashion photo, it’s obviously about more than clothes––it’s the feeling and the story. It has to be compelling. This got me interested in the mood, emotion, and psychology of photographing people. Which is how you can become more intimate with the image itself. I also went to a lot of therapy in New York. We got into the psychology of relationships, unpacking family dynamics, codependency, gender roles. I started to unpack how you think about things, the deconstruction. Like, “having an open mind”—what does that even mean?</p>
        <p>In the 1990s, I left New York after Lynn Hill called me and said that I should start making climbing photos again. I started playing around with portraits, took photos of her, Dean Potter, my friends. Hanging in the valley again felt right. I didn’t have shit then, don’t need it now.</p>
        <p><strong>Climbing: </strong>What was it like going back west?</p>
        <p><strong>Fidelman: </strong>The first Stone Nudes came around in 1999. I was sober when I returned to Yosemite Yosemite, and after all that therapy I saw how everyone around me was textbook codependent. There are times in life when you realize how you can never really go back because everything has changed. But certain things will always remain the same. Back in Yosemite, I realized that there were different ways of doing things. I could approach people in a professional way, or do it the same way as I had in the past, hanging out. They’re my friends, and to make those kinds of intimate photos you have to be on the same level.</p>
        <p>After the first couple of seasons, I figured out how to illegally bivy, and spent a lot of time hanging out with Dean Potter. The first time around, I was spending time with elite people. Now, I realized I was with great people who would become elite.</p>
        <p><strong>Climbing: </strong>Did you ever work commercially, with brands?</p>
        <p><strong>Fidelman: </strong>The reason why commercial photography never really happened for me was because I was never really all in. The early stuff, my climbing photos, that was all in. In the fashion and editorial world, you need to be hanging out with the editors, photographers, hair and makeup people—they’re your world. And that just wasn’t for me. Don’t get greedy, don’t start making photos you don’t want to make. I wanted to stay true to my style. I had a good connection with The North Face through friends, but they’re looking for something different from what I have to offer. Also, since there’s money involved, they’ll have a say in how they want things to work and fit in with their brand. For example, they [TNF] were asking for 35mm transparencies. But I shoot with a Pentax 6×7. [So it wasn’t going to work.]</p>
        <p><strong>Climbing: </strong>What’s it been like to transition to digital?</p>
        <p><strong>Fidelman: </strong>Artistically, it’s reeducation. I’m close to being a dinosaur and have been learning from YouTube. Digital means becoming a designer, you’re designing images. With film, the individual grains of the image are all interlocked. Digital lets you reinterpret what was there; how the sensor works means the image is broken up into pixels. But in a way, they’re not interlocked––each pixel sees its own thing. You can have a photo with completely restitched pixels. So now I’m working on how to ‘think like a pixel,’ and thinking about color theory, composition… I want my photos to bring every element together in a way that’s beautiful. Digital allows you to do everything right, exactly how you want it.</p>
        <p>People now—especially Jimmy Chin, Mikey Schaffer, Corey Rich—are making images of the Milky Way. I’m thinking, let’s go. You could put a nude in that majestic landscape. Mikey in particular has been nice in explaining things to me. I think about Bernardo Bertolucci, his movie Stealing Beauty, how it becomes increasingly voyeuristic. Similarly, my pictures all need a little magic or whimsy.</p>
        <img className="img_bv" src={img4}/>
        <p><strong>Climbing: </strong>What does your community look like these days?</p>
        <p><strong>Fidelman: </strong>In the Stone Monkey era, everyone was young and on the rise, but people started dying off. Those are the people who were supposed to be around. And then there’s also the temporal nature of my romantic relationships: When someone leaves I feel very abandoned. There are a few people who really understand me, but it has felt like I was always speaking a different language. It’s the artist’s way, in a sense. But I like that the definition of an artist is changing. The inclusion. Over time, it will resonate better. The art of inclusion hasn’t found its footing yet. The inclusion effort has commercial and altruistic roots, which is good of course, but they’ll resonate [better] when people have genuine, self-motivated experiences.</p>
        <p><strong>Climbing: </strong>Do you teach or mentor other photographers?</p>
        <p><strong>Fidelman: </strong>I want to give clinics or workshops to other climbing artists, talk about creativity, style, direction. Help other people shape their processes by sharing my own. If we want our art to resonate within our culture, there needs to be encouragement. Criticism shouldn’t be negative; [it should focus on] how to make it better. I met Catrina [his partner for this edition of Stone Nudes] through a friend––she’s gifted. No one can do the same exact thing, but you can still do something original and beautiful. I have my own plan; I’ve been working on it my whole life. If this is what you’ve given your life to, continue giving your life to it.</p>
        <p><strong>Climbing: </strong>Tell me more about that relationship between ego and art.</p>
        <p><strong>Fidelman: </strong>If you’re honest with your art, at some point you have to be honest with yourself. About a year before Dean died, we were talking about how all these wingsuiters had perished that year. I was saying that I couldn’t figure out why. Dean said that it wasn’t equipment failure, it was ego; that’s what will drive you forward, get you killed, or keep you from progressing.</p>
        <p>If you are going to gain any self-awareness in your art, you need to know what you’re going to do and what you’re making. Have a plan. For me, all this technique is to elicit an emotional response. The photographs are intimate, not cold, despite the majestic landscape. This is also why I started writing captions, for context, so people can get a sense of what went into making the photo.</p>
        <img className="img_bv" src={img5}/>
          {/* related articles */}
          <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default StoneNudes;