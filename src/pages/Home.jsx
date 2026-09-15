import Presentation from "../components/sections/Presentation.jsx";
import Skills from "../components/sections/Skills.jsx";
import Experience from "../components/sections/Experience.jsx";
import FeaturedProjects from "../components/sections/FeaturedProjects.jsx";

export default function Home() {
  return (
    <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-[60px] px-5 pb-20 pt-10 lg:grid-cols-2 lg:items-start lg:gap-20 lg:pt-10 mt-[100px] max-[400px]:gap-10 max-[576px]:mt-[120px] max-[576px]:gap-[50px] max-[1024px]:mt-[100px] lg:mt-[70px]">
      <Presentation />
      <div className="flex flex-col gap-[50px] max-[400px]:gap-10 max-[576px]:gap-[50px] lg:gap-20">
        <Skills />
        <Experience />
        <FeaturedProjects />
      </div>
    </div>
  );
}