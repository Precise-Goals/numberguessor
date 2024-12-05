import { useState } from "react";
import "./App.css";
import { Logic } from "./components/logic";
import { Footer } from "./components/footer";

function App() {
  return (
    <div id="king">
      <div id="main">
        <nav className="top">
          <ul className="l">
            <li>Numbo</li>
          </ul>
        </nav>
        <Logic />
      </div>
      <Footer />
    </div>
  );
}

export default App;
