import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiGithub,
    SiSupabase,
    SiFigma,
    SiPostgresql,
    SiNodedotjs,
    SiFlutter,
  } from "react-icons/si";

const Skills = () => {
  return (
    <section>
      <div className="m-4">
        <h3 className="text-3xl text-center py-2 text-amber-950 font-medium mt-4">
          Skills
        </h3>
        <div className="uppercase flex flex-wrap justify-center gap-16 py-10 text-5xl">
          <figure className="group">
            <SiHtml5 className="mx-auto group-hover:text-[#E34F26]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Html5
            </figcaption>
          </figure>
          <figure className="group">
            <SiCss3 className="mx-auto hover:text-[#1572B6]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Css3
            </figcaption>
          </figure>
          <figure className="group">
            <SiJavascript className="mx-auto hover:text-[#F7DF1E]" />
            <figcaption className="text-sm font-medium text-white group-hover:text-black">
              JavaScript
            </figcaption>
          </figure>
          <figure className="group">
            <SiReact className="mx-auto hover:text-[#61DAFB]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              React
            </figcaption>
          </figure>
          <figure className="group">
            <SiSupabase className="mx-auto hover:text-[#3FCF8E]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Supabase
            </figcaption>
          </figure>
          <figure className="group">
            <SiPostgresql className="mx-auto hover:text-[#4169E1]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Psql
            </figcaption>
          </figure>
          <figure className="group">
            <SiGithub className="mx-auto " />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Github
            </figcaption>
          </figure>
          <figure className="group">
            <SiFlutter className="mx-auto hover:text-[#02569B]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Flutter
            </figcaption>
          </figure>
          <figure className="group">
            <SiFigma className="mx-auto hover:text-[#F24E1E]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Figma
            </figcaption>
          </figure>
          <figure className="group">
            <SiNodedotjs className="mx-auto hover:text-[#339933]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Node.js
            </figcaption>
          </figure>
          <figure className="group">
            <SiTailwindcss className="mx-auto hover:text-[#06B6D4]" />
            <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
              Tailwind
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Skills;
