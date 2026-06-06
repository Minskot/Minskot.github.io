'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/config';

export default function News() {
    return (
        <section id="news" className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-100 dark:border-gray-800 pb-2 text-black dark:text-white">News</h3>

            <div className="space-y-6 pl-2">
                {siteConfig.news.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="relative pl-6 border-l-2 border-gray-100 dark:border-gray-800"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-black" />

                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1 block">
                            {item.date}
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            {item.content}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
