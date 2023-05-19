
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from '../../../assets/gallery/transparent1.png'
import img2 from '../../../assets/gallery/transparent2.png'
import img3 from '../../../assets/gallery/transparent3.png'
import img4 from '../../../assets/gallery/transparent4.png'
import img5 from '../../../assets/gallery/transparent5.png'
import img6 from '../../../assets/gallery/transparent6.png'
// import img7 from '../../assets/gallery/transparent7.png'
// import img8 from '../../assets/gallery/transparent8.png'
// import img9 from '../../assets/gallery/transparent9.png'
// import img10 from '../../assets/gallery/transparent10.png'
// import img11 from '../../assets/gallery/transparent11.png'
// import img12 from '../../assets/gallery/transparent12.png'



import './Gallery.css';

const Gallery = () => {
    return (
        <div className='pt-32'>
            <h2 className='w-name text-center pb-24 text-7xl text-orange-400'>Our Collections</h2>
            <Carousel className='bg-orange-400 object-contain image1'>
                <div >
                    <img src={img1} />
                    
                </div>
                <div >
                    <img src={img2} />
                    
                </div>
                <div >
                    <img src={img3} />
                   
                </div>
                <div >
                    <img src={img4} />
                   
                </div>
                <div>
                    <img src={img5} />
                   
                </div>
                <div>
                    <img src={img6} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Gallery;