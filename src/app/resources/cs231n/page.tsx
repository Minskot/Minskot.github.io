'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const repoUrl = 'https://github.com/LinJoyful365/CS231n-assignment';
const pdfUrl = '/resources/cs231n/cs231n_blog.pdf';

const noteHighlights = [
  'Covers the progression from linear classifiers to modern diffusion-style modeling ideas.',
  'Connects key CS231n concepts with practical implementation details from assignment code.',
  'Summarizes optimization, regularization, and architecture design trade-offs across modules.',
  'Includes compact explanations that are useful for quick review before implementation.',
  'Serves as a long-term reference for revisiting foundational computer vision methods.',
];

export default function Cs231nResourcesPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-black dark:text-white">CS231n Coursework: Code Practice and Notes</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
          A compact resource page for my Stanford CS231n coursework, including assignment code implementations in GitHub and a
          complete course study-note PDF.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.45 }}
        className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30"
      >
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Code Repository</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
          The repository contains assignment implementations and experiment workflows from the CS231n course.
        </p>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
        >
          View GitHub Repository
          <FiExternalLink />
        </a>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
        className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30"
      >
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Notes Highlights</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {noteHighlights.map((item) => (
            <li key={item} className="leading-relaxed">
              - {item}
            </li>
          ))}
        </ul>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
        >
          Open PDF in New Tab
          <FiExternalLink />
        </a>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.45 }}
        className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30"
      >
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Course Notes PDF</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Embedded reader for direct in-page review.
        </p>
        <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
          <iframe src={`${pdfUrl}#view=FitH`} title="CS231n Blog PDF" className="w-full h-[70vh]" />
        </div>
      </motion.section>
    </div>
  );
}
