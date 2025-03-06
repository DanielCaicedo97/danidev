import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skill from "./components/Skill";
function App() {
  return (
    <main className=" min-h-screen max-w-screen overflow-x-hidden bg-primary ">
      <div className="flex  justify-center items-center sm:px-16 px-6 ">
        <div className="xl:max-w-[1280px] w-full relative">
          <NavBar />
        </div>
      </div>
      <div className="bg-primary  dark:bg-primary-dark flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="bg-primary flex justify-center  dark:bg-primary-dark items-start sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <About />
        </div>
      </div>

      <div className="bg-primary flex justify-center  dark:bg-primary-dark items-start sm:px-16 px-6 overflow-hidden">
        <div className="xl:max-w-[1280px] w-full ">
          <Skill />
        </div>
      </div>

      <div className="bg-primary flex justify-center  dark:bg-primary-dark items-start sm:px-16 px-6 overflow-hidden">
        <div className="xl:max-w-[1280px] w-full ">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
