import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from "react-router-dom";
import logo from '../../assets/logos/sheldor-black-transparent.png';
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const [error, setError] = useState("");
    const {userCreation} = useContext(AuthContext);
    const notify = () => toast("Congratulations!!! \nRegistration Done!");
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        form.reset();

        userCreation(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            alert("Congratulations!!! You have been registered.");
            
        })
        .catch((error) => {
            console.log(error.message);
            setError(error.message);
        
        })
        
        
    }
    return (
        <div className="w-name">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl font-bold text-center mb-7">Sign Up!</h1>
                        <div className="login-logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body bg-sky-400 rounded-2xl">
                    <form onSubmit={handleSignUp}>
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input 
                                input-bordered"
                                name="name" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                name="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                name="password"
                                placeholder="password" className="input input-bordered" />

                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="pic link" className="input input-bordered"
                                name="photo" />
                            </div>
                              
                                 <p className='mt-5'>   Already have an account?
                                    <Link to ="/login" className="text-green-600 underline decoration-orange-800">Login</Link></p>
                                    <p className='text-red-800'>{error}</p>
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-orange-400 border-none ">Sign UP</button>
                            </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;