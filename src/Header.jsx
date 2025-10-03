import { Home as HomeIcon, Menu, X, Settings, User, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-white shadow-md p-4 relative">
            <div className="flex items-center justify-between">
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg hover:bg-indigo-50 transition-colors"
                    aria-label="תפריט"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6 text-indigo-600" />
                    ) : (
                        <Menu className="w-6 h-6 text-indigo-600" />
                    )}
                </button>
                <h1 className="text-2xl font-bold text-indigo-600 absolute left-1/2 transform -translate-x-1/2">השכר שלי</h1>
                <div className="w-10"></div>
            </div>

            {/* Side menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-indigo-600">תפריט</h2>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg hover:bg-indigo-50"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/">
                                <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors w-full text-right">
                                    <HomeIcon className="w-5 h-5 text-indigo-600" />
                                    <span className="text-gray-700">דף הבית</span>
                                </button>
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors w-full text-right">
                                    <User className="w-5 h-5 text-indigo-600" />
                                    <span className="text-gray-700">פרופיל</span>
                                </button>
                            </li>
                            <li>
                                <Link to="/Shifts">
                                <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors w-full text-right">
                                    <Calendar className="w-5 h-5 text-indigo-600" />
                                    <span className="text-gray-700">משמרות</span>
                                </button>
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors w-full text-right">
                                    <Clock className="w-5 h-5 text-indigo-600" />
                                    <span className="text-base">סיכום שעות</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors w-full text-right">
                                    <Settings className="w-5 h-5 text-indigo-600" />
                                    <span className="text-gray-700">הגדרות</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu}
                />
            )}
        </header>
    );
}   