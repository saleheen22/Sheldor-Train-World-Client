import { useContext } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../components/provider/AuthProvider';
import {useLocation} from 'react-router-dom'



const PrivateRoute = ({children}) => {
   
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return (
        <div>
           <Navigate to="/login" state={{from: location}} replace></Navigate>;
        </div>
      );
    
    
};

export default PrivateRoute;