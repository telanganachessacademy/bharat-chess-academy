import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Users,
  Target,
  Award,
  BookOpen,
  Star,
  ChevronDown,
  Mail,
  UserCheck,
  FileText,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-700 text-white px-6 py-2 text-lg">
            About Our Academy
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Bharat chess academy
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Nurturing chess champions since 2010, we are dedicated to developing
            strategic thinking, problem-solving skills, and competitive
            excellence in players of all ages.
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white bg-transparent"
              >
                Explore More <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border border-gray-200">
              <DropdownMenuItem asChild>
                <Link href="/contact" className="flex items-center cursor-pointer">
                  <Mail className="mr-2 h-4 w-4 text-blue-700" />
                  Contact Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/coaches" className="flex items-center cursor-pointer">
                  <UserCheck className="mr-2 h-4 w-4 text-blue-700" />
                  Our Coaches
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs" className="flex items-center cursor-pointer">
                  <FileText className="mr-2 h-4 w-4 text-blue-700" />
                  Blogs
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-700 text-white border-0 shadow-lg hover-lift">
              <CardContent className="p-8">
                <Target className="w-16 h-16 mb-6 text-white" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To provide world-class chess education that develops critical
                  thinking, strategic planning, and competitive spirit while
                  fostering a love for the game that lasts a lifetime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-700 text-white border-0 shadow-lg hover-lift">
              <CardContent className="p-8">
                <Star className="w-16 h-16 mb-6 text-white" />
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To be the premier chess academy in India, producing national and
                  international champions while making chess accessible to every
                  aspiring player.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-16 text-gray-900">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Students Trained" },
              { icon: Trophy, number: "50+", label: "Tournaments Won" },
              { icon: Award, number: "15+", label: "National Champions" },
              { icon: BookOpen, number: "12+", label: "Years Experience" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-gray-50 border border-gray-200 hover:border-blue-600 hover-lift"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010 by Grandmaster Rajesh Kumar, Telangana Chess
                  Academy began as a small coaching center with just 10 students.
                  Our founder's vision was to create a nurturing environment where
                  young minds could develop their chess skills while building
                  character.
                </p>
                <p>
                  Over the years, we have grown into one of India's most respected
                  chess academies, producing numerous state and national champions.
                  Our systematic approach to chess education combines traditional
                  teaching methods with modern technology.
                </p>
                <p>
                  Today, we continue to inspire the next generation of chess
                  players, maintaining our commitment to excellence while making
                  chess education accessible to all.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-700 rounded-2xl p-8 text-white shadow-lg hover-lift">
                <div className="text-6xl mb-4">♔</div>
                <h3 className="text-2xl font-bold mb-4">Excellence in Chess Education</h3>
                <p className="text-lg opacity-90">
                  We believe every student has the potential to become a champion.
                  Our personalized approach ensures each player receives the
                  attention they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Our Educational Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white border border-gray-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Holistic Development
                </h3>
                <p className="text-gray-600">
                  We focus not just on chess skills, but on developing analytical
                  thinking, patience, and decision-making abilities that benefit
                  students in all areas of life.
                </p>
              </Card>
              <Card className="bg-white border border-gray-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Personalized Learning
                </h3>
                <p className="text-gray-600">
                  Every student learns differently. Our instructors adapt their
                  teaching methods to match each student's learning style, pace, and
                  goals.
                </p>
              </Card>
              <Card className="bg-white border border-gray-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Progressive Curriculum
                </h3>
                <p className="text-gray-600">
                  Our structured curriculum takes students from basic rules to
                  advanced strategies, ensuring solid foundations before moving to
                  complex concepts.
                </p>
              </Card>
            </div>
            <div className="bg-purple-100 rounded-2xl p-8 border border-purple-300">
              <h3 className="text-3xl font-bold text-purple-800 mb-6">
                Our Teaching Principles
              </h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Build strong fundamentals before advancing to complex strategies",
                  "Encourage critical thinking and independent analysis",
                  "Foster a positive learning environment that celebrates progress",
                  "Integrate technology to enhance traditional teaching methods",
                  "Prepare students for competitive play while maintaining love for the game",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-700 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for the highest standards in chess education and student development.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain honesty, fairness, and ethical practices in all our interactions.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously evolve our teaching methods to provide the best learning experience.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover-lift"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-lg leading-relaxed opacity-90">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
