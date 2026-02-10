import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, User, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useEffect } from 'react';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-deep-green mb-4">Post not found</h2>
                <Link to="/blogs" className="text-tech-blue hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-28 pb-20 px-6 bg-white">
            <div className="container mx-auto max-w-3xl">
                <Link
                    to="/blogs"
                    className="inline-flex items-center text-neutral-gray hover:text-tech-blue transition-colors mb-8 font-medium"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back to Blogs
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-6">
                        <span className="flex items-center gap-1.5 text-energy-green bg-soft-mint px-3 py-1 rounded-full">
                            <Tag size={16} />
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={16} />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={16} />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-deep-green mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 mb-10 pb-10 border-b border-gray-100">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-deep-green">{post.author}</p>
                            <p className="text-xs text-gray-500">Author</p>
                        </div>
                    </div>

                    <div
                        className="prose prose-lg max-w-none text-neutral-gray prose-headings:text-deep-green prose-a:text-tech-blue hover:prose-a:text-energy-green prose-strong:text-deep-green"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>
            </div>
        </article>
    );
};

export default BlogPost;
