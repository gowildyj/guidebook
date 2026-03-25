import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/components/Layout/MainLayout";
import Home from "@/pages/Home";
import Places from "@/pages/Places";
// import CheckList from "@/pages/CheckList";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/checklist" element={<Places />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
