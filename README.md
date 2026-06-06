本仓库完全依照Dr.Lin (@linjoyful365)分享内容搭建试验。Dr.Lin对本产品享有全部著作，解释权利

# 🎓 学术个人主页

一个现代、专业且具有视觉吸引力的学术个人主页模板，专为学术申请设计。

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=white)

## ✨ 特性

- 🌓 **深色/浅色模式** - 自动跟随系统设置，支持手动切换
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎬 **流畅动画** - 使用 Framer Motion 实现平滑的入场和交互动画
- ⌨️ **打字机效果** - Hero 区域动态展示个人标签
- 🚀 **静态导出** - 一键部署到 GitHub Pages
- 📝 **易于配置** - 只需修改一个配置文件即可更新所有内容

## 📋 目录

- [环境准备](#-环境准备)
- [本地启动](#-本地启动)
- [内容修改](#-内容修改)
- [部署到 GitHub Pages](#-部署到-github-pages)
- [项目结构](#-项目结构)

---

## 🛠 环境准备

在开始之前，你需要安装以下软件：

### 1. 安装 Node.js

Node.js 是运行此项目的基础环境。

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 **LTS（长期支持版）** 版本（建议 18.x 或 20.x）
3. 运行安装程序，按照提示完成安装
4. 打开终端（Mac: Terminal / Windows: PowerShell），验证安装：

```bash
node --version  # 应显示类似 v20.x.x
npm --version   # 应显示类似 10.x.x
```

### 2. 安装 Git

Git 用于版本控制和部署到 GitHub。

**Mac 用户：**
```bash
# 使用 Homebrew 安装（如果没有 Homebrew，先安装它）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
```

**Windows 用户：**
1. 访问 [Git 官网](https://git-scm.com/)
2. 下载并安装 Git for Windows

验证安装：
```bash
git --version  # 应显示类似 git version 2.x.x
```

---

## 🚀 本地启动

### 1. 下载项目

如果你已经有这个项目文件夹，跳过此步骤。

```bash
# 克隆仓库（替换为你的仓库地址）
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. 安装依赖

```bash
npm install
```

这个命令会自动下载项目需要的所有依赖包，可能需要几分钟时间。

### 3. 启动本地预览

```bash
npm run dev
```

成功后，终端会显示：
```
▲ Next.js 14.x.x
- Local: http://localhost:3000
```

打开浏览器访问 http://localhost:3000 即可预览网站！

> 💡 **提示**：在本地预览时，修改代码会自动刷新页面。

---

## ✏️ 内容修改

### 核心配置文件

所有个人信息都集中在一个文件中：

📁 **`src/data/config.ts`**

打开这个文件，你会看到清晰的中文注释。主要修改以下内容：

| 配置项 | 说明 |
|--------|------|
| `name` | 你的中文名 |
| `nameEn` | 你的英文名（显示在导航栏） |
| `title` | 你的头衔/学校 |
| `bio` | 个人简介 |
| `social` | 社交媒体链接（Email、GitHub、LinkedIn 等） |
| `education` | 教育经历（学校、专业、GPA、课程） |
| `projects` | 项目经历 |
| `skills` | 技能特长（会显示为进度条） |
| `news` | 最新动态/时间线 |  

### 替换图片

所有图片放在 **`public/`** 文件夹中：

```
public/
├── avatar.jpg           # 你的头像（必须）
├── zju-logo.png        # 学校 Logo（可选）
├── favicon.ico         # 网站图标
└── projects/           # 项目配图文件夹
    ├── smart-car.jpg
    ├── ml-classifier.jpg
    └── ...
```

**头像要求：**
- 推荐尺寸：400x400 像素
- 格式：JPG 或 PNG
- 文件名必须是 `avatar.jpg`（或在 config.ts 中修改对应路径）

---

## 🌐 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 仓库名称：
   - 如果想要 `https://username.github.io` 这样的地址，仓库名必须是 `username.github.io`
   - 否则可以使用任意名称，地址会是 `https://username.github.io/repo-name`
4. 设为 **Public**（公开）
5. 点击 **Create repository**

### 第二步：修改配置（如果仓库名不是 username.github.io）

如果你的仓库名**不是** `username.github.io`，需要修改 `next.config.ts`：

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 取消下面两行的注释，并替换 'repository-name' 为你的仓库名
  basePath: '/repository-name',
  assetPrefix: '/repository-name/',
};
```

### 第三步：推送代码到 GitHub

```bash
# 初始化 Git（如果还没初始化）
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/your-repo-name.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 第四步：启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单中选择 **GitHub Actions**
5. 保存

### 第五步：等待自动部署

推送代码后，GitHub Actions 会自动构建和部署你的网站。

1. 点击仓库的 **Actions** 标签页
2. 可以看到正在运行的工作流
3. 等待变成绿色 ✅ 表示部署成功

### 第六步：访问你的网站 🎉

部署成功后，访问：
- `https://your-username.github.io`（如果仓库名是 username.github.io）
- `https://your-username.github.io/repo-name`（其他情况）

---

## 📁 项目结构

```
personalwebsite/
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 主页面
│   ├── components/
│   │   ├── Header.tsx       # 导航栏
│   │   ├── Hero.tsx         # 首屏（头像+打字机效果）
│   │   ├── About.tsx        # 关于我
│   │   ├── News.tsx         # 最新动态
│   │   ├── Education.tsx    # 教育经历
│   │   ├── Projects.tsx     # 项目经历
│   │   ├── Skills.tsx       # 技能特长
│   │   ├── Contact.tsx      # 联系方式
│   │   ├── Footer.tsx       # 页脚
│   │   ├── ThemeProvider.tsx # 主题提供者
│   │   └── ThemeToggle.tsx  # 主题切换按钮
│   └── data/
│       └── config.ts        # ⭐ 核心配置文件
├── public/
│   ├── avatar.jpg           # 头像
│   └── projects/            # 项目图片
├── .github/
│   └── workflows/
│       └── deploy.yml       # 自动部署配置
├── next.config.ts           # Next.js 配置
├── tailwind.config.ts       # Tailwind 配置
└── package.json             # 依赖配置
```

---

## 🔧 常见问题

### Q: 本地预览正常，但部署后样式错乱？
A: 检查 `next.config.ts` 中的 `basePath` 和 `assetPrefix` 是否正确设置。

### Q: 图片不显示？
A: 确保图片放在 `public/` 文件夹中，路径以 `/` 开头（如 `/avatar.jpg`）。

### Q: 如何修改颜色主题？
A: 编辑 `src/app/globals.css` 中的 CSS 变量（`:root` 和 `.dark` 部分）。

### Q: 如何添加新的页面部分？
A: 在 `src/components/` 中创建新组件，然后在 `src/app/page.tsx` 中导入使用。

---

## 📄 许可证

MIT License - 可自由使用和修改。

---

💡 **如果这个模板对你有帮助，欢迎点个 Star ⭐**
