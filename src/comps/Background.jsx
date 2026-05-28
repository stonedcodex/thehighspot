import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);
const Background = () => {
  useGSAP(() => {
    //let split = SplitText.create("#hero-logo", { type: "lines, words, chars" });
    document.querySelectorAll(".back-sect").forEach((marquee) => {
      const inner = marquee.querySelector(".marquee-track");
      const content = inner.querySelector(".back-logo");
      const direction = marquee.getAttribute("data-direction");
      const width = content.offsetWidth;
      const clone = content.cloneNode(true);
      inner.append(clone);

      gsap.fromTo(
        inner,
        { x: direction === "100%" ? -width : 0 },
        {
          x: direction === "100%" ? 0 : -width,
          repeat: -1,
          duration: 10,
          ease: "none",
        },
      );
    });
  });

  return (
    <>
      <div
        className=" mt-15 md:mt-5 back-sect text-green-50 overflow-hidden "
        data-direction="-100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-[7rem] py-2  md:text-9xl md:py-4  pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
      <div
        className="back-sect text-green-50 boverflow-hidden "
        data-direction="100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-[7rem] py-2  md:text-9xl  md:py-4 pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
      <div
        className=" back-sect text-green-50  overflow-hidden "
        data-direction="-100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-[7rem]  py-2 md:text-9xl   md:py-4 pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
      <div
        className=" hidden md:block back-sect text-green-50  overflow-hidden "
        data-direction="100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-9xl md:py-4  pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
      <div
        className=" hidden lg:block back-sect text-green-50  overflow-hidden "
        data-direction="-100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-[7rem]  py-2 md:text-9xl   md:py-4 pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
      <div
        className=" hidden lg:block back-sect text-green-50  overflow-hidden "
        data-direction="100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-9xl md:py-4  pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
      <div
        className=" hidden lg:block back-sect text-green-50  overflow-hidden "
        data-direction="-100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-[7rem]  py-2 md:text-9xl   md:py-4 pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
      <div
        className=" hidden lg:block back-sect text-green-50  overflow-hidden "
        data-direction="100%"
      >
        <div className="marquee-track flex whitespace-nowrap">
          <span className="back-logo text-9xl md:py-4  pr-20">
            THE HIGH SPOT
          </span>
        </div>
      </div>
    </>
  );
};
export default Background;
