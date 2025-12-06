import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const App = () => {
  const [currentParadigm, setCurrentParadigm] = useState('traditional');
  const [selectedTech, setSelectedTech] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAIEnabled, setIsAIEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const reportData = {
    paradigm: {
      traditional: {
        title: "Current Limitations",
        icon: "fa-map",
        content: (
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li><strong>Siloed Systems:</strong> TMS, Geospatial tools, and compliance software operate independently, leading to fragmented data.</li>
            <li><strong>Reactive:</strong> Cannot easily adapt to sudden changes like traffic fluctuations or new regulatory checkpoints.</li>
            <li><strong>Static Planning:</strong> Routes are often pre-determined without accounting for real-time environmental compliance or vehicle health.</li>
          </ul>
        )
      },
      ai: {
        title: "The Green Fleet AI Solution",
        icon: "fa-network-wired",
        content: (
          <ul className="list-disc pl-5 space-y-2 text-emerald-900 text-sm sm:text-base">
            <li><strong>Holistic Integration:</strong> Combines Machine Learning, IoT, and Blockchain into a cohesive, scalable system.</li>
            <li><strong>Dynamic & Predictive:</strong> Uses GenAI to generate alternative routes in natural language before issues arise.</li>
            <li><strong>Automated Compliance:</strong> AI interprets customs regulations for seamless cross-border logistics, reducing delays.</li>
          </ul>
        )
      }
    },
    techStack: [
      {
        id: 1,
        component: "Route Generation",
        tech: "GPT-4, Llama, Transformers",
        desc: "Uses Large Language Models to generate alternative routes in natural language for fleet managers, understanding context beyond just coordinates.",
        icon: "fa-route"
      },
      {
        id: 2,
        component: "Real-Time Adjustments",
        tech: "Reinforcement Learning, Multi-Agent AI",
        desc: "Agents learn from the environment to make instantaneous routing decisions based on changing traffic and weather conditions.",
        icon: "fa-clock"
      },
      {
        id: 3,
        component: "Traffic & Environmental Predictions",
        tech: "Computer Vision (Satellite)",
        desc: "Analyzes satellite imagery to detect physical road blocks, weather patterns, or traffic density that sensors might miss.",
        icon: "fa-satellite"
      },
      {
        id: 4,
        component: "Compliance & Documentation",
        tech: "NLP-based AI (BERT, LLMs)",
        desc: "Scans and interprets complex customs regulations to auto-generate required documentation for cross-border travel.",
        icon: "fa-file-contract"
      },
      {
        id: 5,
        component: "Fleet Behavior Analysis",
        tech: "IoT + Pattern Recognition",
        desc: "Monitors vehicle health and driver behavior patterns to predict maintenance needs or safer driving routes.",
        icon: "fa-truck-moving"
      }
    ],
    steps: [
      {
        title: "A. Generative Route Planning Model",
        summary: "Train GenAI on historical traffic, weather, and fleet data.",
        details: [
          "Train a GenAI model on historical traffic, weather, fleet data.",
          "Use LLMs (like GPT-4 or Llama) to generate alternative routes in natural language.",
          "Focus on understanding the 'why' behind a route change, not just the 'where'."
        ]
      },
      {
        title: "B. Multi-Modal Integration",
        summary: "Combine data sources for better context.",
        details: [
          "Integrate real-time GPS, IoT, and geospatial data to update routes.",
          "Apply Multi-Modal AI to combine satellite images, traffic updates, and customs data.",
          "This ensures the model sees the full picture: from road conditions to legal requirements."
        ]
      },
      {
        title: "C. Adaptive Learning & Simulation",
        summary: "Predict issues before they happen.",
        details: [
          "Deploy AI-powered simulations to predict and generate alternative routes before real issues arise.",
          "Allow the model to learn from past deliveries (Reinforcement Learning) and auto-generate efficient plans for new routes."
        ]
      },
      {
        title: "D. Regulatory & Compliance",
        summary: "Automate cross-border bureaucracy.",
        details: [
          "Use NLP-based AI models to scan and interpret customs regulations.",
          "Auto-generate customs documentation and compliance reports to prevent border delays.",
          "Ensure environmental compliance is factored into route selection."
        ]
      }
    ]
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      const generateVolatileData = () => Array.from({length: 12}, () => 10 + Math.random() * 8);
      const labels = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Fuel Consumption (L/100km)',
            data: generateVolatileData(),
            borderColor: '#f87171',
            backgroundColor: 'rgba(248, 113, 113, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#f87171',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { 
                color: '#cbd5e1',
                font: {
                  size: window.innerWidth < 640 ? 10 : 12
                }
              }
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#fff',
              bodyColor: '#cbd5e1',
              borderColor: '#334155',
              borderWidth: 1
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: '#334155' },
              ticks: { 
                color: '#94a3b8',
                font: {
                  size: window.innerWidth < 640 ? 9 : 11
                }
              },
              title: { 
                display: true, 
                text: 'Fuel Usage', 
                color: '#64748b',
                font: {
                  size: window.innerWidth < 640 ? 10 : 12
                }
              }
            },
            x: {
              grid: { color: '#334155' },
              ticks: { 
                color: '#94a3b8',
                maxRotation: window.innerWidth < 640 ? 45 : 0,
                minRotation: window.innerWidth < 640 ? 45 : 0,
                font: {
                  size: window.innerWidth < 640 ? 9 : 11
                }
              }
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (chartInstanceRef.current) {
      const newData = isAIEnabled 
        ? Array.from({length: 12}, () => 7.5 + Math.random() * 1.5)
        : Array.from({length: 12}, () => 10 + Math.random() * 8);
      
      chartInstanceRef.current.data.datasets[0].data = newData;
      chartInstanceRef.current.data.datasets[0].borderColor = isAIEnabled ? '#10b981' : '#f87171';
      chartInstanceRef.current.data.datasets[0].backgroundColor = isAIEnabled ? 'rgba(16, 185, 129, 0.1)' : 'rgba(248, 113, 113, 0.1)';
      chartInstanceRef.current.data.datasets[0].pointBorderColor = isAIEnabled ? '#10b981' : '#f87171';
      chartInstanceRef.current.update();
    }
  }, [isAIEnabled]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base">
              AI
            </div>
            <h1 className="text-base sm:text-xl font-bold text-slate-800">
              Green Fleet AI <span className="hidden sm:inline text-slate-400 font-normal">| Route Optimization Report</span>
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('challenge')} className="hover:text-emerald-600 transition-colors">The Challenge</button>
            <button onClick={() => scrollToSection('tech-stack')} className="hover:text-emerald-600 transition-colors">Tech Stack</button>
            <button onClick={() => scrollToSection('implementation')} className="hover:text-emerald-600 transition-colors">Implementation</button>
            <button onClick={() => scrollToSection('simulation')} className="hover:text-emerald-600 transition-colors">Simulation</button>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="flex flex-col py-2">
              <button onClick={() => scrollToSection('challenge')} className="px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors">The Challenge</button>
              <button onClick={() => scrollToSection('tech-stack')} className="px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors">Tech Stack</button>
              <button onClick={() => scrollToSection('implementation')} className="px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors">Implementation</button>
              <button onClick={() => scrollToSection('simulation')} className="px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors">Simulation</button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight">
              Beyond Traditional Routing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Transforming logistics with GenAI, IoT, and Multi-modal intelligence to solve dynamic challenges in fuel costs, delivery delays, and cross-border compliance.
            </p>
            <button onClick={() => scrollToSection('challenge')} className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-colors shadow-lg shadow-emerald-500/30 text-sm sm:text-base">
              Explore the Research
            </button>
          </div>
        </section>

        {/* Section 1: The Challenge */}
        <section id="challenge" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-emerald-600 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2">Context</h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">The Paradigm Shift</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              The report highlights a critical gap in current logistics: adaptability. Explore how the proposed Green Fleet AI compares to traditional systems.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="flex border-b border-slate-200">
              <button
                onClick={() => setCurrentParadigm('traditional')}
                className={`flex-1 py-3 sm:py-4 text-center font-semibold text-xs sm:text-sm transition-colors border-b-2 ${
                  currentParadigm === 'traditional'
                    ? 'text-emerald-600 border-emerald-500 bg-slate-50'
                    : 'text-slate-500 border-transparent hover:bg-slate-50'
                }`}
              >
                Traditional Systems
              </button>
              <button
                onClick={() => setCurrentParadigm('ai')}
                className={`flex-1 py-3 sm:py-4 text-center font-semibold text-xs sm:text-sm transition-colors border-b-2 ${
                  currentParadigm === 'ai'
                    ? 'text-emerald-600 border-emerald-500 bg-slate-50'
                    : 'text-slate-500 border-transparent hover:bg-slate-50'
                }`}
              >
                Green Fleet AI
              </button>
            </div>
            
            <div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className={`text-5xl sm:text-6xl md:text-8xl transition-all duration-300 ${
                  currentParadigm === 'ai' ? 'text-emerald-500' : 'text-slate-300'
                }`}>
                  <i className={`fa-solid ${reportData.paradigm[currentParadigm].icon}`}></i>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  {reportData.paradigm[currentParadigm].title}
                </h3>
                <div className="text-slate-600 space-y-4 leading-relaxed">
                  {reportData.paradigm[currentParadigm].content}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Tech Stack */}
        <section id="tech-stack" className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8 sm:mb-10">
              <h3 className="text-emerald-600 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2">Core Architecture</h3>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Technologies to Use</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-3xl">
                The report proposes a specific stack of Generative and Analytical AI technologies. Click on a component below to reveal the recommended technology and its function.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reportData.techStack.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedTech(item.id)}
                  className={`bg-white p-5 sm:p-6 rounded-xl shadow-sm border cursor-pointer transition-all hover:shadow-md hover:border-emerald-300 group ${
                    selectedTech === item.id ? 'border-2 border-emerald-500 bg-emerald-50' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors flex-shrink-0">
                      <i className={`fa-solid ${item.icon} text-sm sm:text-base`}></i>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-700 group-hover:text-emerald-700">{item.component}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500">Tech: {item.tech}</p>
                </div>
              ))}
            </div>

            {selectedTech && (
              <div className="mt-6 sm:mt-8 bg-white p-5 sm:p-6 rounded-xl border border-emerald-100 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-emerald-100 text-emerald-600 rounded-lg flex-shrink-0">
                    <i className="fa-solid fa-microchip text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800">
                      {reportData.techStack.find(i => i.id === selectedTech).component}
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-emerald-600 mt-1 mb-2">
                      Powering Technology: {reportData.techStack.find(i => i.id === selectedTech).tech}
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {reportData.techStack.find(i => i.id === selectedTech).desc}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Implementation */}
        <section id="implementation" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-emerald-600 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2">Execution Strategy</h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How to Implement GenAI</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              A four-stage process to integrate GenAI into fleet projects, moving from model training to automated compliance.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center relative mb-8 sm:mb-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 hidden md:block transform -translate-y-1/2"></div>
            
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className="w-full md:w-auto flex flex-col items-center gap-2 group focus:outline-none mb-4 md:mb-0"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300 ${
                  currentStep === idx
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
                    : 'bg-white text-slate-500 border-slate-300'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="font-semibold text-xs sm:text-sm text-slate-700 bg-white px-2 text-center">
                  {idx === 0 && 'Route Model'}
                  {idx === 1 && 'Multi-Modal'}
                  {idx === 2 && 'Adaptive Learning'}
                  {idx === 3 && 'Regulatory AI'}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="md:w-1/3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2">
                {reportData.steps[currentStep].title}
              </h3>
              <div className="h-1 w-16 sm:w-20 bg-emerald-500 rounded mb-3 sm:mb-4"></div>
              <p className="text-xs sm:text-sm text-emerald-700 font-medium bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                {reportData.steps[currentStep].summary}
              </p>
            </div>
            <div className="md:w-2/3">
              <ul className="space-y-3 sm:space-y-4">
                {reportData.steps[currentStep].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                    <i className="fa-solid fa-check text-emerald-500 mt-1 flex-shrink-0"></i>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Simulation */}
        <section id="simulation" className="py-12 sm:py-16 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 gap-4">
              <div className="flex-1">
                <h3 className="text-emerald-400 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2">Live Impact Analysis</h3>
                <h2 className="text-2xl sm:text-3xl font-bold">Route Efficiency Simulation</h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 max-w-xl">
                  Visualizing the impact of "Dynamic Real-Time Routing".
                  Enable the AI model to see how predictive algorithms smooth out fuel consumption and reduce volatility.
                </p>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-slate-800 p-2 rounded-lg border border-slate-700 flex-shrink-0">
                <span className="text-xs sm:text-sm font-medium text-slate-300 hidden sm:inline">Standard</span>
                <button
                  onClick={() => setIsAIEnabled(!isAIEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    isAIEnabled ? 'bg-emerald-500' : 'bg-slate-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAIEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}></span>
                </button>
                <span className="text-xs sm:text-sm font-medium text-emerald-400">AI Mode</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-slate-800 p-3 sm:p-4 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-xs sm:text-sm">Avg. Fuel Consumption</p>
                <p className={`text-xl sm:text-2xl font-bold ${isAIEnabled ? 'text-emerald-400' : 'text-white'}`}>
                  {isAIEnabled ? '8.2 L/100km' : '12.5 L/100km'}
                </p>
              </div>
              <div className="bg-slate-800 p-3 sm:p-4 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-xs sm:text-sm">Route Volatility Index</p>
                <p className={`text-xl sm:text-2xl font-bold ${isAIEnabled ? 'text-emerald-400' : 'text-red-400'}`}>
                  {isAIEnabled ? 'Low (Opt)' : 'High'}
                </p>
              </div>
              <div className="bg-slate-800 p-3 sm:p-4 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-xs sm:text-sm">Estimated Delay</p>
                <p className={`text-xl sm:text-2xl font-bold ${isAIEnabled ? 'text-emerald-400' : 'text-white'}`}>
                  {isAIEnabled ? '5 mins' : '45 mins'}
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-3 sm:p-4 border border-slate-700 shadow-2xl" style={{height: '300px', minHeight: '250px'}}>
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-6 sm:py-8 border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-xs sm:text-sm">
            Based on "Green Fleet AI" Research Report. Generated by Canvas Create Webapp.
          </p>
          <div className="mt-3 sm:mt-4 flex justify-center space-x-3 sm:space-x-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;