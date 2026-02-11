import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-transparent">
            <section className="bg-deep-green text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-energy-green/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 !text-white"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-xl text-gray-200 max-w-2xl">
                        Interested in collaboration or mentorship? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-deep-green mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-tech-blue rounded-lg shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <a href="mailto:info@aimagictechnologies.com" className="text-gray-600 hover:text-energy-green transition-colors">info@aimagictechnologies.com</a>
                                        <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-energy-green rounded-lg shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">+91 7040187220 </p>
                                        <p className="text-gray-500 text-sm mt-1">Mon-Fri from 9am to 6pm.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-deep-green rounded-lg shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Location</h3>
                                        <p className="text-gray-600">Pune, Maharashtra</p>
                                        <p className="text-gray-500 text-sm mt-1">India</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                    <a
                                        href="https://wa.me/917040187220?text=Hello%20AIMagic%20Technologies,%20I%20am%20interested%20in%20your%20AI/ML%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-fit bg-[#25D366] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#20bd5a] transition-colors shadow-sm"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Chat with us on WhatsApp
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/company/aimagic-technologies/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-fit bg-[#0077B5] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#005582] transition-colors shadow-sm"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white shadow-lg shadow-energy-green/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-deep-green mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-energy-green focus:ring-1 focus:ring-energy-green outline-none transition-colors bg-white/50" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-deep-green mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-energy-green focus:ring-1 focus:ring-energy-green outline-none transition-colors bg-white/50" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-deep-green mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-energy-green focus:ring-1 focus:ring-energy-green outline-none transition-colors bg-white/50" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-deep-green mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-energy-green focus:ring-1 focus:ring-energy-green outline-none transition-colors bg-white/50" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className="w-full py-4 bg-action-gradient border-2 border-[#2F7D32] hover:bg-[#1F5422] hover:scale-[1.03] text-white font-semibold rounded-lg transition-all shadow-lg shadow-energy-green/20 hover:shadow-xl">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
