"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { MessageCircle, Github, Linkedin, BookOpen, Code } from "lucide-react"
import ChatWidget from "../components/chat-widge"

export default function Portfolio() {
  const [isChatOpen, setIsChatOpen] = useState(false)

const projects = [
  {
    title: "Air-Drawing to Image Generator",
    description: "Developed a gesture recognition system where users draw in the air, captured via webcam, and images are generated using Gemini, CvZone, and NVIDIA AI Generator.",
    tech: ["Python", "OpenCV", "Gemini", "CvZone", "NVIDIA AI"],
    status: "Completed",
  },
  {
    title: "2nd Year Group Project - Project Management System",
    description: "Designed and built a project management system for UCSC 2nd year group project, including task tracking, deadlines, and member collaboration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    status: "Completed",
  },
  {
    title: "Movie App (Mobile)",
    description: "Mobile app to search movies, view trailers, descriptions, box office data, and ratings. Includes a 'mark as watched' feature.",
    tech: ["React Native", "Expo", "TMDB API"],
    status: "Completed",
  },
  {
    title: "Lora Chemicals - Inventory Management System",
    description: "Comprehensive inventory system for Lora Chemicals, covering supplier input to customer delivery. Features batch tracking, sales rep management, and financial reporting.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    status: "In Progress",
  },
];


  const certificates = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera - DeepLearning.AI",
      date: "2025",
      type: "Online Course"
    }
    ,
    {
      title: "Docker for the Absolute Beginner",
      issuer: "KodeKloud",
      date: "2025",
      type: "Online Course"
    }
    ,
    {
      title: "AWS 101 - Introduction to Cloud Computing",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      type: "Online Course"
    }

  ]

  // const achievements = [
  //   {
  //     title: "University Coding Competition",
  //     position: "2nd Place",
  //     date: "2024",
  //     description: "Algorithmic problem solving competition",
  //   },
  //   {
  //     title: "Hackathon Winner",
  //     position: "1st Place",
  //     date: "2023",
  //     description: "24-hour hackathon focused on AI solutions",
  //   },
  //   {
  //     title: "Dean's List",
  //     position: "Academic Excellence",
  //     date: "2023-2024",
  //     description: "Maintained GPA above 3.8",
  //   },
  // ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-cyan-400">Thamindu Wijerathne</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">I'm Thamindu</h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">Passionate about Machine Learning & AI</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I'm an undergraduate Computer Science student with a deep passion for machine learning and artificial
                intelligence. Currently seeking internship opportunities to apply my skills in real-world projects and
                contribute to innovative solutions. I love solving complex problems and building intelligent systems
                that make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-cyan-900 text-cyan-100 px-4 py-2">
                  Machine Learning
                </Badge>
                <Badge className="bg-blue-900 text-blue-100 px-4 py-2">
                  Python
                </Badge>
                <Badge className="bg-purple-900 text-purple-100 px-4 py-2">
                  Data Science
                </Badge>
                <Badge className="bg-green-900 text-green-100 px-4 py-2">
                  Web Development
                </Badge>
                {/* <Badge className="bg-orange-900 text-orange-100 px-4 py-2">
                  Seeking Internship
                </Badge> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:border-cyan-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} className="border border-cyan-400 text-cyan-400 bg-transparent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Badge className={project.status === "Completed" ? "bg-green-600" : "bg-yellow-600"}>
                    {project.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Certificates & Learning</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                    <Badge className="border border-blue-400 text-blue-400 bg-transparent">
                      {cert.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{cert.title}</CardTitle>
                  <CardDescription className="text-slate-300">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-400 font-semibold">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Achievements & Competitions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:border-yellow-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                    <Badge className="bg-yellow-600">{achievement.position}</Badge>
                  </div>
                  <CardTitle className="text-white">{achievement.title}</CardTitle>
                  <CardDescription className="text-slate-300">{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-400 font-semibold">{achievement.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-lg text-slate-300 mb-8">
            I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Thamindu-wijerathne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-slate-700 border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400 border"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/thamindu-wijerathne-a2a6a12a9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-slate-700 border-slate-600 text-white hover:border-blue-400 hover:text-blue-400 border"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsChatOpen(true)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
        </Button>

        {/* Tooltip */}
        {!isChatOpen && (
          <div className="absolute bottom-16 right-0 bg-slate-700 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Ask me about my experience!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-700" />
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsChatOpen(false)}
          />
          <ChatWidget onClose={() => setIsChatOpen(false)} />
        </>
      )}
    </div>
  )
}
