import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/components/Layout/MainLayout";
import Home from "@/pages/Home";
import Places from "@/pages/Places";
import Timetable from "@/pages/Timetable";
import FlightInfo from "@/pages/FlightInfo";
import HotelInfo from "@/pages/HotelInfo";
import BookingInfo from "@/pages/BookingInfo";
import CheckList from "@/pages/CheckList";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/flightInfo" element={<FlightInfo />} />
          <Route path="/hotelInfo" element={<HotelInfo />} />
          <Route path="/bookingInfo" element={<BookingInfo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
