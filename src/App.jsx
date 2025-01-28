import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
function App() {
  return (
    <main className=" min-h-screen w-screen overflow-x-hidden bg-primary ">
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

      {/* <div className="bg-primary flex justify-center items-start sm:px-16 px-6 ">
        <div className="xl:max-w-[1280px] w-full"></div>
      </div> */}
    </main>
  );
}

export default App;
