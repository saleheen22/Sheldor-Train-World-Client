import React, { useEffect } from 'react';
import founder from '../../../assets/Sheldon/sheldon.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Founder = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        
            
        <div data-aos="fade-up">

<div className='my-16 '>
          <h2 className='text-6xl text-center  text-orange-500'> <span className='mx-5'>Know Our Founder</span></h2>
          </div>

          <div className='grid md:grid-cols-2 gap-6 bg-orange-400 pb-16'>
            <div>
                <img src={founder} alt="" />
            </div>
            <div>
                <h2 className='text-2xl pt-7'>Sheldon Cooper aka Sheldor</h2>

                <p className='pt-20'>Sheldon Cooper, a brilliant and eccentric person. He has captivated people with his unparalleled intellect, peculiar idiosyncrasies, and unwavering passion for trains.  It is his undeniable fascination with trains that adds an intriguing layer to his already complex personality.
<br />
<br />
For Sheldon, trains are not just a mere interest or hobby; they are an integral part of his life. His love for trains extends far beyond casual admiration, reaching a level of obsession that borders on the extraordinary. From his meticulously curated collection of train memorabilia to his encyclopedic knowledge of locomotive history, Sheldon's devotion to all things trains is unparalleled.
<br />
<br />
Whether it be the precise measurements of a steam engine's pistons or the intricate workings of a modern high-speed rail system, Sheldon's thirst for knowledge is insatiable. He spends countless hours engrossed in books, documentaries, and online forums, absorbing every minute detail about trains and their engineering marvels. His room serves as a veritable shrine to trains, adorned with model locomotives, vintage posters, and meticulously organized train schedules.
<br />
<br />
Beyond his intellectual pursuits, Sheldon finds solace and comfort in the rhythmic motion of trains. Their predictable movements and soothing rumble have a calming effect on him, providing respite from the chaos of the outside world. The sheer thought of embarking on a train journey fills Sheldon with childlike excitement and an overwhelming sense of adventure.
<br />
<br />

While his train obsession might baffle those around him, Sheldon's passion for trains serves as a refuge in a world that often perplexes him. It represents order, precision, and the beauty of human innovation—concepts that resonate deeply with his logical and analytical mind. So, as Sheldon continues to navigate the intricacies of life, trains remain an ever-present and cherished part of his enigmatic persona.</p>
            </div>
          </div>

        </div>
            

        
    );
};

export default Founder;