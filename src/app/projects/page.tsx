import { redirect } from 'next/navigation';

export default function ProjectsPage() {
  // Temporary route lock: non-resources pages redirect to /resources.
  redirect('/resources');

  /*
  // TEMP_RESOURCES_ONLY_START
  // restore by uncommenting this block

  'use client';

  import { motion } from 'framer-motion';
  import Image from 'next/image';
  import { FiGithub, FiExternalLink } from 'react-icons/fi';
  import { siteConfig } from '@/data/config';

  export default function ProjectsPage() {
      return (
          <div className="space-y-8">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">Projects</h1>

                  <div className="grid md:grid-cols-2 gap-8">
                      {siteConfig.projects.map((project, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="group block"
                          >
                              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                                  {project.image ? (
                                      <Image
                                          src={project.image}
                                          alt={project.title}
                                          fill
                                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                                      />
                                  ) : (
                                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                          No Image
                                      </div>
                                  )}

                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                      {project.github && (
                                          <a
                                              href={project.github}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"
                                          >
                                              <FiGithub className="w-5 h-5" />
                                          </a>
                                      )}
                                      {project.link && (
                                          <a
                                              href={project.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"
                                          >
                                              <FiExternalLink className="w-5 h-5" />
                                          </a>
                                      )}
                                  </div>
                              </div>

                              <h3 className="text-xl font-bold mb-2 group-hover:text-black dark:group-hover:text-white text-gray-900 dark:text-gray-100 transition-colors">
                                  {project.title}
                              </h3>

                              <div className="flex flex-wrap gap-2 mb-3">
                                  {project.tags.map(tag => (
                                      <span key={tag} className="text-xs font-medium px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700">
                                          {tag}
                                      </span>
                                  ))}
                              </div>

                              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                  {project.description}
                              </p>
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
