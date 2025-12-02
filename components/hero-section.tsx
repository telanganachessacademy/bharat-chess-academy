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
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);

  // Replace these 4 images with your own (upload to /public or use direct URLs)
  const images = [
    "/hero-1.jpg",    // ← Put your images in public/images/
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-4.jpg",
    // Or use external links:
    // "https://yourdomain.com/images/coaching.jpg",
    // "https://yourdomain.com/images/tournament.jpg",
    // "https://yourdomain.com/images/kids-winning.jpg",
    // "https://yourdomain.com/images/group-class.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

          {/* LEFT COLUMN – All Your Original Text & Buttons */}
          <div className="text-center lg:text-left space-y-8">
            

          

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href="https://coaching.telanganachessacademy.com/login" target="_blank">
                <Button size="lg" className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-bold px-10 py-7 rounded-full text-lg shadow-xl">
                  <Users className="w-7 h-7 mr-3" />
                  ONLINE COACHING
                </Button>
              </Link>

              <Link href="https://telanganachessacademy.com/tournaments/" target="_blank">
                <Button size="lg" className="bg-[#805AD5] hover:bg-[#6B46C1] text-white font-bold px-10 py-7 rounded-full text-lg shadow-xl">
                  <Trophy className="w-7 h-7 mr-3" />
                  EVENTS
                </Button>
              </Link>
            </div>

            {/* Quick Meeting Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <Link href="https://meet.google.com/vjj-cfpx-dav?pli=1" target="_blank">
                <Button variant="outline" className="border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-semibold rounded-full">
                  <VideoIcon className="w-5 h-5 mr-2" /> G-Meet
                </Button>
              </Link>
              <Link href="https://meet.jit.si/TelanganaChessAcademy" target="_blank">
                <Button variant="outline" className="border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-semibold rounded-full">
                  <Play className="w-5 h-5 mr-2" /> Start Call
                </Button>
              </Link>
              <Link href="https://meet.google.com/wuk-nfie-mgx" target="_blank">
                <Button variant="outline" className="border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-semibold rounded-full">
                  <Play className="w-5 h-5 mr-2" /> Call Naresh
                </Button>
              </Link>
              <Link href="https://meet.google.com/atu-ziid-ojg" target="_blank">
                <Button variant="outline" className="border-2 border-[#06402B] text-[#06402B] hover:bg-[#06402B] hover:text-white font-semibold rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" /> TCS Meeting
                </Button>
              </Link>
              <Link href="https://meet.google.com/uux-vyxa-pgq" target="_blank">
                <Button variant="outline" className="border-2 border-[#06402B] text-[#06402B] hover:bg-[#06402B] hover:text-white font-semibold rounded-full">
                  <BellIcon className="w-5 h-5 mr-2" /> BCA Meeting
                </Button>
              </Link>
              <Link href="https://meet.google.com/mxj-uwyj-vzp" target="_blank">
                <Button variant="outline" className="border-2 border-[#06402B] text-[#06402B] hover:bg-[#06402B] hover:text-white font-semibold rounded-full">
                  <BellIcon className="w-5 h-5 mr-2" /> Call Rohith
                </Button>
              </Link>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Bharat Chess Academy empowers you with world-class training from FIDE-rated coaches. Build unshakeable skills, dominate the board, and rise to the top of the chess world.
            </p>

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

          {/* RIGHT COLUMN – 4 Auto-Changing Images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-2xl aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/30">
              {/* Image Carousel */}
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