'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type PdfTab = {
    name: string;
    path: string;
};

const tabs: PdfTab[] = [
    { name: '多元函数微分学', path: '/coursework/calculus-ii/differential' },
    { name: '多元函数积分学', path: '/coursework/calculus-ii/integral' },
];

export default function CourseworkPdfTabs() {
    const pathname = usePathname();
    const activePath = useMemo(
        () => tabs.find((item) => item.path === pathname)?.path ?? tabs[0].path,
        [pathname]
    );
    const [hoveredPath, setHoveredPath] = useState(activePath);

    useEffect(() => {
        setHoveredPath(activePath);
    }, [activePath]);

    return (
        <nav className="w-full border-b border-gray-100 dark:border-gray-800 pb-2 mb-4">
            <ul className="flex items-center gap-1 md:gap-4">
                {tabs.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className="relative block px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                                onMouseEnter={() => setHoveredPath(item.path)}
                                onMouseLeave={() => setHoveredPath(activePath)}
                            >
                                <span className={`relative z-10 ${isActive ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}>
                                    {item.name}
                                </span>

                                {item.path === hoveredPath && (
                                    <motion.div
                                        layoutId="coursework-pdf-tab-hover"
                                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 rounded-lg -z-10"
                                        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                                    />
                                )}

                                {isActive && (
                                    <motion.div
                                        layoutId="coursework-pdf-tab-active"
                                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-black dark:bg-white"
                                        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
