import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { 
  Accessibility, 
  Type, 
  Volume2, 
  Eye, 
  MousePointer,
  CheckCircle
} from 'lucide-react';

interface AccessibilitySettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccessibilitySettings({ isOpen, onClose }: AccessibilitySettingsProps) {
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    fontSize: 16,
    volume: 50
  });

  const handleSettingChange = (key: string, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Accessibility className="w-5 h-5" />
            Accessibility Settings
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">High Contrast</p>
                <p className="text-sm text-muted-foreground">Enhanced color contrast</p>
              </div>
            </div>
            <Switch
              checked={settings.highContrast}
              onCheckedChange={(checked) => handleSettingChange('highContrast', checked)}
            />
          </div>

          {/* Large Text */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Large Text</p>
                <p className="text-sm text-muted-foreground">Increase text size</p>
              </div>
            </div>
            <Switch
              checked={settings.largeText}
              onCheckedChange={(checked) => handleSettingChange('largeText', checked)}
            />
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MousePointer className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Reduced Motion</p>
                <p className="text-sm text-muted-foreground">Minimize animations</p>
              </div>
            </div>
            <Switch
              checked={settings.reducedMotion}
              onCheckedChange={(checked) => handleSettingChange('reducedMotion', checked)}
            />
          </div>

          {/* Screen Reader */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Screen Reader</p>
                <p className="text-sm text-muted-foreground">Voice assistance</p>
              </div>
            </div>
            <Switch
              checked={settings.screenReader}
              onCheckedChange={(checked) => handleSettingChange('screenReader', checked)}
            />
          </div>

          {/* Font Size Slider */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Font Size</p>
                <p className="text-sm text-muted-foreground">{settings.fontSize}px</p>
              </div>
            </div>
            <Slider
              value={[settings.fontSize]}
              onValueChange={([value]) => handleSettingChange('fontSize', value)}
              max={24}
              min={12}
              step={1}
              className="w-full"
            />
          </div>

          {/* Volume Slider */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Volume</p>
                <p className="text-sm text-muted-foreground">{settings.volume}%</p>
              </div>
            </div>
            <Slider
              value={[settings.volume]}
              onValueChange={([value]) => handleSettingChange('volume', value)}
              max={100}
              min={0}
              step={5}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={onClose} className="flex-1 ocean-gradient text-white">
            <CheckCircle className="w-4 h-4 mr-2" />
            Apply Settings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
