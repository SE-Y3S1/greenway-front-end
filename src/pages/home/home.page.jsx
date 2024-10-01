import Hero from "./components/Hero";
import CurrentSchedules from "@/components/CurrentSchedules";

function HomePage() {
  return (
    <main>
      <div>
        <Hero/>
        <CurrentSchedules />
      </div>
    </main>
  );
}

export default HomePage;
