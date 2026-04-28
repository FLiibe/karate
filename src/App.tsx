/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight, Star, Clock, ShieldCheck, Zap, Trophy, BookOpen, Layers, Target, Mail, ChevronLeft, Award, Users, Download, Headphones, RotateCcw, Send } from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const countdownStart = 7 * 60; // 7 minutes in seconds

export default function App() {
  const [timeLeft, setTimeLeft] = useState(countdownStart);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const reviews = [
    {
      user: "Prof. Ricardo Santos",
      role: "Faixa Preta 3º Dan",
      comment: "Aulas transformadas! Meus alunos agora participam com alegria de cada dinâmica. Evolução técnica fantástica.",
    },
    {
      user: "Profa. Juliana Oliveira",
      role: "Instrutora de Karatê Infantil",
      comment: "Dinâmicas práticas que economizam horas de planejamento. Retenção de alunos pequenos melhorou 100%.",
    },
    {
      user: "Prof. Fernando Silva",
      role: "Coordenador de Dojo",
      comment: "Conecta disciplina e diversão perfeitamente. O engajamento da turma é algo que eu nunca tinha visto antes.",
    }
  ];

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  const scrollToArsenal = () => {
    document.getElementById("arsenal")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Top Countdown Banner */}
      <div className="bg-blue-600 text-white py-2 px-4 sticky top-0 z-[60] shadow-md border-b border-blue-500">
        <div className="container mx-auto flex items-center justify-center gap-4 text-sm md:text-base font-bold italic">
          <Clock className="w-5 h-5 animate-pulse" />
          <p className="uppercase tracking-tighter">OFERTA POR TEMPO LIMITADO:</p>
          <span className="bg-white text-blue-600 px-3 py-0.5 rounded-md font-mono text-lg shadow-inner">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden lg:pt-20 lg:pb-32 bg-stone-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100"
            >
              Exclusivo para Professores de Karatê
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900"
            >
              +150 Dinâmicas Interativas de <span className="text-blue-600">Karatê Infantil</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-orange-500 font-bold text-sm md:text-base mb-6 uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Assista o vídeo abaixo 👇
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 mx-auto max-w-sm rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] bg-slate-200 relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80&w=1200" 
                alt="Karate Infantil Class" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all cursor-pointer">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </motion.div>

            {/* Karate Level Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-col items-center gap-3"
            >
              {[
                "Lúdico: Fundamentos e Brincadeiras Motoras",
                "Foco e Disciplina: Retenção para os Pequenos",
                "Avançado Kids: Técnica com Alta Diversão"
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-full shadow-sm w-full max-w-md hover:border-green-400 transition-all cursor-default group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-bold text-slate-800 text-lg">{tag}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <button 
                onClick={scrollToArsenal}
                className="w-full max-w-2xl px-10 py-7 text-2xl md:text-3xl font-black text-white bg-green-600 rounded-[24px] shadow-[0_20px_40px_-10px_rgba(22,163,74,0.4)] hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-4 group uppercase tracking-tight animate-pulse"
              >
                EU QUERO MINHAS DINÂMICAS INFANTIS!
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you will receive section */}
      <section className="py-24 bg-stone-50 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              O QUE VOCÊ VAI <span className="text-green-500">RECEBER?</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <button 
                className="hidden md:flex w-14 h-14 items-center justify-center bg-white border border-slate-200 rounded-full hover:bg-slate-50 shadow-sm z-10 shrink-0 transition-transform active:scale-90"
                onClick={() => {
                  const slider = document.getElementById('product-slider');
                  if (slider) slider.scrollBy({ left: -window.innerWidth > 768 ? -600 : -320, behavior: 'smooth' });
                }}
              >
                <ChevronLeft className="w-8 h-8 text-slate-400" />
              </button>

              <div 
                id="product-slider"
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 scroll-smooth px-4"
              >
                {[
                  { title: "150 Dinâmicas Interativas De Karatê", desc: "Sistema completo focado em equilíbrio, lateralidade e controle motor. Atividades em dupla e jogos de reflexo que garantem engajamento total e desenvolvimento social lúdico.", icon: <Target className="w-16 h-16 text-blue-500" /> },
                  { title: "20 Protocolos de Desafios Semanais para Karatê", desc: "Mini-torneios e desafios flexíveis que valorizam a precisão e o espírito marcial. Um sistema de pontuação pronto para estimular a evolução constante e a disciplina.", isBonus: true, icon: <Trophy className="w-16 h-16 text-amber-500" /> },
                  { title: "50 Cards para Dominar a Aula", desc: "Comandos táticos detalhados para organizar o Dojo com clareza. Instruções sobre postura e técnica que promovem um ambiente de máximo respeito e foco.", isBonus: true, icon: <Layers className="w-16 h-16 text-green-500" /> },
                  { title: "100 Técnicas e Exercícios de Alongamento Para Karatê", desc: "Guia de ativação muscular e mobilidade para maximizar a performance e prevenir lesões. Exercícios projetados para preparar o corpo e a mente para o treino.", isBonus: true, icon: <Zap className="w-16 h-16 text-red-500" /> },
                  { title: "O Guia Definitivo da Faixa Branca à Preta", desc: "Manual progressivo que abrange desde fundamentos básicos até katas avançados. Uma jornada completa de desenvolvimento técnico e fortalecimento do caráter.", isBonus: true, icon: <BookOpen className="w-16 h-16 text-indigo-500" /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 sm:p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-xl min-w-[280px] sm:min-w-[320px] md:min-w-[700px] snap-center flex flex-col items-center text-center">
                    <div className="mb-6 md:mb-10 p-5 md:p-8 bg-slate-50 rounded-[32px] group-hover:scale-110 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-5xl font-black mb-4 md:mb-8 uppercase tracking-tighter leading-tight">
                      {item.isBonus && <span className="text-blue-600 font-black">BONUS: </span>}
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl px-2">
                       {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <button 
                className="hidden lg:flex w-14 h-14 items-center justify-center bg-white border border-slate-200 rounded-full hover:bg-slate-50 shadow-sm z-10 shrink-0 transition-transform active:scale-90"
                onClick={() => {
                  const slider = document.getElementById('product-slider');
                  if (slider) slider.scrollBy({ left: 600, behavior: 'smooth' });
                }}
              >
                <ChevronRight className="w-8 h-8 text-slate-400" />
              </button>
            </div>

            {/* Mobile Scroll Indicators */}
            <div className="flex lg:hidden justify-center gap-4 mt-4 text-slate-400 font-bold text-sm items-center">
              <ChevronLeft className="w-4 h-4" /> Deslize para ver mais <ChevronRight className="w-4 h-4" />
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2, 3, 4].map((dot) => (
                <div key={dot} className={`w-3 h-3 rounded-full transition-colors ${dot === 0 ? 'bg-green-500' : 'bg-slate-200'}`} />
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button 
                onClick={scrollToArsenal}
                className="px-10 py-5 bg-green-500 text-white font-black rounded-2xl shadow-xl hover:bg-green-600 transition-all uppercase tracking-tight flex items-center gap-2 group"
              >
                Garantir meu acesso agora
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Para quem são estas <span className="text-blue-600">Dinâmicas?</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Users className="w-6 h-6 text-blue-500" />, text: "Senseis e Professores que dão aulas para crianças de 4 a 12 anos." },
              { icon: <Target className="w-6 h-6 text-blue-500" />, text: "Instrutores que buscam renovar o Dojo com atividades lúdicas e técnicas." },
              { icon: <Zap className="w-6 h-6 text-blue-500" />, text: "Profissionais que querem transformar a falta de atenção em engajamento total." },
              { icon: <Trophy className="w-6 h-6 text-blue-500" />, text: "Donos de academia que buscam as melhores ferramentas de retenção infantil." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 p-6 rounded-2xl bg-stone-50 border border-slate-50"
              >
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-lg font-bold text-slate-700 leading-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button 
              onClick={scrollToArsenal}
              className="px-10 py-5 bg-green-500 text-white font-black rounded-2xl shadow-xl hover:bg-green-600 transition-all uppercase tracking-tight flex items-center gap-2 group"
            >
              Sim, eu quero transformar minhas aulas!
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Por que você precisa de <span className="text-blue-600">essas dinâmicas?</span></h2>
              <p className="text-lg md:text-xl text-slate-600 italic">O segredo dos maiores Dojos infantis está em técnicas lúdicas de impacto.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Zap className="w-8 h-8 text-blue-500" />, title: "Alunos 100% Engajados", desc: "Os pequenos ficam focados e motivados do início ao fim da aula, transformando o desinteresse em disciplina." },
                { icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, title: "Fim das Aulas Repetitivas", desc: "Suas aulas nunca mais serão monótonas. Tenha sempre uma novidade técnica na manga pronta para aplicar." },
                { icon: <Target className="w-8 h-8 text-blue-500" />, title: "Retenção e Crescimento", desc: "Mantenha seus alunos no Dojo por muito mais tempo através de uma pedagogia que as crianças amam." },
                { icon: <Award className="w-8 h-8 text-blue-500" />, title: "Autoridade e Expertise", desc: "Ganhe tempo no planejamento com um sistema que garante resultados de elite e consolida sua liderança no Karatê infantil." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-stone-50 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button 
                onClick={scrollToArsenal}
                className="px-10 py-5 bg-green-500 text-white font-black rounded-2xl shadow-xl hover:bg-green-600 transition-all uppercase tracking-tight flex items-center gap-2 group"
              >
                Quero o Arsenal do Sensei agora!
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section (Premium Exclusives) */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              Ao comprar hoje você recebe <span className="text-blue-600 italic">4 bônus exclusivos!</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "20 Protocolos de Desafios Semanais para Karatê Infantil", desc: "Desafios táticos e mini-torneios flexíveis que evoluem a técnica e a disciplina no Dojo.", val: "R$ 47,00" },
              { icon: <Layers className="w-8 h-8" />, title: "50 Cards para Dominar a Aula", desc: "Comandos de organization claros para posturas impecáveis e foco total dos alunos.", val: "R$ 37,00" },
              { icon: <Trophy className="w-8 h-8" />, title: "100 Técnicas e Exercícios de Alongamento Para Karatê Infantil", desc: "Mobilidade e ativação muscular específica para a máxima performance do karateca.", val: "R$ 57,00" },
              { icon: <BookOpen className="w-8 h-8" />, title: "O Guia Definitivo da Faixa Branca à Preta", desc: "Guia pedagógico completo com exercícios práticos do básico ao avançado.", val: "R$ 67,00" }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {bonus.icon}
                </div>
                <h3 className="text-xl font-medium mb-3"><span className="font-black text-blue-600">BONUS:</span> {bonus.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow text-sm">{bonus.desc}</p>
                <div className="pt-4 border-t border-slate-100">
                   <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">VALOR REAL: <span className="line-through">{bonus.val}</span></p>
                   <p className="text-lg font-bold text-blue-600">GRÁTIS NO PREMIUM</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Escolha seu Plano</h2>
            <p className="text-xl text-slate-600 font-medium">Acesso imediato e vitalício após o pagamento.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Base Plan */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl border-2 border-slate-100 bg-white flex flex-col shadow-lg"
            >
              <div className="mb-8 flex justify-center">
                <img 
                  src="https://i.ibb.co/kVC8mLN2/Chat-GPT-Image-28-de-abr-de-2026-12-26-15.png" 
                  alt="Plano Essencial" 
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                />
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Essencial</h3>
              </div>
              <div className="mb-8 text-center sm:text-left">
                <p className="text-slate-500 font-medium mb-1">De <span className="line-through">R$67,00</span> por apenas</p>
                <div className="flex items-baseline justify-center sm:justify-start gap-1">
                   <span className="text-5xl md:text-6xl font-black text-green-500 tracking-tighter">R$27,00</span>
                </div>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-bold underline underline-offset-4 decoration-blue-100 text-sm md:text-base">150 Dinâmicas Interativas De Karatê</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Acesso Vitalício</span>
                </li>
                <li className="flex items-center gap-3 opacity-40">
                  <Mail className="w-5 h-5" />
                  <span className="line-through">Bônus Premium</span>
                </li>
              </ul>
              <button 
                onClick={() => window.open('https://pay.hotmart.com/G105592758R?bid=1777391554797', '_blank')}
                className="w-full py-5 px-6 rounded-2xl bg-green-500 text-white font-black text-xl hover:bg-green-600 shadow-lg shadow-green-100 transition-all uppercase flex items-center justify-center gap-2"
              >
                <Check className="w-6 h-6 shrink-0" />
                CONFIRMAR Plano Essencial
              </button>
              <div className="mt-6 text-center text-sm text-slate-400 flex items-center justify-center gap-2">
                 <ShieldCheck className="w-4 h-4" />
                 Ambiente seguro para pagamentos
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div 
              id="arsenal"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl border-4 border-green-500 bg-white flex flex-col relative shadow-2xl scale-105 z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest whitespace-nowrap shadow-lg">
                MAIS VENDIDAS
              </div>
              <div className="mb-8 flex justify-center pt-4">
                <img 
                  src="https://i.ibb.co/KcD29MwD/Chat-GPT-Image-28-de-abr-de-2026-11-59-49.png" 
                  alt="Plano Premium" 
                  className="w-56 h-56 sm:w-72 sm:h-72 object-contain"
                />
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-800 uppercase tracking-tight">ARSENAL DO SENSEI</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                   <span className="text-xl md:text-2xl font-bold text-slate-400 line-through">R$197</span>
                   <div className="bg-green-500 text-white text-xs md:text-sm font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">-81% OFF</div>
                </div>
                <div className="flex items-baseline justify-center sm:justify-start gap-1">
                   <span className="text-5xl md:text-6xl lg:text-7xl font-black text-green-500 tracking-tighter">R$37,00</span>
                </div>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-bold underline underline-offset-4 decoration-blue-200 italic text-sm md:text-base">150 Dinâmicas Interativas De Karatê</span>
                </li>
                {[
                  "20 Protocolos de Desafios Semanais para Karatê",
                  "50 Cards para Dominar a Aula",
                  "100 Técnicas e Exercícios de Alongamento Para Karatê",
                  "O Guia Definitivo da Faixa Branca à Preta"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-xs sm:text-sm md:text-base">
                      <span className="font-black text-blue-600">BONUS:</span> {item}
                    </span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-amber-500">Acesso Vitalício Completo</span>
                </li>
                <li className="flex items-center gap-3 border-t border-slate-50 pt-4">
                  <Zap className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm md:text-base">Acesso digital imediato</span>
                </li>
                <li className="flex items-center gap-3">
                  <Send className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm md:text-base">Entrega instantânea</span>
                </li>
                <li className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm md:text-base">Materiais 100% baixáveis</span>
                </li>
                <li className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm md:text-base">Suporte 24h</span>
                </li>
                <li className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm md:text-base">Garantia de 7 dias</span>
                </li>
              </ul>
              <button 
                onClick={() => window.open('https://pay.hotmart.com/N105591989C?bid=1777391400406', '_blank')}
                className="w-full py-6 px-6 rounded-2xl bg-green-500 text-white font-black text-xl md:text-2xl hover:bg-green-600 hover:scale-[1.02] shadow-xl shadow-green-100 transition-all uppercase flex items-center justify-center gap-2"
              >
                <Check className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
                CONFIRMAR ACESSO AGORA
              </button>
              <div className="mt-6 text-center text-sm text-slate-400 flex items-center justify-center gap-2">
                 <ShieldCheck className="w-4 h-4" />
                 Ambiente seguro para pagamentos
              </div>
              <div className="mt-8 flex items-start gap-3 bg-stone-50 p-4 rounded-2xl">
                 <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
                 <p className="text-xs md:text-sm font-bold text-slate-500 leading-tight">
                    Mais de 80% dos treinadores e professores de escolinha escolhem esta opção.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full text-green-700 text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-green-500 text-green-500" />
              Mais de 9.435 Senseis já utilizam
            </motion.div>
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              O que dizem os <span className="text-green-500 italic">Senseis</span>
            </motion.h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <button 
                onClick={prevReview}
                className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
  
              <div className="w-full px-2 sm:px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border-l-[8px] md:border-l-[12px] border-l-blue-500 relative flex flex-col md:flex-row items-center gap-6 md:gap-10"
                  >
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
  
                      <p className="text-lg md:text-2xl text-slate-700 italic leading-snug mb-0 font-medium">
                        "{reviews[currentReview].comment}"
                      </p>
                    </div>
  
                    <div className="shrink-0 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-10 text-center md:text-left w-full md:w-auto">
                      <h4 className="text-lg md:text-xl font-black text-slate-900">{reviews[currentReview].user}</h4>
                      <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">{reviews[currentReview].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
  
              <button 
                onClick={nextReview}
                className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Carousel Controls */}
            <div className="flex md:hidden justify-center items-center gap-8 mt-8">
              <button 
                onClick={prevReview}
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-full shadow-sm"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentReview ? 'bg-blue-600' : 'bg-slate-300'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextReview}
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-full shadow-sm"
              >
                <ChevronRight className="w-6 h-6 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-stone-50 p-8 md:p-16 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center gap-12 border border-slate-100">
            <div className="md:w-1/3 flex justify-center">
              <ShieldCheck className="w-48 h-48 text-blue-600 drop-shadow-md" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">7 Dias de Garantia</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                Tiro todo o risco das suas costas. Se em 7 dias você sentir que o material não é para o seu Dojo, eu devolvo 100% do seu dinheiro. Transparência total.
              </p>
              <div className="p-4 bg-green-50 rounded-lg inline-flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-sm font-bold text-green-700 uppercase tracking-tighter">RISCO ZERO PARA VOCÊ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            onClick={scrollToArsenal}
            className="px-10 py-6 bg-green-600 text-white font-black rounded-2xl shadow-2xl hover:bg-green-700 transition-all uppercase text-xl md:text-2xl tracking-tight flex items-center gap-2 group"
          >
            GARANTIR MINHAS DINÂMICAS COM RISCO ZERO
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              A mente por trás <br/> <span className="text-blue-500 italic">Fabio Souza Tanaka</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-center gap-12">
            <div className="relative flex flex-col md:flex-row gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-green-200 rounded-2xl scale-110 blur-xl opacity-20" />
                <img 
                  src="https://i.ibb.co/yzzJGSx/Chat-GPT-Image-28-de-abr-de-2026-11-06-46.png" 
                  alt="Sensei Fabio Souza Tanaka 1" 
                  className="relative w-72 h-96 object-cover rounded-2xl border-4 border-white shadow-2xl z-10 mx-auto"
                />
              </div>
              <div className="relative hidden md:block mt-12">
                <div className="absolute inset-0 bg-blue-200 rounded-2xl scale-110 blur-xl opacity-20" />
                <img 
                  src="https://i.ibb.co/s9XN4vtQ/Chat-GPT-Image-28-de-abr-de-2026-11-07-07.png" 
                  alt="Sensei Fabio Souza Tanaka 2" 
                  className="relative w-72 h-96 object-cover rounded-2xl border-4 border-white shadow-2xl z-10"
                />
              </div>
            </div>

            <div className="text-center px-4">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Sensei Fabio Souza Tanaka</h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                Especialista em metodologia de ensino para Karatê Infantil. Desenvolveu este sistema para ajudar professores a entregarem aulas modernas que retêm alunos através do engajamento lúdico e técnico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-100 rounded-full text-green-800 font-bold text-sm md:text-base">
                  <Award className="w-5 h-5 text-green-500" />
                  <span>15+ anos de experiência no tatame</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-blue-50 border border-blue-100 rounded-full text-blue-800 font-bold text-sm md:text-base">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>Mais de 10.000 professores impactados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            onClick={scrollToArsenal}
            className="px-10 py-5 bg-green-500 text-white font-black rounded-2xl shadow-xl hover:bg-green-600 transition-all uppercase tracking-tight flex items-center gap-2 group"
          >
            Começar agora com Fabio Souza Tanaka
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center uppercase tracking-tight">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os links para download do material." },
              { q: "O material serve para outras artes marciais?", a: "As dinâmicas foram modeladas no Karatê, mas 90% delas funcionam perfeitamente para Judô, Jiu-Jitsu e Taekwondo." },
              { q: "O pagamento é único?", a: "Sim! Você paga apenas uma vez e garante acesso vitalício ao conteúdo e atualizações." },
              { q: "Posso imprimir?", a: "Sim, todos i arquivos estão em PDFs de alta resolução prontos para impressão profissional." }
            ].map((item, i) => (
              <details key={i} className="group p-6 rounded-2xl bg-white border border-slate-100 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between font-bold text-lg">
                  {item.q}
                  <span className="text-blue-500 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed font-medium">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button 
              onClick={scrollToArsenal}
              className="px-10 py-5 bg-green-500 text-white font-black rounded-2xl shadow-xl hover:bg-green-600 transition-all uppercase tracking-tight flex items-center gap-2 group"
            >
              Ainda com dúvida? Clique e comece já!
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white font-black text-xl mb-4 italic uppercase tracking-widest">150 Dinâmicas Interativas De Karatê</h3>
          <p className="max-w-md mx-auto mb-8 text-xs font-medium leading-relaxed opacity-60">
            Aperfeiçoamento constante e aplicação técnica dependem do empenho individual de cada Sensei e instrutor.
          </p>
          <div className="flex justify-center gap-12 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            <a href="#" className="hover:text-blue-500 transition-colors">Termos</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Suporte</a>
          </div>
          <p className="text-[10px] opacity-20 font-bold uppercase tracking-widest">© 2024 Dinâmicas de Karatê. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
