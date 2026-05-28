import { useGSAP } from "@gsap/react";
import { highSpotLogo } from "../consts";
import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 747 });

  useGSAP(() => {
    const width = document.querySelector(".back-logo").offsetWidth;
    const start = isMobile ? `top (${-width * (20 / 100)})` : `top (${-width})`;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-card",
        start,

        scrub: true,
      },
    });

    gsap.fromTo("#logo, .navbar", { opacity: 0 }, { opacity: 1, duration: 3 });
    tl.to("nav", {
      paddingTop: 5,
      paddingBottom: 4,
      duration: 0.2,
      ease: "sine",
      backgroundColor: "#000e",
      backdropFilter: "blur(3px)",
    }).to("#logo", {
      xPercent: -20,
      scale: 0.75,
      duration: 0.3,
      ease: "sine",
    });
  });
  return (
    <>
      <nav className=" top-0 z-1 sticky py-5 flex md:py-5 justify-center md:justify-between items-center px-20 bg-black w-full ">
        <img
          src={highSpotLogo}
          alt="logo "
          id="logo"
          className="w-15 md:w-20"
        />

        <Navbar />
      </nav>
    </>
  );
};
export default Header;
