
import { useState, useEffect } from 'react';

const JobsSection = () => {
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

    const element = document.getElementById('jobs-section');
    if (element) observer.observe(element);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const jobs = [
    {
      title: 'エレベーター据付工事',
      description: '新築ビルやマンションにエレベーターを設置する工事を行います。',
      requirements: ['未経験歓迎', '普通自動車免許', 'やる気のある方'],
      salary: '月給25万円〜40万円',
      delay: 0
    },
    {
      title: 'エレベーターメンテナンス',
      description: '既設エレベーターの定期点検・保守・修理を行います。',
      requirements: ['未経験歓迎', '普通自動車免許', '責任感のある方'],
      salary: '月給23万円〜38万円',
      delay: 200
    },
    {
      title: '現場監督・施工管理',
      description: '工事現場の管理・監督業務を行います。',
      requirements: ['経験者優遇', '施工管理技士資格歓迎', 'リーダーシップのある方'],
      salary: '月給30万円〜50万円',
      delay: 400
    }
  ];

  return (
    <section 
      id="jobs-section" 
      className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url(https://static.readdy.ai/image/e4cbf0de708db933b95718301e951dff/c0da314b2c329b8337d4a1969f2d0868.jpeg)'
      }}
    >
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 font-serif">
            採用情報
          </h2>
          <div className="w-24 h-1 bg-slate-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-serif">
            私たちと一緒に、安全で快適な縦の移動を支える仕事をしませんか？
            未経験の方も大歓迎です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${job.delay}ms` : '0ms'
              }}
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-700 font-serif">
                  {job.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-serif text-sm md:text-base">
                  {job.description}
                </p>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 font-serif">応募資格</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-slate-600 text-sm md:text-base font-serif flex items-center">
                        <i className="ri-check-line text-green-600 mr-2"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-lg font-bold text-slate-700 font-serif" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {job.salary}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 福利厚生 */}
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-lg mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 md:mb-12 text-center font-serif">
            福利厚生
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-shield-check-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">社会保険完備</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-money-dollar-circle-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">賞与(年<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>2</span>回)</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-time-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">残業手当</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-group-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">家族手当</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-gift-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">退職金手当</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-graduation-cap-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">各種資格取得支援</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-rocket-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">独立支援</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-bus-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">交通費支給(月<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>3</span>万円迄)</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-car-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">マイカー通勤(無料駐車場有)</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-shirt-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">制服貸出</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-plane-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">出張手当(1日<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>3,000</span>円)</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
              <i className="ri-building-line text-xl text-slate-600"></i>
              <span className="text-slate-700 font-serif">エクシブ施設有</span>
            </div>
          </div>
        </div>

        {/* 先輩社員の声 */}
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-lg mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 md:mb-12 text-center font-serif">
            先輩社員の声
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 font-serif">田中さん</h4>
                  <p className="text-sm text-slate-500 font-serif">入社<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>3</span>年</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed font-serif text-sm md:text-base">
                未経験から始めましたが、先輩方が丁寧に教えてくれるので安心でした。今では一人前の技術者として働いています。
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 font-serif">佐藤さん</h4>
                  <p className="text-sm text-slate-500 font-serif">入社<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>5</span>年</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed font-serif text-sm md:text-base">
                資格取得支援があるので、スキルアップしながら働けます。将来の独立も視野に入れて頑張っています。
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 font-serif">鈴木さん</h4>
                  <p className="text-sm text-slate-500 font-serif">入社<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>2</span>年</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed font-serif text-sm md:text-base">
                海外出張もあり、グローバルに活躍できる環境です。通訳者がいるので英語が話せなくても大丈夫でした。
              </p>
            </div>
          </div>
        </div>

        {/* 応募フォーム */}
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 md:mb-12 text-center font-serif">
            応募・お問い合わせ
          </h3>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2 font-serif">お名前 *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 focus:border-slate-500 focus:outline-none transition-colors font-serif" 
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2 font-serif">フリガナ *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 focus:border-slate-500 focus:outline-none transition-colors font-serif" 
                    placeholder="ヤマダタロウ"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2 font-serif">メールアドレス *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 focus:border-slate-500 focus:outline-none transition-colors font-serif" 
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2 font-serif">電話番号 *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-slate-300 focus:border-slate-500 focus:outline-none transition-colors font-serif" 
                    placeholder="090-1234-5678"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 font-serif">希望職種</label>
                <select className="w-full px-4 py-3 border border-slate-300 focus:border-slate-500 focus:outline-none transition-colors font-serif pr-8">
                  <option>選択してください</option>
                  <option>エレベーター据付工事</option>
                  <option>エレベーターメンテナンス</option>
                  <option>現場監督・施工管理</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 font-serif">メッセージ</label>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-3 border border-slate-300 focus:border-slate-500 focus:outline-none transition-colors font-serif" 
                  placeholder="ご質問やご要望がございましたらお聞かせください"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-slate-700 hover:bg-slate-800 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer font-serif"
                >
                  送信する
                </button>
              </div>
            </form>
            
            {/* 直接連絡先 */}
            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
              <h4 className="text-lg font-semibold text-slate-700 mb-4 font-serif">お急ぎの方は直接お電話ください</h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a 
                  href="tel:052-123-4567" 
                  className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <i className="ri-phone-line text-xl"></i>
                  <span className="font-semibold font-serif" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>052-123-4567</span>
                </a>
                <a 
                  href="mailto:info@toukai-elevator.com" 
                  className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <i className="ri-mail-line text-xl"></i>
                  <span className="font-semibold font-serif">info@toukai-elevator.com</span>
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-2 font-serif">受付時間：平日<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>9</span>:<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>00</span>〜<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>18</span>:<span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>00</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
