'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/config';
import Education from './Education';
import Skills from './Skills';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
        >
            <section>
                <h2 className="text-2xl font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">About Me</h2>
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-lg">
                    <p className="mb-6">{siteConfig.bio}</p>
                    <p>{siteConfig.bioExtended}</p>
                </div>
            </section>

            <Education />
            <Skills />
        </motion.div>
    );
}
