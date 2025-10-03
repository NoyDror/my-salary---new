import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shifts from './Shifts';
import { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import AddShiftForm from './AddShiftForm';

export default function App() {
  const [shifts, setShifts] = useState([]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home shifts={shifts} setShifts={setShifts} />} />
          <Route path="/Shifts" element={<Shifts shifts={shifts} setShifts={setShifts} />} />
          <Route path="/AddShiftForm" element={<AddShiftForm shifts={shifts} setShifts={setShifts} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
