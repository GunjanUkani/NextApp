// import { useEffect, useState, useRef } from "react";

// export default function Portfolio() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [displayText, setDisplayText] = useState("");
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const bentoRef = useRef(null);

//   const roles = [
//     "SOFTWARE DEVELOPER",
//     "FULL STACK DEVELOPER",
//     "APP DEVELOPER",
//     "NODE JS DEVELOPER"
//   ];

//   // Dynamically split roles into two lines
//   const splitRole = (text) => {
//     const words = text.split(" ");
//     if (words.length <= 2) return [words[0], words.slice(1).join(" ")];
//     return [words.slice(0, 2).join(" "), words.slice(2).join(" ")];
//   };

//   const [line1, line2] = splitRole(displayText);

//   useEffect(() => {
//     const currentRole = roles[roleIndex];
//     const typingSpeed = isDeleting ? 40 : 100;

//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         setDisplayText(currentRole.substring(0, displayText.length + 1));
//         if (displayText === currentRole) {
//           setTimeout(() => setIsDeleting(true), 2000);
//         }
//       } else {
//         setDisplayText(currentRole.substring(0, displayText.length - 1));
//         if (displayText === "") {
//           setIsDeleting(false);
//           setRoleIndex((prev) => (prev + 1) % roles.length);
//         }
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, roleIndex]);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     const handleMouseMove = (e) => {
//       if (bentoRef.current) {
//         const rect = bentoRef.current.getBoundingClientRect();
//         setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const experience = [
//     { role: "Founder", company: "Ashtrixcode", date: "Sep 2025 - Present", location: "Rajkot", skills: ["Operations", "Leadership", "Architecture"] },
//     { role: "React js developer", company: "Encrypted Infoweb", date: "Nov 2023 - Present", location: "Rajkot", skills: ["React.js", "Redux", "Hooks"] },
//     { role: "React js Intern", company: "Sparks To Ideas", date: "Dec 2022 - May 2023", location: "Ahmedabad", skills: ["Web Design", "React.js"] }
//   ];

//   return (
//     <div className="min-h-screen bg-[#02040a] text-slate-200 font-sans selection:bg-teal-500/30 scroll-smooth overflow-x-hidden">
      
//       {/* NAVIGATION */}


//       {/* ------------------ NAVBAR ------------------ */}
//       <nav
//         className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12
//         ${isScrolled
//             ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4"
//             : "bg-transparent py-8"
//           }`}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="text-2xl font-black text-white">GU.</div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-10">
//             {["Expertise", "Legacy", "Contact"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 hover:opacity-100 hover:text-teal-400 transition"
//               >
//                 {item}
//               </a>
//             ))}
//             <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-teal-400 transition">
//               Let's Talk
//             </button>
//           </div>

//           {/* Mobile Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-[10px] uppercase font-black tracking-widest border border-white/20 px-4 py-2 rounded-full bg-black/50"
//           >
//             {isMenuOpen ? "Close" : "Menu"}
//           </button>
//         </div>

//         {/* Mobile Overlay */}
//         <div
//           className={`fixed inset-0 bg-[#02040a] z-[90] flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden
//           ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//         >
//           {["Expertise", "Legacy", "Contact"].map((item) => (
//             <button
//               key={item}
//               onClick={() => handleNavClick(item.toLowerCase())}
//               className="text-5xl font-black italic text-white hover:text-teal-400 transition"
//             >
//               {item}
//             </button>
//           ))}
//           <button
//             onClick={() => handleNavClick("contact")}
//             className="bg-teal-400 text-black px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest"
//           >
//             Let's Talk
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
//         <div className="absolute w-full max-w-[1000px] aspect-square bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
        
//         <div className="relative z-10 text-center w-full">
//           <h2 className="text-teal-400 font-mono text-[8px] md:text-[10px] tracking-[0.6em] uppercase mb-8 md:mb-16 opacity-60">Gunjan Ukani</h2>
          
//           <div className="flex flex-col items-center justify-center min-h-[30vh] md:min-h-[400px]">
//             {/* LINE 1 - Responsive fluid typography */}
//             <h1 className="text-[13vw] md:text-[9rem] lg:text-[11rem] font-black text-white tracking-tighter leading-[0.85] uppercase italic">
//               {line1}
//             </h1>
//             {/* LINE 2 - Gradient effect */}
//             <h1 className="text-[13vw] md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
//               {line2}
//               <span className="inline-block w-[2vw] md:w-4 h-[0.8em] bg-teal-400 ml-2 md:ml-4 animate-pulse align-middle"></span>
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* BENTO GRID */}
//       <section id="expertise" className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div ref={bentoRef} className="md:col-span-2 relative bg-[#0a0c14] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 overflow-hidden min-h-[350px] md:min-h-[480px] group transition-all duration-700">
//             {/* Desktop-only Spotlight */}
//             <div className="absolute hidden md:block pointer-events-none inset-0 transition duration-300 group-hover:opacity-100 opacity-0"
//                  style={{ background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45,212,191,0.08), transparent 40%)` }} />
            
