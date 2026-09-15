import { useApp } from "../../context/AppContext.jsx";
import { translations } from "../../i18n.js";
import SectionHeading from "../SectionHeading.jsx";

const ICONS = [
  "fa-solid fa-mobile-screen",
  "fab fa-react",
  "fas fa-bolt",
  "fa-brands fa-node-js",
  "fa-solid fa-database",
  "fa-brands fa-linux",
  "fa-brands fa-java",
  "fa-brands fa-envira",
];

export default function Skills() {
  const { lang } = useApp();
  const skills = translations[lang].skills;
  const title = translations[lang].sections.techStack;
  const names = Object.keys(skills);

  return (
    <section id="skills" className="scroll-mt-[60px] max-[576px]:scroll-mt-10 lg:scroll-mt-[100px]">
      <SectionHeading title={title} />
      <ul className="m-0 grid list-none grid-cols-1 gap-[15px] p-0 max-[576px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:gap-5">
        {names.map((key, i) => (
          <li
            key={key}
            className="group flex items-center gap-[15px] rounded-xl border border-line bg-soft p-5 transition-all duration-300 hover:-translate-y-[3px] hover:border-primary/60 hover:shadow-[0_10px_24px_-12px] hover:shadow-primary/25"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[1.5rem] text-primary transition-transform duration-300 group-hover:scale-110">
              <i className={`${ICONS[i]}`} />
            </span>
            <div className="flex flex-col">
              <span className="text-[1.05rem] font-semibold text-content">
                {skills[key].name}
              </span>
              <span className="text-[0.85rem] text-faint">
                {skills[key].desc}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}