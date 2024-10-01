import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "@/components/shared/Footer";

function RootLayout() {
  return (
    <div className="container px-4">
      <Navigation />
      <Outlet />
      <div className="mt-8 mb-5">
      <Footer />
      </div>
      
    </div>
  );
}

export default RootLayout;