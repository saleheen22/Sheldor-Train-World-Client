import './Navbar.css';
import logo from '../../../assets/logos/white-transparent.png'
import logo1 from '../../../assets/logos/favicon/shheldor-white.png';
const Navbar = () => {
    return (
        <div>
     <div className="navbar bg-base-100 orange">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 orange text-white">
      <li className='mx-5 font-bold'>App 1</li>
      <li className='mx-5  font-bold'>App 1</li>
      <li className='mx-5 font-bold'>App 2</li>
      <li className='mx-5 font-bold'>App 3</li>
      <li className='mx-5 font-bold'>App 4</li>
      </ul>
    </div>
    <div className="btn btn-ghost normal-case text-xl image"><img src={logo} alt="" /></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      <li className='mx-5 font-bold'>App 1</li>
      <li className='mx-5  font-bold'>App 1</li>
      <li className='mx-5 font-bold'>App 2</li>
      <li className='mx-5 font-bold'>App 3</li>
      <li className='mx-5 font-bold'>App 4</li>

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn button border-collapse">Get started</a>
  </div>
</div>
        </div>

    );
};

export default Navbar;