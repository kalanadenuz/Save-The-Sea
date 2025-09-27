import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, Database, Users, Globe } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            Privacy Policy & Data Protection
          </DialogTitle>
          <DialogDescription>
            How we protect your data while saving the ocean
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-sm">
          {/* Data Collection */}
          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-600" />
              Data We Collect
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Progress Data:</strong> Your eco-points, challenges completed, and streak days</li>
              <li>• <strong>Location Data:</strong> General location for Sri Lankan ocean conservation features (optional)</li>
              <li>• <strong>Usage Data:</strong> App interactions to improve your experience</li>
              <li>• <strong>No Personal Data:</strong> We don't collect names, emails, or personal identifiers</li>
            </ul>
          </section>

          {/* Data Usage */}
          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-600" />
              How We Use Your Data
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Gamification:</strong> Track your ocean conservation progress</li>
              <li>• <strong>Local Impact:</strong> Show Sri Lankan ocean threats and solutions</li>
              <li>• <strong>Community:</strong> Anonymous leaderboard participation</li>
              <li>• <strong>Improvement:</strong> Enhance app features and user experience</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              Data Protection
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Local Storage:</strong> All data stored locally on your device</li>
              <li>• <strong>No Cloud Sync:</strong> Your data never leaves your device</li>
              <li>• <strong>Encryption:</strong> Sensitive data encrypted using device security</li>
              <li>• <strong>No Third Parties:</strong> We don't share data with external services</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              Your Rights
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Delete Data:</strong> Clear all data anytime in settings</li>
              <li>• <strong>Export Data:</strong> Download your progress data</li>
              <li>• <strong>Opt Out:</strong> Disable location features anytime</li>
              <li>• <strong>Transparency:</strong> View exactly what data we collect</li>
            </ul>
          </section>

          {/* Ocean Conservation Focus */}
          <section className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              Our Ocean Conservation Mission
            </h3>
            <p className="text-muted-foreground">
              This app is designed to protect Sri Lanka's marine ecosystems. Your data helps us understand 
              how to better serve ocean conservation efforts while maintaining your privacy. Every action 
              you take in the app contributes to real-world ocean protection.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="font-semibold text-lg mb-3">Questions?</h3>
            <p className="text-muted-foreground">
              Contact us at <strong>privacy@savethesea.lk</strong> for any privacy concerns or questions 
              about your data.
            </p>
          </section>
        </div>

        <div className="flex justify-end pt-4">
          <Button onClick={onClose} className="btn-ocean">
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
