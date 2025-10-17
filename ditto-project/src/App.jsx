import React from "react"
import Navbar from "./components/Navbar.jsx"
import Linebreak from "./components/Linebreak.jsx";
import Herosection from "./components/Herosection.jsx";
import Offers from "./components/Offers.jsx";
import Experience from "./components/Experience.jsx";
import Working from "./components/Working.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return(
    <main>
      <Navbar />
      <Linebreak />
      <Herosection />
      <Offers />
      <Experience />
      <Profile />
      <Working />
    </main>
  );
}

export default App
