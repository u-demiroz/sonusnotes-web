import { motion } from 'framer-motion';
import { Mic, BrainCircuit, LineChart, Globe2, Shield, Sparkles, ChevronRight, Apple, Play } from 'lucide-react';

import { Link } from 'react-router-dom';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'AI Supported Audio Journal',
      description: 'Forget the keyboard. Just press the mic and let your thoughts flow.',
      icon: <Mic className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Deep Emotion Analysis',
      description: 'Gemini AI analyzes your voice tone and words to detect your hidden emotions.',
      icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    },
    {
      title: 'Mood Tracker',
      description: 'Track your weekly and monthly emotional changes visually.',
      icon: <LineChart className="w-6 h-6 text-success" />,
    },
    {
      title: 'Multi-Language Support',
      description: 'Speak in English, Spanish or Turkish. Sonus Notes understands you perfectly.',
      icon: <Globe2 className="w-6 h-6 text-secondary" />,
    },
    {
      title: 'Absolute Privacy',
      description: 'Your thoughts are yours. End-to-end encrypted and completely private.',
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Personalized Insights',
      description: 'Get warm, empathetic and actionable psychological insights after every entry.',
      icon: <Sparkles className="w-6 h-6 text-accent" />,
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-text-dark font-sans overflow-x-hidden selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center glow">
              <Mic className="w-5 h-5 text-background-dark" />
            </div>
            <span className="text-xl font-bold tracking-tight">Sonus Notes</span>
          </div>
          <div className="flex gap-4">
            <button className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
              Features
            </button>
            <button className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
              Privacy
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/5 font-medium text-sm">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-screen">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10" />

        <motion.h1 
          className="text-5xl md:text-7xl font-bold max-w-4xl tracking-tight leading-tight mb-8"
          {...fadeIn}
        >
          Listen to Your Inner Voice. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            Discover Your Emotions.
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl text-muted-dark max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The smart audio journal that listens to you, understands your voice tone, and provides deep psychological insights. Clear your mind without typing a single word.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="flex items-center justify-center gap-3 bg-white text-background-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]">
            <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            App Store
          </button>
        </motion.div>

        {/* Mockup Preview */}
        <motion.div 
          className="mt-20 w-full max-w-4xl relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[32px] blur opacity-20" />
          <div className="glass rounded-3xl p-6 md:p-10 relative overflow-hidden border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center text-left">
              <div className="w-full md:w-1/2 flex flex-col gap-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Morning Journal</div>
                      <div className="text-muted-dark text-xs">Today, 08:30 AM</div>
                    </div>
                  </div>
                  <div className="text-muted-dark text-xs">2:45</div>
                </div>
                
                {/* Audio Waveform Mockup */}
                <div className="flex items-center gap-1 w-full h-8">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className={`w-2 rounded-full ${i < 10 ? 'bg-primary' : 'bg-white/10'}`} style={{ height: `${Math.max(20, Math.random() * 100)}%` }} />
                  ))}
                </div>

                <p className="text-white/80 text-sm leading-relaxed mt-2">
                  "I woke up feeling really refreshed today. Yesterday was stressful, but taking that evening walk completely cleared my mind. I feel ready to tackle the new project at work..."
                </p>
                
                <div className="mt-2 flex gap-2">
                  <div className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-medium border border-success/30">Joy 85%</div>
                  <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/30">Calm</div>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-black/40 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <BrainCircuit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium">AI Insight</div>
                    <div className="text-xs text-muted-dark">Just now</div>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed italic">
                  "Your voice sounds much more relaxed today compared to yesterday. Taking that morning walk really helped you clear your thoughts. Keep focusing on these small positive routines."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works?</h2>
            <p className="text-muted-dark text-lg">Three simple steps to mental clarity.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Tap & Speak', desc: 'Just press record. No typing, no pressure. Let your thoughts out naturally.' },
              { step: '2', title: 'AI Analyzes', desc: 'Our AI transcribes your words and detects the subtle emotions in your tone.' },
              { step: '3', title: 'Discover', desc: 'Read your personalized insights and track your emotional journey over time.' }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-3xl relative overflow-hidden group hover:bg-white/[0.05] transition-colors border border-white/5">
                <div className="text-7xl font-bold text-white/5 absolute -right-4 -bottom-4 select-none group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-dark leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need</h2>
            <p className="text-muted-dark text-lg">A premium journaling experience designed for your peace of mind.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-dark leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to meet your inner voice?</h2>
        <p className="text-xl text-muted-dark mb-10 max-w-2xl mx-auto">Join thousands of users discovering themselves through the power of AI-assisted audio journaling.</p>
        
        <button className="flex items-center mx-auto gap-2 bg-gradient-to-r from-primary to-accent text-background-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(165,180,252,0.6)]">
          Download Sonus Notes
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 relative bg-black/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-dark text-lg">Have a question or need support? Send us a message.</p>
          </div>
          
          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />
            
            <form action="https://formspree.io/f/YOUR_ENDPOINT" method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="How can we help you today?"></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 bg-white text-background-dark rounded-xl font-bold text-lg hover:bg-white/90 transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-muted-dark text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-primary" />
            <span className="font-bold text-white">Sonus Notes</span>
          </div>
          <p>© 2026 Sonus Notes. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
