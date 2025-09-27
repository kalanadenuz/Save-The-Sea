import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 flex items-center justify-center p-4 overflow-hidden">
      {/* iPhone 14 Pro Frame with Modern Styling */}
      <div className="relative w-[390px] h-[844px] bg-gradient-to-b from-gray-200 to-gray-300 rounded-[3rem] p-2 shadow-2xl shadow-gray-400/50 flex-shrink-0">
        {/* Screen */}
        <div className="w-full h-full bg-transparent rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar with Modern Styling */}
          <div className="absolute top-0 left-0 right-0 h-11 bg-white/95 backdrop-blur-md z-50 flex items-center justify-between px-6 text-black text-sm font-semibold">
            <div className="flex items-center gap-1">
              <span className="font-bold">9:41</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-gray-600 rounded-sm"></div>
              <div className="w-6 h-3 border-2 border-gray-600 rounded-sm">
                <div className="w-4 h-2 bg-gray-600 rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>
          
          {/* Dynamic Island with Glow Effect */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-400 rounded-full z-50"></div>
          
          {/* Content Area - fills full screen except status bar */}
          <div className="pt-11 h-full overflow-hidden">
            {children}
          </div>
        </div>
        
        {/* Modern Frame Accents */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
