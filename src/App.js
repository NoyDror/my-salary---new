import { useState } from 'react';
import { Menu, X, Home, Settings, User, Calendar, Clock } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col" dir="rtl">
      {/* Header with hamburger menu */}
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
          <h1 className="text-2xl font-bold text-indigo-600 absolute left-1/2 transform -translate-x-1/2">האפליקציה שלי</h1>
          <div className="w-10"></div>
        </div>

        {/* Side menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
                  <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors w-full text-right">
                    <Home className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">דף הבית</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors w-full text-right">
                    <User className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">פרופיל</span>
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

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ברוכים הבאים!</h2>
          <p className="text-gray-600 text-lg">
            זוהי אפליקציה לדוגמה עם תפריט המבורגר בצד ימין למעלה ושלושה כפתורים בתחתית הדף.
          </p>
        </div>
      </main>

      {/* Bottom buttons */}
      <footer className="bg-white border-t border-gray-100 p-6">
        <div className="max-w-4xl mx-auto flex gap-6 justify-center">
          <button className="flex-1 max-w-xs bg-white border-2 border-gray-200 text-gray-700 py-6 px-6 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all font-medium flex flex-col items-center gap-3 group">
            <Calendar className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
            <span className="text-base">משמרות</span>
          </button>
          <button className="flex-1 max-w-xs bg-white border-2 border-gray-200 text-gray-700 py-6 px-6 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all font-medium flex flex-col items-center gap-3 group">
            <Clock className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
            <span className="text-base">סיכום שעות</span>
          </button>
          <button className="flex-1 max-w-xs bg-white border-2 border-gray-200 text-gray-700 py-6 px-6 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all font-medium flex flex-col items-center gap-3 group">
            <Settings className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
            <span className="text-base">הגדרות</span>
          </button>
        </div>
      </footer>
    </div>
  );
}