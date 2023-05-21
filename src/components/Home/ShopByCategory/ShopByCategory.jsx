import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../ShopByCategory/ShopByCategory.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../provider/AuthProvider";

const ShopByCategory = () => {
    const {user}  = useContext(AuthContext);
    useEffect(()=>{
        Aos.init();
    },[]);
    const [toy, SetToy] = useState([]);

    const handleView = () => {
        alert("You have to log in first to view details");
    }

    const allbullet = toy.filter(blt => blt.type == "bullet");

    const allsteam = toy.filter(stm => stm.type == "Steam Engine");

    const alldisney = toy.filter(dsn => dsn.type == "Disney");

    console.log(alldisney);


    useEffect(() => {
        fetch('https://toy-marketplace-server-side-muntasaleheen-gmailcom.vercel.app/toy')
            .then(res => res.json())
            .then(data => SetToy(data));
    }, [])


    return (
        <div className='text-center w-name' data-aos="fade-down">
            <h1 className='p-8 text-5xl'>Toy Categories</h1>
            <Tabs selectedTabClassName="active mb-10">
                <TabList className="text-3xl">
                    <Tab >Bullet</Tab>
                    <Tab>Steam</Tab>
                    <Tab>Disney</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 tabs-content'>
                        {
                            allbullet.map(bullet => (
                                <>

                                    <div className="card card-side bg-base-100 shadow-2xl mr-10 mb-10">
                                        <figure className='img-color'><img src={bullet?.img} alt="Movie" /></figure>
                                        <div className="card-body bg-sky-400">
                                            <h2 className="card-title">{bullet.name}</h2>
                                            <p>Price: $<span>{bullet.price}</span></p>
                                            <p>Rating: <span>{bullet.rating}</span><span>
                                            <Rating readOnly = {true} style={{ maxWidth: 250 }} value={bullet.rating} />
                                                </span></p>
                               {
                                user ? <>
                                             <div className="card-actions justify-end">
                                              
                                              <Link to={`/toy/${bullet._id}`}><button className="btn border-none text-black bg-orange-400">View Details</button></Link>
                                              </div>
                                </>
                                :
                                <>
                                             <div onClick={()=> handleView()} className="card-actions justify-end">
                                              
                                              <Link to={`/toy/${bullet._id}`}><button className="btn border-none text-black bg-orange-400">View Details</button></Link>
                                              </div>
                                </>
                               }
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 tabs-content'>
                        {
                            allsteam.map(bullet => (
                                <>

                                    <div className="card card-side bg-base-100 shadow-2xl mr-10 mb-10">
                                        <figure className='img-color'><img src={bullet?.img} alt="Movie" /></figure>
                                        <div className="card-body bg-sky-400">
                                            <h2 className="card-title">{bullet.name}</h2>
                                            <p>Price: $<span>{bullet.price}</span></p>
                                            <p>Rating: <span>{bullet.rating}</span><span>
                                            <Rating readOnly = {true} style={{ maxWidth: 250 }} value={bullet.rating} />
                                                </span></p>
                            {
                                user ? <>
                                                <div className="card-actions justify-end">
                                           
                                           <Link to={`/toy/${bullet._id}`}><button className="btn border-none text-black bg-orange-400">View Details</button></Link>
                                           </div>
                                </> :
                                <>
                                                <div onClick={()=> handleView} className="card-actions justify-end">
                                           
                                           <Link to={`/toy/${bullet._id}`}><button className="btn border-none text-black bg-orange-400">View Details</button></Link>
                                           </div>
                                </>
                            }
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 tabs-content'>
                        {
                            alldisney.map(bullet => (
                                <>

                                    <div className="card card-side bg-base-100 shadow-2xl mr-10 mb-10">
                                        <figure className='img-color'><img src={bullet?.img} alt="Movie" /></figure>
                                        <div className="card-body bg-sky-400">
                                            <h2 className="card-title">{bullet.name}</h2>
                                            <p>Price: $<span>{bullet.price}</span></p>
                                            <p>Rating: <span>{bullet.rating}</span><span>
                                            <Rating readOnly = {true} style={{ maxWidth: 250 }} value={bullet.rating} />
                                                </span></p>
                                {
                                    user ? <>
                                    
                                    <div className="card-actions justify-end">
                                          
                                          <Link to={`/toy/${bullet._id}`}><button className="btn border-none text-black bg-orange-400">View Details</button></Link>  
                                          </div>
                                    </> :
                                    <>
                                                <div onClick={()=> handleView()}  className="card-actions justify-end">
                                          
                                          <Link to={`/toy/${bullet._id}`}><button className="btn border-none text-black bg-orange-400">View Details</button></Link>  
                                          </div>
                                    </>
                                }
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default ShopByCategory;