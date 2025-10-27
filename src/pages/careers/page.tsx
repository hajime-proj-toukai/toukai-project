
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('motivation', formData.motivation.slice(0, 500));
      if (formData.resume) {
        formDataToSend.append('resume', 'Uncollectable');
      }

      const response = await fetch('https://readdy.ai/api/form/d3vlev6g28apfrolkkag', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          motivation: '',
          resume: null
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openAIChat = () => {
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) {
      widget.click();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            あなたの未来を一緒に築きませんか
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90">
            株式会社とうかいで、安全と信頼を運ぶ仕事に挑戦しよう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openAIChat}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-robot-line mr-2"></i>
              採用について質問する
            </button>
            <a
              href="#application-form"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              今すぐ応募する
            </a>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              募集職種
            </h2>
            <p className="text-lg text-gray-600">
              あなたに合った職種をお選びください
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* メンテナンススタッフ */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-tools-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">メンテナンススタッフ</h3>
              <div className="text-2xl font-bold text-blue-600 mb-4">月給18万円〜</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• エレベーターの定期点検</li>
                <li>• 故障時の修理対応</li>
                <li>• 安全確認業務</li>
                <li>• 未経験歓迎</li>
              </ul>
              <div className="text-sm text-gray-500">
                勤務地：名古屋・東海3県
              </div>
            </div>

            {/* 機械据付スタッフ */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-hammer-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">機械据付スタッフ</h3>
              <div className="text-2xl font-bold text-green-600 mb-4">月給30万円〜</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 新設エレベーターの設置</li>
                <li>• 機械工事全般</li>
                <li>• 現場管理業務</li>
                <li>• 経験者優遇</li>
              </ul>
              <div className="text-sm text-gray-500">
                勤務地：東海地方全域
              </div>
            </div>

            {/* 事務スタッフ */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">事務スタッフ</h3>
              <div className="text-2xl font-bold text-purple-600 mb-4">月給16万円〜</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 一般事務業務</li>
                <li>• 顧客対応</li>
                <li>• データ入力</li>
                <li>• 未経験歓迎</li>
              </ul>
              <div className="text-sm text-gray-500">
                勤務地：本社（名古屋市緑区）
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              充実の福利厚生
            </h2>
            <p className="text-lg text-gray-600">
              あなたの成長とキャリアアップを全力でサポート
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">社会保険完備</h3>
              <p className="text-sm text-gray-600">健康保険・厚生年金・雇用保険・労災保険</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">賞与年2回</h3>
              <p className="text-sm text-gray-600">業績に応じた賞与支給</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">資格取得支援</h3>
              <p className="text-sm text-gray-600">資格取得費用の会社負担</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">独立支援</h3>
              <p className="text-sm text-gray-600">将来の独立をサポート</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-robot-line text-3xl text-green-600"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              採用に関するご質問はAIにお任せ
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              24時間いつでも、採用に関するご質問にお答えします。<br className="hidden sm:block" />
              給与、勤務時間、福利厚生、研修制度など、何でもお気軽にお聞きください。
            </p>
            <button
              onClick={openAIChat}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-chat-3-line mr-2"></i>
              今すぐ質問する
            </button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              採用応募フォーム
            </h2>
            <p className="text-lg text-gray-600">
              下記フォームにご記入の上、ご応募ください
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="山田太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="example@email.com"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="090-1234-5678"
                />
              </div>

              {/* 希望職種 */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  希望職種 <span className="text-red-500">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">選択してください</option>
                  <option value="メンテナンススタッフ">メンテナンススタッフ</option>
                  <option value="機械据付スタッフ">機械据付スタッフ</option>
                  <option value="事務スタッフ">事務スタッフ</option>
                </select>
              </div>

              {/* 経験・スキル */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  関連する経験・スキル
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="建設業界での経験、資格など"
                />
              </div>

              {/* 志望動機 */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  志望動機 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  placeholder="当社への志望動機をお聞かせください（500文字以内）"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.motivation.length}/500文字
                </div>
              </div>

              {/* 履歴書 */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  履歴書（PDF形式）
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <p className="text-sm text-gray-500 mt-1">
                  ※ PDF形式のファイルをアップロードしてください
                </p>
              </div>

              {/* 送信ボタン */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.motivation.length > 500}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      送信中...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      応募する
                    </>
                  )}
                </button>
              </div>

              {/* 送信結果 */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  <i className="ri-check-circle-line mr-2"></i>
                  応募を受け付けました。ご連絡をお待ちください。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  <i className="ri-error-warning-line mr-2"></i>
                  送信に失敗しました。もう一度お試しください。
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
