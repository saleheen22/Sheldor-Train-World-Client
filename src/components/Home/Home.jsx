
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banner';
import Founder from './Founder/Founder';
import Gallery from './Gallery/Gallery';
import Order from './Order/Order';
import ShopByCategory from './ShopByCategory/ShopByCategory';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Order></Order>
            <Founder></Founder>
        </div>
    );
};

export default Home;