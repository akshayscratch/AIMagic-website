import { motion } from 'framer-motion';
import {
    Cpu,
    Brain,
    ScanEye,
    MessageSquareText,
    Database,
    Cloud,
    Layout,
    Terminal
} from 'lucide-react';

const techCategories = [
    {
        title: "AI & Machine Learning",
        icon: <Brain className="w-8 h-8 text-energy-green" />,
        description: "Robust algorithms for predictive modeling and pattern recognition.",
        tools: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "LightGBM"]
    },
    {
        title: "Deep Learning & GenAI",
        icon: <Cpu className="w-8 h-8 text-tech-blue" />,
        description: "Advanced neural architectures for complex data interpretations and generation.",
        tools: ["CNNs", "LSTMs", "Transformers", "Hugging Face", "MobileNetV2", "LangChain", "OpenAI API"]
    },
    {
        title: "Computer Vision",
        icon: <ScanEye className="w-8 h-8 text-energy-green" />,
        description: "State-of-the-art vision systems for real-time detection and analysis.",
        tools: ["OpenCV", "MediaPipe", "YOLOv8", "Pillow", "Albumentations", "SAM (Segment Anything)"]
    },
    {
        title: "NLP & Conversational AI",
        icon: <MessageSquareText className="w-8 h-8 text-tech-blue" />,
        description: "Understanding and generating human language for seamless interaction.",
        tools: ["Dialogflow", "BERT", "Spacy", "NLTK", "Feature Hashing", "RAG Pipelines"]
    },
    {
        title: "Data Engineering & Viz",
        icon: <Database className="w-8 h-8 text-energy-green" />,
        description: "Turning raw data into actionable insights through efficient pipelines and visualization.",
        tools: ["Pandas", "NumPy", "Apache Spark", "Matplotlib", "Seaborn", "Tableau", "Grafana"]
    },
    {
        title: "Modern Web Architecture",
        icon: <Layout className="w-8 h-8 text-tech-blue" />,
        description: "Responsive, high-performance interfaces built for scale.",
        tools: ["React", "Next.js", "Vite", "Tailwind CSS", "Three.js", "Framer Motion"]
    },
    {
        title: "Backend & API",
        icon: <Terminal className="w-8 h-8 text-energy-green" />,
        description: "Secure, scalable server-side systems and efficient API communication.",
        tools: ["FastAPI", "Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"]
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud className="w-8 h-8 text-tech-blue" />,
        description: "Enterprise-grade deployment, containerization, and infrastructure management.",
        tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Git & GitHub Actions", "Terraform"]
    }
];

const Technologies = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-white via-soft-mint/20 to-white">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
                        Our <span className="text-tech-blue">Technology Stack</span>
                    </h1>
                    <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                        We don't just chase trends. Our technology choices are driven by <span className="font-semibold text-energy-green">reliability</span>, <span className="font-semibold text-energy-green">scalability</span>, and <span className="font-semibold text-energy-green">real-world constraints</span>.
                        We leverage a rich ecosystem of tools to build production-grade solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-energy-green/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-4 bg-soft-mint/50 w-14 h-14 rounded-lg flex items-center justify-center">
                                {category.icon}
                            </div>

                            <h3 className="text-lg font-bold text-deep-green mb-2">
                                {category.title}
                            </h3>

                            <p className="text-sm text-neutral-gray mb-5 leading-snug">
                                {category.description}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {category.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-gray-50 text-xs font-medium text-gray-600 rounded border border-gray-100 hover:bg-energy-green hover:text-white hover:border-energy-green transition-colors duration-200 cursor-default"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
