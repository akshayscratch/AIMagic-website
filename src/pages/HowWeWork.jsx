import { motion } from 'framer-motion';
import { ClipboardCheck, Database, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Problem Understanding",
        description: "We start by defining business goals and constraints. We ask the hard questions to ensure we're solving the right problem, not just applying AI for the sake of it.",
        icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
        number: "02",
        title: "Data & Feasibility Review",
        description: "We assess your data quality and solution viability. This transparent review prevents wasted resources on impossible or ethically questionable projects.",
        icon: <Database className="w-8 h-8" />
    },
    {
        number: "03",
        title: "Solution Design",
        description: "We select the optimal models, tools, and system architecture. Our focus is on scalability, maintainability, and cost-effectiveness.",
        icon: <PenTool className="w-8 h-8" />
    },
    {
        number: "04",
        title: "Implementation",
        description: "We build, test, and iterate. Using agile methodologies, we deliver incremental value and adapt to feedback throughout the development cycle.",
        icon: <Code2 className="w-8 h-8" />
    },
    {
        number: "05",
        title: "Delivery & Support",
        description: "We handle deployment, documentation, and handover. We ensure your team is empowered to manage the solution, or we provide ongoing support.",
        icon: <Rocket className="w-8 h-8" />
    }
];

const HowWeWork = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-white to-soft-mint/30">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
                        How We <span className="text-tech-blue">Work</span>
                    </h1>
                    <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                        Our approach is built on <span className="font-semibold text-energy-green">Transparent Engineering</span> and clarity over hype.
                        We follow a structured, proven process to deliver production-ready AI solutions.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 w-full md:w-1/2">
                                    <div className={`p-8 bg-white rounded- 2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <div className={`absolute top-0 w-2 h-full bg-energy-green ${index % 2 === 0 ? 'left-0' : 'right-0'
                                            }`}></div>

                                        <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'md:items-end items-start'
                                            }`}>
                                            <span className="text-6xl font-bold text-black mb-4 font-mono select-none">
                                                {step.number}
                                            </span>
                                            <h3 className="text-2xl font-bold text-deep-green mb-3 flex items-center gap-3">
                                                {index % 2 !== 0 && <span className="md:hidden text-tech-blue">{step.icon}</span>}
                                                {step.title}
                                                {index % 2 === 0 && <span className="md:hidden text-tech-blue">{step.icon}</span>}
                                            </h3>
                                            <p className="text-neutral-gray leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Icon (Desktop) */}
                                <div className="hidden md:flex flex-none w-16 h-16 bg-white border-4 border-soft-mint rounded-full items-center justify-center z-10 text-tech-blue shadow-sm">
                                    {step.icon}
                                </div>

                                {/* Empty Spacer Side */}
                                <div className="hidden md:block flex-1 w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
