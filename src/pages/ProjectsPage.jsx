import { useApp } from "../context/AppContext.jsx";
import { resolvePath, translations } from "../i18n.js";
import { SOCIAL, PROJECT_LINKS } from "../data.js";
import { ProjectCard } from "../components/ProjectCard.jsx";

export default function ProjectsPage() {
  const { lang } = useApp();
  const t = (key) => resolvePath(translations[lang], key);
  const page = translations[lang].projectsPage;
  const projects = translations[lang].additionalProjects;

  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 pb-20 pt-[110px] max-[576px]:pt-[120px] max-[768px]:pt-[100px]">
      <section className="mx-auto mb-[60px] max-w-[800px] text-center max-[768px]:mb-10">
        <h1 className="mb-5 text-[2.5rem] font-semibold text-primary max-[400px]:text-[1.7rem] max-[576px]:text-[1.9rem] max-[768px]:text-[2.2rem] max-[1024px]:text-[2.5rem] lg:text-[2.8rem]">
          {page.title}
        </h1>
        <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
        <p className="text-[1.05rem] leading-[1.7] text-muted max-[576px]:text-base">
          {page.description}
        </p>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[30px] max-[768px]:grid-cols-1 max-[768px]:gap-5">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            url={i === 0 ? PROJECT_LINKS.poo : PROJECT_LINKS.thread}
          />
        ))}
      </section>

      <section className="mt-[60px] rounded-xl border border-line bg-soft p-[50px] text-center max-[400px]:p-[30px_15px] max-[768px]:p-[40px_20px]">
        <h2 className="mb-[15px] text-[2rem] font-semibold text-primary max-[400px]:text-[1.6rem] max-[576px]:text-[1.6rem] max-[768px]:text-[1.8rem]">
          {page.ctaTitle}
        </h2>
        <p className="mx-auto mb-[30px] max-w-[600px] text-[1.05rem] text-muted max-[576px]:text-base">
          {page.ctaDescription}
        </p>
        <a
          href={SOCIAL.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-[30px] py-3 text-base font-medium text-black no-underline transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_-8px] hover:shadow-primary/40"
        >
          <i className="fab fa-github" /> {page.ctaButton}
        </a>
      </section>
    </main>
  );
}