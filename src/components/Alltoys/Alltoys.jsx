import { useLoaderData } from 'react-router-dom';
import './Alltoys.css'
import { AuthContext } from '../provider/AuthProvider';

const Alltoys = () => {
    const allToys = useLoaderData(AuthContext);

    return (
        <div>
            <h2> {allToys.length}</h2>
        </div>
    );
};

export default Alltoys;