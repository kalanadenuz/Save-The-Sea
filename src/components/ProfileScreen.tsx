import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AccessibilitySettings } from './AccessibilitySettings';
import { PrivacyPolicy } from './PrivacyPolicy';
import { 
  Settings, 
  Edit, 
  Trophy, 
  Target,
  Calendar,
  Share2,
  Bell,
  Shield,
  Waves,
  Star,
  Award,
  Fish,
  Recycle,
  Droplets,
  Accessibility,
  Palette,
  MapPin
} from 'lucide-react';

const userProfile = {
  nickname: "OceanLover23",
  avatar: "🐢",
  joinDate: "November 2024",
  level: 12,
  totalPoints: 1247,
  rank: 156,
  streakRecord: 12
};

const badges = [
  { id: 1, name: "First Week Hero", icon: Trophy, color: "text-yellow-500", earned: true },
  { id: 2, name: "Plastic Warrior", icon: Recycle, color: "text-blue-500", earned: true },
  { id: 3, name: "Ocean Guardian", icon: Fish, color: "text-cyan-500", earned: true },
  { id: 4, name: "Water Saver", icon: Droplets, color: "text-blue-600", earned: true },
  { id: 5, name: "Streak Master", icon: Star, color: "text-orange-500", earned: false },
  { id: 6, name: "Community Leader", icon: Waves, color: "text-blue-500", earned: false }
];

const personalStats = [
  { label: "Days Active", value: "28", icon: Calendar },
  { label: "Challenges Done", value: "47", icon: Target },
  { label: "Points Earned", value: "1,247", icon: Trophy },
  { label: "Global Rank", value: "#156", icon: Award }
];

const preferences = [
  { label: "Daily Reminders", icon: Bell, enabled: true },
  { label: "Achievement Notifications", icon: Trophy, enabled: true },
  { label: "Community Updates", icon: Share2, enabled: false },
  { label: "Privacy Mode", icon: Shield, enabled: false }
];

export function ProfileScreen() {
  const [showAccessibilitySettings, setShowAccessibilitySettings] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [userTheme, setUserTheme] = useState('ocean');
  const [userLocation, setUserLocation] = useState('Galle, Sri Lanka');
  const earnedBadges = badges.filter(badge => badge.earned);
  const progressToNextLevel = 67; // percentage

  return (
    <div className="bg-gradient-to-br from-[#7dd3fc] via-white to-[#22d3ee] overflow-y-auto mobile-scroll" style={{ height: '720px' }}>
      <div className="px-4 py-4 space-y-5 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#1e3a8a]">Profile</h1>
          <Button variant="outline" size="icon" className="w-8 h-8">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="p-4 ocean-gradient border border-blue-300 shadow-lg">
          <div className="flex items-center gap-3 text-white">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                {userProfile.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {userProfile.level}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-bold">{userProfile.nickname}</h2>
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 p-1">
                  <Edit className="w-3 h-3" />
                </Button>
              </div>
              <p className="text-white/80 text-xs mb-2">Member since {userProfile.joinDate}</p>
              
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  <span>{userProfile.totalPoints} pts</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>Rank #{userProfile.rank}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Level Progress */}
          <div className="mt-3 pt-3 border-t border-white/20">
            <div className="flex justify-between items-center text-white/90 text-xs mb-1">
              <span>Level {userProfile.level}</span>
              <span>Level {userProfile.level + 1}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-yellow-400 h-2 rounded-full transition-wave"
                style={{ width: `${progressToNextLevel}%` }}
              />
            </div>
            <p className="text-white/70 text-xs mt-1 text-center">
              {progressToNextLevel}% to next level
            </p>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          {personalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-3 text-center shadow-lg border border-gray-200">
                <Icon className="w-5 h-5 text-[#0ea5e9] mx-auto mb-1" />
                <div className="text-lg font-bold text-[#1e3a8a]">{stat.value}</div>
                <div className="text-xs text-[#1e40af]">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Badges */}
        <Card className="p-4 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-[#1e3a8a]">Badges</h3>
            <Badge variant="secondary" className="text-xs">
              {earnedBadges.length} / {badges.length}
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.id}
                  className={`p-2 rounded-lg text-center transition-wave ${
                    badge.earned
                      ? 'bg-secondary border border-primary/20'
                      : 'bg-muted/50 opacity-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 mx-auto mb-1 ${
                    badge.earned ? badge.color : 'text-muted-foreground'
                  }`} />
                  <p className="text-xs font-medium">{badge.name}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Preferences */}
        <Card className="p-4 shadow-lg border border-gray-200">
          <h3 className="text-base font-semibold text-[#1e3a8a] mb-3">Preferences</h3>
          
          <div className="space-y-2">
            {preferences.map((pref, index) => {
              const Icon = pref.icon;
              return (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#1e40af]" />
                    <span className="text-sm text-[#1e3a8a]">{pref.label}</span>
                  </div>
                  <div className={`w-8 h-5 rounded-full transition-wave cursor-pointer ${
                    pref.enabled ? 'bg-[#0ea5e9]' : 'bg-[#22d3ee]'
                  }`}>
                    <div className={`w-3 h-3 bg-white rounded-full mt-1 transition-wave ${
                      pref.enabled ? 'ml-4' : 'ml-1'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Actions */}
        <div className="space-y-2 mb-6">
          <Button variant="outline" className="w-full justify-start text-sm text-[#1e3a8a]">
            <Share2 className="w-4 h-4 mr-2" />
            Share Your Progress
          </Button>
          
          <Button variant="outline" className="w-full justify-start text-sm text-[#1e3a8a]">
            <Waves className="w-4 h-4 mr-2" />
            Rate the App
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-sm text-[#1e3a8a]"
            onClick={() => setShowAccessibilitySettings(true)}
          >
            <Accessibility className="w-4 h-4 mr-2" />
            Accessibility Settings
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-sm text-[#1e3a8a]"
            onClick={() => setShowPrivacyPolicy(true)}
          >
            <Shield className="w-4 h-4 mr-2" />
            Privacy Policy
          </Button>
          
          <Button variant="outline" className="w-full justify-start text-sm text-[#1e3a8a]">
            <Palette className="w-4 h-4 mr-2" />
            Theme: {userTheme === 'ocean' ? 'Ocean Blue' : 'Coral Reef'}
          </Button>
          
          <Button variant="outline" className="w-full justify-start text-sm text-[#1e3a8a]">
            <MapPin className="w-4 h-4 mr-2" />
            Location: {userLocation}
          </Button>
        </div>

        {/* Accessibility Settings Modal */}
        <AccessibilitySettings 
          isOpen={showAccessibilitySettings}
          onClose={() => setShowAccessibilitySettings(false)}
        />
        
        {/* Privacy Policy Modal */}
        <PrivacyPolicy 
          isOpen={showPrivacyPolicy}
          onClose={() => setShowPrivacyPolicy(false)}
        />

        {/* App Info */}
        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            Save the Sea v1.0 • Protecting our oceans together
          </p>
        </div>
      </div>
    </div>
  );
}