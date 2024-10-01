import Hero from "./components/Hero";
import Dashboard from "./components/dashboard";
import CurrentSchedules from "@/components/CurrentSchedules";

function HomePage() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div className="mt-6">
        <Dashboard />
        <CurrentSchedules />
      </div>
    </main>
  );
}

export default HomePage;
