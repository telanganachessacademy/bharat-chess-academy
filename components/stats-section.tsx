"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Award, GamepadIcon } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      value: "50",
      label: "Unique Features",
      suffix: "+",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-[#2563EB] to-[#3B82F6]", // Softer blue gradient
    },
    {
      value: "500",
      label: "Happy Students",
      suffix: "+",
      icon: <Users className="w-8 h-8" />,
      color: "from-[#2563EB] to-[#60A5FA]", // Lighter soft blue gradient
    },
    {
      value: "15",
      label: "FIDE Rated Coaches",
      suffix: "+",
      icon: <Award className="w-8 h-8" />,
      color: "from-[#2563EB] to-[#3B82F6]", // Softer blue gradient
    },
    {
      value: "1000",
      label: "Training Games",
      suffix: "+",
      icon: <GamepadIcon className="w-8 h-8" />,
      color: "from-[#DB2777] to-[#F472B6]", // Soft and professional pink gradient
    },
  ];

  return (
    <section
      id="stats-section"
      className="py-24 bg-gradient-to-br from-white via-[#F3F4F6] to-[#EFF6FF]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-4xl font-bold text-[#1E40AF] mb-4">
            Our Achievements
          </h2>
          <p className="text-lg md:text-xl text-[#334155] max-w-2xl mx-auto font-medium">
            Numbers that speak for our commitment to excellence in chess education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-white border border-gray-200 text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
                isVisible ? "opacity-100 animate-fade-scale" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-md animate-bounce-gentle`}
              >
                {stat.icon}
              </div>

              <div className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-3">
                {stat.value}
                <span className="text-[#2563EB]">{stat.suffix}</span>
              </div>
              <div className="text-[#475569] font-semibold text-lg">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
