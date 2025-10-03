import { CalendarMinus2, CalendarPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddShiftForm({ shifts, setShifts }) {
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const navigate = useNavigate();

    function addShift(newShift) {
        setShifts([...shifts, newShift]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newShift = { date, startTime, endTime };
        addShift(newShift);
        // Reset form fields
        setDate('');
        setStartTime('');
        setEndTime('');
        navigate('/Shifts');
    }

    function handleCancel() {
        navigate('/Shifts');
    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center mt-8" dir="rtl">
            <h2 className="font-bold text-2xl text-blue-600">הוספת משמרת חדשה</h2>
            <form className="mt-6 flex flex-col items-center">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date"> תאריך </label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="shadow appearance-none border rounded w-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start-time"> שעת התחלה </label>
                    <input type="time" id="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="shadow appearance-none border rounded w-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end-time"> שעת סיום </label>
                    <input type="time" id="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="shadow appearance-none border rounded w-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center gap-2">
                        <CalendarPlus />
                        הוסף
                    </button>

                        <button type="submit" onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center gap-2">
                            <CalendarMinus2 />
                            בטל
                        </button>
                </div>
            </form>
        </div>
    )
}