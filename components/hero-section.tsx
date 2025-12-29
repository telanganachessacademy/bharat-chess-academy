"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Trophy,
  Star,
  Sparkles,
  Award,
  VideoIcon,
  BellIcon,
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

  // Auto-change image every 4 seconds
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
      <div className="absolute bottom-16 right-12 w-32 h-32 bg-[#2B6CB0] rounded-full opacity-15 animate-pulse-slow" style={{ animationDelay: "1.6s" }}></div>
      <div className="absolute bottom-32 left-8 w-16 h-16 bg-[#FF69B4] rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: "2.4s" }}></div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* ADDED TITLE */}
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#38A169]">
              Bharat Chess Academy
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/* ONLINE COACHING — RED */}
              <Link href="https://coaching.telanganachessacademy.com/login" target="_blank">
                <Button
                  size="lg"
                  className="bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-10 py-7 rounded-full text-lg shadow-xl"
                >
                  <Users className="w-7 h-7 mr-3" />
                  ONLINE COACHING
                </Button>
              </Link>

              {/* EVENTS — GREEN */}
              <Link href="https://telanganachessacademy.com/tournaments/" target="_blank">
                <Button
                  size="lg"
                  className="bg-[#38A169] hover:bg-[#2F855A] text-white font-bold px-10 py-7 rounded-full text-lg shadow-xl"
                >
                  <Trophy className="w-7 h-7 mr-3" />
                  EVENTS & TOURNAMENTS
                </Button>
              </Link>
            </div>

            {/* Quick Meeting Buttons - All Different Colors */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              {/* G-Meet — BLUE */}
              <Link href="https://meet.google.com/vjj-cfpx-dav?pli=1" target="_blank">
                <Button
                  variant="outline"
                  className="border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-semibold rounded-full"
                >
                  <VideoIcon className="w-5 h-5 mr-2" /> G-Meet
                </Button>
              </Link>

              {/* Start Call — PURPLE */}
              <Link href="https://meet.jit.si/TelanganaChessAcademy" target="_blank">
                <Button
                  variant="outline"
                  className="border-2 border-[#805AD5] text-[#805AD5] hover:bg-[#805AD5] hover:text-white font-semibold rounded-full"
                >
                  <Play className="w-5 h-5 mr-2" /> Start Call
                </Button>
              </Link>

              {/* Call Naresh — ORANGE */}
              <Link href="https://meet.google.com/wuk-nfie-mgx" target="_blank">
                <Button
                  variant="outline"
                  className="border-2 border-[#DD6B20] text-[#DD6B20] hover:bg-[#DD6B20] hover:text-white font-semibold rounded-full"
                >
                  <Play className="w-5 h-5 mr-2" /> Call Naresh
                </Button>
              </Link>

              {/* TCS Meeting — TEAL */}
              <Link href="https://meet.google.com/atu-ziid-ojg" target="_blank">
                <Button
                  variant="outline"
                  className="border-2 border-[#319795] text-[#319795] hover:bg-[#319795] hover:text-white font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" /> TCS Meeting
                </Button>
              </Link>

              {/* BCA Meeting — PINK */}
              <Link href="https://meet.google.com/uux-vyxa-pgq" target="_blank">
                <Button
                  variant="outline"
                  className="border-2 border-[#D53F8C] text-[#D53F8C] hover:bg-[#D53F8C] hover:text-white font-semibold rounded-full"
                >
                  <BellIcon className="w-5 h-5 mr-2" /> BCA Meeting
                </Button>
              </Link>

              {/* Call Rohith — YELLOW/GOLD */}
              <Link href="https://meet.google.com/mxj-uwyj-vzp" target="_blank">
                <Button
                  variant="outline"
                  className="border-2 border-[#00fffff] text-[#00fffff] hover:bg-[#D69E2E] hover:text-white font-semibold rounded-full"
                >
                  <BellIcon className="w-5 h-5 mr-2" /> Call Rohith
                </Button>
              </Link>
            </div>

            {/* Description removed as requested */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-white/30">
                <div className="w-14 h-14 bg-[#2B6CB0] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">120+</div>
                <div className="text-gray-600">Tournaments</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-white/30">
                <div className="w-14 h-14 bg-[#2B6CB0] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">600+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-white/30">
                <div className="w-14 h-14 bg-[#9F7AEA] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">60+</div>
                <div className="text-gray-600">Champions</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Image Carousel */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-2xl aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/30">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Bharat Chess Academy - Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                </div>
              ))}

              {/* Dot Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-10 h-3 bg-white rounded-full"
                        : "w-3 h-3 bg-white/60 rounded-full hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}