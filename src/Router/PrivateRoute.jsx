import { useContext } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../components/provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const PrivateRoute = ({children}) => {
   
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return (
        <div>
          
          {toast.error('This is an error!')};
          <Navigate to="/login" replace></Navigate>;
        </div>
      );
    
    
};

export default PrivateRoute;