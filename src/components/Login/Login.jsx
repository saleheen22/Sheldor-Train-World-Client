import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logos/sheldor-black-transparent.png';
import './Login.css';
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const { SignInEmailPass, googleSignIn } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        SignInEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message);

            })


    }
    const handleGoogleSingIn = () => {
        
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className="w-name">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl font-bold text-center mb-7">Dive In!</h1>
                        <div className="login-logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body bg-sky-400 rounded-2xl">

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"
                                        name="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        className="input input-bordered"
                                        name="password" />

                                    <p className="pt-5">   New to Sheldor Train World?
                                        <Link to="/register" className="text-green-600 underline decoration-orange-800">Register</Link></p>

                                </div>


                                <p className="text-red-800">{error}</p>
  

                                <div className="flex flex-col w-full">
                                    <div>                         <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-orange-400 border-none w-100">Login</button>
                                </div></div>
                                    
                                </div>
                            </form>
                            <div className="divider">OR</div>
                                    <div className=" text-center" onClick={handleGoogleSingIn}><button>GoogleSign In</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;