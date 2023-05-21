import { Link } from 'react-router-dom';
import error from '../../assets/logos/favicon/404-removebg-preview.png'
const NotFound = () => {
    return (
        <div className="bg-orange-300 h-screen">
            <h2 className='text-center py-10 text-4xl'>You have come to a wrong Place !!!!</h2>
           <Link to="/"> <h2><button className='btn bg-sky-400 text-black'>Go Back Home</button></h2></Link>

            <img className='mx-auto' src={error} alt="" />
        </div>
    );
};

export default NotFound;