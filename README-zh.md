# 学术个人主页 (Academic Personal Website) - 使用指南

这是一个基于 Next.js 14+、Tailwind CSS 和 TypeScript 构建的现代学术个人主页模板。它专为展示学术成果、项目经历和个人简历而设计，支持深色模式、响应式布局和 GitHub Actions 自动部署。

## 🚀 快速开始

### 1. 安装依赖

确保你已安装 [Node.js](https://nodejs.org/) (建议版本 v18+)。在项目根目录下运行：

```bash
npm install
```

### 2. 本地开发

启动本地开发服务器预览网站：

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)。

### 3. 构建静态文件

生成用于部署的静态文件（输出到 `out/` 目录）：

```bash
npm run build
```

---

## 📝 内容修改指南

所有网站内容都集中在 `src/data/config.ts` 文件中。你只需要修改这个文件即可更新网站内容，无需修改代码。

**文件路径**: `src/data/config.ts`

### 1. 修改基本信息
修改 `siteConfig` 对象中的 `name`（姓名）, `title`（头衔）, `bio`（简介）, `email`（邮箱）等字段。

### 2. 更新头像
将你的照片重命名为 `avatar.jpg` 并替换 `public/avatar.jpg`文件。

### 3. 添加/修改各个板块

*   **News (动态)**: 在 `news` 数组中添加新的动态，包含 date (日期) 和 content (内容)。
*   **Publications (论文发表)**: 在 `publications` 数组中添加论文。支持 PDF、Code、Link 等链接。
*   **Projects (项目)**: 在 `projects` 数组中添加项目。支持图片路径、GitHub 链接等。
*   **Awards (获奖)**: 在 `awards` 数组中添加奖项。
*   **Resources (资源)**: 在 `resources` 数组中添加分享给学弟学妹的资料链接。
*   **Education (教育经历)**: 修改 `education` 数组。
*   **Skills (技能)**: 修改 `skills` 数组，`level` 用于控制进度条长度 (0-100)。

---

## 🌐 部署指南 (GitHub Pages)

本项目已配置 GitHub Actions 自动部署。

1.  **创建 GitHub 仓库**: 在 GitHub 上创建一个新的仓库（建议名为 `username.github.io`）。
2.  **推送代码**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/your-username/your-repo.git
    git push -u origin main
    ```
3.  **配置 Pages**:
    *   进入仓库 **Settings** -> **Pages**。
    *   在 "Build and deployment" 下，Source 选择 **GitHub Actions**。
    *   GitHub 会自动识别 `.github/workflows/deploy.yml` 并开始构建。
    *   等待 Action 运行成功即可。

---

## 📂 项目结构

*   `src/app/`: 页面路由 (Home, Awards, Projects, Publications, Resources)
*   `src/components/`: UI 组件 (Sidebar, Navbar, etc.)
*   `src/data/config.ts`: **内容配置文件 (只需修改此处)**
*   `public/`: 静态资源 (图片)

如有任何问题，请参考 Next.js 官方文档或提交 Issue。
