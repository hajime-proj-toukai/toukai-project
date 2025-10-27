
import { useState, useEffect } from 'react';

interface ElevatorLoaderProps {
  onComplete: () => void;
}

const ElevatorLoader = ({ onComplete }: ElevatorLoaderProps) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // 1.5秒後にローディング完了
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 1500);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-300 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-full h-full flex items-center justify-center px-4">
        {/* メインコンテンツ */}
        <div className={`text-center text-white transition-all duration-500 ${isComplete ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {/* 社名のみ */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-pulse" style={{ fontFamily: '"Shippori Mincho", serif' }}>
              株式会社とうかい
            </h1>
          </div>

          {/* シンプルなローディングアニメーション */}
          <div className="flex flex-col items-center space-y-8">
            {/* 回転するリング */}
            <div className="relative">
              <div className="w-12 h-12 border-3 border-white/20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-12 h-12 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>

            {/* プログレスバー */}
            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ 
                animation: 'progress 1.5s ease-out forwards'
              }}></div>
            </div>
          </div>
        </div>

        {/* 背景装飾 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ElevatorLoader;
