import { useApp } from "../../context/AppContext.jsx";
import { resolvePath, translations } from "../../i18n.js";
import SectionHeading from "../SectionHeading.jsx";

export default function Experience() {
  const { lang } = useApp();
  const t = (key) => resolvePath(translations[lang], key);

  return (
    <section id="experience" className="scroll-mt-[60px] max-[576px]:scroll-mt-10 lg:scroll-mt-[100px]">
      <SectionHeading title={t("sections.experience")} />
      <div className="flex flex-col gap-5">
        <div className="group flex flex-col gap-2.5 rounded-xl border border-line border-l-4 border-l-primary bg-soft p-[30px] transition-all duration-300 hover:translate-x-[5px] hover:border-l-primary hover:shadow-[0_10px_28px_-14px] hover:shadow-primary/20 max-[576px]:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2.5 max-[576px]:flex-col max-[576px]:items-start">
            <h3 className="m-0 text-[1.3rem] text-content">{t("experience.role")}</h3>
            <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.85rem] text-primary">
              {t("experience.date")}
            </span>
          </div>
          <h4 className="flex items-center gap-2 text-[1.1rem] font-medium text-muted">
            <i className="fas fa-building text-[0.85rem] text-primary" />
            {t("experience.company")}
          </h4>
        </div>
      </div>
    </section>
  );
}