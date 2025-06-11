import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState<"system" | "light" | "dark">("system");

  return (
    <>
      <header style={{ background: mode === "light" ? "#000" : "#FFF" }}>
        <Navbar setMode={setMode} mode={mode} />
      </header>
      <main>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </main>
    </>
  );
}

export default App;