//             <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter text-white italic">THE STACK</h3>
//             <p className="opacity-30 text-base md:text-xl leading-relaxed max-w-md mb-12 md:mb-16 font-light">
//               Building heavy-duty applications using React ecosystem, Node.js runtime, and cloud-native architectures.
//             </p>
//             <div className="flex flex-wrap gap-x-8 md:gap-x-16 gap-y-6">
//               {["REACT", "NODE.JS", "MONGODB", "AWS"].map(tech => (
//                 <div key={tech} className="text-[9px] md:text-[11px] font-black tracking-[0.4em] text-white/40 group-hover:text-teal-400 transition duration-700">{tech}</div>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
//             <div className="bg-teal-500 rounded-[2.5rem] md:rounded-[3.5rem] p-8 flex flex-col justify-center items-center text-black">
//                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-50">Experience</span>
//                <span className="text-5xl md:text-8xl font-black italic tracking-tighter">3Y+</span>
//             </div>
//             <div className="bg-[#0a0c14] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 flex flex-col justify-center items-center">
//                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-20">Projects</span>
//                <span className="text-5xl md:text-8xl font-black text-white tracking-tighter">20+</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LEGACY SECTION */}
//       <section id="legacy" className="py-20 md:py-32 max-w-5xl mx-auto px-6 md:px-8">
//         <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
//             <div className="w-[1px] h-20 md:h-32 bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
//             <h2 className="text-[9px] md:text-[11px] uppercase tracking-[1em] opacity-20 mt-10 font-black">Professional Legacy</h2>
//         </div>
        
//         <div className="space-y-6 md:space-y-8">
//           {experience.map((exp, i) => (
//             <div key={i} className="group relative bg-white/[0.01] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 hover:bg-white/[0.03] transition-all duration-700">
//               <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
//                 <div className="order-2 md:order-1">
//                   <div className="text-teal-400 font-mono text-[9px] tracking-[0.3em] uppercase mb-4">{exp.date}</div>
//                   <h3 className="text-2xl md:text-5xl font-black text-white mb-2 group-hover:text-teal-400 transition duration-700 uppercase italic tracking-tighter leading-tight">{exp.role}</h3>
//                   <div className="text-xs opacity-20 font-black tracking-[0.2em] uppercase mb-6">{exp.company}</div>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.skills.map(s => <span key={s} className="text-[8px] border border-white/10 px-3 py-1.5 rounded-full uppercase font-black text-white/30 tracking-widest">{s}</span>)}
//                   </div>
//                 </div>
//                 <div className="order-1 md:order-2 text-left md:text-right italic text-[10px] opacity-10 uppercase tracking-[0.3em]">{exp.location}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section id="contact" className="py-20 md:py-48 relative overflow-hidden bg-white text-black rounded-t-[4rem] md:rounded-t-[6rem] px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-[16vw] md:text-[12rem] font-black tracking-tighter leading-[0.8] mb-12 md:mb-20 uppercase italic">
//             READY TO<br/>BUILD?
//           </h2>
//           <div className="group inline-block w-full">
//             <a href="mailto:gunjan.ukani@email.com" className="text-lg md:text-5xl lg:text-6xl font-light hover:opacity-40 transition underline underline-offset-[12px] md:underline-offset-[16px] decoration-1 tracking-tight italic break-all">
//               gunjan.ukani@email.com
//             </a>
//           </div>
//           <div className="mt-24 md:mt-40 flex flex-wrap justify-center gap-8 md:gap-16 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30">
//             <a href="#" className="hover:text-teal-600 transition">LinkedIn</a>
//             <a href="#" className="hover:text-teal-600 transition">Github</a>
//             <a href="#" className="hover:text-teal-600 transition">Twitter</a>
//           </div>
//         </div>
//       </section>

//       <footer className="py-12 md:py-16 bg-white text-black border-t border-black/5 text-center">
//         <p className="text-[8px] md:text-[10px] uppercase tracking-[1em] opacity-20 italic px-6">© 2026 Gunjan Ukani — Excellence Defined</p>
//       </footer>
//     </div>
//   );
// }

