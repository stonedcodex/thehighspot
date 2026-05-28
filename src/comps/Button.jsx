const Button = (props) => {
  const und18 = (opt) => {
    if (opt === "Yes") {
      const ageModal = document.getElementById("age-modal");
      const heroCard = document.getElementsByClassName("hero-card");

      localStorage.setItem("ageVerified", "true");
      ageModal.classList.add("hidden");
      heroCard.classList.remove("hidden");
    } else if (opt === "No") {
      //
    }
  };
  const { label } = props;
  return (
    <>
      <button
        type="button"
        className="md:px-8 px-7 bg-green-600 hover:bg-green-800 md:py-1 m-5 md:m-5 text-green-50 border-2 border-green-50 rounded-md hover:rounded-xl hero-card"
        onClick={() => {
          und18(label);
        }}
      >
        {label}
      </button>
    </>
  );
};
export default Button;
