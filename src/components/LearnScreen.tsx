import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb,
  Fish,
  Recycle,
  Droplets,
  TreePine,
  Waves,
  BookOpen,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const oceanFacts = [
  {
    id: 1,
    category: "Sri Lankan Marine Life",
    icon: Fish,
    title: "Sea Turtles of Rekawa Beach",
    content: "Rekawa Beach in Tangalle is Sri Lanka's most important sea turtle nesting site, hosting 5 species including the endangered Leatherback turtle. The beach sees 200+ turtle nests annually but faces threats from plastic pollution and coastal development.",
    tip: "Visit Rekawa Turtle Conservation Project to witness nesting turtles and support conservation efforts.",
    color: "bg-blue-500"
  },
  {
    id: 2,
    category: "Ocean Pollution",
    icon: Droplets,
    title: "Plastic Crisis in Negombo Lagoon",
    content: "Negombo Lagoon receives 800,000 tons of plastic waste annually from the Kelani River, affecting 15,000 local fishermen and 200+ fish species. The lagoon's mangrove ecosystem is crucial for coastal protection.",
    tip: "Join beach cleanups at Negombo Beach and support the Negombo Lagoon Conservation Society.",
    color: "bg-red-500"
  },
  {
    id: 3,
    category: "Sri Lankan Fisheries",
    icon: Recycle,
    title: "Sustainable Fishing in Trincomalee",
    content: "Trincomalee's fishing community of 5,000+ families practices traditional fishing methods. Overfishing threatens tuna, prawn, and crab stocks. The harbor's deep waters are home to blue whales and dolphins.",
    tip: "Buy fish from Trincomalee's morning fish market and support sustainable fishing cooperatives.",
    color: "bg-orange-500"
  },
  {
    id: 4,
    category: "Coral Conservation",
    icon: TreePine,
    title: "Hikkaduwa Marine Sanctuary",
    content: "Hikkaduwa Marine Sanctuary protects 100+ coral species and 200+ fish species across 104 hectares. The reef generates $2M annually for local tourism but faces bleaching from rising sea temperatures.",
    tip: "Snorkel responsibly at Hikkaduwa Marine Sanctuary and use reef-safe sunscreen (no oxybenzone).",
    color: "bg-pink-500"
  },
  {
    id: 5,
    category: "Climate Impact",
    icon: Waves,
    title: "Mangrove Protection in Puttalam",
    content: "Puttalam's 15,000 hectares of mangroves protect 50,000+ coastal residents from storms and tsunamis. These mangroves store 3x more carbon than tropical forests and support 100+ bird species.",
    tip: "Support mangrove restoration in Puttalam District and visit Wilpattu National Park's coastal areas.",
    color: "bg-green-500"
  }
];

export function LearnScreen() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showTip, setShowTip] = useState(false);

  const handlePrevious = () => {
    setCurrentCard(prev => prev > 0 ? prev - 1 : oceanFacts.length - 1);
    setShowTip(false);
  };

  const handleNext = () => {
    setCurrentCard(prev => prev < oceanFacts.length - 1 ? prev + 1 : 0);
    setShowTip(false);
  };

  const currentFact = oceanFacts[currentCard];
  const Icon = currentFact.icon;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-y-auto mobile-scroll" style={{ height: '720px' }}>
      <div className="px-4 py-4 space-y-5 pb-20">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 ocean-gradient rounded-3xl flex items-center justify-center shadow-glow pulse-glow">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="heading-xl text-gray-800">Ocean Education</h1>
          </div>
          <p className="body-lg text-gray-600">Swipe to learn amazing ocean facts</p>
        </div>

        {/* Card Navigation Indicator */}
        <div className="flex justify-center gap-2">
          {oceanFacts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentCard(index);
                setShowTip(false);
              }}
              className={`transition-spring ${
                index === currentCard 
                  ? 'w-8 h-3 bg-primary rounded-full' 
                  : 'w-3 h-3 bg-muted rounded-full hover:bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Main Card */}
        <div className="relative">
          <div className="glass-card-hover p-6 min-h-[400px] flex flex-col fade-in-up border border-gray-200 shadow-lg mb-6">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-12 h-12 ${currentFact.color} rounded-3xl flex items-center justify-center shadow-glow`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <Badge variant="secondary" className="text-sm font-semibold rounded-full px-4 py-2">
                {currentFact.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="heading-lg mb-4 text-gray-800">
                {currentFact.title}
              </h2>
              
              <p className="body-lg leading-relaxed mb-5 text-gray-700">
                {currentFact.content}
              </p>

              {/* Action Tip */}
              {showTip && (
                <div className="ocean-wave-gradient p-5 rounded-3xl mb-5 slide-in-right shadow-glow">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold mb-2">How You Can Help:</p>
                      <p className="text-white/90 leading-relaxed">{currentFact.tip}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <Button
              onClick={() => setShowTip(!showTip)}
              variant="outline"
              className="w-full h-12 rounded-3xl border-2 hover:border-primary transition-spring font-semibold ripple-effect"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              {showTip ? 'Hide Action Tip' : 'Show Action Tip'}
            </Button>
          </div>

          {/* Navigation Arrows - Modern Styling */}
          <div className="flex justify-between mt-6">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full shadow-neumorphism bg-white border-2 scale-on-hover ripple-effect"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full shadow-neumorphism bg-white border-2 scale-on-hover ripple-effect"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Progress */}
        <div className="text-center">
          <p className="body-md font-semibold">
            Card {currentCard + 1} of {oceanFacts.length}
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div>
          <h3 className="heading-md mb-4 text-gray-800">Quick Ocean Facts</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="neumorphism-card p-5 text-center border border-gray-200 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">71%</div>
              <div className="body-sm text-gray-700">of Earth is ocean</div>
            </div>
            <div className="neumorphism-card p-5 text-center border border-gray-200 shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">8M</div>
              <div className="body-sm text-gray-700">tons plastic yearly</div>
            </div>
            <div className="neumorphism-card p-5 text-center border border-gray-200 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
              <div className="body-sm text-gray-700">of water is ocean</div>
            </div>
            <div className="neumorphism-card p-5 text-center border border-gray-200 shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">1M+</div>
              <div className="body-sm text-gray-700">marine species</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}