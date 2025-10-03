import { Settings, Calendar, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-white border-t border-gray-100 p-2" >
            <div className="max-w-4xl mx-auto flex gap-2 justify-center">
                {/* Bottom buttons */}
                <Link to="/Shifts">
                    <button className="flex-1 w-xs bg-white border-2 border-gray-200 text-gray-700 py-6 px-6 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all font-medium flex flex-col items-center gap-3 group">
                        <Calendar className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                        <span className="text-base">משמרות</span>
                    </button>
                </Link>
                <button className="flex-1 w-xs bg-white border-2 border-gray-200 text-gray-700 py-6 px-6 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all font-medium flex flex-col items-center gap-3 group">
                    <Clock className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <span className="text-base">סיכום שעות</span>
                </button>
                <button className="flex-1 w-xs bg-white border-2 border-gray-200 text-gray-700 py-6 px-6 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all font-medium flex flex-col items-center gap-3 group">
                    <Settings className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <span className="text-base">הגדרות</span>
                </button>
            </div>
        </footer >
    )
}