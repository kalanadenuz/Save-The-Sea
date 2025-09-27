import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MobileFrame } from "./components/MobileFrame";
import { SplashScreen } from "./components/SplashScreen";
import { Onboarding } from "./components/Onboarding";
import { HomeScreen } from "./components/HomeScreen";
import { LearnScreen } from "./components/LearnScreen";
import { ImpactScreen } from "./components/ImpactScreen";
import { CommunityScreen } from "./components/CommunityScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { Navigation } from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [userProgress, setUserProgress] = useState({
    streakDays: 12,
    ecoPoints: 1247,
    challengesCompleted: 28,
    weeklyGoal: 35
  });

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  const handleChallengeComplete = () => {
    setUserProgress(prev => ({
      ...prev,
      ecoPoints: prev.ecoPoints + 25,
      challengesCompleted: prev.challengesCompleted + 1
    }));
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen userProgress={userProgress} onChallengeComplete={handleChallengeComplete} />;
      case 'learn':
        return <LearnScreen />;
      case 'impact':
        return <ImpactScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen userProgress={userProgress} onChallengeComplete={handleChallengeComplete} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MobileFrame>
          {showSplash ? (
            <SplashScreen onComplete={handleSplashComplete} />
          ) : showOnboarding ? (
            <Onboarding onComplete={handleOnboardingComplete} />
          ) : (
            <div className="h-full flex flex-col relative">
              <div className="flex-1 bg-gradient-to-b from-blue-50 via-white to-cyan-50" style={{ height: '720px' }}>
                {renderScreen()}
              </div>
              <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          )}
        </MobileFrame>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
