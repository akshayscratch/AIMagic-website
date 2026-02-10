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
                                        <p className="text-gray-600">info@aimagictechnologies.com</p>
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
