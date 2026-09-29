import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';

function Refund() {
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
        <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
        <p className="text-muted-dark text-sm mb-12">Last updated: September 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
            <p>
              SonusNotes offers subscription-based premium features processed through <strong className="text-white">TabPay</strong>.
              This Refund Policy explains your rights regarding cancellations, renewals, and refund requests.
              By subscribing to SonusNotes, you agree to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Subscription Plans</h2>
            <p>
              SonusNotes subscriptions are billed on a recurring basis (monthly or annual) via TabPay.
              Your subscription begins immediately upon purchase and grants access to premium features
              for the duration of the billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Automatic Renewal</h2>
            <p>
              Subscriptions automatically renew at the end of each billing period unless cancelled
              before the renewal date. You will be charged the same rate as your original subscription
              unless we notify you of a price change in advance.
            </p>
            <p className="mt-3">
              You will receive a reminder notification before your subscription renews. It is your
              responsibility to cancel before the renewal date if you do not wish to continue.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. How to Cancel</h2>
            <p>You can cancel your SonusNotes subscription at any time through:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>The <strong className="text-white">SonusNotes app</strong> → Settings → Subscription → Cancel</li>
              <li>Your <strong className="text-white">TabPay account</strong> dashboard</li>
              <li>Emailing us at <a href="mailto:hello@tulpara.com" className="text-primary hover:underline">hello@tulpara.com</a></li>
            </ul>
            <p className="mt-3">
              Cancellation takes effect at the end of the current billing period. You will continue
              to have access to premium features until then.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Refund Eligibility</h2>
            <p className="mb-3">
              We evaluate refund requests on a case-by-case basis. Refunds may be granted in the
              following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Accidental purchase:</strong> You were charged unintentionally
                and contact us within <strong className="text-white">48 hours</strong> of the transaction.
              </li>
              <li>
                <strong className="text-white">Technical failure:</strong> A verifiable technical issue
                prevented you from accessing premium features for a significant portion of the billing period.
              </li>
              <li>
                <strong className="text-white">Duplicate charge:</strong> You were charged more than once
                for the same subscription period.
              </li>
              <li>
                <strong className="text-white">First-time subscribers:</strong> If you are unsatisfied
                with SonusNotes premium and request a refund within <strong className="text-white">7 days</strong> of
                your first subscription, we will review your request.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Non-Refundable Situations</h2>
            <p className="mb-3">Refunds will generally <strong className="text-white">not</strong> be issued in the following cases:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>You forgot to cancel before the renewal date</li>
              <li>You no longer use the app but the subscription is still active</li>
              <li>You purchased an annual plan and request a refund mid-year without a qualifying reason</li>
              <li>Refund requests submitted more than 30 days after the charge</li>
              <li>Violation of our Terms of Use leading to account termination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. How to Request a Refund</h2>
            <p>To submit a refund request, please email us at:</p>
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-medium text-white">📧 hello@tulpara.com</p>
              <p className="text-sm mt-2">Please include in your email:</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Your full name and email address used for the subscription</li>
                <li>Your TabPay transaction ID or order number</li>
                <li>The reason for your refund request</li>
                <li>Date of the charge</li>
              </ul>
            </div>
            <p className="mt-4">
              We aim to respond to all refund requests within <strong className="text-white">3–5 business days</strong>.
              Approved refunds are processed through TabPay and may take 5–10 business days
              to appear on your statement depending on your payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. TabPay-Specific Terms</h2>
            <p>
              Subscriptions processed through TabPay are also subject to TabPay's own terms and
              conditions. In the event of a dispute that cannot be resolved directly with us,
              you may escalate the matter through TabPay's dispute resolution process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Refund Policy at any time. We will notify
              active subscribers of significant changes via email or in-app notification.
              Continued use of SonusNotes after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
            <p>
              For any questions about subscriptions, billing, or refunds, please reach us at:{' '}
              <a href="mailto:hello@tulpara.com" className="text-primary hover:underline">
                hello@tulpara.com
              </a>
            </p>
          </section>

        </div>

        {/* Legal links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex gap-6 flex-wrap">
          <Link to="/" className="text-muted-dark hover:text-white transition-colors text-sm">← Home</Link>
          <Link to="/privacy" className="text-muted-dark hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link to="/terms" className="text-muted-dark hover:text-white transition-colors text-sm">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}

export default Refund;
