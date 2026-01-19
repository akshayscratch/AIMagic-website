import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoText from '../../assets/images/logo-text.png';
import logoIcon from '../../assets/images/logo-icon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    {/* Reconstructed Logo for seamless blending */}
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
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-energy-green ${scrolled ? 'text-deep-green' : 'text-deep-green'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-5 py-2.5 bg-action-gradient text-white rounded-lg text-sm font-medium border-2 border-[#2F7D32] hover:bg-[#1F5422] hover:scale-[1.03] transition-all shadow-lg shadow-energy-green/20 hover:shadow-xl"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-deep-green"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-deep-green font-medium hover:text-energy-green"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-5 py-3 bg-action-gradient text-white rounded-lg text-center font-medium border-2 border-[#2F7D32] hover:bg-[#1F5422] hover:scale-[1.03] transition-all shadow-lg hover:shadow-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
