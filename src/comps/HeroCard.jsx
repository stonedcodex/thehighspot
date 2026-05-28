import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroCard = (props) => {
  const { details, nameStart, nameEnd, highlight, src } = props;
  useGSAP(() => {
    const header = document.querySelector(".card-h");

    const tl = gsap.timeline();

    const hSplit = SplitText.create(header, {
      type: " words, lines",
      mask: "lines",
    });

    tl.from(hSplit.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "none",
    });

    gsap.from(".card-i, .card-cont ", {
      opacity: 0.5,
      duration: 2,
    });
  });
  return (
    <>
      <div className="md:fixed w-90 md:w-200 h-auto bg-black/90 my-10 flex justify-center flex-col md:flex-row card-cont">
        <div className="w-95 my-10 text-green-50 ">
          <h1 className="card-h text-2xl md:text-4xl text-center font-bold">
            {nameStart}{" "}
            <span className="highlight text-green-600 text-3xl md:text-5xl ">
              {highlight}
            </span>{" "}
            {nameEnd}
          </h1>
          <p className="hidden md:block card-p text-xs md:text-1 py-4">
            {details}
          </p>
        </div>
        <img
          src={src}
          alt={src.name}
          className="card-i h-60 md:h-60 my-10 mx-5"
        />
      </div>
    </>
  );
};

export default HeroCard;
