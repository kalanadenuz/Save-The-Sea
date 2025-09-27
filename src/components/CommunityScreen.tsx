import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Users, 
  MapPin, 
  Calendar,
  Star,
  Share2,
  Waves,
  MessageCircle,
  Crown,
  Medal,
  Award,
  ExternalLink
} from 'lucide-react';

const leaderboard = [
  { rank: 1, name: "Galle_Guardian", points: 2847, streak: 23, avatar: "🐋", badge: "Coral Master" },
  { rank: 2, name: "Trinco_Turtle", points: 2654, streak: 19, avatar: "🌊", badge: "Harbor Hero" },
  { rank: 3, name: "Negombo_Navigator", points: 2431, streak: 15, avatar: "🐠", badge: "Lagoon Leader" },
  { rank: 4, name: "Mirissa_Marine", points: 2287, streak: 18, avatar: "♻️", badge: "Beach Boss" },
  { rank: 5, name: "You", points: 1247, streak: 12, avatar: "🐢", badge: "Sea Friend", isCurrentUser: true }
];

const events = [
  {
    id: 1,
    title: "Hikkaduwa Reef Cleanup",
    date: "Dec 28, 2024",
    time: "8:00 AM - 11:00 AM",
    location: "Hikkaduwa Marine Sanctuary",
    participants: 47,
    organizer: "Galle Marine Conservation",
    type: "Cleanup"
  },
  {
    id: 2,
    title: "Turtle Nesting Season Watch",
    date: "Jan 1, 2025",
    time: "All Month",
    location: "Rekawa Beach, Tangalle",
    participants: 1240,
    organizer: "Rekawa Turtle Conservation",
    type: "Challenge"
  },
  {
    id: 3,
    title: "Marine Biology Webinar",
    date: "Jan 5, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Online",
    participants: 156,
    organizer: "Ocean Institute",
    type: "Education"
  }
];

const communityPosts = [
  {
    id: 1,
    author: "Marina_Ocean",
    avatar: "🐋",
    content: "Just completed my 20th beach cleanup! Found 23 plastic bottles and 15 food wrappers. Every piece counts! 🌊",
    likes: 24,
    comments: 8,
    timeAgo: "2h ago"
  },
  {
    id: 2,
    author: "EcoWarrior23",
    avatar: "🌊",
    content: "Pro tip: Bring a reusable water bottle everywhere! I've prevented 50+ plastic bottles this month 💪",
    likes: 18,
    comments: 5,
    timeAgo: "4h ago"
  }
];

export function CommunityScreen() {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'events' | 'feed'>('leaderboard');

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Award className="w-5 h-5 text-amber-600" />;
      default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Cleanup': return 'bg-blue-100 text-blue-800';
      case 'Challenge': return 'bg-green-100 text-green-800';
      case 'Education': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-y-auto mobile-scroll" style={{ height: '720px' }}>
      <div className="px-4 py-4 pb-20">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-gray-800 mb-1">Community</h1>
          <p className="text-gray-600 text-sm">Connect with fellow ocean protectors</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-muted rounded-lg p-1 mb-4">
          {[
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'feed', label: 'Feed', icon: MessageCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-md transition-wave ${
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-soft'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-semibold text-gray-800">Global Leaderboard</h2>
            </div>
            
            {leaderboard.map((user) => (
              <Card key={user.rank} className={`p-3 shadow-lg border border-gray-200 ${
                user.isCurrentUser ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getRankIcon(user.rank)}
                    <span className="text-xl">{user.avatar}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{user.name}</h3>
                      {user.isCurrentUser && (
                        <Badge variant="secondary" className="text-xs">You</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{user.badge}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-primary text-sm">{user.points.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{user.streak} day streak</div>
                  </div>
                </div>
              </Card>
            ))}
            
            <Card className="p-3 text-center shadow-lg border border-blue-300 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6">
              <p className="text-white font-medium text-sm">
                🎯 Climb the leaderboard by completing daily challenges!
              </p>
            </Card>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-semibold text-gray-800">Upcoming Events</h2>
            </div>
            
            {events.map((event) => (
              <Card key={event.id} className="p-3 shadow-soft">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getEventTypeColor(event.type)} text-xs`}>
                    {event.type}
                  </Badge>
                  <Button variant="outline" size="sm" className="text-xs px-2 py-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Join
                  </Button>
                </div>
                
                <h3 className="font-semibold text-base mb-2">{event.title}</h3>
                
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {event.date} • {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    {event.participants} participants
                  </div>
                </div>
                
                <div className="mt-2 pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Organized by {event.organizer}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'feed' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-semibold text-gray-800">Community Feed</h2>
            </div>
            
            {communityPosts.map((post) => (
              <Card key={post.id} className="p-3 shadow-soft">
                <div className="flex items-start gap-2">
                  <span className="text-xl">{post.avatar}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm">{post.author}</h4>
                      <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                    </div>
                    
                    <p className="text-xs mb-2 leading-relaxed">{post.content}</p>
                    
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-wave">
                        <Waves className="w-3 h-3" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-wave">
                        <MessageCircle className="w-3 h-3" />
                        {post.comments}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-wave">
                        <Share2 className="w-3 h-3" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            
            <Card className="p-4 text-center shadow-soft">
              <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">Share Your Impact!</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Post about your eco-actions to inspire others
              </p>
              <Button className="coral-gradient text-white text-sm px-4 py-2">
                Create Post
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}