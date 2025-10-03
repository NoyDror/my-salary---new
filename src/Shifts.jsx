import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export default function Shifts({ shifts = [], setShifts }) {
    const cols = ["תאריך", "יום", "התחלה", "סיום", "סה״כ שעות", "שכר יומי", "פעולות נוספות"];

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center mt-8" dir="rtl">
            <h2 className="font-bold text-2xl text-blue-600">המשמרות שלי</h2>
            <table className="table-fixed min-w-[600px] min-h-[100px] border-collapse border-gray-400 mt-6">
                <thead className="bg-blue-300">
                    <tr>
                        {cols.map((col, i) => (
                            <th className="border border-gray-400" key={i}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift, index) => (
                        <tr key={index} className="text-center">
                            <td className="border border-gray-400 px-4 py-2">{new Date(shift.date).toLocaleDateString('he-IL')}</td>
                            <td className="border border-gray-400 px-4 py-2">{new Date(shift.date).toLocaleDateString('he-IL', { weekday: 'long' })}</td>
                            <td className="border border-gray-400 px-4 py-2">{shift.startTime}</td>
                            <td className="border border-gray-400 px-4 py-2">{shift.endTime}</td>
                            <td className="border border-gray-400 px-4 py-2">
                                {((new Date(`1970-01-01T${shift.endTime}`) - new Date(`1970-01-01T${shift.startTime}`)) / (1000 * 60 * 60)).toFixed(2)}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                {(((new Date(`1970-01-01T${shift.endTime}`) - new Date(`1970-01-01T${shift.startTime}`)) / (1000 * 60 * 60)) * 44).toFixed(2)} ש״ח
                            </td>
                            <td className="border border-gray-400 px-4 py-2">עריכה | מחיקה</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 bg-blue-500 text-white font-bold px-4 py-2 rounded">
                <Link to="/AddShiftForm">
                    <div className="flex flex-row items-center gap-2">
                        <Calendar />
                        <button className="text-base"> הוספת משמרת</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}