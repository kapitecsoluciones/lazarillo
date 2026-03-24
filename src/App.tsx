import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye, MessageSquare, Globe, Brain, Shield, Mic, Camera,
  CreditCard, CalendarCheck, Search, Bell, Smartphone,
  ChevronDown, ChevronRight, Zap, Heart, Users, Target, ArrowRight,
  CheckCircle2, XCircle, Volume2, Mail, Download,
  Lightbulb, Layers, Star, TrendingUp, Navigation, ShoppingCart, AlertTriangle,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   KAPITEC LOGO — inline SVG
   ───────────────────────────────────────────────────────── */
const KapiLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg viewBox="0 0 792 354.2" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#226BFA" d="M373.7,254.1c-16.1,8.8-30.8,13.1-43.8,13.1c-13.1,0-24.3-1.2-33.6-3.7c-9.3-2.4-17.2-6.1-23.7-10.8c-13.2-9.7-19.8-23.6-19.8-42c0-16.4,8.1-30,24.2-40.9c17.5-11.8,41.3-17.7,71.3-17.7l6.8,0.2c1.4,0.1,2.9,0.2,4.6,0.3c1.7,0.1,3.2,0.2,4.6,0.4c-0.9-18.2-8.8-28.8-23.5-31.9c-4.9-1-10.1-1.5-15.6-1.5c-5.5,0-10.9,0.5-16.2,1.4c-5.3,1-10.4,2.2-15.4,3.8c-11,3.5-18.9,7.6-23.7,12.1l-0.5-0.3l-5.1-37.7c20.1-10.6,42.1-15.9,66-15.9c37.1,0,60.8,13.4,71.1,40.1c3.3,8.5,4.9,18.1,4.9,28.8v61.7c0,13.2,4.7,22.2,14,26.9l-30.9,28.3C382.9,265.5,377.7,260.6,373.7,254.1z M364.5,183.7c-3.1-0.6-6.3-0.9-9.6-0.9h-6.8c-25.1,0-41.1,5.6-47.9,16.7c-2,3.3-3.1,6.8-3.1,10.4c0,3.6,0.7,6.9,2,9.6c1.3,2.8,3.5,5.1,6.6,6.9c5.9,3.4,14.7,5.1,26.3,5.1s22.5-2.8,32.7-8.4c-0.1-1.2-0.2-2.6-0.2-3.9V183.7z"/>
    <path fill="#226BFA" d="M538.7,261.1v50.1c0,9.8,0.2,16.1,0.7,19.1h-42.5V86.5h41.8v11.1c13.8-9.7,26.9-14.5,39.6-14.5c12.6,0,23.8,1.8,33.6,5.3c9.8,3.5,18.4,9,25.7,16.4c16.3,16,24.4,38.9,24.4,68.6c0,19.7-4.6,37.2-13.8,52.7c-7.8,13.1-18.7,23.5-32.6,31.4c-12.3,6.9-25.6,10.4-39.9,10.4C561.4,267.7,549.1,265.5,538.7,261.1z M538.7,218.1c8.6,7.3,19.8,10.9,33.6,10.9c22.5,0,37.1-10.9,43.7-32.6c2.3-7.4,3.4-15.3,3.4-23.8c0-8.5-0.8-15.2-2.4-20.3c-1.6-5.1-3.7-9.4-6.2-13.1c-2.6-3.7-5.4-6.8-8.6-9.2c-3.2-2.4-6.4-4.4-9.7-5.9c-5.8-2.6-11.8-3.9-17.9-3.9c-6.1,0-12.5,1.4-19.1,4.3c-6.6,2.8-12.2,6.6-16.7,11.4V218.1z"/>
    <path fill="#226BFA" d="M772.1,245.6c0,9.8,0.2,16.1,0.7,19.1h-43.3V86.5h42.6V245.6z"/>
    <circle fill="#29D4A6" cx="751.3" cy="42.6" r="21.8"/>
    <polygon fill="#226BFA" points="62,20.8 20.2,20.8 20.2,215 62,170.1"/>
    <polygon fill="#29D4A6" points="139.9,86.5 62,170.1 20.2,215 20.2,264.7 62,223.9 94.4,189.5 123.4,157.2 190.6,86.5"/>
    <polygon fill="#226BFA" points="62,223.9 20.2,264.7 62,264.7 62,242.2"/>
    <polygon fill="#226BFA" points="123.4,157.2 94.4,189.5 145.9,264.8 200.2,264.8"/>
  </svg>
);

