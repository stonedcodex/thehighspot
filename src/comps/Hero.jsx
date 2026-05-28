import { useGSAP } from "@gsap/react";
import { highSpotPic1 } from "../consts";
import HeroCard from "./HeroCard";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Hero = () => {
  useGSAP(() => {
    const heroScroll = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-card",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    heroScroll
      .to(".card-i, .card-p,.card-h", {
        opacity: 0,
      })
      .to(".card-cont", {
        width: "100%",
        height: "100%",
        scale: 1.2,
        backgroundColor: "#000e",
      });
  });
  return (
    <>
      <div className=" hero-sect md:h-[200vh] h-[100vh] z-0 relative flex items-center justify-center md:justify-normal  md:flex-col flex-row ">
        <HeroCard
          className="hero-card"
          nameStart="Your Premium "
          highlight="Cannabis"
          nameEnd="Destination"
          src={highSpotPic1}
          details="Welcome to THE HIGH SPOT, where we supply premium quality cannabis products for all you recreational needs."
        />
        <div className="hero-text">
          <p className="">
            We provide the highest quality cannabis in the SOUTH <span>*</span>.
          </p>
        </div>
      </div>
    </>
  );
};
export default Hero;
