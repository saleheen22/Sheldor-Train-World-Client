import './Navbar.css';
import logo from '../../../assets/logos/white-transparent.png'
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Result } from 'postcss';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    const { user, loading, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged Out")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='w-name'>
            <div className="navbar bg-base-100 orange">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 orange text-white">
                            <Link> <li className='mx-5 font-bold'>Home</li></Link>

                            <Link to="/alltoys"> <li className='mx-5  font-bold'>All Toys</li></Link>

                            <Link to="/blog"><li className='mx-5 font-bold'>
                                Blog
                            </li></Link>

                            {user && <>

                                <Link to="/addtoy">
                                    <li className='mx-5 font-bold'>Add a Toy</li>
                                </Link>

                                <Link to="/mytoys"> <li className='mx-5 font-bold'>My Toys</li></Link>
                            </>}
                        </ul>

                    </div>



                    <div className="btn btn-ghost normal-case text-xl image">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">


                        <Link> <li className='mx-5 font-bold'>Home</li></Link>

                        <Link to="/alltoys"> <li className='mx-5  font-bold'>All Toys</li></Link>

                        <Link to="/blog"><li className='mx-5 font-bold'>
                            Blog
                        </li></Link>


                        {user && <>

                            <Link to="/addtoy">
                                <li className='mx-5 font-bold'>Add a Toy</li>
                            </Link>

                            <Link to="/mytoys"> <li className='mx-5 font-bold'>My Toys</li></Link>
                        </>}

                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <>

                        <div className="tooltip tooltip-left" data-tip={user.displayName}>
                            <img src={user.photoURL} alt="" />
                        </div>

                      
                        <div className="btn bg-orange-400 border-collapse " onClick={handleLogOut}>Log Out</div>
                    </>
                        :
                        <>

                            <Link to="/login" className="btn bg-orange-400 border-collapse">Log In</Link></>

                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;