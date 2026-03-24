import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Places from "@/pages/Places";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
