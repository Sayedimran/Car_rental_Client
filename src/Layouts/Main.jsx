import React from "react";
import Navber from "../components/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="">
      <nav>
        <Navber />
      </nav>
      <main className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
