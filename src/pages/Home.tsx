import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, BrainCircuit, LineChart, Globe2, Shield, Sparkles, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

type Lang = 'en' | 'tr' | 'ru' | 'es';

const content: Record<Lang, Record<string, string>> = {
  en: {
    nav_features: "Features", nav_privacy: "Privacy", nav_cta: "Get Started",
    hero_title1: "Listen to Your Inner Voice.", hero_title2: "Discover Your Emotions.",
    hero_subtitle: "The smart audio journal that listens to you, understands your voice tone, and provides deep psychological insights. Clear your mind without typing a single word.",
    how_title: "How it works?", how_subtitle: "Three simple steps to mental clarity.",
    step1_title: "Tap & Speak", step1_desc: "Just press record. No typing, no pressure. Let your thoughts out naturally.",
    step2_title: "AI Analyzes", step2_desc: "Our AI transcribes your words and detects the subtle emotions in your tone.",
    step3_title: "Discover", step3_desc: "Read your personalized insights and track your emotional journey over time.",
    features_title: "Everything you need", features_subtitle: "A premium journaling experience designed for your peace of mind.",
    f1_title: "AI Supported Audio Journal", f1_desc: "Forget the keyboard. Just press the mic and let your thoughts flow.",
    f2_title: "Deep Emotion Analysis", f2_desc: "Gemini AI analyzes your voice tone and words to detect your hidden emotions.",
    f3_title: "Mood Tracker", f3_desc: "Track your weekly and monthly emotional changes visually.",
    f4_title: "Multi-Language Support", f4_desc: "Speak in English, Spanish or Turkish. Sonus Notes understands you perfectly.",
    f5_title: "Absolute Privacy", f5_desc: "Your thoughts are yours. End-to-end encrypted and completely private.",
    f6_title: "Personalized Insights", f6_desc: "Get warm, empathetic and actionable psychological insights after every entry.",
    cta_title: "Ready to meet your inner voice?", cta_subtitle: "Join thousands of users discovering themselves through the power of AI-assisted audio journaling.",
    cta_btn: "Download Sonus Notes",
    contact_title: "Contact Us", contact_subtitle: "Have a question or need support? Send us a message.",
    contact_name: "Full Name", contact_name_ph: "John Doe",
    contact_email: "Email Address", contact_email_ph: "john@example.com",
    contact_message: "Message", contact_message_ph: "How can we help you today?",
    contact_send: "Send Message",
    footer_rights: "All rights reserved.", footer_terms: "Terms", footer_contact: "Contact",
  },
  tr: {
    nav_features: "Özellikler", nav_privacy: "Gizlilik", nav_cta: "Başla",
    hero_title1: "İç Sesini Dinle.", hero_title2: "Duygularını Keşfet.",
    hero_subtitle: "Seni dinleyen, ses tonunu anlayan ve derin psikolojik içgörüler sağlayan akıllı sesli günlük. Tek kelime yazmadan zihnini temizle.",
    how_title: "Nasıl çalışır?", how_subtitle: "Zihinsel netlik için üç basit adım.",
    step1_title: "Dokun ve Konuş", step1_desc: "Sadece kaydet'e bas. Yazma yok, baskı yok. Düşüncelerini doğal olarak dışarı çıkar.",
    step2_title: "Yapay Zeka Analiz Eder", step2_desc: "Yapay zekamız kelimelerini yazıya döker ve tonundaki ince duyguları tespit eder.",
    step3_title: "Keşfet", step3_desc: "Kişiselleştirilmiş içgörülerini oku ve duygusal yolculuğunu zaman içinde takip et.",
    features_title: "İhtiyacın olan her şey", features_subtitle: "Huzurun için tasarlanmış premium günlük deneyimi.",
    f1_title: "Yapay Zeka Destekli Sesli Günlük", f1_desc: "Klavyeyi unut. Sadece mikrofona bas ve düşüncelerinin akmasına izin ver.",
    f2_title: "Derin Duygu Analizi", f2_desc: "Gemini AI ses tonunu ve kelimelerini analiz ederek gizli duygularını tespit eder.",
    f3_title: "Ruh Hali Takipçisi", f3_desc: "Haftalık ve aylık duygusal değişikliklerini görsel olarak takip et.",
    f4_title: "Çoklu Dil Desteği", f4_desc: "İngilizce, İspanyolca veya Türkçe konuş. Sonus Notes seni mükemmel anlar.",
    f5_title: "Mutlak Gizlilik", f5_desc: "Düşüncelerin sana ait. Uçtan uca şifrelenmiş ve tamamen özel.",
    f6_title: "Kişiselleştirilmiş İçgörüler", f6_desc: "Her girişten sonra sıcak, empatik ve uygulanabilir psikolojik içgörüler al.",
    cta_title: "İç sesinle tanışmaya hazır mısın?", cta_subtitle: "AI destekli sesli günlükleme gücüyle kendilerini keşfeden binlerce kullanıcıya katıl.",
    cta_btn: "Sonus Notes'u İndir",
    contact_title: "Bize Ulaşın", contact_subtitle: "Bir sorunuz mu var veya desteğe mi ihtiyacınız var? Bize bir mesaj gönderin.",
    contact_name: "Ad Soyad", contact_name_ph: "Ali Yılmaz",
    contact_email: "E-posta Adresi", contact_email_ph: "ali@ornek.com",
    contact_message: "Mesaj", contact_message_ph: "Size nasıl yardımcı olabiliriz?",
    contact_send: "Mesajı Gönder",
    footer_rights: "Tüm hakları saklıdır.", footer_terms: "Şartlar", footer_contact: "İletişim",
  },
  ru: {
    nav_features: "Функции", nav_privacy: "Конфиденциальность", nav_cta: "Начать",
    hero_title1: "Слушай свой внутренний голос.", hero_title2: "Открой свои эмоции.",
    hero_subtitle: "Умный аудио-дневник, который слушает вас, понимает тон вашего голоса и предоставляет глубокие психологические инсайты. Очистите разум, не напечатав ни слова.",
    how_title: "Как это работает?", how_subtitle: "Три простых шага к ментальной ясности.",
    step1_title: "Нажми и Говори", step1_desc: "Просто нажми запись. Без печати, без давления. Выпусти свои мысли естественно.",
    step2_title: "ИИ Анализирует", step2_desc: "Наш ИИ транскрибирует ваши слова и обнаруживает тонкие эмоции в вашем тоне.",
    step3_title: "Открой", step3_desc: "Прочитайте свои персонализированные инсайты и отслеживайте эмоциональное путешествие со временем.",
    features_title: "Всё, что вам нужно", features_subtitle: "Премиум опыт ведения дневника, созданный для вашего душевного спокойствия.",
    f1_title: "Аудио-дневник с Поддержкой ИИ", f1_desc: "Забудьте о клавиатуре. Просто нажмите на микрофон и позвольте мыслям течь.",
    f2_title: "Глубокий Анализ Эмоций", f2_desc: "Gemini AI анализирует тон вашего голоса и слова, чтобы обнаружить скрытые эмоции.",
    f3_title: "Трекер Настроения", f3_desc: "Визуально отслеживайте еженедельные и ежемесячные изменения эмоций.",
    f4_title: "Поддержка Многоязычности", f4_desc: "Говорите на английском, испанском или турецком. Sonus Notes отлично вас понимает.",
    f5_title: "Абсолютная Конфиденциальность", f5_desc: "Ваши мысли принадлежат вам. Сквозное шифрование и полная приватность.",
    f6_title: "Персонализированные Инсайты", f6_desc: "Получайте тёплые, эмпатичные и практичные психологические инсайты после каждой записи.",
    cta_title: "Готовы встретиться со своим внутренним голосом?", cta_subtitle: "Присоединяйтесь к тысячам пользователей, открывающих себя с помощью аудио-дневников на основе ИИ.",
    cta_btn: "Скачать Sonus Notes",
    contact_title: "Свяжитесь с нами", contact_subtitle: "Есть вопрос или нужна поддержка? Отправьте нам сообщение.",
    contact_name: "Полное имя", contact_name_ph: "Иван Иванов",
    contact_email: "Адрес электронной почты", contact_email_ph: "ivan@primer.com",
    contact_message: "Сообщение", contact_message_ph: "Чем мы можем вам помочь?",
    contact_send: "Отправить сообщение",
    footer_rights: "Все права защищены.", footer_terms: "Условия", footer_contact: "Контакт",
  },
  es: {
    nav_features: "Características", nav_privacy: "Privacidad", nav_cta: "Comenzar",
    hero_title1: "Escucha tu voz interior.", hero_title2: "Descubre tus emociones.",
    hero_subtitle: "El diario de audio inteligente que te escucha, entiende el tono de tu voz y proporciona insights psicológicos profundos. Libera tu mente sin escribir ni una palabra.",
    how_title: "¿Cómo funciona?", how_subtitle: "Tres simples pasos hacia la claridad mental.",
    step1_title: "Toca y Habla", step1_desc: "Solo presiona grabar. Sin escribir, sin presión. Deja que tus pensamientos fluyan naturalmente.",
    step2_title: "La IA Analiza", step2_desc: "Nuestra IA transcribe tus palabras y detecta las emociones sutiles en tu tono.",
    step3_title: "Descubre", step3_desc: "Lee tus insights personalizados y rastrea tu viaje emocional a lo largo del tiempo.",
    features_title: "Todo lo que necesitas", features_subtitle: "Una experiencia premium de journaling diseñada para tu paz mental.",
    f1_title: "Diario de Audio con Soporte de IA", f1_desc: "Olvídate del teclado. Solo presiona el micrófono y deja que tus pensamientos fluyan.",
    f2_title: "Análisis Profundo de Emociones", f2_desc: "Gemini AI analiza el tono de tu voz y tus palabras para detectar emociones ocultas.",
    f3_title: "Rastreador de Estado de Ánimo", f3_desc: "Rastrea visualmente tus cambios emocionales semanales y mensuales.",
    f4_title: "Soporte Multilingüe", f4_desc: "Habla en inglés, español o turco. Sonus Notes te entiende perfectamente.",
    f5_title: "Privacidad Absoluta", f5_desc: "Tus pensamientos son tuyos. Cifrado de extremo a extremo y completamente privado.",
    f6_title: "Insights Personalizados", f6_desc: "Obtén insights psicológicos cálidos, empáticos y accionables después de cada entrada.",
    cta_title: "¿Listo para conocer tu voz interior?", cta_subtitle: "Únete a miles de usuarios que se descubren a sí mismos a través del poder del journaling de audio asistido por IA.",
    cta_btn: "Descargar Sonus Notes",
    contact_title: "Contáctanos", contact_subtitle: "¿Tienes una pregunta o necesitas soporte? Envíanos un mensaje.",
    contact_name: "Nombre Completo", contact_name_ph: "Juan García",
    contact_email: "Correo Electrónico", contact_email_ph: "juan@ejemplo.com",
    contact_message: "Mensaje", contact_message_ph: "¿Cómo podemos ayudarte hoy?",
    contact_send: "Enviar Mensaje",
    footer_rights: "Todos los derechos reservados.", footer_terms: "Términos", footer_contact: "Contacto",
  },
};

