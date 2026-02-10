import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, Layout, MessageSquare, Eye } from 'lucide-react';

const projects = [
    {
        title: "Face Mask Detection using MobileNetV2",
        category: "Computer Vision",
        description: "Real-time detection system optimized for lightweight inference, capable of running efficiently on edge devices.",
        icon: <Eye className="w-6 h-6" />,
        tech: ["Python", "TensorFlow", "MobileNetV2", "OpenCV"]
    },
    {
        title: "Object Detection using OpenCV",
        category: "Computer Vision",
        description: "Classical CV-based object detection on images and video streams, focusing on speed and reliability in controlled environments.",
        icon: <Cpu className="w-6 h-6" />,
        tech: ["Python", "OpenCV", "Image Processing"]
    },
    {
        title: "Chatbot Development using Dialogflow",
        category: "NLP",
        description: "Conversational chatbot for automating FAQs and contextual user interactions, designed to improve customer support efficiency.",
        icon: <MessageSquare className="w-6 h-6" />,
        tech: ["Dialogflow", "Node.js", "Webhook Integration"]
    },
    {
        title: "Multivariate Forecasting using LSTM",
        category: "Deep Learning",
        description: "Deep learning model for forecasting multiple correlated time-series variables to predict future market trends.",
        icon: <Database className="w-6 h-6" />,
        tech: ["Python", "Keras", "LSTM", "Pandas"]
    },
    {
        title: "Text Processing using Feature Hashing",
        category: "Data Science",
        description: "Text vectorization and semantic visualization pipeline using t-SNE to uncover hidden patterns in large text corpora.",
        icon: <Code className="w-6 h-6" />,
        tech: ["Python", "Scikit-learn", "t-SNE", "NLP"]
    },
    {
        title: "Web Applications using React",
        category: "Web Development",
        description: "Responsive, performance-focused frontend applications built with modern tools for optimal user experience.",
        icon: <Layout className="w-6 h-6" />,
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
    }
];

const Work = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
                        Our <span className="text-tech-blue">Work</span>
                    </h1>
                    <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                        We believe in a <span className="font-semibold text-energy-green">production-first</span> and <span className="font-semibold text-energy-green">practical AI</span> philosophy.
                        Here are some of the projects that demonstrate our commitment to building real-world solutions that drive value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-soft-mint text-deep-green text-xs font-semibold rounded-full uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                    <div className="text-tech-blue">
                                        {project.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-deep-green mb-3 line-clamp-2">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-gray mb-6 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Optional: Link to case study or demo if available in future */}
                                    {/* <button className="flex items-center text-energy-green font-semibold text-sm hover:text-deep-green transition-colors group">
                    View Details <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button> */}
                                </div>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-r from-energy-green to-tech-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