/* Kapi "K" mark only */
const KapiMark = ({ className = "h-6" }: { className?: string }) => (
  <svg viewBox="0 0 210 354.2" className={className} xmlns="http://www.w3.org/2000/svg">
    <polygon fill="#226BFA" points="62,20.8 20.2,20.8 20.2,215 62,170.1"/>
    <polygon fill="#29D4A6" points="139.9,86.5 62,170.1 20.2,215 20.2,264.7 62,223.9 94.4,189.5 123.4,157.2 190.6,86.5"/>
    <polygon fill="#226BFA" points="62,223.9 20.2,264.7 62,264.7 62,242.2"/>
    <polygon fill="#226BFA" points="123.4,157.2 94.4,189.5 145.9,264.8 200.2,264.8"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────
   REUSABLE COMPONENTS
   ───────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SlideIn = ({ children, delay = 0, direction = 'left', className = "" }: { children: React.ReactNode; delay?: number; direction?: 'left' | 'right'; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Chat bubble */
const ChatBubble = ({ type, children, icon }: { type: 'user' | 'agent'; children: React.ReactNode; icon?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`flex gap-3 ${type === 'user' ? 'flex-row-reverse' : ''} mb-4`}
  >
    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ${
      type === 'user' ? 'bg-kapitec-blue/20 text-kapitec-blue ring-kapitec-blue/20' : 'bg-kapitec-green/15 text-kapitec-green ring-kapitec-green/20'
    }`}>
      {icon || (type === 'user' ? <Mic className="w-4 h-4" /> : <Eye className="w-4 h-4" />)}
    </div>
    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
      type === 'user'
        ? 'bg-kapitec-blue/10 border border-kapitec-blue/20 text-blue-100 rounded-tr-sm'
        : 'bg-navy-800/90 border border-white/[0.06] text-slate-200 rounded-tl-sm'
    }`}>
      {children}
    </div>
  </motion.div>
);

/* Comparison row */
const CompRow = ({ feature, laz, other }: { feature: string; laz: boolean; other: boolean }) => (
  <div className="grid grid-cols-3 gap-4 py-3 border-b border-white/[0.04] items-center group hover:bg-white/[0.02] transition-colors">
    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{feature}</span>
    <div className="flex justify-center">
      {laz ? <CheckCircle2 className="w-5 h-5 text-kapitec-green" /> : <XCircle className="w-5 h-5 text-red-400/40" />}
    </div>
    <div className="flex justify-center">
      {other ? <CheckCircle2 className="w-5 h-5 text-slate-500" /> : <XCircle className="w-5 h-5 text-red-400/40" />}
    </div>
  </div>
);

/* Accordion */
const Accordion = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-navy-900/50 backdrop-blur-sm hover:border-white/[0.1] transition-colors">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors">
        <div className="text-kapitec-green">{icon}</div>
        <span className="text-base font-semibold text-white flex-1 font-display">{title}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* Section header */
const SectionHeader = ({ tag, tagColor = "text-kapitec-blue", title, subtitle }: { tag: string; tagColor?: string; title: React.ReactNode; subtitle?: string }) => (
  <FadeIn>
    <div className="text-center mb-16 md:mb-20">
      <span className={`${tagColor} text-[11px] font-bold uppercase tracking-[0.2em] font-mono`}>{tag}</span>
      <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold font-display text-white mt-4 mb-6 leading-[1.1]">{title}</h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
    </div>
  </FadeIn>
);

/* ═══════════════════════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 overflow-x-hidden">

      {/* ── NOISE TEXTURE OVERLAY ── */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-navy-950/70 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-kapitec-blue to-kapitec-green flex items-center justify-center shadow-lg shadow-kapitec-blue/20">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-kapitec-green rounded-full animate-pulse-soft" />
            </div>
            <div>
              <span className="text-lg font-bold font-display text-white tracking-tight">Lazarillo</span>
              <span className="text-[10px] text-kapitec-green/60 font-mono ml-2 hidden sm:inline">v1.0 — OpenClaw Skill</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-slate-500 font-medium">
            <a href="#problema" className="hover:text-white transition-colors duration-300">Problema</a>
            <a href="#solucion" className="hover:text-white transition-colors duration-300">Solución</a>
            <a href="#casos" className="hover:text-white transition-colors duration-300">Casos de Uso</a>
            <a href="#arquitectura" className="hover:text-white transition-colors duration-300">Arquitectura</a>
            <a href="#roadmap" className="hover:text-white transition-colors duration-300">Roadmap</a>
          </div>
          <KapiMark className="h-7 w-auto hidden md:block" />
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
         HERO
         ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 md:pt-36 pb-8 px-6">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-kapitec-blue/[0.07] rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-kapitec-green/[0.05] rounded-full blur-[150px] animate-float-slow" />
          <div className="absolute inset-0 dot-grid opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/80 border border-white/[0.06] text-[12px] font-medium mb-8">
                  <Zap className="w-3.5 h-3.5 text-kapitec-green" />
                  <span className="text-slate-400">Dev Racing</span>
                  <span className="text-white/20">·</span>
                  <span className="text-kapitec-green">Release Before Ready GDL 2026</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white leading-[1.05] tracking-tight mb-6">
                  No describe.
                  <br />
                  <span className="text-gradient">Actúa por ti.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                  El primer agente de IA que no solo ve — <span className="text-white font-medium">navega sitios, paga recibos, lee correos y hace trámites</span> por personas con baja visión. Todo con un mensaje de voz.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <a href="#casos" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-kapitec-blue to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-kapitec-blue/25 transition-all text-sm">
                    Ver Casos de Uso
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#demo" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.08] text-white font-semibold rounded-xl hover:bg-white/[0.04] hover:border-white/[0.15] transition-all text-sm">
                    <MessageSquare className="w-4 h-4 text-kapitec-green" />
                    Ver Demo
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: Live chat demo */}
            <SlideIn direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-kapitec-blue/10 to-kapitec-green/10 rounded-3xl blur-2xl" />
                <div className="relative bg-navy-900/90 border border-white/[0.08] rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-xl glow-blue">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-kapitec-blue to-kapitec-green flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-white font-display">Lazarillo</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-kapitec-green animate-pulse" />
                        <span className="text-[11px] text-slate-500">Activo — WhatsApp</span>
                      </div>
                    </div>
                    <Smartphone className="w-4 h-4 text-slate-600" />
                  </div>

                  <ChatBubble type="user">
                    🎤 "Oye Lazarillo, págame el recibo de la luz"
                  </ChatBubble>
                  <ChatBubble type="agent">
                    Encontré tu recibo CFE: <strong className="text-white">$847.00 MXN</strong>. Vence mañana.
                    <br /><br />
                    Ya entré al portal con tu servicio <strong className="text-white">●●●●-4523</strong>.
                    <br />
                    ¿Pago con tu tarjeta <strong className="text-white">●●89</strong>?
                  </ChatBubble>
                  <ChatBubble type="user">
                    🎤 "Sí, con esa"
                  </ChatBubble>
                  <ChatBubble type="agent">
                    <span className="text-kapitec-green font-semibold">✓ Pago realizado.</span> $847.00 a CFE.
                    <br />
                    <span className="font-mono text-xs text-slate-500">Ref: CFE-2026-0322-7841</span>
                    <br /><br />
                    Comprobante guardado. ¿Algo más?
                  </ChatBubble>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* ── STATS BAR ── */}
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 md:mt-20">
              {[
                { value: "2.2M", label: "Personas con baja visión en MX", icon: <Users className="w-5 h-5" /> },
                { value: "0", label: "Apps que ACTÚAN por ellos", icon: <Target className="w-5 h-5" />, accent: true },
                { value: "100%", label: "Control por voz", icon: <Mic className="w-5 h-5" /> },
                { value: "∞", label: "Tareas automatizables", icon: <Layers className="w-5 h-5" /> },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`rounded-2xl p-5 text-center border transition-colors ${
                    s.accent
                      ? 'bg-red-500/[0.06] border-red-500/20'
                      : 'bg-navy-900/50 border-white/[0.05] hover:border-white/[0.1]'
                  }`}
                >
                  <div className={`mb-2 flex justify-center ${s.accent ? 'text-red-400' : 'text-kapitec-green'}`}>{s.icon}</div>
                  <div className={`text-2xl md:text-3xl font-extrabold font-display mb-1 ${s.accent ? 'text-red-400' : 'text-white'}`}>{s.value}</div>
                  <div className="text-[11px] text-slate-500 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         EL PROBLEMA
         ══════════════════════════════════════════════════════════ */}
      <section id="problema" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="El Problema"
            tagColor="text-red-400"
            title={<>Las herramientas de hoy <span className="text-red-400">describen</span>.<br />Julio necesita que <span className="text-kapitec-green">hagan</span>.</>}
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            <FadeIn>
              <div className="bg-red-500/[0.04] border border-red-500/10 rounded-2xl p-7 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">La realidad de Julio Patricio</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {[
                    "Ve parcialmente — no es ciego, pero necesita zoom extremo",
                    "Los lectores de pantalla a veces no leen bien los sitios",
                    "Portales de gobierno y bancos son inaccesibles",
                    "Pagar un recibo le toma 30+ minutos de frustración",
                    "Depende de familiares para trámites digitales",
                    "Cada actualización de app rompe su accesibilidad",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-navy-900/50 border border-white/[0.06] rounded-2xl p-7 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">Lo que existe (marzo 2026)</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {[
                    { name: "Be My Eyes / Be My AI", note: "Describe fotos. No ejecuta." },
                    { name: "Envision / Ray-Ban Meta", note: "$300+ USD. Solo describen." },
                    { name: "ChatGPT / Claude / Gemini", note: "No pueden abrir un sitio y pagar." },
                    { name: "VoiceOver / TalkBack", note: "Solo narran la UI." },
                    { name: "Lumyeye / Oorion", note: "OCR + audio. Pasivos." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0" />
                      <span><strong className="text-white">{item.name}</strong> — {item.note}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gold-400/[0.06] border border-gold-400/20 rounded-xl">
                  <p className="text-xs font-bold text-gold-400 font-display">🔑 Insight clave</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Todas son <strong className="text-white">pasivas</strong>. Ninguna puede <strong className="text-white">hacer un trámite digital de principio a fin</strong>.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Comparison */}
          <FadeIn>
            <div className="bg-navy-900/50 border border-white/[0.06] rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6 text-center font-display">Lazarillo vs. El Mundo</h3>
              <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/[0.08] mb-1">
                <span className="text-[11px] text-slate-600 font-mono uppercase tracking-wider">Capacidad</span>
                <span className="text-[11px] font-bold text-center font-mono uppercase tracking-wider text-kapitec-green">🦮 Lazarillo</span>
                <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider text-center">Otros</span>
              </div>
              {[
                { f: "Describe imágenes", l: true, o: true },
                { f: "Lee texto en fotos (OCR)", l: true, o: true },
                { f: "Navega sitios web reales", l: true, o: false },
                { f: "Paga recibos y servicios", l: true, o: false },
                { f: "Lee y responde emails", l: true, o: false },
                { f: "Agenda citas en portales", l: true, o: false },
                { f: "Recuerda tus preferencias", l: true, o: false },
                { f: "Te avisa proactivamente", l: true, o: false },
                { f: "Opera por WhatsApp", l: true, o: false },
                { f: "Open Source", l: true, o: false },
              ].map((r, i) => <CompRow key={i} feature={r.f} laz={r.l} other={r.o} />)}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         LA SOLUCIÓN
         ══════════════════════════════════════════════════════════ */}
      <section id="solucion" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kapitec-green/20 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-kapitec-green/[0.03] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            tag="La Solución"
            tagColor="text-kapitec-green"
            title={<>Un asistente que <span className="text-gradient">ve, piensa y actúa</span></>}
            subtitle="Lazarillo es una Skill de OpenClaw que convierte al agente en un asistente personal completo para personas con baja visión. No es una app — es un agente que hace las cosas por ti."
          />

          {/* Feature cards — 2x3 grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-20">
            {[
              { icon: <Mic className="w-6 h-6" />, title: "100% por Voz", desc: "Manda un audio de WhatsApp. Sin tocar pantallas, sin menús, sin frustraciones.", gradient: "from-blue-500/10 to-blue-600/5", ring: "ring-blue-500/10" },
              { icon: <Globe className="w-6 h-6" />, title: "Navega y Ejecuta", desc: "Browser real (Playwright). Entra a CFE, SAT, bancos — navega, llena formularios, paga.", gradient: "from-kapitec-green/10 to-emerald-600/5", ring: "ring-kapitec-green/10" },
              { icon: <Brain className="w-6 h-6" />, title: "Memoria Persistente", desc: "Recuerda tu número CFE, CURP, doctores, tarjetas. No te pide la misma info dos veces.", gradient: "from-purple-500/10 to-purple-600/5", ring: "ring-purple-500/10" },
              { icon: <Bell className="w-6 h-6" />, title: "Proactivo", desc: "'Tu recibo vence en 2 días. ¿Lo pago?' No espera — te cuida.", gradient: "from-gold-400/10 to-yellow-600/5", ring: "ring-gold-400/10" },
              { icon: <Shield className="w-6 h-6" />, title: "Confirmación Siempre", desc: "Nunca actúa sin tu permiso en temas de dinero o datos sensibles.", gradient: "from-red-500/10 to-red-600/5", ring: "ring-red-500/10" },
              { icon: <Volume2 className="w-6 h-6" />, title: "Respuestas en Audio", desc: "Todo en texto Y audio. Sin necesidad de leer pantalla.", gradient: "from-cyan-500/10 to-cyan-600/5", ring: "ring-cyan-500/10" },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`bg-gradient-to-b ${f.gradient} rounded-2xl p-6 h-full border border-white/[0.04] ring-1 ${f.ring} hover:border-white/[0.08] transition-all duration-300`}
                >
                  <div className="text-white mb-4">{f.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* How it works — horizontal steps */}
          <FadeIn>
            <div className="bg-navy-900/50 border border-white/[0.06] rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-10 text-center font-display">¿Cómo funciona?</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-3">
                {[
                  { n: "01", icon: <Mic className="w-5 h-5" />, text: "Julio manda audio por WhatsApp" },
                  { n: "02", icon: <Brain className="w-5 h-5" />, text: "Lazarillo entiende + consulta memoria" },
                  { n: "03", icon: <Globe className="w-5 h-5" />, text: "Abre browser, navega, ejecuta" },
                  { n: "04", icon: <Shield className="w-5 h-5" />, text: "Pide confirmación si hay dinero" },
                  { n: "05", icon: <Volume2 className="w-5 h-5" />, text: "Responde en audio con resultado" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-navy-800 border border-white/[0.08] flex items-center justify-center text-kapitec-blue">
                        {step.icon}
                      </div>
                      <span className="absolute -top-2 -right-2 text-[10px] font-mono font-bold text-kapitec-green bg-navy-950 px-1.5 py-0.5 rounded-md border border-kapitec-green/20">{step.n}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         CASOS DE USO
         ══════════════════════════════════════════════════════════ */}
      <section id="casos" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Casos de Uso"
            title={<>Lo que Julio puede hacer <span className="text-kapitec-green">hoy</span></>}
            subtitle="Cada caso es un flujo real que Lazarillo ejecuta de principio a fin. No mockups — tareas reales con navegación web real."
          />

          <div className="space-y-4">
            <Accordion title="Pagar Recibos (CFE, Agua, Teléfono)" icon={<CreditCard className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-white mb-3 font-display">El problema:</p>
                  <p className="mb-4 text-slate-400">Los portales de CFE, SIAPA, Telmex no son accesibles. Requieren navegar menús, resolver CAPTCHAs, llenar formularios pequeños.</p>
                  <p className="font-semibold text-white mb-3 font-display">Flujo Lazarillo:</p>
                  <ol className="list-decimal ml-4 space-y-2 text-slate-400">
                    <li>Audio: <span className="text-white">"Paga mi luz"</span></li>
                    <li>Consulta memoria → sabe el número CFE</li>
                    <li>Abre cfe.gob.mx con Playwright → consulta adeudo</li>
                    <li><span className="text-white">"$847, vence mañana. ¿Pago con ●●89?"</span></li>
                    <li>Confirma → completa pago → guarda comprobante</li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Datos que recuerda:</p>
                  <ul className="space-y-1.5 text-slate-400 mb-4">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-kapitec-green/60" /> Número de servicio CFE</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-kapitec-green/60" /> Contrato SIAPA</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-kapitec-green/60" /> Tarjetas guardadas</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-kapitec-green/60" /> Historial de pagos</li>
                  </ul>
                  <div className="p-3 bg-kapitec-green/[0.06] border border-kapitec-green/15 rounded-xl">
                    <p className="text-xs text-kapitec-green font-semibold">⚡ Alerta proactiva</p>
                    <p className="text-xs text-slate-400 mt-1">3 días antes: "Tu recibo de agua vence el viernes. Son $234. ¿Lo pago?"</p>
                  </div>
                </div>
              </div>
            </Accordion>

            <Accordion title="Leer y Responder Correos" icon={<Mail className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Flujo:</p>
                  <ol className="list-decimal ml-4 space-y-2 text-slate-400">
                    <li>Cada mañana o bajo demanda: revisa Gmail</li>
                    <li>Filtra: urgente / importante / informativo / spam</li>
                    <li><span className="text-white">"3 correos importantes: SAT, doctor, banco"</span></li>
                    <li>"Léeme el del SAT" → lee completo y resumido</li>
                    <li>"Responde que ya lo voy a hacer" → redacta y envía</li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Capacidades:</p>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>• Resúmenes inteligentes (no headers HTML)</li>
                    <li>• Priorización por remitente y contenido</li>
                    <li>• Detección de fechas límite</li>
                    <li>• Redacción con el tono del usuario</li>
                    <li>• Búsqueda semántica: "¿algo de mi doctor?"</li>
                  </ul>
                </div>
              </div>
            </Accordion>

            <Accordion title="'¿Qué dice este papel / receta?'" icon={<Camera className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Flujo:</p>
                  <ol className="list-decimal ml-4 space-y-2 text-slate-400">
                    <li>Julio toma foto → la manda por WhatsApp</li>
                    <li>Visión multimodal analiza el documento</li>
                    <li>No solo describe — <span className="text-white">extrae datos accionables</span>:</li>
                    <li>"Receta del Dr. Martínez: Metformina 850mg, 1 c/12h. ¿Busco farmacia?"</li>
                    <li>Sí → busca farmacia cercana → manda dirección</li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Tipos de documentos:</p>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>🏥 Recetas → medicamento + dosis + farmacia</li>
                    <li>🧾 Recibos → monto + fecha + ofrece pagar</li>
                    <li>📋 Documentos oficiales → resumen simple</li>
                    <li>🏷️ Etiquetas → ingredientes, caducidad, precio</li>
                    <li>📱 Screenshots → describe UI y guía paso</li>
                  </ul>
                </div>
              </div>
            </Accordion>

            <Accordion title="Navegar Internet por Ti" icon={<Globe className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Flujo:</p>
                  <ol className="list-decimal ml-4 space-y-2 text-slate-400">
                    <li>"Necesito cita en el SAT"</li>
                    <li>Abre portal SAT con browser real</li>
                    <li>Navega menú, selecciona tipo, elige oficina</li>
                    <li><span className="text-white">"Hay citas jueves 10am y viernes 3pm en Chapultepec"</span></li>
                    <li>Elige → completa registro → confirmación</li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Sitios que navega:</p>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>🏛️ SAT, IMSS, INE, SRE (pasaportes)</li>
                    <li>🏦 Bancos (saldos, transferencias)</li>
                    <li>🛒 Amazon, Mercado Libre</li>
                    <li>📰 Noticias (resumen, no lectura completa)</li>
                    <li>🗺️ Google Maps (negocios, horarios, tel)</li>
                  </ul>
                </div>
              </div>
            </Accordion>

            <Accordion title="Agenda y Recordatorios Inteligentes" icon={<CalendarCheck className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Flujo:</p>
                  <ol className="list-decimal ml-4 space-y-2 text-slate-400">
                    <li>"¿Qué tengo mañana?" → consulta Calendar</li>
                    <li><span className="text-white">"Cita Dr. Martínez 10am, junta vecinos 4pm"</span></li>
                    <li>"Agéndame banco jueves 12" → crea evento</li>
                    <li>Jueves 11am: <span className="text-white">"En 1 hora vas al banco. ¿Busco sucursal?"</span></li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3 font-display">Recordatorios proactivos:</p>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>💊 "Hora de tu Metformina"</li>
                    <li>📄 "Tu licencia vence en 30 días"</li>
                    <li>💰 "Recibo de agua vence el viernes"</li>
                    <li>🏥 "Mañana cita con oculista 9am"</li>
                    <li>🎂 "Hoy es cumpleaños de tu mamá"</li>
                  </ul>
                </div>
              </div>
            </Accordion>

            <Accordion title="Compras y Comparación de Precios" icon={<ShoppingCart className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ol className="list-decimal ml-4 space-y-2 text-slate-400">
                    <li>"Quiero audífonos Bluetooth buenos y baratos"</li>
                    <li>Busca en Amazon y Mercado Libre</li>
                    <li><span className="text-white">"JBL Tune 520 $599, Sony CH520 $849..."</span></li>
                    <li>"Los JBL" → agrega al carrito, guía pago</li>
                  </ol>
                </div>
                <div>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>• Compara precios entre plataformas</li>
                    <li>• Resume reseñas reales</li>
                    <li>• Avisa precios sospechosos</li>
                    <li>• Tracking: "Tu paquete llega mañana"</li>
                  </ul>
                </div>
              </div>
            </Accordion>

            <Accordion title="Asistencia en Emergencias" icon={<AlertTriangle className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-2 text-slate-400">
                    <li><span className="text-white">"Me siento mal, llama a mi doctor"</span> → busca teléfono y contacta</li>
                    <li><span className="text-white">"¿Qué dice esta medicina?"</span> → foto → identifica + verifica interacciones</li>
                    <li><span className="text-white">"Estoy perdido"</span> → GPS → cómo llegar a casa</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-3 font-display">En memoria:</p>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>• Familiar de emergencia</li>
                    <li>• Médico de cabecera</li>
                    <li>• Farmacia preferida</li>
                    <li>• Historial médico (alergias, condiciones)</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         DEMO CONVERSATIONS
         ══════════════════════════════════════════════════════════ */}
      <section id="demo" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kapitec-blue/20 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-kapitec-blue/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            tag="Demo en Vivo"
            tagColor="text-gold-400"
            title={<>Conversaciones <span className="text-gradient">reales</span></>}
            subtitle="Así se ve una interacción real. Todo por WhatsApp, todo por voz."
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn>
              <div className="bg-navy-900/70 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm h-full">
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                  <Camera className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-slate-400 font-medium font-display">Receta médica</span>
                </div>
                <ChatBubble type="user" icon={<Camera className="w-4 h-4" />}>
                  📸 [Foto de receta]<br />🎤 "¿Qué dice?"
                </ChatBubble>
                <ChatBubble type="agent">
                  Receta del <strong className="text-white">Dr. Carlos Mendoza</strong>, Medicina Interna.
                  <br /><br />
                  • <strong className="text-white">Metformina 850mg</strong> — 1 c/12h con alimentos
                  <br />• <strong className="text-white">Losartán 50mg</strong> — 1 c/24h en la mañana
                  <br /><br />
                  <span className="text-gold-400">⚠️</span> Metformina es nueva. Sin interacción con tu Omeprazol.
                  <br /><br />
                  ¿Busco farmacia cercana?
                </ChatBubble>
                <ChatBubble type="user">🎤 "Sí"</ChatBubble>
                <ChatBubble type="agent">
                  📍 <strong className="text-white">Farmacia Guadalajara</strong> — Av. Vallarta 1234, 800m.
                  <br />Tel: 33-1234-5678. ¿Llamo a preguntar?
                </ChatBubble>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-navy-900/70 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm h-full">
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                  <Star className="w-4 h-4 text-gold-400" />
                  <span className="text-xs text-slate-400 font-medium font-display">Resumen matutino</span>
                </div>
                <ChatBubble type="agent">
                  ☀️ Buenos días Julio. <strong className="text-white">8:00 AM</strong>, 22°C.
                  <br /><br />
                  📧 <strong className="text-white">2 correos:</strong>
                  <br />• IMSS: Cita oftalmología 25 marzo, 10am
                  <br />• HSBC: Estado de cuenta listo
                  <br /><br />
                  📅 <strong className="text-white">Hoy:</strong>
                  <br />• 11:00 — Junta vecinos
                  <br />• 16:00 — Llamada con Pedro
                  <br /><br />
                  ⚡ <strong className="text-white">Pendientes:</strong>
                  <br />• Agua vence en 3 días ($234)
                  <br />• Losartán se termina en ~5 días
                  <br /><br />
                  ¿Pago el agua? ¿Leo el correo del IMSS?
                </ChatBubble>
                <ChatBubble type="user">🎤 "Paga el agua y léeme el del IMSS"</ChatBubble>
                <ChatBubble type="agent">
                  <span className="text-kapitec-green">✓</span> Pagando agua... $234 con ●●89.
                  <br /><br />
                  📧 IMSS: "Cita Oftalmología, martes 25 marzo 10:00h, UMF 34. Llevar vigencia e identificación."
                  <br /><br />
                  ¿Recordatorio el lunes en la noche?
                </ChatBubble>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         ARQUITECTURA
         ══════════════════════════════════════════════════════════ */}
      <section id="arquitectura" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Arquitectura"
            title={<>Construido sobre <span className="text-gradient">OpenClaw</span></>}
            subtitle="Una Skill: un directorio con SKILL.md + scripts. Toda la infra del agente, sin reinventar nada."
          />

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
            <FadeIn>
              <div className="bg-navy-900/50 border border-white/[0.06] rounded-2xl p-7 md:p-8 h-full">
                <h3 className="text-base font-bold text-white mb-5 font-display flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-kapitec-green/10 flex items-center justify-center">
                    <Layers className="w-3.5 h-3.5 text-kapitec-green" />
                  </div>
                  Stack de OpenClaw
                </h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  {[
                    ["Canales", "WhatsApp, Telegram (audio + texto)"],
                    ["Browser", "Playwright — navegación real, formularios, pagos"],
                    ["Visión", "Análisis multimodal (Claude, GPT-4o)"],
                    ["Memoria", "MEMORY.md, USER.md, daily notes"],
                    ["Cron", "Alertas proactivas, resúmenes matutinos"],
                    ["TTS", "ElevenLabs — respuestas en audio natural"],
                    ["GWS", "Gmail, Calendar, Drive"],
                    ["Exec", "Scripts locales, procesamiento"],
                  ].map(([label, desc], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-kapitec-green/60 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">{label}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-navy-900/50 border border-white/[0.06] rounded-2xl p-7 md:p-8 h-full">
                <h3 className="text-base font-bold text-white mb-5 font-display flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-kapitec-blue/10 flex items-center justify-center">
                    <Navigation className="w-3.5 h-3.5 text-kapitec-blue" />
                  </div>
                  Estructura de la Skill
                </h3>
                <pre className="bg-navy-950/80 border border-white/[0.06] rounded-xl p-5 text-xs text-slate-400 overflow-x-auto font-mono leading-relaxed">
{`skills/lazarillo/
├── SKILL.md              # Instrucciones
├── scripts/
│   ├── morning-brief.sh  # Resumen matutino
│   ├── pay-bill.mjs      # Pagos automatizados
│   ├── read-document.mjs # OCR + análisis
│   └── web-navigate.mjs  # Navegación genérica
├── templates/
│   ├── user-profile.md   # Datos usuario
│   └── medical-info.md   # Info médica
└── references/
    ├── mx-portals.md     # Portales MX
    └── accessibility.md  # Best practices`}</pre>
                <div className="mt-4 p-3 bg-kapitec-green/[0.05] border border-kapitec-green/15 rounded-xl flex items-center gap-3">
                  <Lightbulb className="w-4 h-4 text-kapitec-green flex-shrink-0" />
                  <p className="text-xs text-slate-400"><strong className="text-kapitec-green">Open Source.</strong> Solo copia la carpeta a tu OpenClaw.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         PERFIL USUARIO + IMPACTO
         ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kapitec-green/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Impacto"
            tagColor="text-kapitec-green"
            title={<>Diseñado para <span className="text-kapitec-green">Julio</span>, útil para millones</>}
          />

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Heart className="w-6 h-6 text-red-400" />,
                title: "Usuario primario",
                desc: "Personas con baja visión — dificultad significativa para interfaces digitales.",
                items: ["2.2 millones en México (INEGI)", "285 millones en el mundo (OMS)", "Creciente con envejecimiento"],
              },
              {
                icon: <Users className="w-6 h-6 text-kapitec-blue" />,
                title: "Usuarios secundarios",
                desc: "Otros perfiles que se benefician del modelo por voz:",
                items: ["Adultos mayores", "Discapacidad motriz", "Recuperación post-quirúrgica", "Analfabetismo digital"],
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-kapitec-green" />,
                title: "Impacto en la vida",
                desc: "Lo que cambia para Julio:",
                items: ["Independencia digital", "30 min/trámite → 2 min", "Inclusión financiera", "Seguridad en salud"],
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-navy-900/50 border border-white/[0.06] rounded-2xl p-7 h-full hover:border-white/[0.1] transition-colors">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">{card.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{card.desc}</p>
                  <ul className="space-y-1.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="text-xs text-slate-500 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         ROADMAP
         ══════════════════════════════════════════════════════════ */}
      <section id="roadmap" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Roadmap"
            tagColor="text-gold-400"
            title={<>Plan de <span className="text-gradient-warm">desarrollo</span></>}
          />

          <div className="space-y-5">
            {[
              { phase: "Fase 1 — MVP", time: "Semana 1-2", color: "border-kapitec-green", dot: "bg-kapitec-green", items: ["SKILL.md base", "Pago CFE (Playwright)", "OCR documentos + audio", "Memoria personal", "Canal Telegram", "Demo con Julio"] },
              { phase: "Fase 2 — Expansión", time: "Semana 3-4", color: "border-kapitec-blue", dot: "bg-kapitec-blue", items: ["Resumen matutino (cron 8am)", "Gmail (leer + responder)", "Soporte WhatsApp", "Más portales: SIAPA, Telmex", "Calendario proactivo", "TTS por defecto"] },
              { phase: "Fase 3 — Inteligencia", time: "Mes 2", color: "border-purple-500", dot: "bg-purple-500", items: ["Navegación web genérica", "Comparación precios", "Emergencias", "Perfil médico completo", "Aprendizaje de patrones", "Multi-usuario"] },
              { phase: "Fase 4 — Comunidad", time: "Mes 3+", color: "border-gold-400", dot: "bg-gold-400", items: ["Publicar en ClawHub", "Guías para cuidadores", "Soporte multi-país", "Servicios de salud", "Modo acompañante", "API para ONGs"] },
            ].map((phase, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className={`border-l-2 ${phase.color} bg-navy-900/30 rounded-r-2xl p-6 md:p-7 hover:bg-navy-900/50 transition-colors`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-2.5 h-2.5 rounded-full ${phase.dot}`} />
                    <h3 className="text-base font-bold text-white font-display">{phase.phase}</h3>
                    <span className="text-[11px] text-slate-500 font-mono">{phase.time}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-x-6 gap-y-2 ml-5">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         PLAN DE DEMO
         ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            tag="Demo Plan"
            tagColor="text-red-400"
            title={<>Demo de <span className="text-red-400">3 minutos</span></>}
          />

          <FadeIn>
            <div className="space-y-0">
              {[
                { time: "0:00–0:30", title: "El Gancho", desc: "\"¿Cuántos pagaron un recibo de luz esta semana? 2 minutos. A Julio le toma 45... porque tiene baja visión.\"", color: "text-red-400", border: "border-red-500/20", bg: "bg-red-500/[0.03]" },
                { time: "0:30–1:00", title: "El Problema", desc: "Mostrar CFE con fuente tamaño 8. \"Ninguna IA resuelve esto. Be My Eyes DESCRIBE. Julio necesita que ALGUIEN LO HAGA.\"", color: "text-gold-400", border: "border-gold-400/20", bg: "bg-gold-400/[0.03]" },
                { time: "1:00–2:30", title: "Demo en Vivo", desc: "WhatsApp → audio → ver al agente abrir CFE, navegar, responder monto. Luego: foto de receta → análisis + farmacia.", color: "text-kapitec-green", border: "border-kapitec-green/20", bg: "bg-kapitec-green/[0.03]" },
                { time: "2:30–3:00", title: "El Cierre", desc: "\"Lazarillo es un archivo de texto que enseña a un agente a ser ojos y manos. Open source. 2.2 millones lo necesitan.\"", color: "text-kapitec-blue", border: "border-kapitec-blue/20", bg: "bg-kapitec-blue/[0.03]" },
              ].map((step, i) => (
                <div key={i} className={`flex gap-5 md:gap-8 items-start p-5 md:p-6 border ${step.border} ${step.bg} ${i === 0 ? 'rounded-t-2xl' : ''} ${i === 3 ? 'rounded-b-2xl' : ''}`}>
                  <div className="flex-shrink-0 w-20 md:w-24 text-right">
                    <span className={`text-xs font-mono font-bold ${step.color}`}>{step.time}</span>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold font-display mb-1.5 ${step.color}`}>{step.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         DOWNLOAD SKILL
         ══════════════════════════════════════════════════════════ */}
      <section id="descargar" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kapitec-green/30 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kapitec-green/[0.03] rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader
            tag="Descarga"
            tagColor="text-kapitec-green"
            title={<>Instálalo en <span className="text-gradient">2 minutos</span></>}
            subtitle="Lazarillo es una Skill de OpenClaw. Solo descarga, copia a tu workspace, y listo."
          />
          <FadeIn>
            <div className="bg-navy-900/70 border border-kapitec-green/20 rounded-2xl p-8 md:p-10 text-center glow-green">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-kapitec-blue to-kapitec-green mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">Lazarillo Skill v1.0</h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">Un archivo SKILL.md que enseña a cualquier agente OpenClaw a ser ojos y manos para personas con baja visión.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="./lazarillo-skill.tar.gz" download className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-kapitec-green to-emerald-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-kapitec-green/25 transition-all text-sm">
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  Descargar Skill (.tar.gz)
                </a>
                <a href="./SKILL.md" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 border border-white/[0.1] text-white font-bold rounded-xl hover:bg-white/[0.04] transition-all text-sm">
                  <Eye className="w-5 h-5 text-kapitec-blue" />
                  Ver SKILL.md
                </a>
              </div>
              <div className="bg-navy-950/80 rounded-xl p-5 text-left max-w-md mx-auto border border-white/[0.06]">
                <p className="text-[11px] text-slate-500 font-mono uppercase tracking-wider mb-3">Instalación</p>
                <pre className="text-sm text-slate-300 font-mono leading-relaxed overflow-x-auto">{`# Descargar y extraer
tar xzf lazarillo-skill.tar.gz

# Copiar a tu workspace
cp -r lazarillo/ ~/.openclaw/workspace/skills/

# ¡Listo! Tu agente ya sabe ser Lazarillo 🦮`}</pre>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
         FOOTER
         ══════════════════════════════════════════════════════════ */}
      <footer className="py-12 px-6 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <KapiLogo className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" />
              <div className="h-4 w-px bg-white/10" />
              <span className="text-xs text-slate-600 font-mono">Powered by Kapitec Soluciones</span>
            </div>
            <div className="flex items-center gap-6 text-[11px] text-slate-600 font-mono">
              <span>Dev Racing · Release Before Ready GDL 2026</span>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-kapitec-green/50">OpenClaw Skill</span>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.03] text-center">
            <p className="text-xs text-slate-700 font-mono">🦮 Lazarillo — Porque la accesibilidad no debería ser pasiva.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
