import React from 'react';
import { motion } from 'framer-motion';

const AIVisualization = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden pointer-events-none opacity-70">
            <svg
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-2xl transform scale-110 lg:scale-125"
            >
                <defs>
                    <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8CC63F" />
                        <stop offset="100%" stopColor="#3FA9F5" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Neural Network Paths */}
                <motion.path
                    d="M100,300 C250,100 550,500 700,300"
                    stroke="url(#ai-gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.path
                    d="M150,150 C300,450 600,150 750,450"
                    stroke="url(#ai-gradient)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.path
                    d="M50,500 C200,300 400,600 600,400"
                    stroke="url(#ai-gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />

                {/* Dynamic Nodes */}
                {[
                    { x: 250, y: 180, r: 8, delay: 0 },
                    { x: 550, y: 420, r: 10, delay: 0.5 },
                    { x: 400, y: 300, r: 12, delay: 1 },
                    { x: 650, y: 200, r: 6, delay: 1.5 },
                    { x: 150, y: 400, r: 9, delay: 2 },
                    { x: 480, y: 150, r: 7, delay: 2.5 },
                    { x: 320, y: 500, r: 11, delay: 3 },
                ].map((node, i) => (
                    <g key={i} filter="url(#glow)">
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.r}
                            fill="url(#ai-gradient)"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 3,
                                delay: node.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.r * 1.5}
                            stroke="url(#ai-gradient)"
                            strokeWidth="0.5"
                            fill="transparent"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [1, 1.6, 1],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration: 3,
                                delay: node.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </g>
                ))}
            </svg>

            {/* Decorative Orbs with slower animation */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    x: [0, 20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 right-1/4 w-32 h-32 bg-tech-blue/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-energy-green/5 rounded-full blur-3xl"
            />
        </div>
    );
};

export default AIVisualization;
