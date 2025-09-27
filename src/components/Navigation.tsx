import { 
  Home, 
  BookOpen, 
  BarChart3, 
  Users, 
  User,
  Waves,
  Target
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'learn', label: 'Learn', icon: BookOpen },
  { id: 'impact', label: 'Impact', icon: BarChart3 },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'profile', label: 'Profile', icon: User }
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
  
  return (
    <div className="nav-ocean-modern">
      {/* Navigation Container */}
      <div className="nav-container">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <div
              key={tab.id}
              className={`nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className="nav-icon">
                <Icon className="w-6 h-6" />
              </div>
              <span className="nav-label">
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}