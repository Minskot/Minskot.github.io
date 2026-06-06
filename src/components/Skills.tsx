'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/config';

function ProgressBar({ name, level, delay }: { name: string; level: number; delay: number }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">{name}</span>
            </div>
            <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-black dark:bg-white rounded-full"
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-100 dark:border-gray-800 pb-2 text-black dark:text-white">Skills</h3>

            <div className="grid md:grid-cols-2 gap-6">
                {siteConfig.skills.map((category, categoryIndex) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl border border-gray-100 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/20"
                    >
                        <h4 className="text-sm font-bold mb-6 text-black dark:text-white flex items-center gap-2">
                            <span className="w-1 h-4 bg-black dark:bg-white rounded-full"></span>
                            {category.name}
                        </h4>
                        {category.skills.map((skill, skillIndex) => (
                            <ProgressBar
                                key={skill.name}
                                name={skill.name}
                                level={skill.level}
                                delay={0.2 + skillIndex * 0.1}
                            />
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
