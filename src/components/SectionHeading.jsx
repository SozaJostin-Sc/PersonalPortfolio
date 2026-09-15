export default function SectionHeading({ title }) {
  return (
    <div className="mb-8 flex items-center gap-4 max-lg:justify-center lg:gap-5">
      <h2 className="m-0 whitespace-nowrap text-xl font-semibold text-content lg:text-2xl">
        {title}
      </h2>
      <span className="hidden h-px w-full max-w-[180px] flex-1 bg-line lg:block" />
    </div>
  );
}