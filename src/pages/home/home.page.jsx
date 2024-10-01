import Hero from "./components/Hero";
import Dashboard from "./components/dashboard";

function HomePage() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div className="mt-6">
        <Dashboard />
      </div>
    </main>
  );
}

export default HomePage;
