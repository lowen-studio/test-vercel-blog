import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight md:pr-8">
        Superblog
      </h1>
      <h4 className="text-center md:text-left text-2xl mt-5 md:pl-8">
        A statically generated blog example using Next.js
      </h4>
    </section>
  );
}
