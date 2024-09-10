import Hero from "./components/Hero";
import CurrentSchedules from "@/components/CurrentSchedules";

function HomePage() {
  return (
    <main className="container px=4">
      <div>
        <Hero/>
        <CurrentSchedules />
      </div>
    </main>
  );
}

export default HomePage;
