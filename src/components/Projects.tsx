'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { siteConfig } from '@/data/config';

export default function Projects() {
    return (
        <section id="projects" className="section bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">项目经历</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {siteConfig.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="card group cursor-pointer overflow-hidden"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white/30">
                                            {project.title.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FiGithub className="w-5 h-5 text-gray-800" />
                                            </motion.a>
                                        )}
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FiExternalLink className="w-5 h-5 text-gray-800" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
