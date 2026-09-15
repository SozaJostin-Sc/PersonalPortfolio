import { useApp } from "../context/AppContext.jsx";
import { resolvePath, translations } from "../i18n.js";
import { SOCIAL } from "../data.js";

export default function Footer() {
  const { lang } = useApp();
  const t = (key) => resolvePath(translations[lang], key);

  return (
    <footer className="mt-auto border-t border-line/70 bg-background py-9">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-5 px-5 text-center lg:flex-row lg:justify-between lg:text-left">
        <p className="text-[0.9rem] text-faint">{t("footer.copyright")}</p>
        <div className="flex items-center gap-5">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-[1rem] text-muted no-underline transition-all duration-200 hover:-translate-y-[2px] hover:border-primary hover:text-primary"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-[1rem] text-muted no-underline transition-all duration-200 hover:-translate-y-[2px] hover:border-primary hover:text-primary"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href={SOCIAL.email}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-[1rem] text-muted no-underline transition-all duration-200 hover:-translate-y-[2px] hover:border-primary hover:text-primary"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}