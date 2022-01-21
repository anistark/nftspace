import { Link } from "react-router-dom";
import logo from '../logo.png';

function Footer() {
    return (
        <footer className="bg-white light:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <div>
                                <Link to="/" className="text-xl font-bold text-gray-800 light:text-white hover:text-gray-700 light:hover:text-gray-300"><img src={logo} alt="React Boilerplate" className='footer-logo' /></Link>
                            </div>
                            <p className="max-w-md mt-2 text-gray-500 light:text-gray-400">The only NFT Marketplace you will ever need.</p>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                            <div>
                                <h3 className="text-gray-700 uppercase light:text-white">Company</h3>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Privacy Policy</Link>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Terms &amp; Conditions</Link>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Branding Guidelines</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase light:text-white">References</h3>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Link 1</Link>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Link 2</Link>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Link 3</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase light:text-white">Content</h3>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Blog</Link>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Wiki</Link>
                                <Link to="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Blog</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase light:text-white">Community</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Discord</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Telegram</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 light:text-gray-400 hover:text-gray-500">Reddit</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-300 border-none light:bg-gray-700" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-400">© Copyright {(new Date().getFullYear())}. All Rights Reserved.</p>

                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <a href="https://twitter.com/kranirudha"  className="mx-2 text-gray-400 hover:text-gray-500 light:hover:text-gray-300" aria-label="Twitter">
                            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>

                        <a href="https://github.com/anistark" className="mx-2 text-gray-400 hover:text-gray-500 light:hover:text-gray-300" aria-label="Github">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;
  