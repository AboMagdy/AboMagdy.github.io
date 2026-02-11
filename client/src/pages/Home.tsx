import { ArrowRight, Github, Linkedin, Mail, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const projects = [
  {
    name: "Weather Forecast Project",
    description: "Interactive weather patterns & predictive analysis",
    category: "Climate Analytics",
    url: "https://github.com/AboMagdy/WeatherForecastProject",
    icon: "🌤️",
  },
  {
    name: "Sales Analytics",
    description: "Comprehensive sales performance & trend tracking",
    category: "Business Intelligence",
    url: "https://github.com/AboMagdy/Sales_Project",
    icon: "📊",
  },
  {
    name: "Financial Analysis",
    description: "P&L reporting and financial health monitoring",
    category: "Finance",
    url: "https://github.com/AboMagdy/Financial_Analysis_Project",
    icon: "💰",
  },
  {
    name: "Netflix Dashboard",
    description: "Content analysis and viewership trends",
    category: "Media & Entertainment",
    url: "https://github.com/AboMagdy/Netflix_Project",
    icon: "🎬",
  },
  {
    name: "Supply Chain Analysis",
    description: "Logistics optimization and inventory management",
    category: "Operations",
    url: "https://github.com/AboMagdy/Supply_Chain_Analysis_Project",
    icon: "🚚",
  },
  {
    name: "CRM System",
    description: "Customer relationship and pipeline management",
    category: "Sales Operations",
    url: "https://github.com/AboMagdy/CRM_System_Project",
    icon: "👥",
  },
  {
    name: "Uber Analytics",
    description: "Ride-sharing data patterns and geographical analysis",
    category: "Transportation",
    url: "https://github.com/AboMagdy/Uber_Project",
    icon: "🚗",
  },
  {
    name: "YouTube Trending",
    description: "Viral content metrics and engagement analysis",
    category: "Social Media",
    url: "https://github.com/AboMagdy/Youtube_Trending_Project",
    icon: "📹",
  },
  {
    name: "Manufacturing Analysis",
    description: "Production efficiency and quality control tracking",
    category: "Industrial",
    url: "https://github.com/AboMagdy/Manufacturing_Analysis_Project",
    icon: "🏭",
  },
  {
    name: "Coffee Sales",
    description: "Retail performance and product mix analysis",
    category: "Retail",
    url: "https://github.com/AboMagdy/Coffe_sales_Project",
    icon: "☕",
  },
  {
    name: "AnalyzeForce",
    description: "Specialized workforce and operational analytics",
    category: "HR Analytics",
    url: "https://github.com/AboMagdy/ANALYZEFORCE_Project",
    icon: "💼",
  },
  {
    name: "Data Survey",
    description: "Survey response analysis and demographic insights",
    category: "Research",
    url: "https://github.com/AboMagdy/Data_Survey_Project",
    icon: "📋",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 0, 110, 0.1) 25%, rgba(255, 0, 110, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 110, 0.1) 75%, rgba(255, 0, 110, 0.1) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(255, 0, 110, 0.1) 25%, rgba(255, 0, 110, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 110, 0.1) 75%, rgba(255, 0, 110, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255, 0, 110, 0.3), transparent)",
            top: "-200px",
            right: "-200px",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(131, 56, 236, 0.3), transparent)",
            bottom: "-200px",
            left: "-200px",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-[#ff006e]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-[#ff006e]">&lt;</span>
            <span className="text-[#e0e7ff]">Mohamed</span>
            <span className="text-[#8338ec]">/</span>
            <span className="text-[#ff006e]">&gt;</span>
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="#projects"
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4 float-up">
                <p className="text-[#06ffa5] font-mono font-semibold tracking-widest uppercase text-sm">
                  &gt; WELCOME TO MY PORTFOLIO
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#e0e7ff] leading-tight neon-text">
                  Data Analyst & Power BI Expert
                </h1>
                <p className="text-xl text-[#a8b5d1] leading-relaxed font-light">
                  Transforming complex datasets into compelling visual narratives.
                  I specialize in creating interactive dashboards and data models
                  that drive informed decision-making.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="#projects">
                  <Button className="bg-[#ff006e] hover:bg-[#ff1a7f] text-white font-semibold px-8 py-6 text-lg rounded-lg flex items-center gap-2 glow-pulse">
                    Explore Projects
                    <ArrowRight size={20} />
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="border-[#8338ec] text-[#8338ec] hover:bg-[#8338ec]/10 px-8 py-6 text-lg rounded-lg"
                  >
                    Get in Touch
                  </Button>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2 border-l-2 border-[#ff006e] pl-4">
                  <p className="text-3xl font-bold text-[#ff006e]">12</p>
                  <p className="text-[#a8b5d1] text-sm font-mono">PROJECTS</p>
                </div>
                <div className="space-y-2 border-l-2 border-[#8338ec] pl-4">
                  <p className="text-3xl font-bold text-[#8338ec]">3+</p>
                  <p className="text-[#a8b5d1] text-sm font-mono">YRS EXP</p>
                </div>
                <div className="space-y-2 border-l-2 border-[#06ffa5] pl-4">
                  <p className="text-3xl font-bold text-[#06ffa5]">100%</p>
                  <p className="text-[#a8b5d1] text-sm font-mono">DEDICATED</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff006e]/20 to-[#8338ec]/20 rounded-2xl blur-3xl glow-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] rounded-2xl border-2 border-[#ff006e]/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff006e]/10 to-[#8338ec]/10 animate-pulse"></div>
                  <div className="relative text-center space-y-4 z-10">
                    <div className="text-6xl">📊</div>
                    <p className="text-[#ff006e] font-mono font-semibold tracking-wider">
                      POWER BI
                    </p>
                    <p className="text-[#a8b5d1] text-sm font-mono">EXPERT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#06ffa5] font-mono font-semibold tracking-widest uppercase text-sm mb-4">
              &gt; PORTFOLIO
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e7ff] mb-4">
              Featured Projects
            </h2>
            <p className="text-[#a8b5d1] text-lg max-w-2xl mx-auto font-light">
              A curated selection of my Power BI dashboards and data analysis
              projects across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-[#ff006e]/30 rounded-xl p-6 hover:border-[#ff006e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff006e]/20 hover:-translate-y-2 group-hover:glow-pulse">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <Zap
                      size={20}
                      className="text-[#a8b5d1] group-hover:text-[#ff006e] transition-colors"
                    />
                  </div>
                  <p className="text-[#06ffa5] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-[#e0e7ff] mb-2 group-hover:text-[#ff006e] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[#a8b5d1] text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#06ffa5] font-mono font-semibold tracking-widest uppercase text-sm mb-4">
              &gt; EXPERTISE
            </p>
            <h2 className="text-4xl font-bold text-[#e0e7ff]">
              Core Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Power BI",
                description:
                  "Desktop, Service, Premium. Advanced DAX, Power Query, and report design.",
                icon: "📊",
                color: "#ff006e",
              },
              {
                title: "Data Modeling",
                description:
                  "Complex data models, dimensional modeling, and semantic layer design.",
                icon: "🏗️",
                color: "#8338ec",
              },
              {
                title: "SQL & Databases",
                description:
                  "Query optimization, data transformation, and database management.",
                icon: "🗄️",
                color: "#3a86ff",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f3a]/50 to-[#0a0e27]/50 border border-[#2d3748] rounded-xl p-8 hover:border-[#ff006e]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff006e]/10"
                style={{
                  borderLeftColor: skill.color,
                  borderLeftWidth: "4px",
                }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-[#e0e7ff] mb-3">
                  {skill.title}
                </h3>
                <p className="text-[#a8b5d1] font-light">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#06ffa5] font-mono font-semibold tracking-widest uppercase text-sm mb-4">
              &gt; GET IN TOUCH
            </p>
            <h2 className="text-4xl font-bold text-[#e0e7ff] mb-6">
              Let's Work Together
            </h2>
            <p className="text-[#a8b5d1] text-lg mb-12 font-light">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="https://www.linkedin.com/in/mohamed-allam-862747a6"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-[#2d3748] rounded-lg p-6 hover:border-[#8338ec]/50 transition-all hover:shadow-lg hover:shadow-[#8338ec]/20">
                  <Linkedin className="w-8 h-8 text-[#8338ec] mx-auto mb-3" />
                  <p className="text-[#e0e7ff] font-semibold">LinkedIn</p>
                  <p className="text-[#a8b5d1] text-sm mt-1 font-light">
                    Connect with me
                  </p>
                </div>
              </a>

              <a href="mailto:mmagdy180@gmail.com" className="group">
                <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-[#2d3748] rounded-lg p-6 hover:border-[#ff006e]/50 transition-all hover:shadow-lg hover:shadow-[#ff006e]/20">
                  <Mail className="w-8 h-8 text-[#ff006e] mx-auto mb-3" />
                  <p className="text-[#e0e7ff] font-semibold">Email</p>
                  <p className="text-[#a8b5d1] text-sm mt-1 font-light">
                    mmagdy180@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/AboMagdy"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-[#2d3748] rounded-lg p-6 hover:border-[#06ffa5]/50 transition-all hover:shadow-lg hover:shadow-[#06ffa5]/20">
                  <Github className="w-8 h-8 text-[#06ffa5] mx-auto mb-3" />
                  <p className="text-[#e0e7ff] font-semibold">GitHub</p>
                  <p className="text-[#a8b5d1] text-sm mt-1 font-light">
                    View repositories
                  </p>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[#a8b5d1] mb-12">
              <MapPin size={18} className="text-[#ff006e]" />
              <span className="font-mono">Based in Saudi Arabia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2d3748] py-8 px-4 bg-[#0a0e27]/80 relative z-10">
        <div className="container mx-auto text-center text-[#a8b5d1] font-light">
          <p className="font-mono text-sm">
            © 2026 Mohamed Allam. All rights reserved. | Powered by React &
            Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
