"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Trophy,
  Sparkles,
  Award,
  VideoIcon,
  BellIcon,
  ChevronRight,
  Crown,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-5.jpg",
    "/hero.jpeg",
  ];

  const meetingLinks = [
    {
      href: "https://meet.google.com/vjj-cfpx-dav?pli=1",
      icon: VideoIcon,
      label: "G-MEET",
      bg: "from-blue-500 to-indigo-600",
    },
    {
      href: "https://meet.jit.si/TelanganaChessAcademy",
      icon: Play,
      label: "START CALL",
      bg: "from-cyan-500 to-sky-600",
    },
    {
      href: "https://meet.google.com/wuk-nfie-mgx",
      icon: Play,
      label: "Call NARESH",
      bg: "from-purple-500 to-fuchsia-600",
    },
    {
      href: "https://meet.google.com/atu-ziid-ojg",
      icon: Sparkles,
      label: "TCS Meeting",
      bg: "from-emerald-500 to-teal-600",
    },
    {
      href: "https://meet.google.com/uux-vyxa-pgq",
      icon: BellIcon,
      label: "BCA MEETING",
      bg: "from-green-500 to-lime-600",
    },
    {
      href: "https://meet.google.com/mxj-uwyj-vzp",
      icon: BellIcon,
      label: "Call Rohith",
      bg: "from-orange-500 to-red-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-29 flex items-center justify-center overflow-hidden bg-background sm:pt-25 md:pt-24 lg:pt-28"
      style={{
        background:
          "linear-gradient(135deg, #F5F7FA 0%, #E2E8F0 60%, #2B6CB0 90%, #9F7AEA 10%)",
      }}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-8 right-8 w-24 h-24 bg-[#2B6CB0] rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-32 left-12 w-20 h-20 bg-[#9F7AEA] rounded-full opacity-15 animate-pulse-slow" style={{ animationDelay: "0.8s" }}></div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left space-y-10">
            
            {/* STYLIZED TITLE */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-200 animate-bounce-slow shadow-sm">
                <Crown className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Premium Coaching</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 leading-none">
                BHARAT CHESS {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38A169] to-[#2B6CB0] animate-gradient">ACADEMY</span>
              </h1>
            </div>

            {/* PRIMARY CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#38A169] text-[#38A169] hover:bg-[#38A169] hover:text-white font-bold h-16 px-8 rounded-2xl shadow-xl transition-all duration-300 text-lg group bg-white/50"
              >
                <Link href="https://telanganachessacademy.com/tournaments/" target="_blank">
                  <Trophy className="w-6 h-6 mr-2" />
                  EVENTS
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 text-white font-bold h-16 px-8 rounded-2xl shadow-2xl transition-all duration-300 text-lg group animate-pulse-glow"
              >
                <Link href="https://svc-ui-7.netlify.app/login" target="_blank">
                  <Users className="w-6 h-6 mr-2" />
                  ONLINE COACHING
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* QUICK MEETING GRID - DIFFERENT COLORS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
              {meetingLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className={`relative overflow-hidden bg-gradient-to-br ${link.bg} p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-2 text-white`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                    <link.icon className="w-4 h-4 relative z-10" />
                    <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider relative z-10">
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 pt-4">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 text-center border border-white/40 shadow-sm">
                <div className="text-2xl font-black text-slate-900">120+</div>
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Events</div>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 text-center border border-white/40 shadow-sm">
                <div className="text-2xl font-black text-slate-900">600+</div>
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Students</div>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 text-center border border-white/40 shadow-sm">
                <div className="text-2xl font-black text-slate-900">60+</div>
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Champions</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Image Carousel */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Academy Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ))}
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all ${currentImageIndex === idx ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-custom 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 10px 30px -5px rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 15px 45px -5px rgba(139, 92, 246, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
