import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = [
    {
        title: "AI / ML Engineers",
        description: "You love turning papers into code. You care about inference latency as much as model accuracy. You want to build systems that solve real problems, not just win Kaggle competitions.",
        icon: <Cpu className="w-6 h-6" />
    },
    {
        title: "Computer Vision Enthusiasts",
        description: "From object detection on edge devices to generative image models, you are fascinated by how machines 'see'. You know your way around OpenCV, YOLO, and PyTorch.",
        icon: <Eye className="w-6 h-6" />
    },
    {
        title: "Frontend Developers (React)",
        description: "You understand that a great AI model needs a great UI. You build clean, responsive, and intuitive interfaces that make complex data feel simple and actionable.",
        icon: <Code className="w-6 h-6" />
    },
    {
        title: "Freelancers & Collaborators",
        description: "Not looking for a 9-to-5? Neither are we. We love partnering with talented freelancers and subject matter experts on a project basis. Bring your expertise, and let's build something cool.",
        icon: <Users className="w-6 h-6" />
    }
];

const Careers = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 bg-white">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-green mb-8">
                        Join the <span className="text-tech-blue">Collaboration</span>
                    </h1>
                    <p className="text-xl text-neutral-gray leading-relaxed max-w-2xl mx-auto">
                        We are a small, focused team of engineers who believe in quality over headcount.
                        We aren't looking for cogs in a machine; we are looking for partners in problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 border border-gray-100 rounded-xl hover:border-energy-green/30 hover:shadow-lg transition-all duration-300 group bg-gray-50/50"
                        >
                            <div className="flex items-center gap-4 mb-4 text-tech-blue group-hover:text-energy-green transition-colors">
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-bold text-deep-green">
                                    {role.title}
                                </h3>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                {role.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-deep-green mb-8 text-center">Current Openings</h2>
                    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 bg-soft-mint text-energy-green text-xs font-bold uppercase rounded-full tracking-wider">Engineering</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold uppercase rounded-full tracking-wider">Internship</span>
                            </div>
                            <h3 className="text-2xl font-bold text-deep-green mb-2">Java Intern</h3>
                            <p className="text-neutral-gray max-w-2xl mb-3">
                                We are seeking a dedicated Java Intern with solid skills in both Frontend and Backend development. You should have good communication skills in English and a strong desire to learn.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">Java</span>
                                <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">Frontend & Backend</span>
                                <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">English Communication</span>
                            </div>
                        </div>
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-white text-deep-green border-2 border-deep-green font-bold rounded-lg hover:bg-deep-green hover:text-white transition-all duration-300 whitespace-nowrap text-center"
                        >
                            Apply Now
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-deep-green text-white p-10 rounded-2xl text-center shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-energy-green opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-blue opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Ready to Build?</h2>
                        <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
                            If you value practical problem-solving, clean engineering, and continuous learning, we want to hear from you.
                            No formal cover letters—just show us what you've built.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-3 bg-energy-green text-deep-green font-bold rounded-lg hover:bg-white hover:text-energy-green transition-colors duration-300"
                        >
                            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Careers;
