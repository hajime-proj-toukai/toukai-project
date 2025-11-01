
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold font-serif transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`} style={{ fontFamily: '"Pacifico", serif' }}>
              とうかい
            </h1>
          </div>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className={`font-medium transition-colors duration-300 cursor-pointer font-serif ${
                isScrolled ? 'text-slate-700 hover:text-slate-600' : 'text-white hover:text-gray-200'
              }`}
            >
              会社概要
            </a>
            <a 
              href="#benefits" 
              className={`font-medium transition-colors duration-300 cursor-pointer font-serif ${
                isScrolled ? 'text-slate-700 hover:text-slate-600' : 'text-white hover:text-gray-200'
              }`}
            >
              働くメリット
            </a>
            <a 
              href="#jobs" 
              className={`font-medium transition-colors duration-300 cursor-pointer font-serif ${
                isScrolled ? 'text-slate-700 hover:text-slate-600' : 'text-white hover:text-gray-200'
              }`}
            >
              採用情報
            </a>
            <a 
              href="#contact" 
              className={`font-medium transition-colors duration-300 cursor-pointer font-serif ${
                isScrolled ? 'text-slate-700 hover:text-slate-600' : 'text-white hover:text-gray-200'
              }`}
            >
              お問い合わせ
            </a>
          </nav>

          {/* CTAボタン */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-serif">
              <span className="flex items-center gap-2">
                <i className="ri-phone-line"></i>
                <span className="font-sans">052-693-5588</span>
              </span>
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <button className={`md:hidden transition-colors duration-300 cursor-pointer ${
            isScrolled ? 'text-slate-700 hover:text-slate-600' : 'text-white hover:text-gray-200'
          }`}>
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
