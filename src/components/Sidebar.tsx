'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiMail, FiMapPin, FiLink } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { siteConfig } from '@/data/config';
import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
    const socialLinks = [
        { icon: FiMail, href: `mailto:${siteConfig.social.email}`, label: 'Email' },
        ...(siteConfig.social.googleScholar
            ? [{ icon: SiGooglescholar, href: siteConfig.social.googleScholar, label: 'Google Scholar' }]
            : []),
        ...(siteConfig.social.RedNote
            ? [{ icon: FiLink, href: siteConfig.social.RedNote, label: 'RedNote (Xiaohongshu)' }]
            : []),
    ];

    return (
        <aside className="w-full lg:w-[280px] lg:fixed lg:h-screen lg:overflow-y-auto bg-gray-50/50 dark:bg-gray-900/50 border-r border-gray-100 dark:border-gray-800 p-6 flex flex-col items-center text-center">
            {/* Avatar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 mb-6 rounded-full overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm"
            >
                <Image
                    src={siteConfig.avatar}
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Name & Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-xl font-bold mb-2 text-black dark:text-white">
                    {siteConfig.name}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium leading-relaxed px-4">
                    {siteConfig.title}
                </p>
            </motion.div>

            {/* Location */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-8"
            >
                <FiMapPin />
                <span>{siteConfig.location}</span>
            </motion.div>

            {/* Social Links - Compact & Monochrome */}
            <nav className="w-full max-w-[200px] space-y-1 mb-8">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all border border-transparent group text-left"
                    >
                        <link.icon className="w-4 h-4 text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white">
                            {link.label}
                        </span>
                    </motion.a>
                ))}
            </nav>

            {/* Theme Toggle centered at bottom */}
            <div className="mt-auto pt-8">
                <ThemeToggle />
            </div>
        </aside>
    );
}
