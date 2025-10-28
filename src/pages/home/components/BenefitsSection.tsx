
import { useState, useEffect } from 'react';

const BenefitsSection = () => {
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

    const element = document.getElementById('benefits-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: 'マンツーマン教育体制',
      description: '入社後は丁寧に指導いたしますので未経験の方も安心。あなたのペースで成長していってください。',
      delay: 0
    },
    {
      title: 'ライフプランが立てやすい',
      description: '保守契約は建物が解体されるまで続くことが多く、景気に左右されずお仕事は安定しています。',
      delay: 100
    },
    {
      title: '資格取得支援アリ',
      description: '業務に必要な資格取得費用を会社が全額負担し、一生モノの技術を身に着けていただけます。',
      delay: 200
    },
    {
      title: '充実した福利厚生',
      description: '充実した福利厚生と手厚い待遇をご用意していますので安定した環境で腰を据えて働いていただけます。',
      delay: 300
    },
    {
      title: '独立支援アリ',
      description: '「将来は独立したい！」という方も大歓迎！スタッフのやりたいことも全力で応援します。',
      delay: 400
    },
    {
      title: '海外でも活躍できる',
      description: '海外出張があるのでグローバルに活躍できます。通訳者がいるので英語スキルは不問です。',
      delay: 500
    }
  ];

  return (
    <section id="benefits-section" className="relative py-16 md:py-24 bg-slate-700 overflow-hidden">
      {/* 背景の装飾パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-56 h-56 border-4 border-white"></div>
        <div className="absolute top-40 right-40 w-44 h-44 border-4 border-white"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 border-4 border-white"></div>
        
        <div className="absolute top-60 right-20 w-40 h-40 bg-white transform rotate-45"></div>
        <div className="absolute bottom-40 right-80 w-36 h-36 bg-white transform rotate-12"></div>
        <div className="absolute top-1/3 left-80 w-52 h-52 border-4 border-white transform rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 font-serif">
            とうかいで働く6つのメリット
          </h2>
          <div className="w-24 h-1 bg-slate-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${benefit.delay}ms` : '0ms'
              }}
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-700 font-serif">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-serif text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <button className="bg-slate-600 hover:bg-slate-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-serif">
            募集要項を見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
