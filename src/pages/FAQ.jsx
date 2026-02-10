import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Do you work on small or experimental projects?",
        answer: "Yes, we love working on MVPs and Proof of Concepts (POCs). We understand that every great AI product starts with an experiment. However, we always approach these with a 'production mindset', ensuring there's a clear path to scalability if the experiment succeeds."
    },
    {
        question: "Are your AI solutions production-ready?",
        answer: "Absolutely. We pride ourselves on 'Practical AI'. We don't just deliver Jupyter notebooks; we deliver containerized applications, robust APIs, and optimized models ready for deployment. We prioritize reliability, scalability, and maintainability over theoretical hype."
    },
    {
        question: "Can you build both AI models and web interfaces?",
        answer: "Yes, we are full-stack AI engineers. We believe the model is only part of the solution. We build the entire ecosystem: the data pipeline, the training workflow, the inference API, and the user-facing web or mobile interface to interact with it."
    },
    {
        question: "Do you offer mentorship or technical guidance?",
        answer: "Yes, we often work alongside existing engineering teams to upskill them in AI/ML best practices. We also provide architectural reviews and strategic consulting to help you make the right technology choices."
    },
    {
        question: "What industries do you work with?",
        answer: "We are industry-agnostic because the fundamental principles of Applied AI transfer well. However, we have strong experience in Healthcare (medical imaging), Retail (forecasting & recommendation), Finance (fraud detection), and Manufacturing (visual inspection)."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-white to-soft-mint/20">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-soft-mint rounded-full mb-6">
                        <HelpCircle className="w-8 h-8 text-energy-green" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
                        Frequently Asked <span className="text-tech-blue">Questions</span>
                    </h1>
                    <p className="text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed">
                        We believe in transparency. Here are answers to common questions about how we work, what we deliver, and who we help.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-tech-blue' : 'text-deep-green'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-soft-mint text-energy-green' : 'bg-gray-50 text-gray-400'}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-neutral-gray leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
