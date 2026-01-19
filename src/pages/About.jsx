import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase } from 'lucide-react';
import ashishImage from '../assets/images/ashish-gore.png';

const About = () => {
    return (
        <div className="bg-transparent">
            {/* Header */}
            <section className="bg-deep-green text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-energy-green/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 !text-white"
                    >
                        About AIMagic
                    </motion.h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        We are a technology-driven company dedicated to solving real business problems through applied Artificial Intelligence and Machine Learning.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="w-full md:w-1/3">
                                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden mb-6 shadow-xl shadow-energy-green/10 border border-white">
                                    <img
                                        src={ashishImage}
                                        alt="Ashish Gore - Founder"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-3xl font-bold text-deep-green mb-2">Ashish Gore</h2>
                                <h3 className="text-xl text-tech-blue font-medium mb-6">Founder & Senior Solution Architect</h3>

                                <div className="space-y-6 text-neutral-gray leading-relaxed">
                                    <p>
                                        Ashish is a seasoned Senior Solution Architect with over 8 years of comprehensive experience in the data science and machine learning domain. His expertise spans the entire data science lifecycle, from data extraction and cleaning to complex model development and deployment.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                        <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Briefcase className="text-tech-blue" size={20} />
                                                <h4 className="font-semibold text-deep-green">Industry Experience</h4>
                                            </div>
                                            <p className="text-sm">Formerly at Flipkart India Pvt. Ltd. Expertise in API development and LLM deployment.</p>
                                        </div>

                                        <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Award className="text-energy-green" size={20} />
                                                <h4 className="font-semibold text-deep-green">Education</h4>
                                            </div>
                                            <p className="text-sm">Holds three post-graduate degrees from top-ranked colleges in Pune.</p>
                                        </div>

                                        <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                                            <div className="flex items-center gap-3 mb-2">
                                                <BookOpen className="text-purple-600" size={20} />
                                                <h4 className="font-semibold text-deep-green">Mentorship & Recruitment</h4>
                                            </div>
                                            <p className="text-sm">300+ hours of consultation and counselling experience. 200+ hours of technical interviewing and recruitment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
