'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type CourseworkNavItem = {
    name: string;
    path: string;
    matchPrefix: string;
};

const navItems: CourseworkNavItem[] = [
    {
        name: '微积分（甲）II',
        path: '/coursework/calculus-ii/differential',
        matchPrefix: '/coursework/calculus-ii',
    },
    {
        name: '电工电子学',
        path: '/coursework/electrical-engineering',
        matchPrefix: '/coursework/electrical-engineering',
    },
];

export default function CourseworkNavbar() {
    const pathname = usePathname();
    const activePath = useMemo(
        () => navItems.find((item) => pathname.startsWith(item.matchPrefix))?.path ?? navItems[0].path,
        [pathname]
    );
    const [hoveredPath, setHoveredPath] = useState(activePath);

    useEffect(() => {
        setHoveredPath(activePath);
    }, [activePath]);

    return (
        <nav className="sticky top-16 z-30 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 h-14 flex items-center">
                <ul className="flex items-center gap-1 md:gap-4">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.matchPrefix);

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
                                            layoutId="coursework-navbar-hover"
                                            className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 rounded-lg -z-10"
                                            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                                        />
                                    )}

                                    {isActive && (
                                        <motion.div
                                            layoutId="coursework-navbar-active"
                                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-black dark:bg-white"
                                            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
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
