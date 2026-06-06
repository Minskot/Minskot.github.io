'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { siteConfig } from '@/data/config';

export default function ResourcesPage() {
    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">Resources</h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {siteConfig.resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index }}
                            className={`p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors group ${resource.embedPdf ? 'md:col-span-2' : ''}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                                    {resource.category}
                                </span>
                                <a href={resource.link} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    <FiExternalLink />
                                </a>
                            </div>

                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                                {resource.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {resource.description}
                            </p>

                            {resource.embedPdf && (
                                <div className="mt-5 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                                    <iframe
                                        src={`${resource.link}#view=FitH`}
                                        title={`${resource.title} PDF`}
                                        className="w-full h-[70vh]"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
