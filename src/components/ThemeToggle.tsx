'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    // Prevent hydration mismatch by not rendering theme-specific content until mounted
    if (!mounted) {
        return (
            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 w-9 h-9" />
        );
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <FiMoon className="w-5 h-5 text-yellow-400" />
                ) : (
                    <FiSun className="w-5 h-5 text-yellow-500" />
                )}
            </motion.div>
        </motion.button>
    );
}
