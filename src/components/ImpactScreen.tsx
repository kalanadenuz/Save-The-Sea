import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Recycle, 
  Droplets, 
  Trees, 
  TrendingUp,
  Calendar,
  Target,
  Award,
  BarChart3,
  Leaf,
  Globe
} from 'lucide-react';

const impactStats = {
  plasticSaved: 47, // kg
  co2Reduced: 23.5, // kg
  challengesCompleted: 28,
  streakRecord: 12,
  waterSaved: 156, // liters
  treesEquivalent: 3.2
};

const monthlyGoals = [
  { 
    title: "Beach Cleanups", 
    current: 8, 
    target: 12, 
    icon: Recycle,
    color: "text-blue-600"
  },
  { 
    title: "Mangrove Planting", 
    current: 15, 
    target: 25, 
    icon: Droplets,
    color: "text-cyan-600",
    unit: " trees"
  },
  { 
    title: "Turtle Nest Protection", 
    current: 3, 
    target: 5, 
    icon: Target,
    color: "text-green-600"
  }
];

const achievements = [
  { id: 1, title: "First Week Hero", earned: true, date: "Dec 10" },
  { id: 2, title: "Plastic Warrior", earned: true, date: "Dec 15" },
  { id: 3, title: "Ocean Guardian", earned: true, date: "Dec 20" },
  { id: 4, title: "Streak Master", earned: false, date: null },
  { id: 5, title: "Community Leader", earned: false, date: null },
  { id: 6, title: "Climate Champion", earned: false, date: null }
];

export function ImpactScreen() {
  const totalPoints = 1247;
  const globalRanking = 156;
  const sriLankaRanking = 23;

  return (
    <div className="bg-gradient-to-br from-[#7dd3fc] via-white to-[#22d3ee] overflow-y-auto mobile-scroll" style={{ height: '720px' }}>
      <div className="px-4 py-4 space-y-5 pb-20">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 ocean-gradient rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="heading-lg text-xl">Your Impact</h1>
          </div>
          <p className="body-md text-sm">See the difference you're making</p>
        </div>

        {/* Impact Summary */}
        <div className="modern-card-hover p-5 ocean-gradient text-white text-center border border-blue-300 shadow-lg">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-6 h-6 text-yellow-300" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{totalPoints.toLocaleString()}</h2>
          <p className="text-white/90 text-base mb-3 font-medium">Total Eco Points Earned</p>
          <div className="flex items-center justify-center gap-2 bg-white/10 rounded-full px-3 py-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">Ranked #{sriLankaRanking} in Sri Lanka</span>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="modern-card p-5 border border-gray-200 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
              <Trees className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="heading-md text-base">Environmental Impact</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{impactStats.plasticSaved}kg</div>
              <p className="body-sm text-xs">Plastic Waste Prevented</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{impactStats.co2Reduced}kg</div>
              <p className="body-sm text-xs">CO₂ Emissions Reduced</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{impactStats.waterSaved}L</div>
              <p className="body-sm text-xs">Water Conserved</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">{impactStats.treesEquivalent}</div>
              <p className="body-sm text-xs">Trees Equivalent</p>
            </div>
          </div>

          <div className="mt-4 sea-gradient p-3 rounded-2xl border border-green-300">
            <p className="text-white text-center font-medium text-sm">
              🌍 Your actions equal planting {impactStats.treesEquivalent} trees for the planet!
            </p>
          </div>
        </div>

        {/* Monthly Goals */}
        <div className="modern-card p-5 mb-6 border border-gray-200 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <h3 className="heading-md text-base">December Goals</h3>
          </div>
          
          <div className="space-y-3">
            {monthlyGoals.map((goal, index) => {
              const Icon = goal.icon;
              const progress = (goal.current / goal.target) * 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${goal.color}`} />
                      <span className="font-semibold text-sm">{goal.title}</span>
                    </div>
                    <span className="font-bold text-primary text-sm">
                      {goal.current}{goal.unit || ''} / {goal.target}{goal.unit || ''}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2 bg-muted rounded-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}