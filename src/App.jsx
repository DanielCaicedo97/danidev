import { About, Footer, Hero, NavBar, Skill } from "./components/index.js";

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-primary dark:bg-primary-dark">
      {/* Navbar y Hero */}
      <div
        id="home"
        className="flex flex-col items-center sm:px-16 px-4 lg:h-screen"
      >
        {/* Navbar con altura automática */}
        <div className="w-full max-w-[1280px]">
          <NavBar />
        </div>

        {/* Hero ocupa el espacio restante */}
        <div className="w-full max-w-[1280px] flex-1 flex items-center justify-center mb-12 md:mb-18">
          <Hero />
        </div>
      </div>

      <div className="min-h-screen">
        <Section>
          <About />
        </Section>
        <Section>
          <Skill />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
      {/* Secciones principales */}
    </main>
  );
}

// Componente reutilizable para secciones
const Section = ({ children }) => (
  <section className="flex justify-center items-start sm:px-16 px-4">
    <div className="xl:max-w-[1280px] w-full">{children}</div>
  </section>
);

export default App;
