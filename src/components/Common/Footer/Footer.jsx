import logo from '../../../assets/logos/favicon/log-white.png'
import './Footer.css';
const Footer = () => {
    return (
        <div >
            <footer className="footer p-10 bg-base-200 ft text-base-content text-white w-name">
                <div className='text-white'>

                    <img src={logo} alt="" />

                    <p>Sheldor Train World.<br />Providing reliable train toy since 2019</p>
                    <p>@CopyRight</p>
                </div>
                <div>
                    <span className="footer-title">Social Media Links</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Snap Chat</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;