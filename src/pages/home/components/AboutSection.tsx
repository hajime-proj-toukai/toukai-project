
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
      {/* 背景の装飾パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-slate-700 transform rotate-12"></div>
        <div className="absolute top-32 left-32 w-40 h-40 bg-slate-600 transform rotate-12"></div>
        <div className="absolute top-10 right-20 w-48 h-48 border-8 border-slate-700"></div>
        <div className="absolute bottom-20 left-40 w-52 h-52 border-8 border-slate-600"></div>
        <div className="absolute bottom-40 right-40 w-36 h-36 bg-slate-500 transform rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-6 md:mb-8 font-serif transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            私たちについて
          </h2>
          <div className={`w-24 h-1 bg-slate-600 mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            className={`space-y-6 md:space-y-8 transition-all duration-1200 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed font-serif">
                確かな技術と提案力で
                <span className="block text-slate-600">ご要望にお応えします</span>
              </h3>
              
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-slate-600 leading-loose font-serif">
                <p>
                  愛知県名古屋市に拠点を置く「株式会社とうかい」は、
                  東海エリアを中心にエレベーターの据付工事やメンテナンスを主力業務として請け負っています。
                </p>
                <p>
                  当社は、皆様に快適・安全・安心をお届けするため、
                  最高の品質と最先端の技術を追及しています。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className={`bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
                <div className="text-2xl md:text-3xl font-bold text-slate-700 mb-2 font-sans">20+</div>
                <div className="text-slate-600 font-serif text-sm md:text-base">年の豊富な経験</div>
              </div>
              <div className={`bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
                <div className="text-2xl md:text-3xl font-bold text-slate-700 mb-2 font-sans">1000+</div>
                <div className="text-slate-600 font-serif text-sm md:text-base">メンテナンス実績</div>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1200 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative ml-8 lg:ml-16">
              <img
                src="https://static.readdy.ai/image/e4cbf0de708db933b95718301e951dff/753795c2901992429c3d3b5e30e63da9.jpeg"
                alt="エレベーターメンテナンスチーム"
                className="w-full h-[500px] md:h-[700px] object-cover object-center shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105"
                style={{
                  clipPath: 'polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
