import { Link } from 'react-router-dom';
import logoText from '../../assets/images/logo-text.png';
import logoIcon from '../../assets/images/logo-icon.png';

const Footer = () => {
    return (
        <footer className="bg-soft-mint text-deep-green pt-16 pb-8 border-t border-deep-green/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <div className="flex items-center gap-3">
                                <img
                                    src={logoIcon}
                                    alt="AIMagic Technologies"
                                    className="h-12 w-12 rounded-lg border-2 border-deep-green/10"
                                />
                                <div className="flex flex-col leading-none">
                                    <span className="text-2xl font-bold tracking-tight text-deep-green">
                                        <span className="text-energy-green">AI</span>
                                        <span className="text-tech-blue">Magic</span>
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Technologies</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Building practical AI solutions with a focus on real-world application, ownership, and expert mentorship.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-deep-green">Explore</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-4">
                                <li><Link to="/work" className="text-gray-600 hover:text-energy-green transition-colors text-sm">Work</Link></li>
                                <li><Link to="/technologies" className="text-gray-600 hover:text-energy-green transition-colors text-sm">Technologies</Link></li>
                                <li><Link to="/how-we-work" className="text-gray-600 hover:text-energy-green transition-colors text-sm">Process</Link></li>
                                <li><Link to="/blogs" className="text-gray-600 hover:text-energy-green transition-colors text-sm">Blogs</Link></li>
                            </ul>
                            <ul className="space-y-4">
                                <li><Link to="/careers" className="text-gray-600 hover:text-energy-green transition-colors text-sm">Careers</Link></li>
                                <li><Link to="/faq" className="text-gray-600 hover:text-energy-green transition-colors text-sm">FAQ</Link></li>
                                <li><Link to="/contact" className="text-gray-600 hover:text-energy-green transition-colors text-sm">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-deep-green">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-600 text-sm">Pune, Maharashtra, India</li>
                            <li className="text-gray-600 text-sm">info@aimagictechnologies.com</li>
                            <li className="text-gray-600 text-sm">+91 7040187220</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-deep-green/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} AIMagic Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-deep-green transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-deep-green transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
