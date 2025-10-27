
import { useState, useEffect } from 'react';

const JobsSection = () => {
  const [activeTab, setActiveTab] = useState('maintenance');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const jobTypes = [
    {
      id: 'maintenance',
      title: 'メンテナンススタッフ',
      icon: 'ri-tools-line',
      color: 'blue'
    },
    {
      id: 'installation',
      title: '機械据付スタッフ',
      icon: 'ri-hammer-line',
      color: 'cyan'
    },
    {
      id: 'office',
      title: '事務スタッフ',
      icon: 'ri-file-text-line',
      color: 'teal'
    }
  ];

  const jobDetails = {
    maintenance: {
      salary: '180,000円〜 + 各種手当',
      workTime: '9:00〜18:00（休憩90分）',
      location: '名古屋・東海3県（出張有）',
      employment: '正社員',
      requirements: '普通自動車免許（AT可）',
      benefits: [
        '社会保険完備',
        '賞与（年2回）',
        '残業手当',
        '家族手当',
        '退職金手当',
        '各種資格取得支援',
        '独立支援',
        '交通費支給（月3万円迄）',
        'マイカー通勤（無料駐車場有）',
        '制服貸出',
        '出張手当（1日3,000円）',
        'エクシブ施設有'
      ],
      dailyFlow: [
        { time: '7:30', task: '移動〜現場に直行' },
        { time: '7:30〜9:00', task: '点検作業' },
        { time: '9:00〜10:30', task: '移動〜現場到着' },
        { time: '10:30〜12:00', task: '点検作業' },
        { time: '12:00〜13:00', task: '移動〜現場到着' },
        { time: '13:00〜15:30', task: '点検作業' },
        { time: '15:30〜17:00', task: '移動〜名古屋到着・直帰' }
      ],
      employeeVoice: {
        name: '川邊 翔太郎',
        experience: '入社3年目',
        comment: '未経験から始めましたが、先輩方が丁寧に教えてくれるので安心して成長できています。エレベーターの仕組みを理解していく過程がとても面白いです。'
      }
    },
    installation: {
      salary: '300,000円〜 + 各種手当',
      workTime: '8:00〜17:00（休憩90分）',
      location: '名古屋・東海3県（出張有）',
      employment: '正社員',
      requirements: '普通自動車免許（AT可）',
      benefits: [
        '社会保険完備',
        '賞与（年2回）',
        '残業手当',
        '家族手当',
        '退職金手当',
        '各種資格取得支援',
        '独立支援',
        '交通費支給（月3万円迄）',
        'マイカー通勤（無料駐車場有）',
        '制服貸出',
        '出張手当（1日3,000円）',
        'エクシブ施設有'
      ],
      dailyFlow: [
        { time: '8:00', task: '移動〜現場に直行・朝礼' },
        { time: '8:00〜10:00', task: '作業' },
        { time: '10:00〜10:15', task: '休憩' },
        { time: '10:15〜12:00', task: '作業' },
        { time: '12:00〜13:00', task: '休憩' },
        { time: '13:00〜15:00', task: '作業' },
        { time: '15:00〜15:15', task: '休憩' },
        { time: '15:15〜17:00', task: '作業' },
        { time: '17:00〜18:00', task: 'ミーティング' }
      ],
      employeeVoice: {
        name: '佐藤 健一',
        experience: '入社5年目',
        comment: '責任のある仕事ですが、完成した時の達成感は格別です。技術を身につけながら、将来的には独立も視野に入れています。'
      }
    },
    office: {
      salary: '160,000円〜',
      workTime: '9:00〜18:00',
      location: '愛知県名古屋市緑区大高町字中ノ島36-1',
      employment: '正社員・パート・アルバイト',
      requirements: '普通自動車免許（AT可）',
      benefits: [
        '社会保険完備',
        '賞与（年2回）',
        '残業手当',
        '家族手当',
        '退職金手当',
        '各種資格取得支援',
        '独立支援',
        '交通費支給（月3万円迄）',
        'マイカー通勤（無料駐車場有）',
        '制服貸出',
        '出張手当（1日3,000円）',
        'エクシブ施設有'
      ],
      dailyFlow: [
        { time: '9:00', task: '出社・メールチェック' },
        { time: '9:30〜12:00', task: '事務作業・電話対応' },
        { time: '12:00〜13:00', task: '昼休憩' },
        { time: '13:00〜15:00', task: '書類作成・データ入力' },
        { time: '15:00〜15:15', task: '休憩' },
        { time: '15:15〜17:30', task: '事務作業・来客対応' },
        { time: '17:30〜18:00', task: '翌日準備・退社' }
      ],
      employeeVoice: {
        name: '田中 美咲',
        experience: '入社2年目',
        comment: '事務職として入社しましたが、技術的な知識も身につけることができ、やりがいを感じています。チームワークが良く、働きやすい環境です。'
      }
    }
  };

  const recruitmentFlow = [
    {
      step: '01',
      title: 'ご応募',
      description: 'まずはご応募ください！\nお電話でのご応募は\n【TEL/090-3481-9383】',
      icon: 'ri-phone-line'
    },
    {
      step: '02',
      title: '面談',
      description: '履歴書・職務経歴書を\nご持参ください。\n面接ではいろいろなお話が\nできれば幸いです。',
      icon: 'ri-user-line'
    },
    {
      step: '03',
      title: '採用',
      description: '入社日は希望に応じます。\n私たちと一緒に\n頑張りましょう！',
      icon: 'ri-check-line'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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

      const response = await fetch('https://readdy.ai/api/form/d3vlev6g28apfrolkkag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: ''
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

  const currentJob = jobDetails[activeTab];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            採用情報
          </h2>
          <p className="text-lg text-gray-600">
            あなたの未来を一緒に築きませんか
          </p>
        </div>

        {/* Job Type Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16 px-4">
          {jobTypes.map((job) => (
            <button
              key={job.id}
              onClick={() => setActiveTab(job.id)}
              className={`px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-base transition-all duration-300 whitespace-nowrap cursor-pointer font-serif ${
                activeTab === job.id
                  ? 'bg-slate-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="flex items-center gap-2">
                <i className={job.icon}></i>
                {job.title}
              </span>
            </button>
          ))}
        </div>

        {/* Job Details */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Basic Info */}
          <div className="bg-white p-6 md:p-10 shadow-lg border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-slate-700 font-serif">
              {jobTypes.find(job => job.id === activeTab)?.title}
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-money-yen-circle-line text-slate-600 text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1 font-serif text-sm md:text-base">給与</h4>
                  <p className="text-slate-600 font-serif text-sm md:text-base">
                    <span className="font-sans">{currentJob.salary.match(/\d+,?\d*/g)?.join('')}</span>
                    {currentJob.salary.replace(/\d+,?\d*/g, '')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-slate-600 text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1 font-serif text-sm md:text-base">勤務時間</h4>
                  <p className="text-slate-600 text-sm md:text-base">
                    <span className="font-sans">{currentJob.workTime.match(/\d+:\d+/g)?.join('〜')}</span>
                    <span className="font-serif">{currentJob.workTime.replace(/\d+:\d+/g, '').replace('〜', '')}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-slate-600 text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1 font-serif text-sm md:text-base">勤務地</h4>
                  <p className="text-slate-600 font-serif text-sm md:text-base">{currentJob.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-line text-slate-600 text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1 font-serif text-sm md:text-base">雇用形態</h4>
                  <p className="text-slate-600 font-serif text-sm md:text-base">{currentJob.employment}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-car-line text-slate-600 text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1 font-serif text-sm md:text-base">応募資格</h4>
                  <p className="text-slate-600 font-serif text-sm md:text-base">{currentJob.requirements}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white p-6 md:p-10 shadow-lg border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-slate-700 font-serif">
              福利厚生
            </h3>
            
            <div className="grid grid-cols-1 gap-2 md:gap-3">
              {currentJob.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-2 md:p-3 bg-slate-50">
                  <i className="ri-check-line text-slate-600 text-base md:text-lg flex-shrink-0"></i>
                  <span className="text-slate-600 text-xs md:text-sm lg:text-base font-serif">
                    {benefit.includes('円') || benefit.includes('回') || benefit.includes('万') || benefit.includes('日') || benefit.includes('3,000') ? (
                      <>
                        {benefit.split(/(\d+[,\d]*)/g).map((part, i) => 
                          /\d/.test(part) ? <span key={i} className="font-sans">{part}</span> : part
                        )}
                      </>
                    ) : benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Flow */}
        <div className="bg-white p-6 md:p-10 shadow-lg border border-slate-200 mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-slate-700 text-center font-serif">
            1日の流れ
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {currentJob.dailyFlow.map((item, index) => (
              <div key={index} className="bg-slate-50 p-3 md:p-4 border border-slate-200">
                <div className="text-center">
                  <div className="text-base md:text-lg font-bold text-slate-600 mb-2">
                    <span className="font-sans">{item.time}</span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 leading-relaxed font-serif">{item.task}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 先輩社員の声 */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-slate-700 font-serif">
            先輩社員の声
          </h3>
          
          <div className="bg-white p-6 md:p-10 shadow-lg border border-slate-200">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* 人物シルエット */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-600 rounded-full flex items-center justify-center">
                  <i className="ri-user-fill text-white text-3xl md:text-4xl"></i>
                </div>
              </div>
              
              {/* 吹き出しとコメント */}
              <div className="flex-1 relative">
                {/* 吹き出しの三角形 */}
                <div className="absolute -left-4 top-6 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-slate-100 lg:block hidden"></div>
                
                {/* コメント部分 */}
                <div className="bg-slate-100 p-4 md:p-6 rounded-lg">
                  <blockquote className="text-slate-700 text-sm md:text-base leading-relaxed font-serif italic mb-4">
                    "{currentJob.employeeVoice.comment}"
                  </blockquote>
                  
                  <div className="text-right">
                    <div className="text-slate-600 font-bold font-serif text-sm md:text-base">
                      {currentJob.employeeVoice.name}
                    </div>
                    <div className="text-slate-500 text-xs md:text-sm font-serif">
                      {currentJob.employeeVoice.experience}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Flow */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-slate-700 font-serif">
            採用フロー
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {recruitmentFlow.map((step, index) => (
              <>
                <div key={index} className="text-center flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-600 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                    <i className={`${step.icon} text-white text-2xl md:text-3xl`}></i>
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-700 font-serif">
                    {step.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line max-w-xs font-serif text-sm md:text-base">
                    {step.description.includes('090-3481-9383') ? (
                      <>
                        {step.description.split('090-3481-9383').map((part, i) => 
                          i === 0 ? part : (
                            <span key={i}>
                              <span className="font-sans font-bold">090-3481-9383</span>
                              {step.description.split('090-3481-9383')[i + 1]}
                            </span>
                          )
                        )}
                      </>
                    ) : step.description}
                  </p>
                </div>
                
                {index < recruitmentFlow.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-slate-400">
                    <i className="ri-arrow-right-line text-2xl md:text-3xl"></i>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* CTA Section with Quick Application Form */}
        <div className="bg-slate-700 p-8 md:p-12 text-white shadow-xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 font-serif">
              あなたのご応募をお待ちしています
            </h3>
            
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 font-serif">
              まずはお気軽にお電話またはメールでご相談ください
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4">
                <i className="ri-phone-fill text-xl md:text-2xl"></i>
                <span className="font-bold text-lg md:text-xl font-sans">090-3481-9383</span>
              </div>
            </div>
          </div>

          {/* Quick Application Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h4 className="text-xl md:text-2xl font-bold mb-2 font-serif">
                簡易応募フォーム
              </h4>
              <p className="text-sm md:text-base opacity-90 font-serif">
                基本情報をご入力いただければ、すぐにご応募いただけます
              </p>
            </div>

            <form onSubmit={handleSubmit} data-readdy-form id="quick-application" className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* お名前 */}
                <div>
                  <label htmlFor="quick-name" className="block text-sm font-medium mb-2 font-serif">
                    お名前 <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    id="quick-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/60 transition-all text-sm font-serif"
                    placeholder="山田太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="quick-email" className="block text-sm font-medium mb-2 font-serif">
                    メールアドレス <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="email"
                    id="quick-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/60 transition-all text-sm font-serif"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* 電話番号 */}
                <div>
                  <label htmlFor="quick-phone" className="block text-sm font-medium mb-2 font-serif">
                    電話番号 <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="tel"
                    id="quick-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/60 transition-all text-sm font-serif"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* 希望職種 */}
                <div>
                  <label htmlFor="quick-position" className="block text-sm font-medium mb-2 font-serif">
                    希望職種 <span className="text-red-300">*</span>
                  </label>
                  <select
                    id="quick-position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 bg-white/10 border border-white/30 text-white focus:bg-white/20 focus:border-white/60 transition-all text-sm font-serif"
                  >
                    <option value="" className="text-gray-900">選択してください</option>
                    <option value="メンテナンススタッフ" className="text-gray-900">メンテナンススタッフ</option>
                    <option value="機械据付スタッフ" className="text-gray-900">機械据付スタッフ</option>
                    <option value="事務スタッフ" className="text-gray-900">事務スタッフ</option>
                  </select>
                </div>
              </div>

              {/* 送信ボタン */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-slate-700 hover:bg-slate-100 disabled:bg-gray-400 disabled:text-gray-600 py-4 px-6 font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer font-serif"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      送信中...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      今すぐ応募する
                    </>
                  )}
                </button>
              </div>

              {/* 送信結果 */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-400/50 p-4 text-green-100 text-center font-serif">
                  <i className="ri-check-circle-line mr-2"></i>
                  応募を受け付けました。ご連絡をお待ちください。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400/50 p-4 text-red-100 text-center font-serif">
                  <i className="ri-error-warning-line mr-2"></i>
                  送信に失敗しました。もう一度お試しください。
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Remove the link to careers page */}
      </div>
    </section>
  );
};

export default JobsSection;
