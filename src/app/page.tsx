import About from "@/components/About";
import News from "@/components/News";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="space-y-12">
      <About />
      <hr className="border-gray-100 dark:border-gray-800" />
      <News />
      <hr className="border-gray-100 dark:border-gray-800" />
      <Projects />
    </div>
  );
}
