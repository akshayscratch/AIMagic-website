import { motion } from 'framer-motion';
import { Database, Brain, Code, BookOpen, Search, Server } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "End-to-End Data Science",
            description: "From raw data to actionable insights. We handle data extraction, cleaning, exploratory analysis, and feature engineering to build robust datasets.",
            icon: <Database size={32} className="text-tech-blue" />
        },
        {
            title: "Machine Learning Solutions",
            description: "Custom model development using state-of-the-art algorithms. We focus on accuracy, interpretability, and business value.",
            icon: <Brain size={32} className="text-ai-green" />
        },
        {
            title: "LLM & GenAI Development",
            description: "Building production-ready Large Language Model applications. RAG pipelines, fine-tuning, and agentic workflows tailored to your data.",
            icon: <Search size={32} className="text-purple-500" />
        },
        {
            title: "API Development & Deployment",
            description: "Turning models into usable software. We build scalable APIs using FastAPI/Flask and handle Dockerization and cloud deployment.",
            icon: <Server size={32} className="text-orange-500" />
        },
        {
            title: "Technical Mentorship",
            description: "Personalized guidance from industry experts. We help aspiring data scientists bridge the gap between academic theory and industry practice.",
            icon: <BookOpen size={32} className="text-pink-500" />
        },
        {
            title: "Real-World Project Ownership",
            description: "Learn by doing. Collaborators get full ownership of modules, mirroring actual industry workflows and responsibility.",
            icon: <Code size={32} className="text-teal-500" />
        }
    ];

    return (
        <div className="bg-transparent">
            <section className="bg-deep-green text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-tech-blue/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 !text-white"
                    >
                        Our Expertise
                    </motion.h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        A comprehensive suite of data science and AI services designed for impact.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-white/60 backdrop-blur-sm rounded-xl border border-white hover:border-energy-green/30 hover:shadow-xl hover:shadow-energy-green/5 transition-all duration-300 flex flex-col items-start group"
                            >
                                <div className="mb-6 p-3 bg-white rounded-lg shadow-sm text-tech-blue group-hover:text-energy-green transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-deep-green mb-4">{service.title}</h3>
                                <p className="text-neutral-gray leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
