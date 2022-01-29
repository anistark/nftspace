import { Link, useNavigate } from "react-router-dom";
import logo from '../logo.png';

function Nav() {
    let menuData = [
        [1, 'Home', '/'],
        [2, 'About', '/about'],
    ];

    let navigate = useNavigate(); 
    const routeChange = () => {
        let path = `dashboard`;
        navigate(path);
    }

    return (
        <nav className="bg-white shadow light:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to="/"><img src={logo} alt="React Boilerplate" className='nav-logo' /></Link>
                    </div>

                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 light:text-gray-200 hover:text-gray-600 light:hover:text-gray-400 focus:outline-none focus:text-gray-600 light:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="items-center md:flex">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        {menuData.map(([key, title, url]) => (
                            <Link to={url} key={key.toString()} className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform light:text-gray-200 hover:text-blue-500 light:hover:text-blue-400 md:mx-4 md:my-0">{title}</Link>
                        ))}
                    </div>

                    <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" onClick={routeChange}>
                        Dashboard
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
