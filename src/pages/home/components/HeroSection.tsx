
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景動画 */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/eX0WWDIU_wg?autoplay=1&mute=1&loop=1&playlist=eX0WWDIU_wg&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="とうかい会社紹介動画"
        />
      </div>
      
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* コンテンツ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-3 md:mb-4 text-xs md:text-sm tracking-widest opacity-80" style={{ fontFamily: '"Shippori Mincho", serif' }}>
            ELEVATOR INSTALLATION & MAINTENANCE
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-light mb-6 md:mb-8 leading-tight tracking-wide" style={{ fontFamily: '"Shippori Mincho", serif' }}>
            安全と信頼を運ぶ
          </h1>
          
          <div className="mb-3 md:mb-4 text-xs md:text-sm tracking-widest opacity-80" style={{ fontFamily: '"Shippori Mincho", serif' }}>
            PROFESSIONAL ELEVATOR SERVICES
          </div>
          
          <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4" style={{ fontFamily: '"Shippori Mincho", serif' }}>
            創業<span className="font-sans font-bold">2013</span>年、東海地区を中心に<br className="hidden md:block" />
            エレベーターの据付工事・メンテナンスを手がける専門企業
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <button className="bg-slate-700 hover:bg-slate-800 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-medium transition-colors whitespace-nowrap" style={{ fontFamily: '"Shippori Mincho", serif' }}>
              採用情報を見る
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-medium transition-colors whitespace-nowrap" style={{ fontFamily: '"Shippori Mincho", serif' }}>
              会社について
            </button>
          </div>
        </div>
      </div>
      
      {/* スクロール指示 */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs md:text-sm mb-2" style={{ fontFamily: '"Shippori Mincho", serif' }}>スクロール</span>
          <i className="ri-arrow-down-line text-xl md:text-2xl"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
