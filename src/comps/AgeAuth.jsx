import { useEffect } from "react";
import Button from "./Button";

const AgeAuth = () => {
  useEffect(() => {
    if (localStorage.getItem("ageVerified") === "true") {
      const ageModal = document.getElementById("age-modal");

      ageModal.classList.add("hidden");
    }
  }, []);
  const y = "Yes";
  const n = "No";
  return (
    <>
      <div
        id="age-modal"
        className=" flex fixed z-2 inset-0 w-full h-full pointer-events-auto m-0 backdrop-blur-xs color bg-green-600/10 items-center justify-center "
      >
        <div className="bg-green-600 w-70 md:w-100 h-40 md:h-50 left-50 md:shadow-2xl md:shadow-green-950/80 shadow-xl shadow-green-950/50 border-dashed border-2 border-green-50 rounded-xl">
          <h1 className="text-green-50 text-center py-5 md:py-9 text-0.5xl md:text-2xl">
            Welcome to THE HIGH SPOT
          </h1>
          <p className="text-green-50 text-center text-xs">
            You must be 18 years old or older to access this site.
          </p>
          <div className="justify-self-center">
            <Button label={n} />
            <Button label={y} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeAuth;
