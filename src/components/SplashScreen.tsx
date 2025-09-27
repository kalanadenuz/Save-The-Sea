import { useState, useEffect } from 'react';
import { Waves } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation to complete before calling onComplete
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* App Logo/Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
          <Waves className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white text-center">
          Save the Sea
        </h1>
        <p className="text-white/80 text-lg text-center mt-2">
          Ocean Conservation App
        </p>
      </div>

      {/* Loading Animation */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* Tagline */}
      <div className="mt-8 text-center">
        <p className="text-white/70 text-sm">
          Making waves for ocean conservation
        </p>
      </div>
    </div>
  );
}
