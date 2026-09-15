import { useApp } from "../context/AppContext.jsx";
import { resolvePath, translations } from "../i18n.js";

export function ProjectCard({ project, url }) {
  const { lang } = useApp();
  const t = (key) => resolvePath(translations[lang], key);

  return (
    <div className="group flex flex-col rounded-xl border border-line bg-soft p-[26px] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/60 hover:shadow-[0_14px_30px_-14px] hover:shadow-primary/25">
      <div className="mb-5 flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-[1.4rem] text-primary transition-transform duration-300 group-hover:scale-110">
          <i className={`${project.icon}`} />
        </span>
        <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[0.8rem] text-faint">
          {project.date}
        </span>
      </div>

      <h3 className="mb-2 text-[1.15rem] font-semibold text-content transition-colors duration-200 group-hover:text-primary">
        {project.title}
      </h3>

      <ul className="mb-4 flex list-none flex-wrap gap-2 p-0">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-primary bg-primary/5 px-2.5 py-1 font-mono text-[0.72rem] text-primary"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="mb-6 flex-1 text-[0.92rem] leading-[1.65] text-muted">
        {project.description}
      </p>

      <div className="mt-auto flex flex-col gap-2.5">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="group/code flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-transparent px-5 py-2 text-[0.85rem] font-medium text-content no-underline transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
        >
          <i className="fab fa-github" /> {t("links.code")}
          <i className="fas fa-arrow-right text-[0.75rem] transition-transform duration-300 group-hover/code:translate-x-1" />
        </a>
      </div>
    </div>
  );
}