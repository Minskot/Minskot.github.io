import { redirect } from 'next/navigation';

export default function AwardsPage() {
  // Temporary route lock: non-resources pages redirect to /resources.
  redirect('/resources');

  /*
  // TEMP_RESOURCES_ONLY_START
  // restore by uncommenting this block

  'use client';

  import { motion } from 'framer-motion';
  import { FiAward } from 'react-icons/fi';
  import { siteConfig } from '@/data/config';

  export default function AwardsPage() {
      return (
          <div className="space-y-12">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">Honors & Awards</h1>

                  <div className="space-y-6">
                      {siteConfig.awards.map((award, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex gap-4 md:gap-6 items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-lg transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0"
                          >
                              <div className="block md:hidden text-sm font-bold text-gray-400 mt-1 min-w-[3rem]">
                                  {award.date}
                              </div>
                              <div className="hidden md:block w-24 flex-shrink-0 text-xl font-bold text-gray-300 dark:text-gray-600 text-right pr-4">
                                  {award.date}
                              </div>

                              <div className="flex-1">
                                  <h3 className="text-lg font-bold text-black dark:text-white mb-1">
                                      {award.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                      <FiAward className="text-black dark:text-white" />
                                      {award.awarder}
                                  </p>
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
