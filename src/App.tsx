/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  ExternalLink, 
  MessageCircle, 
  Smartphone,
  Watch,
  Wind
} from "lucide-react";
import React, { useState, useEffect, ReactNode } from "react";

// Types
interface LinkItem {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links: LinkItem[] = [
    {
      id: "instagram",
      name: "ئینستاگرام",
      url: "https://www.instagram.com/saman.watchh",
      icon: <Instagram className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "tiktok",
      name: "تیک تۆک",
      url: "https://www.tiktok.com/@saman.watch1",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
          <img 
            src="https://i.ibb.co/qLvQBz8b/tiktok.jpg" 
            alt="TikTok" 
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-icon')) {
                const icon = document.createElement('div');
                icon.className = 'fallback-icon';
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>';
                parent.appendChild(icon);
              }
            }}
          />
        </div>
      ),
      color: "from-black to-zinc-700",
    },
    {
      id: "whatsapp",
      name: "واتسئەپ",
      url: "https://wa.me/9647509330128",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500/30 overflow-x-hidden relative" dir="rtl">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-purple-500/5 rounded-full blur-[130px]"
        />
      </div>

      {/* Sparkles Effect (Simulated with random divs) */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{ 
              duration: 2 + Math.random() * 4, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>

      <main className="relative z-10 max-w-lg mx-auto px-6 py-16 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative group"
        >
          {/* Pulsing rings */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border-2 border-amber-500/30 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            className="absolute inset-0 border border-amber-500/10 rounded-full"
          />

          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/40 transition-colors duration-500" />
          <div className="w-36 h-36 rounded-full border-4 border-amber-500/30 p-1.5 bg-zinc-900 relative z-10 overflow-hidden shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)] transition-all duration-500">
            <img 
              src="https://i.ibb.co/jZyd1430/photo-2026-05-14-01-34-01.jpg" // Guessing direct link pattern
              alt="SAMAN WATCH Logo" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // If guess fails, try the landing page (which might not work in regular img tag)
                // but we keep the fallback icon logic
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  target.src = "https://ibb.co/jZyd1430"; // This won't work in img tag usually
                }
                
                target.style.display = 'none';
                target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                if (!target.parentElement?.querySelector('.fallback-icon')) {
                  const icon = document.createElement('div');
                  icon.className = 'fallback-icon';
                  icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-watch text-amber-500"><path d="M6 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6z"/><path d="m9 5 3-3 3 3"/><path d="m9 19 3 3 3-3"/><circle cx="12" cy="12" r="3"/></svg>';
                  target.parentElement?.appendChild(icon);
                }
              }}
            />
          </div>
        </motion.div>

        {/* Business Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-4xl font-black bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent tracking-tight text-center"
        >
          SAMAN WATCH
        </motion.h1>
        <p className="mt-2 text-amber-500/80 font-medium tracking-widest text-sm uppercase">کاتژمێر و بۆنی پیاوان</p>

        {/* Address Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400 backdrop-blur-sm shadow-xl"
        >
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>ڕانیە - بەرامبەر باغی گشتی</span>
        </motion.div>

        {/* Links Section */}
        <div className="w-full mt-12 space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              whileHover={{ scale: 1.02, x: index % 2 === 0 ? 5 : -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block w-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              
              <div className="relative flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 rounded-2xl backdrop-blur-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} shadow-lg shadow-black/20 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <span className="text-lg font-bold group-hover:text-amber-500 transition-colors duration-300">
                    {link.name}
                  </span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full mt-16 text-center"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-8" />
          <p className="text-zinc-400 italic text-lg leading-relaxed">
            "شیکپۆشی و کوالێتی بەردەوام لای ئێمەیە، جوانترین کاتژمێر و باشترین بۆنی پیاوان."
          </p>
        </motion.div>

        {/* Footer section for Chaplin Chap */}
        <footer className="mt-20 w-full flex flex-col items-center gap-6">
          <div className="h-px w-24 bg-zinc-800" />
          
          <motion.a
            href="https://chaplin-chap.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <motion.div
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full flex items-center gap-2 group-hover:border-blue-500/50 transition-colors duration-500"
            >
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                دروستکراوە لە لایەن 
                <span className="relative overflow-hidden inline-block text-blue-400">
                  چاپلین چاپ
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </motion.div>

            <div className="flex items-center gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-lg shadow-blue-500/10"
              >
                <img 
                  src="https://chaplin-chap.vercel.app/logo.png" 
                  alt="Chaplin Chap Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=CC&background=0D8ABC&color=fff";
                  }}
                />
              </motion.div>

              <motion.div
                animate={{ 
                  boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
              >
                Chaplin Chap
              </motion.div>
            </div>
          </motion.a>
          
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mt-4">
            © {new Date().getFullYear()} SAMAN WATCH • ALL RIGHTS RESERVED
          </div>
        </footer>
      </main>
    </div>
  );
}
