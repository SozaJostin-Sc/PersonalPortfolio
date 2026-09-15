import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext.jsx";
import { resolvePath, translations } from "../../i18n.js";
import { PROJECT_LINKS } from "../../data.js";
import { ProjectCard } from "../ProjectCard.jsx";
import SectionHeading from "../SectionHeading.jsx";

export default function FeaturedProjects() {
  const { lang } = useApp();
  const t = (key) => resolvePath(translations[lang], key);
  const caseStudy = translations[lang].caseStudy;
  const projects = translations[lang].featuredProjects;

  return (
    <section id="projects" className="scroll-mt-[60px] max-[576px]:scroll-mt-10 lg:scroll-mt-[100px]">
      <SectionHeading title={t("sections.featuredProjects")} />

      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex w-full max-w-[800px] flex-col gap-[30px] rounded-xl border border-line bg-soft p-10 text-left transition-colors duration-300 hover:border-primary/60 max-[768px]:p-[25px]">
          <div className="border-b border-line pb-5">
            <h3 className="mb-2.5 text-[1.5rem] text-primary lg:text-[2rem]">
              {caseStudy.title}
            </h3>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.85rem] text-faint">
              {caseStudy.type}
            </span>
          </div>

          <div className="flex flex-col gap-[25px]">
            <div>
              <h4 className="mb-2.5 text-[1.1rem] font-semibold text-content">
                <span className="mr-2 text-primary">▹</span>
                {caseStudy.challengeTitle}
              </h4>
              <p className="text-base leading-[1.7] text-muted">
                {caseStudy.challenge}
              </p>
            </div>

            <div>
              <h4 className="mb-2.5 text-[1.1rem] font-semibold text-content">
                <span className="mr-2 text-primary">▹</span>
                {caseStudy.solutionTitle}
              </h4>
              <ul className="list-none p-0">
                {caseStudy.solution.map((item) => (
                  <li
                    key={item.tech}
                    className="mb-2 pl-5 text-base leading-[1.7] text-muted"
                  >
                    <span className="text-primary">▹ </span>
                    <span className="font-medium text-primary">{item.tech}</span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2.5 text-[1.1rem] font-semibold text-content">
                <span className="mr-2 text-primary">▹</span>
                {caseStudy.impactTitle}
              </h4>
              <p className="text-base leading-[1.7] text-muted">
                {caseStudy.impact}
              </p>
            </div>
          </div>

          <a
            href={PROJECT_LINKS.happysoul}
            target="_blank"
            rel="noreferrer"
            className="group mt-2.5 flex w-fit items-center gap-2 rounded-full border border-line bg-transparent px-[25px] py-2.5 text-[0.9rem] font-medium text-content no-underline transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:text-primary"
          >
            {caseStudy.viewLive}
            <i className="fas fa-arrow-right text-[0.85rem] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-5 grid w-full max-w-[800px] grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[30px] max-[768px]:grid-cols-1 max-[768px]:gap-5">
          <ProjectCard project={projects[0]} url={PROJECT_LINKS.appointment} />
          <ProjectCard project={projects[1]} url={PROJECT_LINKS.library} />
        </div>

        <Link
          to="/projects"
          className="mt-[30px] inline-block max-w-[280px] cursor-pointer rounded-full bg-gradient-to-r from-secondary to-secondary/80 px-[35px] py-[14px] text-center text-base font-medium text-black no-underline transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_-8px] hover:shadow-secondary/60"
        >
          {t("moreProjectsBtn")}
        </Link>
      </div>
    </section>
  );
}