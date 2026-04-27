import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Database, 
  Cpu, 
  Globe, 
  Map, 
  Smartphone,
  Layers,
  History,
  ArrowUpRight,
  Code2,
  Terminal,
  Cloud,
  Settings,
  MonitorSmartphone,
  Palette,
  Award,
  ExternalLink
} from 'lucide-react';

// Custom SVG React Icon Component based on the user's image
const ReactLogoIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="-11.5 -10.23174 23 20.46348" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const DATA = {
  profile: {
    name: "HUNAIN ASHFAQ",
    firstName: "HUNAIN",
    lastName: "ASHFAQ",
    title: "Full Stack Developer & React Native Expert",
    location: "Rawalpindi, Pakistan",
    email: "hunainashfaq81@gmail.com",
    linkedin: "https://www.linkedin.com/in/hunain-ashfaq/",
    github: "https://github.com/hunain81/",
    image: "/mypic.png", 
    summary: "Strategic Full Stack Architect with 3+ years of mastery in the JavaScript ecosystem. Expert in crafting high-concurrency mobile applications with React Native and scalable web systems."
  },
  about: {
    story: "My journey in engineering is driven by a singular goal: transforming complex chaos into elegant, scalable systems. With a foundation in Computer Science and a deep specialty in the React ecosystem, I've moved beyond writing simple code to architecting entire digital landscapes.",
    points: [
      {
        title: "React Native Specialist",
        desc: "Expert in building high-performance, cross-platform mobile ecosystems with complex state management, custom native modules, and seamless API integrations.",
        icon: <Smartphone className="text-teal-500" />
      },
      {
        title: "Full Stack Development",
        desc: "Specialized in the MERN stack and modern cloud architectures. I build secure, scalable backends that power interactive, high-concurrency user interfaces.",
        icon: <Layers className="text-emerald-500" />
      },
      {
        title: "Intelligence & GIS",
        desc: "Unique expertise in integrating Machine Learning models and GIS spatial data into ERP systems to drive automated, data-driven decision making.",
        icon: <Map className="text-cyan-500" />
      }
    ]
  },
  projects: [
    {
      title: "PropTech CRM & ERP",
      desc: "Enterprise-grade management system for ZAK City, integrating GIS spatial data and automated digital workflows.",
      tech: ["React", "Node.js", "GIS", "PostgreSQL"],
      link: "https://github.com/hunain81/",
      type: "Commercial"
    },
    {
      title: "Aviation ML Predictor",
      desc: "Machine Learning model deployed at PIA to predict flight delays and optimize rescheduling logistics.",
      tech: ["Python", "TensorFlow", "React Native", "Express"],
      link: "https://github.com/hunain81/",
      type: "Data Science"
    },
    {
      title: "Secure Access Orchestration",
      desc: "High-security portal for organizational access control and identity management in high-concurrency environments.",
      tech: ["TypeScript", "Redux", "Azure Auth", "Node.js"],
      link: "https://github.com/hunain81/",
      type: "Security"
    },
    {
      title: "Geo-Informatics Dashboard",
      desc: "Real-time site monitoring dashboard visualizing spatial data for large-scale real estate developments.",
      tech: ["React", "Leaflet", "WebSockets", "AWS"],
      link: "https://github.com/hunain81/",
      type: "GIS"
    }
  ],
  skills: [
    { 
      name: "Mobile & Core", 
      items: ["React Native", "Expo", "iOS", "Android", "TypeScript", "JavaScript"], 
      icon: <MonitorSmartphone className="w-6 h-6 text-teal-500" />,
      color: "from-teal-500/20 to-transparent"
    },
    { 
      name: "Frontend", 
      items: ["React.js", "Redux", "Tailwind CSS", "Figma"], 
      icon: <Palette className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500/20 to-transparent"
    },
    { 
      name: "Backend", 
      items: ["Node.js", "Express", "Python", "FastAPI", "Flask", "PHP"], 
      icon: <Terminal className="w-6 h-6 text-cyan-500" />,
      color: "from-cyan-500/20 to-transparent"
    },
    { 
      name: "Data & DevOps", 
      items: ["MongoDB", "Firebase", "SQL", "Git", "AWS", "Azure"], 
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500/20 to-transparent"
    }
  ],
  experience: [
    {
      company: "ZAK City",
      role: "Lead Full Stack Software Engineer",
      period: "Mar 2025 - Present",
      highlights: [
        "Leading development of PropTech modules, defining tech stack decisions and code standards.",
        "Mentoring junior developers and conducting rigorous code reviews.",
        "Collaborating with C-suite to translate business goals into high-performance engineering roadmaps.",
        "Maintaining 99.9% uptime for critical CRM and HR assessment tools."
      ]
    },
    {
      company: "ZAK City",
      role: "Full Stack Software Engineer",
      period: "Feb 2024 - Mar 2025",
      highlights: [
        "Engineered custom PropTech ERP and Secure Access Orchestration portals.",
        "Integrated GIS spatial data into web dashboards for real-time monitoring.",
        "Increased project efficiency by 30% through digital workflow automation.",
        "Reduced infrastructure overhead by 15% through cloud optimization."
      ]
    },
    {
      company: "Pakistan International Airlines",
      role: "Full Stack Developer (JS & React Native)",
      period: "Jun 2022 - Sep 2023",
      highlights: [
        "Developed enterprise-grade mobile applications using React Native and Node.js.",
        "Migrated legacy mainframe data to modern cloud-native architectures.",
        "Deployed ML models to predict flight delays, optimizing rescheduling logistics.",
        "Engineered robust 3rd party API integrations, increasing user engagement by 40%."
      ]
    }
  ],
  certificates: [
    {
      title: "JavaScript (Advanced)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/56bdd2f38465",
      date: "Verified"
    }
  ],
  education: {
    degree: "BS Computer Science",
    institution: "COMSATS University Islamabad",
    period: "Feb 2020 - Feb 2024",
    focus: ["Software Engineering", "Data Structures", "Predictive Algorithms"]
  }
};

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#050505] overflow-hidden">
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-40 transition-all duration-300 ease-out mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          filter: 'blur(80px)'
        }}
      />
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-900/10 rounded-full blur-[120px] animate-blob-morph"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-900/10 rounded-full blur-[120px] animate-blob-morph animation-delay-2000"></div>
    </div>
  );
};

const FadeInSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.05 });
    
    const { current } = domRef;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* React Icon as requested from the image */}
          <div className="bg-[#1a1a1a] p-2 rounded-lg border border-white/5 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
            <ReactLogoIcon className="w-5 h-5 text-teal-400 animate-[spin_10s_linear_infinite]" />
          </div>
          <div className="text-2xl font-black text-white flex items-center gap-2">
            HA.
          </div>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          {['Experience', 'About', 'Projects', 'Stack', 'Certificates'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 hover:text-white transition-colors">{item}</a>
          ))}
          <a href={`mailto:${DATA.profile.email}`} className="px-6 py-2 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-full hover:bg-teal-500 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-teal-500 selection:text-white">
      <InteractiveBackground />
      <Navbar />

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center px-6 md:px-12 z-10 pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          <FadeInSection className="order-2 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#111] p-1.5 rounded-md border border-teal-500/20">
                <ReactLogoIcon className="w-4 h-4 text-teal-500" />
              </div>
              <span className="text-teal-500 font-mono text-xs tracking-widest uppercase">Full Stack Developer (JS, React Native)</span>
            </div>
            
            <h1 className="text-[12vw] md:text-[7vw] font-black text-white leading-[0.85] tracking-tighter mb-8 overflow-hidden">
              <span className="inline-block animate-text-reveal">{DATA.profile.firstName}</span><br />
              <span className="inline-block animate-text-reveal animation-delay-500 text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                {DATA.profile.lastName}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl leading-relaxed mb-10">
              Building high-performance <span className="text-white font-medium underline decoration-teal-500/40 underline-offset-8">React Native</span> apps and scalable digital ecosystems.
            </p>
            
            <div className="flex gap-4">
              <a href={DATA.profile.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl">
                <Github size={20} />
              </a>
              <a href={DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all shadow-xl">
                <Linkedin size={20} />
              </a>
            </div>
          </FadeInSection>

          <FadeInSection className="order-1 md:order-2 flex justify-center md:justify-end" delay={300}>
            <div className="relative group">
              <div className="absolute -inset-4 border border-teal-500/20 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
              <div className="absolute -inset-4 border border-white/10 rounded-2xl -rotate-3 group-hover:-rotate-12 transition-transform duration-700"></div>
              
              <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <img 
                  src={DATA.profile.image} 
                  alt={DATA.profile.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.classList.remove('hidden');
                    e.target.nextSibling.classList.add('flex');
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center bg-slate-800">
                  <span className="text-teal-500 font-black text-6xl opacity-20">HA</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-black shadow-[0_10px_30px_rgba(20,184,166,0.4)] transform rotate-12">
                <ReactLogoIcon className="w-8 h-8 animate-[spin_15s_linear_infinite]" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </header>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-40 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24 flex flex-col items-center text-center">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-teal-500 mb-8"></div>
            <div className="flex items-center gap-3 text-teal-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">
              <History size={16} />
              <span>Career Timeline</span>
            </div>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">Professional History</div>
          </div>
          
          <div className="space-y-32 relative">
            <div className="absolute left-[7px] md:left-[100px] top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
            {DATA.experience.map((exp, idx) => (
              <FadeInSection key={idx}>
                <div className="grid md:grid-cols-[200px_1fr] gap-12 group relative">
                  <div className="relative">
                    <div className="text-teal-500 font-black text-xl tracking-tighter pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      {exp.period}
                    </div>
                    <div className="absolute right-[-106px] top-3 w-3 h-3 rounded-full bg-teal-500 hidden md:block border-4 border-[#050505] z-10 group-hover:scale-150 transition-transform"></div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-teal-500 transition-colors uppercase">{exp.role}</h3>
                    <div className="text-xl text-slate-400 font-bold mb-8 italic">{exp.company}</div>
                    <ul className="space-y-6">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4 text-slate-400 font-light text-lg leading-relaxed">
                          <div className="mt-3 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-40 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-20 items-start">
            <FadeInSection>
              <h2 className="text-teal-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">The Philosophy</h2>
              <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">Engineering Elegance.</div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <p className="text-2xl text-slate-400 font-light leading-relaxed mb-12">
                {DATA.about.story}
              </p>
              
              <div className="grid sm:grid-cols-1 gap-8">
                {DATA.about.points.map((point, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-white/[0.03] border border-white/5 rounded-3xl group hover:border-teal-500/30 transition-all">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                      <p className="text-slate-400 leading-relaxed font-light">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-40 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-teal-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">Selected Works</h2>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">Impactful Solutions</div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {DATA.projects.map((project, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative p-10 bg-slate-900/30 border border-white/5 rounded-[3rem] hover:bg-slate-900/60 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                     <Github size={100} />
                  </div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="px-4 py-1.5 rounded-full border border-teal-500/30 text-teal-400 text-[10px] font-black uppercase tracking-widest bg-teal-500/5">{project.type}</span>
                    <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">{project.title}</h3>
                  <p className="text-slate-400 mb-10 font-light leading-relaxed text-lg">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-md">{t}</span>
                    ))}
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="stack" className="py-40 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-teal-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">Core Competencies</h2>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">The Tech Stack</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.skills.map((skillGroup, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className={`h-full p-8 rounded-[2.5rem] bg-gradient-to-br ${skillGroup.color} border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all`}>
                  <div className="mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tighter uppercase mb-4">{skillGroup.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-black/30 border border-white/5 rounded-xl text-[11px] font-bold text-slate-400 hover:text-white hover:border-white/20 transition-all">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="absolute -bottom-10 -right-6 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-all">
                    {idx + 1}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="py-40 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-3 text-teal-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">
              <Award size={16} />
              <span>Accreditations</span>
            </div>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">Certifications</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.certificates.map((cert, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-10 bg-slate-900/30 border border-white/5 rounded-[2.5rem] hover:bg-teal-500/5 hover:border-teal-500/30 transition-all block overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 text-teal-500/5 rotate-12 group-hover:scale-125 transition-transform">
                    <Award size={180} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform">
                      <Award size={28} />
                    </div>
                    <div className="p-3 rounded-full bg-white/5 text-slate-500 group-hover:text-white group-hover:bg-teal-500 transition-all">
                      <ExternalLink size={18} />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tighter group-hover:text-teal-400 transition-colors uppercase">{cert.title}</h3>
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                      <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{cert.issuer}</span>
                      <span className="px-3 py-1 bg-teal-500/10 text-teal-500 text-[10px] font-bold rounded-lg">{cert.date}</span>
                    </div>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative pt-40 pb-20 px-6 md:px-12 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInSection>
            <div className="mb-24">
              <h2 className="text-[12vw] md:text-[8vw] font-black text-white tracking-tighter leading-[0.85] mb-8">
                LET'S WORK<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>TOGETHER.</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                  <p className="text-2xl text-slate-400 font-light max-w-md leading-relaxed">
                    Currently accepting new projects and architectural consulting opportunities.
                  </p>
                  
                  <div className="group inline-flex items-center gap-6 cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center group-hover:scale-110 transition-all">
                      <Mail className="text-black" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-1">Send an email</div>
                      <a href={`mailto:${DATA.profile.email}`} className="text-2xl md:text-3xl font-bold text-white hover:text-teal-500 transition-colors">
                        {DATA.profile.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-12">
                  <div className="flex flex-wrap gap-8 md:justify-end">
                    <a href={DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xl font-bold text-white hover:text-teal-500 transition-all">
                      LinkedIn <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                    </a>
                    <a href={DATA.profile.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xl font-bold text-white hover:text-teal-500 transition-all">
                      GitHub <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <ReactLogoIcon className="w-6 h-6 text-teal-500 opacity-50" />
              <div className="text-2xl font-black text-white">HA<span className="text-teal-500">.</span></div>
            </div>
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600 text-center">
              © {new Date().getFullYear()} DESIGNED & ARCHITECTED BY HUNAIN ASHFAQ
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="-rotate-90" size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes blob-morph {
          0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: translate(0, 0) rotate(0deg); }
          34% { border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%; transform: translate(50px, -50px) rotate(120deg); }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; transform: translate(-30px, 30px) rotate(240deg); }
        }
        .animate-blob-morph {
          animation: blob-morph 20s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        @keyframes text-reveal {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-text-reveal {
          display: inline-block;
          animation: text-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
