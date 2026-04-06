import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    category: "Business Intelligence",
    challenge: "Manual sales reporting was taking 40+ hours per month, delaying decision-making",
    solution: "Built a comprehensive Power BI dashboard with real-time sales data, regional analysis, and forecasting",
    results: [
      "Reduced reporting time by 80%",
      "Improved sales forecast accuracy by 35%",
      "Enabled real-time performance tracking"
    ],
    metrics: {
      timeReduction: "80%",
      accuracyImprovement: "35%",
      adoptionRate: "95%"
    },
    technologies: ["Power BI", "DAX", "SQL", "Power Query"],
    link: "https://github.com/AboMagdy/Sales-Project",
    icon: "📊"
  },
  {
    id: 2,
    title: "Supply Chain Analytics Dashboard",
    category: "Operations",
    challenge: "Inventory costs were high and supply chain visibility was limited across multiple warehouses",
    solution: "Developed integrated supply chain analytics with real-time inventory tracking and supplier performance monitoring",
    results: [
      "Reduced inventory costs by 25%",
      "Improved supplier on-time delivery tracking",
      "Optimized logistics efficiency"
    ],
    metrics: {
      costReduction: "25%",
      efficiencyGain: "18%",
      visibilityImprovement: "100%"
    },
    technologies: ["Power BI", "DAX", "SQL", "Power Query"],
    link: "https://github.com/AboMagdy/Supply-Chain-Analysis-Project",
    icon: "🚚"
  },
  {
    id: 3,
    title: "Manufacturing Analytics Dashboard",
    category: "Industrial",
    challenge: "Production efficiency was unclear and quality issues were not being tracked systematically",
    solution: "Created comprehensive manufacturing dashboard with OEE tracking, quality metrics, and equipment monitoring",
    results: [
      "Improved production efficiency by 15%",
      "Reduced defect rates by 22%",
      "Enabled predictive maintenance"
    ],
    metrics: {
      efficiencyGain: "15%",
      defectReduction: "22%",
      downtimeReduction: "30%"
    },
    technologies: ["Power BI", "DAX", "SQL", "Power Query"],
    link: "https://github.com/AboMagdy/Manufacturing-Analysis-Project",
    icon: "🏭"
  },
  {
    id: 4,
    title: "Financial Analysis Dashboard",
    category: "Finance",
    challenge: "Month-end financial close was taking 5+ days and P&L visibility was limited",
    solution: "Built executive-level financial dashboard with budget vs. actual analysis and real-time P&L tracking",
    results: [
      "Reduced month-end close time by 60%",
      "Improved financial reporting accuracy",
      "Enabled faster financial decision-making"
    ],
    metrics: {
      closeTimeReduction: "60%",
      accuracyImprovement: "40%",
      executiveAdoption: "100%"
    },
    technologies: ["Power BI Premium", "DAX", "SQL", "Power Query"],
    link: "https://github.com/AboMagdy/Financial-Analysis-Project",
    icon: "💰"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-16 md:py-20 px-4 relative z-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#06ffa5] font-mono font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            &gt; SUCCESS STORIES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e0e7ff] mb-3 md:mb-4">
            Case Studies & Impact
          </h2>
          <p className="text-[#a8b5d1] text-sm md:text-lg max-w-2xl mx-auto font-light">
            Real-world examples of how Power BI dashboards transformed business operations and drove measurable results
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-[#1a1f3a]/50 to-[#0a0e27]/50 border border-[#ff006e]/30 rounded-xl p-4 md:p-6 hover:border-[#ff006e]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff006e]/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl md:text-4xl mb-2">{study.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-[#e0e7ff]">
                    {study.title}
                  </h3>
                  <p className="text-[#06ffa5] text-xs md:text-sm font-mono font-semibold uppercase tracking-wider mt-1">
                    {study.category}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4 pb-4 border-b border-[#2d3748]">
                <p className="text-[#a8b5d1] text-xs md:text-sm font-light">
                  <span className="text-[#ff006e] font-semibold">Challenge:</span> {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4 pb-4 border-b border-[#2d3748]">
                <p className="text-[#a8b5d1] text-xs md:text-sm font-light">
                  <span className="text-[#8338ec] font-semibold">Solution:</span> {study.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mb-4 pb-4 border-b border-[#2d3748]">
                <p className="text-[#06ffa5] font-semibold text-xs md:text-sm mb-2">
                  Results:
                </p>
                <ul className="space-y-1">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-[#a8b5d1] text-xs md:text-sm font-light flex items-start gap-2">
                      <span className="text-[#06ffa5] mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="mb-4 pb-4 border-b border-[#2d3748]">
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-lg md:text-xl font-bold text-[#ff006e]">
                        {value}
                      </p>
                      <p className="text-[#a8b5d1] text-xs font-mono capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4 pb-4 border-b border-[#2d3748]">
                <p className="text-[#a8b5d1] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#8338ec]/20 text-[#8338ec] text-xs px-2 py-1 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Link */}
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ff006e] hover:text-[#ff1a7f] transition-colors text-sm font-semibold"
              >
                View Project
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Key Achievements Summary */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-[#1a1f3a]/50 to-[#0a0e27]/50 border border-[#ff006e]/30 rounded-xl p-4 md:p-6 text-center">
            <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#ff006e] mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold text-[#ff006e] mb-2">
              +45%
            </p>
            <p className="text-[#a8b5d1] text-sm font-light">
              Average Efficiency Improvement
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1f3a]/50 to-[#0a0e27]/50 border border-[#8338ec]/30 rounded-xl p-4 md:p-6 text-center">
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-[#8338ec] mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold text-[#8338ec] mb-2">
              70%
            </p>
            <p className="text-[#a8b5d1] text-sm font-light">
              Time Savings in Reporting
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1f3a]/50 to-[#0a0e27]/50 border border-[#06ffa5]/30 rounded-xl p-4 md:p-6 text-center">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-[#06ffa5] mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold text-[#06ffa5] mb-2">
              100%
            </p>
            <p className="text-[#a8b5d1] text-sm font-light">
              User Adoption Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
