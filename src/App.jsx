import AgeAuth from "./comps/AgeAuth";
import Header from "./comps/Header";
import Background from "./comps/Background";
import Hero from "./comps/Hero";

const App = () => {
  return (
    <>
      <Header />
      <AgeAuth />
      <div className="overflow-hidden fixed">
        <Background />
      </div>
      <Hero />
    </>
  );
};
export default App;
