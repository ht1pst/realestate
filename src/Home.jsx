import { useState } from "react";
import houseImage from '../src/assets/realestate.webp';
import cover2 from '../src/assets/cover.jpeg';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id='home' className="min-h-screen bg-white w-full relative overflow-x-hidden">
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full h-20 bg-white flex items-center justify-between px-6 text-gray-500 text-lg font-medium shadow-sm z-50">
        {/* Logo */}
        <div className="text-black text-2xl font-black">
          <span className="font-bold text-xl">▇◣◢</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#reviews" className="hover:text-black">Reviews</a>
          <a href="#properties" className="hover:text-black">Properties</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 py-6 shadow-md md:hidden z-40">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-black">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-black">About</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-black">Reviews</a>
          <a href="#properties" onClick={() => setIsMenuOpen(false)} className="hover:text-black">Properties</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-black">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <main
        className=" pt-90 items-center justify-center text-center w-full h-screen bg-cover bg-center " 
      >

        {/* Hero Content */}
        <div className="">
          <h1 className="text-black text-5xl md:text-8xl font-bold overflow-hidden">Modern Homes.</h1>
          <p className="text-gray-600 text-xl md:text-5xl mt-4 font-semibold overflow-hidden">Real estate reimagined.</p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:scale-105 transition text-lg font-medium">
            Explore
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