import { useEffect, useState, useRef } from "react";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bentoRef = useRef(null);

  const roles = [
    "SOFTWARE DEVELOPER",
    "FULL STACK DEVELOPER",
    "APP DEVELOPER",
    "NODE JS DEVELOPER",
  ];

  // Dynamically split roles into two lines
  const splitRole = (text) => {
    const words = text.split(" ");
    if (words.length <= 2) return [words[0], words.slice(1).join(" ")];
    return [words.slice(0, 2).join(" "), words.slice(2).join(" ")];
  };

  const [line1, line2] = splitRole(displayText);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    const handleMouseMove = (e) => {
      if (bentoRef.current) {
        const rect = bentoRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* ✅ LOCK BODY SCROLL WHEN MOBILE MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const experience = [
    {
      role: "Co-Founder",
      company: "Ashtrixcode",
      date: "Sep 2022 - Present",
      location: "Rajkot",
      skills: ["Operations", "Leadership", "Architecture"],
    },
    {
      role: "MERN Stack Developer",
      company: "Encrypted Infoweb",
      date: "Nov 2023 - Present",
      location: "Rajkot",
      skills: ["React.js", "Redux", "Hooks"],
    },
    {
      role: "React js Intern",
      company: "Sparks To Ideas",
      date: "Dec 2022 - May 2023",
      location: "Ahmedabad",
      skills: ["Web Design", "React.js"],
    },
  ];

  const handleMobileNav = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

//   useEffect(() => {
//   if (isMenuOpen) {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }
// }, [isMenuOpen]);


  return (
    <div className="min-h-screen bg-[#02040a] text-slate-200 font-sans selection:bg-teal-500/30 scroll-smooth overflow-x-hidden">

      {/* NAVIGATION */}
      {/* NAVIGATION */}
<nav
  className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 ${
    isScrolled
      ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4"
      : "bg-transparent py-8"
  }`}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center relative z-[110]">
    <div className="text-2xl font-black tracking-tighter text-white">
      GU.
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-10">
      {["Expertise", "Legacy", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 hover:opacity-100 hover:text-teal-400 transition"
        >
          {item}
        </a>
      ))}
      <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-teal-400 transition transform hover:-translate-y-1">
        Let's Talk
      </button>
    </div>

    {/* Mobile Toggle Button - Always stays on top */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden relative z-[120] text-white uppercase text-[10px] font-black tracking-widest border border-white/20 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md transition-colors"
      style={{ borderColor: isMenuOpen ? 'rgba(45,212,191,0.5)' : '' }}
    >
      {isMenuOpen ? "Close" : "Menu"}
    </button>
  </div>

  {/* MOBILE SIDE DRAWER (Right to Left) */}
  <div
    className={`fixed top-0 right-0 h-screen w-[80%] max-w-[400px] bg-[#02040a] border-l border-white/10 z-[105] flex flex-col items-start justify-center px-12 gap-8 transition-transform duration-500 ease-in-out md:hidden ${
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* Dark Backdrop for Sidebar */}
    <div 
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ right: '100%', width: '100vw' }}
      onClick={() => setIsMenuOpen(false)}
    />

    {["Expertise", "Legacy", "Contact"].map((item) => (
      <button
        key={item}
        onClick={() => handleMobileNav(item.toLowerCase())}
        className="text-4xl font-black italic tracking-tighter text-white hover:text-teal-400 transition-all text-left"
      >
        {item}
      </button>
    ))}
    
    <button
      onClick={() => handleMobileNav("contact")}
      className="mt-8 bg-teal-400 text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest w-full"
    >
      Let's Talk
    </button>
  </div>
</nav>
      {/* HERO */}
      {/* HERO SECTION */}
<section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
  <div className="absolute w-full max-w-[1000px] aspect-square bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
        
  <div className="relative z-10 text-center w-full">
    <h2 className="text-teal-400 font-mono text-[8px] md:text-[10px] tracking-[0.6em] uppercase mb-8 md:mb-16 opacity-60">Gunjan Ukani</h2>
          
    <div className="flex flex-col items-center justify-center min-h-[30vh] md:min-h-[400px]">
      {/* LINE 1 - Responsive fluid typography */}
      <h1 className="text-[13vw] md:text-[9rem] lg:text-[11rem] font-black text-white tracking-tighter leading-[0.85] uppercase italic">
        {line1}
      </h1>
      {/* LINE 2 - Gradient effect */}
      <h1 className="text-[13vw] md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
        {line2}
        <span className="inline-block w-[2vw] md:w-4 h-[0.8em] bg-teal-400 ml-2 md:ml-4 animate-pulse align-middle"></span>
      </h1>
    </div>
  </div>
</section>

{/* BENTO GRID */}
<section id="expertise" className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div ref={bentoRef} className="md:col-span-2 relative bg-[#0a0c14] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 overflow-hidden min-h-[350px] md:min-h-[480px] group transition-all duration-700">
      {/* Desktop-only Spotlight */}
      <div className="absolute hidden md:block pointer-events-none inset-0 transition duration-300 group-hover:opacity-100 opacity-0"
                 style={{ background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45,212,191,0.08), transparent 40%)` }} />
            
            <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter text-white italic">THE STACK</h3>
            <p className="opacity-30 text-base md:text-xl leading-relaxed max-w-md mb-12 md:mb-16 font-light">
              Building heavy-duty applications using React ecosystem, Node.js runtime, and cloud-native architectures.
            </p>
            <div className="flex flex-wrap gap-x-8 md:gap-x-16 gap-y-6">
              {["REACT", "NODE.JS", "MONGODB", "AWS"].map(tech => (
                <div key={tech} className="text-[9px] md:text-[11px] font-black tracking-[0.4em] text-white/40 group-hover:text-teal-400 transition duration-700">{tech}</div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            <div className="bg-teal-500 rounded-[2.5rem] md:rounded-[3.5rem] p-8 flex flex-col justify-center items-center text-black">
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-50">Experience</span>
               <span className="text-5xl md:text-8xl font-black italic tracking-tighter">3Y+</span>
            </div>
            <div className="bg-[#0a0c14] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 flex flex-col justify-center items-center">
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-20">Projects</span>
               <span className="text-5xl md:text-8xl font-black text-white tracking-tighter">20+</span>
            </div>
          </div>
        </div>
      </section>


      <section id="legacy" className="py-20 md:py-0 max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
            <div className="w-[1px] h-20 md:h-32 bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
            <h2 className="text-[9px] md:text-[11px] uppercase tracking-[1em] opacity-20 mt-10 font-black">Professional Legacy</h2>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="group relative bg-white/[0.01] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 hover:bg-white/[0.03] transition-all duration-700">
              <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
                <div className="order-2 md:order-1">
                  <div className="text-teal-400 font-mono text-[9px] tracking-[0.3em] uppercase mb-4">{exp.date}</div>
                  <h3 className="text-2xl md:text-5xl font-black text-white mb-2 group-hover:text-teal-400 transition duration-700 uppercase italic tracking-tighter leading-tight">{exp.role}</h3>
                  <div className="text-xs opacity-20 font-black tracking-[0.2em] uppercase mb-6">{exp.company}</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(s => <span key={s} className="text-[8px] border border-white/10 px-3 py-1.5 rounded-full uppercase font-black text-white/30 tracking-widest">{s}</span>)}
                  </div>
                </div>
                <div className="order-1 md:order-2 text-left md:text-right italic text-[10px] opacity-10 uppercase tracking-[0.3em]">{exp.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 md:py-48 relative overflow-hidden bg-white text-black rounded-t-[4rem] md:rounded-t-[6rem] px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[16vw] md:text-[12rem] font-black tracking-tighter leading-[0.8] mb-12 md:mb-20 uppercase italic">
            READY TO<br/>BUILD?
          </h2>
          <div className="group inline-block w-full">
            <a href="mailto:gunjan.ukani@email.com" className="text-lg md:text-5xl lg:text-6xl font-light hover:opacity-40 transition underline underline-offset-[12px] md:underline-offset-[16px] decoration-1 tracking-tight italic break-all">
              gunjanukani456@email.com
            </a>
          </div>
          <div className="mt-24 md:mt-40 flex flex-wrap justify-center gap-8 md:gap-16 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30">
            <a href="#" className="hover:text-teal-600 transition">LinkedIn</a>
            <a href="#" className="hover:text-teal-600 transition">Github</a>
            <a href="#" className="hover:text-teal-600 transition">Twitter</a>
          </div>
        </div>
      </section>
      <footer className="py-16 bg-white text-black text-center">
        <p className="text-[10px] uppercase tracking-[1em] opacity-20 italic">
          © 2026 Gunjan Ukani — Excellence Defined
        </p>
      </footer>
    </div>
  );
}