const langLabels: Record<Lang, string> = {
  en: '🇬🇧 EN', tr: '🇹🇷 TR', ru: '🇷🇺 RU', es: '🇪🇸 ES'
};

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const t = content[lang];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    { key: 'f1', icon: <Mic className="w-6 h-6 text-primary" /> },
    { key: 'f2', icon: <BrainCircuit className="w-6 h-6 text-accent" /> },
    { key: 'f3', icon: <LineChart className="w-6 h-6 text-success" /> },
    { key: 'f4', icon: <Globe2 className="w-6 h-6 text-secondary" /> },
    { key: 'f5', icon: <Shield className="w-6 h-6 text-primary" /> },
    { key: 'f6', icon: <Sparkles className="w-6 h-6 text-accent" /> },
  ];

  return (
    <div className="min-h-screen bg-background-dark text-text-dark font-sans overflow-x-hidden selection:bg-primary/30">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Sonus Notes Logo" className="w-8 h-8 rounded-lg object-contain glow" />
            <span className="text-xl font-bold tracking-tight">Sonus Notes</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
              {(Object.keys(langLabels) as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === l
                      ? 'bg-primary text-background-dark'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
            <button className="hidden md:flex items-center gap-2 hover:text-primary transition-colors text-sm">
              {t.nav_features}
            </button>
            <Link to="/privacy" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors text-sm">
              {t.nav_privacy}
            </Link>
            <a href="https://apps.apple.com/app/sonusnotes/id6764329742" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/5 font-medium text-sm">
              {t.nav_cta}
            </a>
          </div>
        </div>
        {/* Mobile lang switcher */}
        <div className="md:hidden flex justify-center gap-1 pb-2 px-6">
          {(Object.keys(langLabels) as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                lang === l ? 'bg-primary text-background-dark' : 'text-white/40 hover:text-white'
              }`}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10" />

        <motion.h1
          className="text-5xl md:text-7xl font-bold max-w-4xl tracking-tight leading-tight mb-8"
          {...fadeIn}
        >
          {t.hero_title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            {t.hero_title2}
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-dark max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.hero_subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="https://apps.apple.com/app/sonusnotes/id6764329742" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-background-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]">
            <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ugurdemiroz.sonusnotes" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-background-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]">
            <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
            Play Store
          </a>
        </motion.div>

        {/* Mockup Preview */}
        <motion.div
          className="mt-20 w-full max-w-4xl relative"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
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
                <div className="flex items-center gap-1 w-full h-8">
                  {[...Array(24)].map((_, idx) => (
                    <div key={idx} className={`w-2 rounded-full ${idx < 10 ? 'bg-primary' : 'bg-white/10'}`} style={{ height: `${Math.max(20, (idx * 17 + 30) % 100)}%` }} />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mt-2">
                  "I woke up feeling really refreshed today. Yesterday was stressful, but taking that evening walk completely cleared my mind..."
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
                  "Your voice sounds much more relaxed today compared to yesterday. Taking that morning walk really helped you clear your thoughts."
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.how_title}</h2>
            <p className="text-muted-dark text-lg">{t.how_subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(['1','2','3'] as const).map((num) => (
              <div key={num} className="glass p-8 rounded-3xl relative overflow-hidden group hover:bg-white/[0.05] transition-colors border border-white/5">
                <div className="text-7xl font-bold text-white/5 absolute -right-4 -bottom-4 select-none group-hover:scale-110 transition-transform">{num}</div>
                <h3 className="text-2xl font-bold mb-3">{t[`step${num}_title`]}</h3>
                <p className="text-muted-dark leading-relaxed">{t[`step${num}_desc`]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.features_title}</h2>
            <p className="text-muted-dark text-lg">{t.features_subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.key} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t[`${f.key}_title`]}</h3>
                <p className="text-sm text-muted-dark leading-relaxed">{t[`${f.key}_desc`]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <h2 className="text-4xl md:text-6xl font-bold mb-8">{t.cta_title}</h2>
        <p className="text-xl text-muted-dark mb-10 max-w-2xl mx-auto">{t.cta_subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://apps.apple.com/app/sonusnotes/id6764329742" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center mx-auto gap-2 bg-gradient-to-r from-primary to-accent text-background-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(165,180,252,0.6)]">
            {t.cta_btn}
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 relative bg-black/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact_title}</h2>
            <p className="text-muted-dark text-lg">{t.contact_subtitle}</p>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />
            <form action="https://formspree.io/f/mrernjgl" method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">{t.contact_name}</label>
                  <input type="text" id="name" name="name" required placeholder={t.contact_name_ph}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">{t.contact_email}</label>
                  <input type="email" id="email" name="email" required placeholder={t.contact_email_ph}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">{t.contact_message}</label>
                <textarea id="message" name="message" required rows={5} placeholder={t.contact_message_ph}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-white text-background-dark rounded-xl font-bold text-lg hover:bg-white/90 transition-colors mt-2">
                {t.contact_send}
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
          <p>© 2026 Sonus Notes. {t.footer_rights}</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">{t.nav_privacy}</Link>
            <a href="#" className="hover:text-white transition-colors">{t.footer_terms}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.footer_contact}</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
