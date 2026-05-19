
import React from 'react';
import { Mail, MapPin, Compass, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans antialiased selection:bg-[#C5A880] selection:text-black">
      {/* Premium Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#16120E] to-transparent opacity-60 pointer-events-none" />
      
      {/* Header / Navigation */}
      <header className="border-b border-[#1A1A1A] bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#E5E5E5] via-[#C5A880] to-[#E5E5E5] bg-clip-text text-transparent">
              Lena Souvenir
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-[#A3A3A3]">
            <a href="#gallery" className="hover:text-[#C5A880] transition-colors">The Gallery</a>
            <a href="#heritage" className="hover:text-[#C5A880] transition-colors">Our Heritage</a>
            <a href="#contact" className="hover:text-[#C5A880] transition-colors">Inquiries</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-16">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16120E] border border-[#2C241A] rounded-full">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] font-medium">Ewaso Nyiro, Narok County</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F5F5F5] leading-[1.15]">
              Curated Artifacts. <br />
              <span className="font-serif italic text-[#C5A880]">Timeless Heritage.</span>
            </h1>
            
            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Welcome to Lena Souvenir Shop. We source and preserve exquisite, authentic Maasai cultural crafts, museum-grade curios, and handmade legacy pieces directly from the heart of the Maasai Mara ecosystem.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#gallery" className="group px-8 py-4 bg-[#C5A880] hover:bg-[#B3966E] text-black text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#C5A880]/10">
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 border border-[#262626] hover:border-[#C5A880] bg-transparent text-[#E5E5E5] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center">
                Private Viewing
              </a>
            </div>
          </div>

          {/* Right Showcase Image Column */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative group w-full max-w-md aspect-square bg-[#121212] p-4 border border-[#1A1A1A] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#16120E] to-transparent opacity-40 mix-blend-color-dodge transition-opacity group-hover:opacity-60" />
              <img 
                src="/IMG_20260515_174831.jpg" 
                alt="Lena Souvenir Authentic Lion Crest Heritage Display" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-700"
                onError={(e) => {
                  // Fallback in case root structure renders differently locally
                  e.currentTarget.src = 'IMG_20260515_174831.jpg';
                }}
              />
              {/* Outer Minimal Frame Accent */}
              <div className="absolute -inset-2 border border-[#C5A880]/5 pointer-events-none group-hover:border-[#C5A880]/20 transition-colors duration-500" />
            </div>
          </div>

        </div>
      </section>

      {/* Heritage Features Banner */}
      <section id="heritage" className="py-16 border-b border-[#1A1A1A] bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#161616] border border-[#262626] text-[#C5A880]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#F5F5F5] mb-2">100% Guaranteed Authenticity</h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">Every single beadwork piece, carving, and textile is handmade by indigenous artisans using traditional generations-old techniques.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#161616] border border-[#262626] text-[#C5A880]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#F5F5F5] mb-2">Global Shipping & Transport</h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">Secure packaging and international courier coordination ensure your chosen heavy wood carvings and premium relics arrive pristine.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#161616] border border-[#262626] text-[#C5A880]">
              <Compass className="w-6 h-5" />
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#F5F5F5] mb-2">Ethical Community Commerce</h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">We directly empower women guilds and elders across Narok County, channeling global commerce directly to the kraals and homesteads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight Segment */}
      <section id="gallery" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] block">The Archive</span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-[#F5F5F5]">Signature Gallery Exhibition</h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto pt-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Premium Beaded Necklaces", desc: "Intricate symbolic color compositions representing heritage, status, and warrior lineages." },
            { title: "Hand-Carved Ebony Figurines", desc: "Sculpted from sustainably sourced hardwoods, showcasing deep fine-grain precision detailing." },
            { title: "Traditional Tribal Shield Relics", desc: "Authentic treated leather works framed in organic dyes and sacred geometric patterns." }
          ].map((item, index) => (
            <div key={index} className="bg-[#0F0F0F] border border-[#1A1A1A] p-8 hover:border-[#C5A880]/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="text-[10px] text-[#C5A880] font-mono tracking-wider">0{index + 1} // PORTFOLIO</div>
                <h4 className="text-base font-medium tracking-wide text-[#E5E5E5] group-hover:text-[#C5A880] transition-colors">{item.title}</h4>
                <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">{item.desc}</p>
              </div>
              <div className="pt-6 border-t border-[#161616] mt-8 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#A3A3A3]">
                <span>Museum Quality</span>
                <span className="text-[#C5A880]">Inquire Only</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Correspondence / Contact Section */}
      <section id="contact" className="py-24 bg-[#0F0F0F] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] block">Aesthetic Trade Desk</span>
            <h2 className="text-3xl font-light text-[#F5F5F5]">Acquisitions & Commissions</h2>
            <p className="text-xs sm:text-sm text-[#8A8A8A] max-w-lg mx-auto font-light leading-relaxed">
              To preserve a professional gallery environment, the owner conducts client interactions exclusively via official digital channels. Connect directly for item catalogs, dimensional specs, or customs declarations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-4">
            <div className="flex items-center gap-4 bg-[#0A0A0A] border border-[#1A1A1A] p-5 text-left">
              <div className="text-[#C5A880]"><Mail className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest uppercase text-[#525252] block">Official Email</span>
                <a href="mailto:maralenasouvenirs@gmail.com" className="text-xs font-mono text-[#E5E5E5] hover:text-[#C5A880] transition-colors">maralenasouvenirs@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#0A0A0A] border border-[#1A1A1A] p-5 text-left">
              <div className="text-[#C5A880]"><MapPin className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest uppercase text-[#525252] block">Physical Gallery</span>
                <span className="text-xs text-[#E5E5E5] font-light">Ewaso Nyiro Town, Narok, KE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Credit Footer */}
      <footer className="border-t border-[#1A1A1A] bg-[#0A0A0A] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] tracking-[0.2em] uppercase text-[#525252]">
          <p>© 2026 Lena Souvenir Shop. All Rights Reserved.</p>
          <p className="font-light">
            Engineered by <span className="text-[#8A8A8A] hover:text-[#C5A880] transition-colors font-semibold">Sait3tDigitalCyber</span>
          </p>
        </div>
      </footer>
    </div>
  );
              }
        
