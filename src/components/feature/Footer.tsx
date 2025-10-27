
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 font-serif" style={{ fontFamily: '"Pacifico", serif' }}>
              とうかい
            </h3>
            <div className="space-y-2 text-slate-300">
              <p className="font-serif">〒<span className="font-sans">459-8001</span></p>
              <p className="font-serif">愛知県名古屋市緑区大高町字中ノ島<span className="font-sans">36-1</span></p>
              <p className="font-serif">TEL: <span className="font-sans">052-693-5588</span></p>
              <p className="font-serif">FAX: <span className="font-sans">052-693-6077</span></p>
            </div>
          </div>

          {/* サービス */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 font-serif">サービス</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">エレベーターメンテナンス</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">機械据付工事</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">定期点検</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">緊急対応</a></li>
            </ul>
          </div>

          {/* 採用情報 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 font-serif">採用情報</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">メンテナンススタッフ</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">機械据付スタッフ</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">事務スタッフ</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer font-serif">福利厚生</a></li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 font-serif">お問い合わせ</h4>
            <div className="space-y-3">
              <button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 w-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer font-serif">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-phone-line"></i>
                  電話で相談
                </span>
              </button>
              <button className="border border-slate-600 hover:bg-slate-700 text-white px-6 py-2 w-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer font-serif">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-mail-line"></i>
                  メールで相談
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p className="font-serif">© <span className="font-sans">2025</span> 株式会社とうかい. All rights reserved.</p>
          <div className="mt-2">
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-slate-400 text-sm transition-colors cursor-pointer font-serif"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
