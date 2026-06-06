import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.bio,
  keywords: [
    "Embodied AI",
    "Reinforcement Learning",
    "Vision-Language-Action",
    "Sim-to-Real",
    "Zhejiang University",
    "Automation",
    "Robotics",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white dark:bg-black">
        <ThemeProvider>
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Sidebar - Fixed on desktop (280px width) */}
            <Sidebar />

            {/* Right Content Area */}
            <main className="flex-1 lg:ml-[280px] min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {children}
              </div>

              <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 mt-auto">
                © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind.
              </footer>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
