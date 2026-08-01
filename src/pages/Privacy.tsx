
import { Link } from 'react-router-dom';
import { ArrowLeft, Mic } from 'lucide-react';

function Privacy() {
  return (
    <div className="min-h-screen bg-background-dark text-text-dark font-sans selection:bg-primary/30 pb-20">
      
      {/* Navigation */}
      <nav className="w-full z-50 glass border-b border-white/5 mb-12">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Sonus Notes Logo" className="w-8 h-8 rounded-lg object-contain glow" />
            <span className="text-xl font-bold tracking-tight">Sonus Notes</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-dark hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-dark mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Sonus Notes. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our mobile application and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data:</strong> includes your email address (if you create an account).</li>
              <li><strong>Audio Data:</strong> audio recordings you create within the app for journaling purposes.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party AI Data Sharing (Google Gemini)</h2>
            <p>
              Sonus Notes uses artificial intelligence to transcribe your voice notes and analyze emotional content to provide personalized insights.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>What data is sent:</strong> We transmit your audio recordings and any photos you attach to your journal entries.</li>
              <li><strong>Who the data is sent to:</strong> The data is securely transmitted to Google's Gemini AI service via an encrypted API connection.</li>
              <li><strong>Data Protection:</strong> We confirm that Google (the third-party AI provider) provides the same or equal protection of your personal data as outlined in this Privacy Policy. Your personal audio and images are NOT used to train their foundational models.</li>
              <li><strong>Explicit Consent:</strong> We will explicitly ask for your permission before transmitting any of your data to the AI service for the first time within the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We use enterprise-grade cloud infrastructure (Supabase) to store your account information securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data (Account Deletion).</li>
              <li>Object to processing of your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at support@sonusnotes.app.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
