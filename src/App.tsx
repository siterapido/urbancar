import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { PassengerSection } from './components/sections/PassengerSection';
import { DriverSection } from './components/sections/DriverSection';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { SpecialOffer } from './components/sections/SpecialOffer';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <PassengerSection />
        <DriverSection />
        <HowItWorks />
        <Features />
        <SpecialOffer />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
