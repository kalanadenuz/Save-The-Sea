import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Waves, Users, Award } from 'lucide-react';
import seaTurtleHero from '@/assets/sea-turtle-hero.jpg';
import oceanPollution from '@/assets/ocean-pollution.jpg';
import healthyOcean from '@/assets/healthy-ocean.jpg';

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingData = [
  {
    title: "Our Oceans Need You",
    subtitle: "Every 60 seconds, a garbage truck worth of plastic enters our oceans",
    image: oceanPollution,
    icon: Waves,
    fact: "8 million tons of plastic waste enter the ocean annually"
  },
  {
    title: "Small Actions, Big Impact",
    subtitle: "Your daily choices can help protect marine life and restore ocean health",
    image: seaTurtleHero,
    icon: Users,
    fact: "A single plastic bag can take 1,000 years to decompose"
  },
  {
    title: "Join the Movement",
    subtitle: "Together, we can create lasting change for our blue planet",
    image: healthyOcean,
    icon: Award,
    fact: "Over 700 species are affected by ocean pollution"
  }
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === onboardingData.length - 1;
  const currentData = onboardingData[currentStep];
  const Icon = currentData.icon;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Skip Button */}
      <div className="absolute top-4 right-4 z-20">
        <button 
          onClick={handleSkip}
          className="px-4 py-2 bg-white/30 text-white rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/40 transition-colors shadow-lg"
        >
          Skip
        </button>
      </div>

      {/* Image Section - 50% of screen */}
      <div className="h-[50%] relative overflow-hidden">
        <img 
          src={currentData.image} 
          alt={currentData.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section - 50% of screen */}
      <div className="h-[50%] bg-blue-600 flex flex-col">
        {/* Top Content - Compact */}
        <div className="text-center flex-1 flex flex-col justify-center px-6 py-3">
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2 text-white">
            {currentData.title}
          </h2>
          
          <p className="text-sm mb-3 text-white/90 leading-relaxed">
            {currentData.subtitle}
          </p>

          <div className="bg-white/20 p-3 rounded-lg mb-3">
            <p className="text-xs font-medium text-white">
              💡 {currentData.fact}
            </p>
          </div>
        </div>

        {/* Bottom Controls - Fixed at bottom */}
        <div className="px-6 pb-4 space-y-3">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {onboardingData.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentStep 
                    ? 'bg-white' 
                    : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleNext}
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl text-base hover:bg-white/90 transition-colors"
          >
            {isLastStep ? (
              <>
                Join the Movement
                <Waves className="w-4 h-4 ml-2 inline" />
              </>
            ) : (
              <>
                Continue
                <ChevronRight className="w-4 h-4 ml-2 inline" />
              </>
            )}
          </button>

          {/* Bottom Message - Only on last step, very compact */}
          {isLastStep && (
            <div className="text-center pt-1">
              <p className="text-white font-semibold text-xs">
                Save the Sea. Save the Future.
              </p>
              <p className="text-white/80 text-xs mt-0.5">
                Every action counts 🌊
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}