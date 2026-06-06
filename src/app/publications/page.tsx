import { redirect } from 'next/navigation';

export default function PublicationsPage() {
  // Temporary route lock: non-resources pages redirect to /resources.
  redirect('/resources');

  /*
  // TEMP_RESOURCES_ONLY_START
  // restore by uncommenting this block

  'use client';

  import { motion } from 'framer-motion';
  import { FiFileText } from 'react-icons/fi';
  import { siteConfig } from '@/data/config';

  export default function PublicationsPage() {
      // Group by year
      const publicationsByYear = siteConfig.publications.reduce((acc, pub) => {
          if (!acc[pub.year]) acc[pub.year] = [];
          acc[pub.year].push(pub);
          return acc;
      }, {} as Record<string, typeof siteConfig.publications>);

      const years = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));

      return (
          <div className="space-y-12">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">Publications</h1>

                  <div className="space-y-12">
                      {years.map((year, yearIndex) => (
                          <motion.div
                              key={year}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * yearIndex }}
                          >
                              <h2 className="text-2xl font-bold mb-6 text-gray-200 dark:text-gray-800 border-b border-gray-100 dark:border-gray-800 pb-2">
                                  {year}
                              </h2>

                              <div className="space-y-8">
                                  {publicationsByYear[year].map((pub, index) => (
                                      <div key={index} className="flex gap-4">
                                          <div className="mt-1 flex-shrink-0">
                                              <FiFileText className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                          </div>

                                          <div className="space-y-2">
                                              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                                  {pub.title}
                                              </h3>
                                              <p className="text-gray-600 dark:text-gray-400">
                                                  {pub.authors.map((author, i) => (
                                                      <span key={i} className={author === siteConfig.name ? 'font-bold text-black dark:text-white' : ''}>
                                                          {author}{i < pub.authors.length - 1 ? ', ' : ''}
                                                      </span>
                                                  ))}
                                              </p>
                                              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                                                  {pub.conference}
                                              </p>

                                              <div className="flex gap-4 pt-1">
                                                  {pub.pdf && (
                                                      <a href={pub.pdf} className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">
                                                          [PDF]
                                                      </a>
                                                  )}
                                                  {pub.code && (
                                                      <a href={pub.code} className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">
                                                          [Code]
                                                      </a>
                                                  )}
                                                  {pub.link && (
                                                      <a href={pub.link} className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">
                                                          [Link]
                                                      </a>
                                                  )}
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </motion.div>
          </div>
      );
  }

  // TEMP_RESOURCES_ONLY_END
  */
}
