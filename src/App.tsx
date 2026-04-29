import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';

export default function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Capabilities />
    </main>
  );
}
