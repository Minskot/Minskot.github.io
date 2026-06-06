'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Publications', path: '/publications' },
    { name: 'Projects', path: '/projects' },
    { name: 'Awards', path: '/awards' },
    { name: 'Resources', path: '/resources' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
                <ul className="flex items-center gap-1 md:gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className="relative block px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                                    onMouseEnter={() => setHoveredPath(item.path)}
                                    onMouseLeave={() => setHoveredPath(pathname)}
                                >
                                    <span className={`relative z-10 ${isActive ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}>
                                        {item.name}
                                    </span>

                                    {/* Hover Background - Subtle Gray */}
                                    {item.path === hoveredPath && (
                                        <motion.div
                                            layoutId="navbar-hover"
                                            className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 rounded-lg -z-10"
                                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                        />
                                    )}

                                    {/* Active Indicator - Black/White Underline */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-active"
                                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-black dark:bg-white"
                                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
