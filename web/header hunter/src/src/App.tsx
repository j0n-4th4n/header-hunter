import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Haze as Maze, Compass } from 'lucide-react';

function App() {
  const links = [
    { path: '/not-here', text: 'Start Here' },
    { path: '/try-again', text: 'Maybe Here?' },
    { path: '/keep-looking', text: 'Keep Looking' },
    { path: '/secret-path', text: 'Just Another Link' },
    { path: '/almost-there', text: 'Getting Closer' },
    { path: '/getting-warmer', text: 'Warm...' },
    { path: '/cold-as-ice', text: 'Cold!' },
    { path: '/flag', text: 'Flag' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <header className="p-6 border-b border-gray-700">
          <div className="container mx-auto flex items-center justify-between">
            <img src='/logo.png' className='w-40' />
            <h1 className="font-pixelify text-5xl font-bold italic">Header Hunter</h1>
            <div className="flex items-center space-x-2">
              <Maze className="w-6 h-6" />
              <span className='font-pixelify'>Find the hidden flag!</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <Compass className="w-6 h-6 text-blue-400" />
                <h2 className="font-pixelify text-xl font-semibold">Navigation Challenge</h2>
              </div>

              <p className=" text-gray-300 mb-8">
                Welcome, challenger! Your mission is to find the hidden flag.
                Navigate through the links below, but remember - not everything is as it seems.
                The flag might be hiding in plain sight... or perhaps somewhere unexpected?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block p-4 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200 text-center"
                    onClick={() => window.location.href = link.path}
                  >
                    <p className='font-pixelify text-4 '>{link.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
