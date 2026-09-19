import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';

function Terms() {
  return (
    <div className="min-h-screen bg-background-dark text-text-dark font-sans selection:bg-primary/30 pb-20">

      {/* Navigation */}
      <nav className="w-full z-50 glass border-b border-white/5 mb-12">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="SonusNotes Logo" className="w-8 h-8 rounded-lg object-contain glow" />
            <span className="text-xl font-bold tracking-tight">SonusNotes</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-dark hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-muted-dark text-sm mb-12">Last updated: September 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By downloading or using SonusNotes ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>SonusNotes is a private AI-powered audio journal application. It allows you to record voice entries, which are analyzed locally or via secure AI services to surface patterns, emotions, and recurring topics in your thoughts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must be at least 17 years of age to use SonusNotes.</li>
              <li>You are responsible for the content of your voice entries.</li>
              <li>You agree not to use the App for any unlawful purpose.</li>
              <li>You agree not to attempt to reverse-engineer, decompile, or disassemble the App.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Privacy & Data</h2>
            <p>Your voice entries and personal data are handled in accordance with our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. Your journal entries are private and are not shared with third parties for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. AI Analysis</h2>
            <p>SonusNotes uses AI to analyze voice tone and content to provide insights. These insights are for personal reflection purposes only and do not constitute medical, psychological, or therapeutic advice. If you are experiencing a mental health crisis, please contact a qualified professional.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Subscriptions & Purchases</h2>
            <p>SonusNotes may offer in-app purchases or subscriptions. All purchases are processed through Apple App Store or Google Play Store and are subject to their respective terms. Subscriptions automatically renew unless cancelled before the renewal date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
            <p>All content, design, and code within SonusNotes is the property of Tulpara and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Disclaimer of Warranties</h2>
            <p>The App is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation of the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Tulpara shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of SonusNotes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Contact</h2>
            <p>For questions about these Terms, contact us at: <a href="mailto:hello@tulpara.com" className="text-primary hover:underline">hello@tulpara.com</a></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link to="/" className="text-muted-dark hover:text-white transition-colors text-sm">← Back to SonusNotes</Link>
        </div>
      </div>
    </div>
  );
}

export default Terms;
