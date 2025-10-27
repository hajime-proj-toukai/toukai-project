
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-6 md:mb-8 font-serif">
            私たちについて
          </h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
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
              <div className="bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-slate-700 mb-2 font-sans">20+</div>
                <div className="text-slate-600 font-serif text-sm md:text-base">年の豊富な経験</div>
              </div>
              <div className="bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-slate-700 mb-2 font-sans">1000+</div>
                <div className="text-slate-600 font-serif text-sm md:text-base">メンテナンス実績</div>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Japanese%20elevator%20maintenance%20team%20working%20together%20on%20modern%20elevator%20shaft%2C%20professional%20technicians%20in%20safety%20gear%20and%20blue%20uniforms%2C%20teamwork%20and%20precision%2C%20industrial%20workplace%20setting%2C%20clean%20and%20organized%20environment&width=600&height=700&seq=about-team-work&orientation=portrait"
                alt="エレベーターメンテナンスチーム"
                className="w-full h-[500px] md:h-[700px] object-cover object-top shadow-2xl"
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
