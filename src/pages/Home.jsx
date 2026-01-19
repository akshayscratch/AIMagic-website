import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AIVisualization from '../components/ui/AIVisualization';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative text-deep-green min-h-[90vh] flex items-center overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-tech-blue/10 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-energy-green/10 blur-[100px] rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                    {/* Animated Code-based AI Graphic */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full flex items-center justify-end pr-6 lg:pr-20 opacity-70 hidden md:flex">
                        <AIVisualization />
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            Practical AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-energy-green">
                                For the Real World
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-neutral-gray mb-10 leading-relaxed font-medium"
                        >
                            Building robust machine learning solutions through hands-on expertise and deep industry mentorship. We don't just research AI; we engineer it for business impact.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex gap-4 flex-col sm:flex-row"
                        >
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-action-gradient border-2 border-[#2F7D32] hover:bg-[#1F5422] hover:scale-[1.03] text-white rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-energy-green/25 hover:shadow-xl"
                            >
                                Start a Project <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-transparent border-2 border-energy-green text-energy-green hover:bg-energy-green hover:text-white hover:scale-[1.03] rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
                            >
                                Our Services
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-24 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-tech-blue uppercase tracking-wider mb-3">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">Comprehensive AI Solutions</h3>
                        <p className="text-neutral-gray text-lg">
                            From strategic consulting to full-scale deployment, we provide the technical backbone for your AI initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-white rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-tech-blue">
                                <Terminal size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-deep-green mb-4">Applied AI Engineering</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Moving beyond proof-of-concept to production-grade systems. We specialize in robust API development and scalable model deployment.
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 bg-energy-green/10 rounded-xl flex items-center justify-center mb-6 text-energy-green">
                                <Cpu size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-deep-green mb-4">LLM & GenAI Solutions</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Leveraging Large Language Models for custom business applications, from RAG architectures to fine-tuned agents.
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-deep-green">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-deep-green mb-4">Expert Mentorship</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Bridging the gap between theory and practice with guidance from seasoned engineers and data scientists.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision / Why Choose Us Section */}
            <section className="py-24 bg-deep-green text-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-tech-blue/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold !text-white uppercase tracking-wider mb-3">Our Vision</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 !text-white">Bridging the Gap Between Research & Reality</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                The AI landscape is evolving rapidly, but the gap between theoretical models and practical, revenue-generating applications remains wide.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At AIMagic, our goal is simple: <strong>make AI transparent, accessible, and reliably functional.</strong> We strip away the hype to focus on engineering principles that deliver tangible business value, empowering teams to own their AI infrastructure.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-tech-blue/20 rounded-lg flex items-center justify-center text-tech-blue mt-1">
                                        <span className="font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 !text-white">Production First</h4>
                                        <p className="text-gray-400">We design systems for scale, reliability, and maintainability from day one.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-energy-green/20 rounded-lg flex items-center justify-center text-energy-green mt-1">
                                        <span className="font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 !text-white">Transparent Engineering</h4>
                                        <p className="text-gray-400">No black boxes. We ensure you understand and control your AI stack.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mt-1">
                                        <span className="font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 !text-white">Tailored Solutions</h4>
                                        <p className="text-gray-400">Every business is unique. Our solutions are custom-architected to your specific data and goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">Ready to Accelerate Your AI Journey?</h2>
                    <p className="text-xl text-neutral-gray mb-10 max-w-2xl mx-auto">
                        Whether you need to build a custom LLM solution or train your team in modern data science practices, we're here to help.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-action-gradient border-2 border-[#2F7D32] hover:bg-[#1F5422] hover:scale-[1.03] text-white rounded-lg font-semibold text-lg transition-all shadow-lg shadow-energy-green/25 hover:shadow-xl"
                    >
                        Schedule a Consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
