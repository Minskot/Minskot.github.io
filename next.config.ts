/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果你的仓库名不是 username.github.io，需要设置 basePath
  // 例如仓库名是 my-portfolio，则设置 basePath: '/my-portfolio'
  // basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name/' : '',
};

export default nextConfig;
