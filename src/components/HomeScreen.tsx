import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Flame, 
  Target, 
  Trophy,
  Waves,
  Droplets,
  Recycle,
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import petTurtle from '@/assets/pet-turtle.jpg';

interface HomeScreenProps {
  userProgress: {
    streakDays: number;
    ecoPoints: number;
    challengesCompleted: number;
    weeklyGoal: number;
  };
  onChallengeComplete: () => void;
}

const todaysChallenge = {
  id: 1,
  title: "Clean Up Unawatuna Beach",
  description: "Join the beach cleanup at Unawatuna and help protect the coral reefs and marine life in Galle District",
  points: 50,
  icon: Recycle,
  difficulty: "Easy",
  location: "Unawatuna, Galle"
};

const quickActions = [
  { icon: Droplets, label: "Protect Madu Ganga", points: 10, color: "text-blue-500" },
  { icon: Recycle, label: "Clean Mirissa Beach", points: 15, color: "text-green-500" },
  { icon: Users, label: "Share Arugam Tips", points: 20, color: "text-orange-500" },
  { icon: Waves, label: "Support Fishers", points: 25, color: "text-blue-500" }
];

export function HomeScreen({ userProgress, onChallengeComplete }: HomeScreenProps) {
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [petMood, setPetMood] = useState<'happy' | 'excited' | 'sleepy'>('happy');
  const [showCelebration, setShowCelebration] = useState(false);

  const handleChallengeComplete = () => {
    setChallengeCompleted(true);
    setPetMood('excited');
    setShowCelebration(true);
    onChallengeComplete();
    
    // Hide celebration after animation
    setTimeout(() => {
      setShowCelebration(false);
    }, 2000);
    
    // Reset pet mood after animation
    setTimeout(() => setPetMood('happy'), 3000);
  };

  const weeklyProgress = (userProgress.challengesCompleted / userProgress.weeklyGoal) * 100;
  const Icon = todaysChallenge.icon;

  return (
    <div className="bg-gradient-to-br from-[#7dd3fc] via-white to-[#22d3ee] ocean-pattern overflow-y-auto mobile-scroll" style={{ height: '720px' }}>
      <div className="section-spacing content-grid pb-20">
        {/* Header */}
        <header className="flex items-center justify-between" role="banner">
          <div>
            <h1 className="heading-xl text-foreground" aria-label="Good morning! Ready to make a difference?">
              Good morning! 🌊
            </h1>
            <p className="body-lg mt-1 text-muted-foreground">
              Ready to make a difference?
            </p>
          </div>
          <div className="flex flex-col items-end space-y-1" role="complementary" aria-label="User progress summary">
            <div className="flex items-center gap-2 text-accent font-bold" aria-label={`${userProgress.ecoPoints.toLocaleString()} eco points earned`}>
              <Trophy className="w-6 h-6" aria-hidden="true" />
              <span className="text-xl">{userProgress.ecoPoints.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-orange-500 font-semibold" aria-label={`${userProgress.streakDays} day streak`}>
              <Flame className="w-7 h-7" aria-hidden="true" />
              <span className="text-sm">{userProgress.streakDays} day streak</span>
            </div>
          </div>
        </header>

        {/* Virtual Pet */}
        <section className="modern-card-hover p-6 card-spacing border border-gray-200 shadow-lg" role="region" aria-labelledby="pet-title">
          <div className="flex items-center gap-4">
            <div className={`relative ${petMood === 'excited' ? 'sea-pet-float' : 'scale-on-hover'}`}>
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#06b6d4] to-[#0ea5e9] flex items-center justify-center shadow-lg">
                <img 
                  src={petTurtle} 
                  alt="Marina the sea turtle companion, your virtual pet"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
              </div>
              {petMood === 'excited' && (
                <div className="absolute -top-2 -right-2 animate-bounce" aria-hidden="true">
                  <Sparkles className="w-6 h-6 text-yellow-300 fill-current" />
                </div>
              )}
            </div>
            <div className="flex-1">
            <h3 id="pet-title" className="font-bold text-[#1e3a8a] text-xl">Marina the Turtle</h3>
            <p className="text-[#1e40af] text-base leading-relaxed mt-2" aria-live="polite">
                {petMood === 'excited' 
                  ? "So proud of you! Keep up the great work! 🎉" 
                  : "I'm swimming happily thanks to your eco actions! 🐢"
                }
              </p>
              <div className="mt-3">
                <div className="flex items-center gap-3 text-[#1e40af] text-sm" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} aria-label="Pet health level">
                  <span className="font-semibold">Health:</span>
                  <Progress value={85} className="flex-1 h-3 bg-gray-200 rounded-full" />
                  <span className="font-bold text-[#0ea5e9]">85%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Challenge */}
        <div className="modern-card-hover p-6 card-spacing border border-gray-200 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4] to-[#0ea5e9] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="heading-md">Today's Challenge</h3>
                <Badge variant="secondary" className="text-xs rounded-full px-3 py-1">
                  {todaysChallenge.difficulty}
                </Badge>
              </div>
              <h4 className="font-bold text-lg mb-3">{todaysChallenge.title}</h4>
              <p className="body-md mb-4 text-[#1e40af]">{todaysChallenge.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#0ea5e9] font-bold">
                  <Trophy className="w-5 h-5" />
                  <span>+{todaysChallenge.points} points</span>
                </div>
                
                {challengeCompleted ? (
                  <div className={`flex items-center gap-2 text-green-600 font-semibold success-glow celebration-bounce ${showCelebration ? 'celebration-confetti' : ''}`}>
                    <CheckCircle className="w-5 h-5" />
                    <span>Completed! 🎉</span>
                  </div>
                ) : (
                  <Button 
                    onClick={handleChallengeComplete}
                    className="btn-ocean ripple-effect"
                  >
                    Complete
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="modern-card-hover p-6 card-spacing border border-gray-200 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#06b6d4] to-[#0ea5e9] rounded-3xl flex items-center justify-center shadow-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="heading-md">Weekly Goal</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="body-md text-[#1e40af]">
                {userProgress.challengesCompleted} of {userProgress.weeklyGoal} challenges
              </span>
              <span className="font-bold text-[#0ea5e9] text-lg">
                {Math.round(weeklyProgress)}%
              </span>
            </div>
            <Progress value={weeklyProgress} className="h-3 bg-gray-200 rounded-full" />
            <p className="text-sm text-[#1e40af] text-center">
              Keep going! You're making great progress 🌟
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="modern-card-hover p-6 card-spacing border border-gray-200 shadow-lg mb-6">
          <h3 className="heading-md mb-5">Quick Actions</h3>
          <div className="content-grid-2">
            {quickActions.map((action, index) => {
              const ActionIcon = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="h-24 flex flex-col gap-1 border-2 hover:border-[#22d3ee] transition-spring scale-on-hover rounded-3xl ripple-effect p-1"
                >
                  <ActionIcon className={`w-4 h-4 ${action.color}`} />
                  <span className="text-xs font-semibold text-[#1e40af] text-center leading-tight px-1 break-words">{action.label}</span>
                  <span className="text-xs text-[#0ea5e9] font-bold">+{action.points} pts</span>
                </Button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}