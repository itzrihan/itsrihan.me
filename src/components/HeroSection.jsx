import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn") && state) {
        setState(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [state]);

  return (
    <section id="" className="bg-[#0d1117] relative">
      <section>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 pt-28 md:px-8 md:pt-36 pb-14">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-[#c9d1d9] font-extrabold mx-auto md:text-5xl">
              <span>
                Hey,<span className="hand">👋</span> I&apos;m{" "}
              </span>
              <span className="text-[#58a6ff] leading-normal">Rihan</span>
              <br />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Full Stack Developer & DSA Expert")
                    .start();
                }}
                options={{
                  wrapperClassName: "text-[#c9d1d9]",
                  cursorClassName: "text-[#58a6ff]"
                }}
              />
            </h2>
            <p className="max-w-2xl mx-auto text-[#8b949e] text-lg">
              I'm not sure what's faster, debugging or making a cup of coffee.{" "}
              <span className="text-[#58a6ff] underline">
                &apos;bug-free latte&apos;!
              </span>
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm md"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(88, 166, 255, 0.11) 15.73%, rgba(88, 166, 255, 0.41) 15.74%, rgba(88, 166, 255, 0.26) 56.49%, rgba(88, 166, 255, 0.4) 115.91%)",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d1117]"></div>
      </section>
    </section>
  );
};

export default HeroSection;
