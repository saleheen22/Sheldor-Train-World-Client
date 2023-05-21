import './Banner.css';
import banner from '../../../assets/gallery/banner-transparent.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div className='bg-sky-400 grid grid-cols-1 md:grid-cols-2' data-aos="fade-up">
            <div className='text-black p-8 pt-36 text-justify ml-8 pb-2 order-last md:order-first '>
                <p className=' w-name'>Welcome to Sheldor Train World, the ultimate online destination for enchanting train toys that will spark your child's imagination! As parents, we know the joy and wonder that trains bring to little ones. That's why we've curated a captivating collection of miniature railways, locomotives, carriages, and track sets that are sure to delight and inspire young minds.

                    At Sheldor Train World, we believe in the power of imaginative play and its role in child development. Our high-quality and beautifully crafted toys are designed to foster creativity, problem-solving skills, and hand-eye coordination in a fun and engaging way.

                    Join us in creating unforgettable moments as you and your child embark on exciting train adventures together. Watch as their eyes light up with joy as they build and explore their own miniature world. With Sheldor Train World, the magic of trains is just a click away.

                    Shop now and let the journey begin!
                   <p className='pt-10'>
                   <button className='btn bg-orange-400 border-hidden '>Shop Now</button>
                   </p>
                    </p>
            </div>
            <div className='p-8 mx-auto'>
                     <img src={banner} alt="" />
            </div>
       
        </div>
    );
};

export default Banner;