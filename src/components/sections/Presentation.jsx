import { useApp } from "../../context/AppContext.jsx";
import { resolvePath, translations } from "../../i18n.js";
import { RESUME, SOCIAL } from "../../data.js";

export default function Presentation() {
  const { lang } = useApp();
  const t = (key) => resolvePath(translations[lang], key);

  return (
    <section className="lg:sticky lg:top-[110px] lg:flex lg:h-fit lg:items-center lg:justify-start max-lg:static max-lg:text-center">
      <div className="max-w-full text-left max-lg:mx-auto lg:max-w-[520px]">
        <h3 className="mb-5 font-mono text-[1.05rem] font-normal text-primary">
          {t("home.greeting")} <span className="animate-wave">👋</span>
        </h3>
        <h1 className="mb-4 text-[2.4rem] font-semibold leading-[1.08] text-content max-[400px]:text-[2rem] max-[576px]:text-[2.4rem] max-[1024px]:text-[2.6rem] lg:text-[3.2rem]">
          {t("home.name")}{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Jostin Soza
          </span>
        </h1>
        <h2 className="mb-6 text-[1.3rem] font-normal text-faint max-[400px]:text-[1.15rem] max-[576px]:text-[1.3rem] max-[1024px]:text-[1.35rem] lg:text-[1.5rem]">
          {t("home.subtitle")}
        </h2>
        <p className="mb-6 text-[1.05rem] leading-[1.75] text-muted max-[400px]:text-base">
          {t("home.description")}
        </p>

        <ul className="mb-9 flex list-none justify-center gap-[20px] p-0 lg:justify-start">
          <li>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-[1.2rem] text-muted no-underline transition-all duration-200 hover:-translate-y-[3px] hover:border-primary hover:text-primary hover:shadow-[0_6px_18px_-6px] hover:shadow-primary/40 max-[400px]:h-10 max-[400px]:w-10 max-[400px]:text-base"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-[1.2rem] text-muted no-underline transition-all duration-200 hover:-translate-y-[3px] hover:border-primary hover:text-primary hover:shadow-[0_6px_18px_-6px] hover:shadow-primary/40 max-[400px]:h-10 max-[400px]:w-10 max-[400px]:text-base"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL.email}
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-[1.2rem] text-muted no-underline transition-all duration-200 hover:-translate-y-[3px] hover:border-primary hover:text-primary hover:shadow-[0_6px_18px_-6px] hover:shadow-primary/40 max-[400px]:h-10 max-[400px]:w-10 max-[400px]:text-base"
            >
              <i className="fas fa-envelope" />
            </a>
          </li>
        </ul>

        <a
          href={RESUME[lang]}
          download
          className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-secondary to-secondary/80 px-[35px] py-[14px] text-center text-base font-medium text-black no-underline transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_-8px] hover:shadow-secondary/60 max-[400px]:px-[28px] max-[400px]:py-3 max-[400px]:text-sm"
        >
          {t("home.downloadResume")}
        </a>
      </div>
    </section>
  );
}