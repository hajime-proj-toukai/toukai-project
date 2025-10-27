
import { useState, useEffect } from 'react';

const ContactSection = () => {
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

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const newsItems = [
    {
      date: '2025.10.20',
      title: '【正社員】エレベーター保守業務・伸びしろある会社で働きませんか？'
    },
    {
      date: '2025.09.20',
      title: '機械据付工事に関する資格について'
    },
    {
      date: '2025.08.20',
      title: '機械据付工事の仕事に向いている人の特徴'
    }
  ];

  return (
    <section id="contact-section" className="relative py-24 bg-white overflow-hidden">
      {/* 背景の装飾パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 border-8 border-slate-700"></div>
        <div className="absolute top-40 right-20 w-44 h-44 bg-slate-600 transform rotate-45"></div>
        <div className="absolute bottom-20 left-40 w-52 h-52 border-8 border-slate-500"></div>
        <div className="absolute bottom-40 right-40 w-40 h-40 bg-slate-700 transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 border-8 border-slate-600 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* お知らせセクション */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-700 mb-8 font-serif">お知らせ</h2>
              
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-slate-50 p-6 hover:bg-slate-100 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <span className="text-slate-600 font-semibold text-sm whitespace-nowrap font-serif">
                        {item.date}
                      </span>
                      <h3 className="text-slate-800 font-medium leading-relaxed font-serif">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <button className="text-slate-700 hover:text-slate-600 font-semibold transition-colors duration-300 cursor-pointer font-serif">
                もっと見る →
              </button>
            </div>
          </div>

          {/* 会社情報セクション */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-slate-700 text-white p-8 space-y-8">
              <h2 className="text-4xl font-bold text-center font-serif">
                <span className="text-slate-300">とうかい</span>
              </h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2 font-serif">052-693-5588</div>
                  <div className="text-slate-300 font-serif">採用担当者直通</div>
                  <div className="text-xl font-semibold font-serif">090-3481-9383</div>
                </div>

                <div className="space-y-4 text-slate-300">
                  <div>
                    <div className="font-semibold text-white mb-1 font-serif">所在地</div>
                    <div className="font-serif">〒459-8001</div>
                    <div className="font-serif">愛知県名古屋市緑区大高町字中ノ島36-1</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-white mb-1 font-serif">FAX</div>
                    <div className="font-serif">052-693-6077</div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-serif">
                    お問い合わせ
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-serif">
                    採用情報
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
