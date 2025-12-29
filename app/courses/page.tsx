"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Clock,
  BookOpen,
  Target,
  Zap,
  Crown,
} from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  const [expandedCourses, setExpandedCourses] = useState<{ [key: number]: boolean }>({});

  const toggleFeatures = (index: number) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const courses = [
    {
      title: "Beginner Level –1",
      level: "Beginner",
      duration: "3 Months",
      price: "₹15,000",
      students: "50+",
      rating: "4.9",
      icon: BookOpen,
      color: "from-[#2B6CB0] to-[#9F7AEA]",
      description: "Perfect for complete beginners starting their chess journey.",
      features: [
        "Introduction to Chess",
        "Chess Board setup and Name of Pieces",
        "Initial Position of pieces",
        "Movement of Pieces",
        "Value of Pieces",
        "Rules",
        "Capture and Exchange",
        "Files, Ranks, Diagonals, Center",
        "Checkmate and Stalemate",
        "Special Rules – Castling, Pawn Promotion, and En Passant",
      ],
      schedule: "2 classes per week (1.5 hours each)",
      ageGroup: "6+ years",
      classSize: "8-10 students",
    },
    {
      title: "Beginner Level –2",
      level: "Beginner",
      duration: "3 Months",
      price: "₹15,000",
      students: "45+",
      rating: "4.8",
      icon: BookOpen,
      color: "from-[#2B6CB0] to-[#9F7AEA]",
      description: "Builds on basics with focus on checkmates and simple tactics.",
      features: [
        "Elementary Checkmates",
        "King + Queen Vs King",
        "King + 2 Rooks Vs King",
        "King + Rook Vs King",
        "King + 2 Bishops Vs King",
        "Check Combination",
        "Checkmate in 1 move",
        "Checkmate in 2 move",
        "Pin (basic)",
        "Fork (basic)",
      ],
      schedule: "2 classes per week (1.5 hours each)",
      ageGroup: "6+ years",
      classSize: "8-10 students",
    },
    {
      title: "Intermediate Level –1",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "from-[#48BB78] to-[#38A169]",
      description: "Introduces intermediate players to advanced tactics.",
      features: [
        "Pin",
        "Absolute Pin",
        "Relative Pin",
        "Fork",
        "Checkmate in 3 moves",
        "Checkmate in 4 moves",
        "Double Attack",
        "Discovered Check",
      ],
      schedule: "3 classes per week (2 hours each)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
    },
    {
      title: "Intermediate Level –2",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "from-[#48BB78] to-[#38A169]",
      description: "Focuses on opening basics and tactical patterns.",
      features: [
        "Opening Basics",
        "Center control",
        "Development of pieces",
        "Placing piece on good squares",
        "Coordination of pieces",
        "Opening – Giuoco Piano (King Pawn Opening)",
        "Checkmate in 3 moves",
        "Checkmate in 4 moves",
        "Double Attack",
        "Discovered Check",
      ],
      schedule: "3 classes per week (2 hours each)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
    },
    {
      title: "Intermediate Level –3",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "35+",
      rating: "4.8",
      icon: Target,
      color: "from-[#48BB78] to-[#38A169]",
      description: "Deepens tactical understanding with complex motifs.",
      features: [
        "Discovered Attack",
        "Decoy",
        "X – ray",
        "Attraction",
        "Interference",
        "Over worked piece",
      ],
      schedule: "3 classes per week (2 hours each)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
    },
    {
      title: "Intermediate Level –4",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "35+",
      rating: "4.8",
      icon: Target,
      color: "from-[#48BB78] to-[#38A169]",
      description: "Covers opening preparation and pawn structures.",
      features: [
        "Opening",
        "Preparing an Opening repertoire according to need of Intermediate level",
        "Open files and Diagonals",
        "Pawn Structure",
        "Double Pawns",
        "Isolated Pawn",
        "Connected Pawns",
        "Backward Pawn",
        "Passed Pawn",
        "Double Check",
        "Trapped Man",
        "Zugzwang",
        "Clearance",
      ],
      schedule: "3 classes per week (2 hours each)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
    },
    {
      title: "Advanced Level –1",
      level: "Advanced",
      duration: "6 Months",
      price: "₹30,000",
      students: "25+",
      rating: "4.9",
      icon: Trophy,
      color: "from-[#9F7AEA] to-[#D53F8C]",
      description: "Intensive training for competitive players.",
      features: [
        "Types of Centre",
        "Open Centre",
        "Closed Centre",
        "Static Centre",
        "Dynamic Centre",
        "Pawn Centre",
        "Pawn Endgames",
        "Opening Repertoire for Advanced Level player",
        "Space Advantage",
        "In depth analysis of Opening lines",
        "Pawn chain",
        "Pawn wedge",
        "Prophylaxis",
        "Exploiting an Advantage",
        "Knight Endgames",
        "Outpost",
        "Including Pieces into Attack",
        "Greek gift",
        "Focal Point g7",
        "Sacrifice on f7",
        "Sacrifice on h6",
        "Rook Lifting",
        "Bishop Vs Knight",
        "Initiative",
        "Manoeuvring",
        "Positional Sacrifices",
      ],
      schedule: "4 classes per week (2.5 hours each)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
    },
    {
      title: "Advanced Level –2",
      level: "Expert",
      duration: "6 Months",
      price: "₹30,000",
      students: "20+",
      rating: "4.9",
      icon: Crown,
      color: "from-[#F6E05E] to-[#DD6B20]",
      description: "Elite training for aspiring masters with focus on discipline.",
      features: [
        "Conditions",
        "Completing Chess homework on time",
        "Participation in tournaments as recommended",
        "Regular attendance",
        "Regular practice at home",
      ],
      schedule: "4 classes per week (2.5 hours each)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] to-[#E9D8FD]">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-lg">
            Courses
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Chess Courses for Every Level
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From complete beginners to aspiring grandmasters, we have the perfect course to elevate your chess game.
            Choose your path to chess mastery!
          </p>
        </div>
      </section>
      {/* Course Levels Overview */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Find Your Perfect Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { level: "Beginner", description: "New to chess", color: "bg-[#2B6CB0]" },
              { level: "Intermediate", description: "Know the basics", color: "bg-[#48BB78]" },
              { level: "Advanced", description: "Competitive player", color: "bg-[#9F7AEA]" },
            ].map((level, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 border-2 hover:border-[#9F7AEA] transition-all duration-300">
                <div
                  className={`${level.color} w-12 sm:w-16 h-12 sm:h-16 rounded-full mx-auto mb-2 sm:mb-4 flex items-center justify-center text-white font-bold text-lg sm:text-xl`}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{level.level}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{level.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Courses Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center`}
                      >
                        <course.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-l sm:text-2xl font-bold text-gray-800">{course.title}</h3>
                        <Badge variant="outline" className="mt-1 border-[#48BB78] text-[#48BB78] text-xs sm:text-sm">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-3xl font-bold text-green-600">{course.price}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{course.duration}</div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <Clock className="w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1 text-green-600" />
                      <div className="text-xs font-semibold text-gray-600">Duration</div>
                      <div className="text-sm font-bold text-green-700">{course.duration}</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <Users className="w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1 text-green-600" />
                      <div className="text-xs font-semibold text-gray-600">Students</div>
                      <div className="text-sm font-bold text-green-700">{course.students}</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <Star className="w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1 text-green-600" />
                      <div className="text-xs font-semibold text-gray-600">Rating</div>
                      <div className="text-sm font-bold text-green-700">{course.rating}</div>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{course.description}</p>
                  {/* Course Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Course Details</h4>
                      <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Schedule:</span> {course.schedule}
                        </div>
                        <div>
                          <span className="font-medium">Age Group:</span> {course.ageGroup}
                        </div>
                        <div>
                          <span className="font-medium">Class Size:</span> {course.classSize}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">What You'll Learn</h4>
                      <div className="space-y-1">
                        {course.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-1 sm:gap-2">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                        {course.features.length > 3 && (
                          <>
                            {expandedCourses[index] ? (
                              <>
                                {course.features.slice(3).map((feature, featureIndex) => (
                                  <div key={featureIndex + 3} className="flex items-center gap-1 sm:gap-2">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                                  </div>
                                ))}
                                <button
                                  className="text-xs sm:text-sm text-green-600 font-medium hover:underline"
                                  onClick={() => toggleFeatures(index)}
                                >
                                  Show less
                                </button>
                              </>
                            ) : (
                              <button
                                className="text-xs sm:text-sm text-green-600 font-medium hover:underline"
                                onClick={() => toggleFeatures(index)}
                              >
                                +{course.features.length - 3} more topics
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="flex gap-2 sm:gap-3">
                    <Link href="/contact" className="flex items-center cursor-pointer">
                    <Button className={`flex-1 bg-gradient-to-r ${course.color} hover:opacity-90 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base`}>
                      Enroll Now
                    </Button>
                    </Link>
                    <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Our Courses */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-white">
            Why Our Courses Stand Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: "Small Class Sizes",
                description: "Personalized attention with maximum 10 students per class for optimal learning.",
              },
              {
                icon: Trophy,
                title: "Proven Results",
                description: "Our students consistently achieve rating improvements and tournament success.",
              },
              {
                icon: BookOpen,
                title: "Structured Curriculum",
                description: "Carefully designed progressive curriculum that builds skills systematically.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <feature.icon className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 mx-auto mb-4 sm:mb-6 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
                  <p className="text-base sm:text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
            Ready to Begin Your Chess Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Join thousands of students who have improved their chess skills with our expert-designed courses. Start with a free trial class today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cursor-pointer w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
            >
              Book Free Trial
            </Button>
            </Link>
            <Link href="/contact" className="cursor-pointer w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg bg-transparent"
            >
              Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}