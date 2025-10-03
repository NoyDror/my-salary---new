
import Shifts from './Shifts';

export default function Home() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col" dir="rtl">
            {/* Header with hamburger menu */}


            {/* Main content */}
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ברוכים הבאים!</h2>
                    <p className="text-gray-600 text-lg">
                        זוהי אפליקציה לדוגמה עם תפריט המבורגר בצד ימין למעלה ושלושה כפתורים בתחתית הדף.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-6">
                    <Shifts></Shifts>
                </div>
            </main>
        </div>
    )
}