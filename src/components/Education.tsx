'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBookOpen } from 'react-icons/fi';
import { siteConfig } from '@/data/config';

export default function Education() {
    return (
        <section id="education" className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-100 dark:border-gray-800 pb-2 text-black dark:text-white">Education</h3>

            <div className="space-y-6">
                {siteConfig.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="rounded-xl border border-gray-100 dark:border-gray-800/60 p-6 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                {edu.logo ? (
                                    <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-700">
                                        <Image
                                            src={edu.logo}
                                            alt={edu.school}
                                            width={64}
                                            height={64}
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                        <FiBookOpen className="w-8 h-8 text-gray-500" />
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h4 className="text-lg font-bold text-black dark:text-white">{edu.school}</h4>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 text-base">
                                    {edu.degree} · {edu.major}
                                </p>
                                {edu.gpa && (
                                    <p className="text-sm text-black dark:text-white mb-4 font-bold">
                                        GPA: {edu.gpa}
                                    </p>
                                )}

                                {/* Courses */}
                                {edu.courses && edu.courses.length > 0 && (
                                    <div>
                                        <h5 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                                            Core Courses
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.courses.map((course) => (
                                                <span
                                                    key={course}
                                                    className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
