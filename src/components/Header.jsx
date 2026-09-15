import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { resolvePath, translations } from "../i18n.js";

function SunIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function Header() {
  const { theme, setTheme, lang, setLang } = useApp();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const onHome = pathname === "/";

  const links = onHome
    ? [
        { key: "skills", to: "/#skills" },
        { key: "experience", to: "/#experience" },
        { key: "projects", to: "/#projects" },
        { key: "moreProjects", to: "/projects", active: false },
      ]
    : [
        { key: "home", to: "/" },
        { key: "skills", to: "/#skills" },
        { key: "experience", to: "/#experience" },
        { key: "projects", to: "/#projects" },
        { key: "moreProjects", to: "/projects", active: true },
      ];

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handler = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleLang = () => setLang(lang === "en" ? "es" : "en");
  const t = (key) => resolvePath(translations[lang], key);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] flex h-[70px] items-center border-b border-line/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-display text-[1.8rem] font-semibold leading-none tracking-tight text-content no-underline transition-colors duration-200 hover:text-primary"
        >
          Jostin Soza<span className="text-primary">.</span>
        </Link>

        <button
          ref={toggleRef}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-line text-muted transition-all duration-200 hover:border-primary hover:text-primary lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                menuOpen ? "top-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] block h-[2px] w-5 rounded-full bg-current transition-all duration-200 ease-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                menuOpen ? "top-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav
          ref={navRef}
          id="mobile-menu"
          className={`fixed left-0 right-0 top-[70px] flex h-[calc(100vh-70px)] flex-col items-center justify-start gap-[16px] overflow-y-auto border-b border-line bg-background/95 px-5 pt-[55px] pb-8 backdrop-blur-xl transition-all duration-300 ease-out lg:static lg:z-auto lg:h-auto lg:flex lg:flex-row lg:justify-end lg:gap-8 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
          }`}
        >
          {links.map((link, i) => (
            <Link
              key={link.key}
              to={link.to}
              onClick={closeMenu}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`relative text-[1.3rem] font-medium transition-all duration-300 lg:my-0 lg:px-0 lg:py-1 lg:text-[0.95rem] lg:font-normal lg:after:absolute lg:after:-bottom-0.5 lg:after:left-0 lg:after:h-[2px] lg:after:w-0 lg:after:rounded-full lg:after:bg-primary lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0 lg:translate-y-0 lg:opacity-100"
              } ${
                link.active ? "text-primary" : "text-muted hover:text-primary"
              }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}

          <span
            className="mt-2 flex items-center gap-4 transition-all duration-300 lg:ml-3 lg:mt-0 lg:gap-4 lg:transition-colors"
            style={{ transitionDelay: menuOpen ? `${links.length * 60}ms` : "0ms" }}
          >
            <button
              className={`relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-line text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_14px] hover:shadow-primary/30 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0 lg:translate-y-0 lg:opacity-100"
              }`}
              title={t("misc.themeToggle")}
              onClick={toggleTheme}
            >
              <span
                className={`absolute transition-all duration-300 ${
                  theme === "dark"
                    ? "rotate-0 scale-100 opacity-100"
                    : "rotate-90 scale-0 opacity-0"
                }`}
              >
                <SunIcon className="h-[1.15rem] w-[1.15rem]" />
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  theme === "dark"
                    ? "-rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              >
                <MoonIcon className="h-[1.15rem] w-[1.15rem]" />
              </span>
            </button>
            <button
              className={`flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-line px-3.5 text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_14px] hover:shadow-primary/30 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0 lg:translate-y-0 lg:opacity-100"
              }`}
              title={t("misc.langToggle")}
              onClick={toggleLang}
            >
              <GlobeIcon className="h-[1rem] w-[1rem]" />
              <span
                key={lang}
                className="animate-pop font-mono text-[0.8rem] font-medium tracking-widest"
              >
                {lang === "en" ? "EN" : "ES"}
              </span>
            </button>
          </span>
        </nav>
      </div>
    </header>
  );
}