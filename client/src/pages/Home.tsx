import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mohamed Allam
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="#projects"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">
                  Welcome to my portfolio
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Data Analyst & Power BI Expert
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Transforming complex datasets into compelling visual narratives.
                  I specialize in creating interactive dashboards and data models
                  that drive informed decision-making.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="#projects">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                    Explore Projects
                    <ArrowRight size={20} />
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg rounded-lg"
                  >
                    Get in Touch
                  </Button>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-cyan-400">12</p>
                  <p className="text-slate-400 text-sm">Projects</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-cyan-400">3+</p>
                  <p className="text-slate-400 text-sm">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-cyan-400">100%</p>
                  <p className="text-slate-400 text-sm">Dedication</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-400/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📊</div>
                    <p className="text-cyan-400 font-semibold">Power BI</p>
                    <p className="text-slate-400 text-sm">Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
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
                <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <ArrowRight
                      size={20}
                      className="text-slate-600 group-hover:text-cyan-400 transition-colors"
                    />
                  </div>
                  <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Expertise
            </p>
            <h2 className="text-4xl font-bold text-white">
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
              },
              {
                title: "Data Modeling",
                description:
                  "Complex data models, dimensional modeling, and semantic layer design.",
                icon: "🏗️",
              },
              {
                title: "SQL & Databases",
                description:
                  "Query optimization, data transformation, and database management.",
                icon: "🗄️",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-colors"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-slate-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-slate-300 text-lg mb-12">
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
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-slate-400 text-sm mt-1">Connect with me</p>
                </div>
              </a>

              <a
                href="mailto:mmagdy180@gmail.com"
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-slate-400 text-sm mt-1">
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
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <Github className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-slate-400 text-sm mt-1">View repositories</p>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-400 mb-12">
              <MapPin size={18} className="text-cyan-400" />
              <span>Based in Saudi Arabia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 bg-slate-950">
        <div className="container mx-auto text-center text-slate-400">
          <p>
            © 2026 Mohamed Allam. All rights reserved. | Powered by React &
            Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
