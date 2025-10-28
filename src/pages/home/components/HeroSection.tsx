
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
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
      
      {/* 右側の斜めオーバーレイ */}
      <div 
        className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-transparent"
        style={{
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 50% 100%)'
        }}
      />
      
      {/* 上部のテキストコンテンツ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 flex items-start justify-end pt-24 md:pt-32">
        <div className="w-full lg:w-1/2">
          <div className={`transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className={`mb-3 md:mb-4 text-xs md:text-sm tracking-widest opacity-80 text-white transition-all duration-1000 delay-300 ${isVisible ? 'opacity-80 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ fontFamily: '"Shippori Mincho", serif' }}>
              ELEVATOR INSTALLATION & MAINTENANCE
            </div>
            
            <h1 className={`text-3xl md:text-5xl lg:text-7xl font-light mb-6 md:mb-8 leading-tight tracking-wide text-white whitespace-nowrap transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ fontFamily: '"Shippori Mincho", serif' }}>
              安全と信頼を運ぶ
            </h1>
            
            <div className={`mb-3 md:mb-4 text-xs md:text-sm tracking-widest opacity-80 text-white transition-all duration-1000 delay-700 ${isVisible ? 'opacity-80 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ fontFamily: '"Shippori Mincho", serif' }}>
              PROFESSIONAL ELEVATOR SERVICES
            </div>
            
            <p className={`text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-12 opacity-90 font-serif transition-all duration-1000 delay-900 ${isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              東海エリアを中心に全国のエレベーターの据付工事やメンテナンスを主力業務として請け負っています。
            </p>
            
            {/* ボタンを文言の直下に配置 - スマホでは下に余裕を持たせる */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-0 transition-all duration-1200 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="#jobs-section"
                className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl whitespace-nowrap cursor-pointer font-serif transform hover:-translate-y-1"
              >
                採用情報を見る
              </a>
              <a
                href="#about-section"
                className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-3 font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl whitespace-nowrap cursor-pointer font-serif transform hover:-translate-y-1"
              >
                会社について
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 中央部分は空白 */}
      <div className="flex-1"></div>

      {/* スクロール指示 */}
      <div className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center">
          <span className="text-xs md:text-sm mb-2" style={{ fontFamily: '"Shippori Mincho", serif' }}>スクロール</span>
          <i className="ri-arrow-down-line text-xl md:text-2xl"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
