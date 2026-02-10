import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blogs = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 bg-white">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
                        Our <span className="text-tech-blue">Blogs</span>
                    </h1>
                    <p className="text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed">
                        Practical knowledge from the trenches. We share what we learn as we build, focusing on real-world engineering challenges and solutions.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col border-b border-gray-100 pb-12 hover:border-gray-200 transition-colors"
                        >
                            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                                <span className="text-energy-green flex items-center gap-1">
                                    <Tag className="w-3 h-3" /> {post.category}
                                </span>
                                <span>&bull;</span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {post.date}
                                </span>
                            </div>

                            <Link to={`/blogs/${post.id}`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-deep-green mb-4 group-hover:text-tech-blue transition-colors cursor-pointer">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-neutral-gray leading-relaxed mb-6 text-lg">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                                    <User className="w-3 h-3" />
                                    <span>{post.author}</span>
                                    <span className="mx-1 text-gray-300">|</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <Link
                                    to={`/blogs/${post.id}`}
                                    className="flex items-center font-semibold text-deep-green group-hover:text-energy-green transition-colors"
                                >
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
