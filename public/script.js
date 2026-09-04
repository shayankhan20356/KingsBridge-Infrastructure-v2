const siteData = {
    hero: {
        title: "WE ARCHITECT WHAT SECURES YOUR INFRASTRUCTURE",
        subtitle: "Enterprise-grade automation, AI intelligence, and defensive cybersecurity architecture engineered for high-scale global organizations."
    },
    metrics: [
        { label: "Deployment Reliability", value: "99.9%" },
        { label: "Threat Mitigation", value: "Zero-Trust" },
        { label: "Automation Scalability", value: "Enterprise" }
    ],
    services: [
        { 
            title: "Agentic AI & Business Automation", 
            desc: "Developing autonomous machine learning workflows, custom LLM integrations, and computer vision pipelines to eliminate operational latency.",
            badge: "Artificial Intelligence"
        },
        { 
            title: "Elite Cybersecurity", 
            desc: "Comprehensive penetration testing, offensive vulnerability assessments, perimeter defense, and forensic network research.",
            badge: "Cyber Defense"
        },
        { 
            title: "Scalable Full-Stack & Machine Learning", 
            desc: "Engineering resilient web architectures backed by distributed microservices, predictive data modeling, and robust database design.",
            badge: "Engineering"
        },
        { 
            title: "Forensic Data Research", 
            desc: "Deep digital forensics, system integrity validation, incident response orchestration, and security protocol auditing.",
            badge: "Data Forensics"
        }
    ],
    projects: [
        { title: "Aegis-Vision", desc: "Real-time automated threat and weapon detection utilizing YOLOv8 computer vision and PostgreSQL logging.", status: "LIVE", tag: "AI/Vision" },
        { title: "Matrix Replay Engine", desc: "Advanced digital forensics and network auditing platform designed for signal analysis and data replay.", status: "RESEARCH", tag: "Forensics" },
        { title: "NovaChat Platform", desc: "Encrypted, real-time enterprise messaging framework built with Flutter, Node.js, and MongoDB authentication.", status: "LIVE", tag: "Full-Stack" },
        { title: "JarvisAI Engine", desc: "Python-driven voice intelligence suite featuring localized WhatsApp automation and ambient acoustics calibration.", status: "LIVE", tag: "Automation" },
        { title: "Kings Bridge Corporate Portal", desc: "High-performance consultancy hub and infrastructure management platform deployed on Vercel/Render.", status: "LIVE", tag: "Cloud" }
    ],
    techStack: ["Kali Linux", "Node.js", "Python", "Flutter", "YOLOv8", "PostgreSQL", "MongoDB", "Docker", "Vercel"]
};

const render = () => {
    // 1. Hero Section
    document.getElementById('hero-module').innerHTML = `
        <section class="relative py-36 md:py-48 text-center overflow-hidden bg-black border-b border-neutral-900">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
            
            <div class="relative max-w-5xl mx-auto px-6 z-10">
                <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md mb-8">
                    <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                    <span class="text-xs font-mono tracking-widest text-amber-300 uppercase">Enterprise Infrastructure Division</span>
                </div>
                
                <h2 class="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-white">
                    ${siteData.hero.title}
                </h2>
                
                <p class="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
                    ${siteData.hero.subtitle}
                </p>
                
                <div class="flex flex-wrap justify-center gap-5 mb-20">
                    <a href="#contact" class="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-xs uppercase tracking-[0.2em] rounded hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300">
                        Initiate Consultation
                    </a>
                    <a href="#projects" class="px-8 py-4 bg-black text-sky-300 border border-sky-500/40 font-bold text-xs uppercase tracking-[0.2em] rounded hover:bg-neutral-900 hover:border-sky-400 transition-all duration-300 backdrop-blur-md">
                        View Deployments
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-neutral-900 max-w-4xl mx-auto">
                    ${siteData.metrics.map(m => `
                        <div class="p-4 bg-black border border-neutral-900 rounded-lg">
                            <p class="text-2xl font-mono font-bold text-sky-400">${m.value}</p>
                            <p class="text-xs text-neutral-500 uppercase tracking-wider mt-1">${m.label}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>`;

    // 1.5. Corporate About Section
    if (document.getElementById('about-module')) {
        document.getElementById('about-module').innerHTML = `
            <section id="about" class="py-32 max-w-6xl mx-auto px-6 bg-black border-b border-neutral-900">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-md mb-6">
                            <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                            <span class="text-[11px] font-mono tracking-widest text-sky-300 uppercase">Operational Origins & Doctrine</span>
                        </div>
                        
                        <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-6 leading-tight">
                            Founded in <span class="text-amber-400">2026</span> at <span class="text-sky-400">UET Mardan</span>, Engineered for the Global Frontier.
                        </h2>
                        
                        <p class="text-neutral-400 text-sm md:text-base leading-relaxed font-light mb-6">
                            KING'S BRIDGE was established in 2026 within the software engineering corridors of the University of Engineering and Technology (UET) Mardan. Conceived as an advanced technical initiative, the consultancy was forged to bridge the critical divide between theoretical computer science and industrial-scale defense engineering.
                        </p>
                        
                        <p class="text-neutral-500 text-sm leading-relaxed font-light mb-8">
                            Today, our team architects elite solutions at the intersection of offensive cyber forensics, real-time computer vision pipelines, autonomous agentic intelligence, and high-concurrency cloud backends. We reject off-the-shelf compromises, deploying tailor-built software engines hardened with strict zero-trust standards.
                        </p>
                        
                        <div class="flex items-center space-x-6 border-t border-neutral-900 pt-6 font-mono text-xs text-neutral-400">
                            <div>
                                <span class="text-amber-400 font-bold block text-base">UET MARDAN</span>
                                <span>Academic & R&D Root</span>
                            </div>
                            <div class="h-8 w-[1px] bg-neutral-800"></div>
                            <div>
                                <span class="text-sky-400 font-bold block text-base">EST. 2026</span>
                                <span>Autonomous Operations</span>
                            </div>
                            <div class="h-8 w-[1px] bg-neutral-800"></div>
                            <div>
                                <span class="text-emerald-400 font-bold block text-base">GLOBAL</span>
                                <span>Zero-Trust Standard</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="p-6 bg-black border border-neutral-900 rounded-xl gold-border-glow transition-all duration-300">
                            <div class="flex items-center space-x-3 mb-2">
                                <span class="text-amber-400 font-mono text-sm">01 //</span>
                                <h3 class="text-lg font-bold text-white">First-Principles Engineering</h3>
                            </div>
                            <p class="text-neutral-400 text-xs leading-relaxed font-light">
                                Born from rigor and technical discipline. We craft custom microservices, low-latency APIs, and optimized databases designed to withstand immense workload pressures without failure.
                            </p>
                        </div>

                        <div class="p-6 bg-black border border-neutral-900 rounded-xl blue-border-glow transition-all duration-300">
                            <div class="flex items-center space-x-3 mb-2">
                                <span class="text-sky-400 font-mono text-sm">02 //</span>
                                <h3 class="text-lg font-bold text-white">Continuous Zero-Trust Security</h3>
                            </div>
                            <p class="text-neutral-400 text-xs leading-relaxed font-light">
                                Defensive hardening, forensic payload validation, and tactical network auditing. Every communication layer is verified, encrypted, and isolated by default.
                            </p>
                        </div>

                        <div class="p-6 bg-black border border-neutral-900 rounded-xl gold-border-glow transition-all duration-300">
                            <div class="flex items-center space-x-3 mb-2">
                                <span class="text-amber-400 font-mono text-sm">03 //</span>
                                <h3 class="text-lg font-bold text-white">Autonomous Machine Intelligence</h3>
                            </div>
                            <p class="text-neutral-400 text-xs leading-relaxed font-light">
                                From real-time object detection models to automated enterprise agent workflows, we build systems that interpret data and execute operations with minimal human friction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>`;
    }

    // 2. Core Pillars
    document.getElementById('services-module').innerHTML = `
        <section id="services" class="py-32 max-w-6xl mx-auto px-6 bg-black">
            <div class="text-center mb-20">
                <p class="text-xs font-mono uppercase tracking-[0.4em] text-amber-400 mb-3">Capabilities Framework</p>
                <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">Core Pillars of Expertise</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${siteData.services.map((s, idx) => `
                    <div class="p-8 bg-black border border-neutral-900 rounded-xl backdrop-blur-xl ${idx % 2 === 0 ? 'gold-border-glow' : 'blue-border-glow'} transition-all duration-300 relative group">
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-[10px] font-mono tracking-widest ${idx % 2 === 0 ? 'text-amber-300 bg-amber-500/10 border-amber-500/20' : 'text-sky-300 bg-sky-500/10 border-sky-500/20'} uppercase px-3 py-1 rounded border">${s.badge}</span>
                            <div class="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-800 ${idx % 2 === 0 ? 'text-amber-400 group-hover:bg-amber-400' : 'text-sky-400 group-hover:bg-sky-400'} group-hover:text-black transition-all">
                                &#8599;
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-white ${idx % 2 === 0 ? 'group-hover:text-amber-300' : 'group-hover:text-sky-300'} transition-colors">${s.title}</h3>
                        <p class="text-neutral-400 text-sm leading-relaxed font-light">${s.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>`;

    // 3. Technical Architecture Console
    document.getElementById('tech-module').innerHTML = `
        <section class="py-24 max-w-4xl mx-auto px-6 bg-black">
            <div class="bg-black border border-neutral-900 rounded-xl shadow-2xl p-8 font-mono blue-glow">
                <div class="flex items-center justify-between mb-6 border-b border-neutral-900 pb-4">
                    <div class="flex items-center space-x-2">
                        <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        <span class="text-xs text-neutral-500 pl-3">kingsbridge_stack_v2.6.sh</span>
                    </div>
                    <span class="text-[10px] text-sky-400 uppercase tracking-widest">Active Runtime</span>
                </div>
                <p class="text-xs text-neutral-500 mb-4">$ // Core Engineering Libraries & Defensive Environment</p>
                <div class="flex flex-wrap gap-3">
                    ${siteData.techStack.map(t => `
                        <span class="px-4 py-2 bg-black border border-neutral-900 rounded text-xs text-neutral-300 hover:text-amber-300 hover:border-amber-500/40 transition-all cursor-default">
                            <span class="text-sky-400 mr-2">></span>${t}
                        </span>
                    `).join('')}
                </div>
            </div>
        </section>`;

    // 4. Infrastructure Deployments
    document.getElementById('projects-module').innerHTML = `
        <section id="projects" class="py-32 bg-black border-t border-b border-neutral-900">
            <div class="max-w-5xl mx-auto px-6">
                <div class="text-center mb-20">
                    <p class="text-xs font-mono uppercase tracking-[0.4em] text-sky-400 mb-3">Live Deployments</p>
                    <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">System Architecture & Projects</h2>
                </div>
                
                <div class="space-y-4">
                    ${siteData.projects.map(p => `
                        <div class="p-6 bg-black border border-neutral-900 rounded-lg hover:border-sky-500/50 transition-all duration-300 flex flex-col md:flex-row justify-between md:items-center gap-4">
                            <div>
                                <div class="flex items-center space-x-3 mb-1">
                                    <h3 class="text-lg font-bold text-white">${p.title}</h3>
                                    <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-black border border-neutral-800 text-sky-300">${p.tag}</span>
                                </div>
                                <p class="text-neutral-400 text-sm font-light max-w-2xl">${p.desc}</p>
                            </div>
                            <div>
                                <span class="inline-flex items-center text-[10px] font-mono tracking-widest font-bold ${p.status === 'LIVE' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-amber-400 bg-amber-500/10 border-amber-500/20'} px-3 py-1 border rounded-full uppercase">
                                    ● ${p.status}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>`;

    // 5. Executive Leadership Grid
    if (document.getElementById('leadership-module')) {
        const leadershipTeam = [
            {
                name: "Shayan Khan",
                role: "Chief Executive Officer",
                bio: "Architecting next-generation digital defense frameworks, custom business automation engines, and robust intelligent infrastructure systems.",
                image: "assets/ceo-avatar.png"
            },
            {
                name: "Allyan Khan",
                role: "AI & Machine Learning Lead",
                bio: "Designing autonomous agentic workflows, complex computer vision pipelines, and scalable predictive data intelligence models.",
                image: "assets/allyan-avatar.png"
            },
            {
                name: "Naeem Shah",
                role: "Lead Web Developer",
                bio: "Engineering high-performance web applications, modern full-stack user interfaces, and resilient client-side architecture.",
                image: "assets/naeem-avatar.png"
            }
        ];

        document.getElementById('leadership-module').innerHTML = `
            <section id="leadership" class="py-28 max-w-6xl mx-auto px-6 bg-black">
                <div class="text-center mb-16">
                    <p class="text-xs font-mono uppercase tracking-[0.4em] text-amber-400 mb-3">Governance</p>
                    <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">Executive Leadership</h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    ${leadershipTeam.map((member, idx) => `
                        <div class="p-8 bg-black border border-neutral-900 rounded-xl backdrop-blur-md flex flex-col items-center ${idx === 0 ? 'gold-border-glow' : 'blue-border-glow'} transition-all duration-300">
                            <div class="w-36 h-36 mb-6 rounded-full border-2 ${idx === 0 ? 'border-amber-500/60' : 'border-sky-500/60'} p-1 bg-black shadow-2xl overflow-hidden">
                                <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover rounded-full" onerror="this.src='https://cdn-icons-png.flaticon.com/512/149/149071.png'">
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-1 tracking-wide">${member.name}</h3>
                            <p class="text-xs font-mono uppercase tracking-widest ${idx === 0 ? 'text-amber-400' : 'text-sky-400'} font-semibold mb-4">${member.role}</p>
                            <p class="text-neutral-400 text-sm leading-relaxed font-light max-w-sm">${member.bio}</p>
                        </div>
                    `).join('')}
                </div>
            </section>`;
    }

    // 5.5. Engineering & Development Team Grid
    if (document.getElementById('developers-module')) {
        const devTeam = [
            {
                name: "Sarah Chen",
                role: "Cybersecurity & Forensic Analyst",
                stack: "Kali Linux / Wireshark / Python",
                image: "assets/cyber-avatar.png"
            },
            {
                name: "Zaid Tariq",
                role: "Backend & Systems Engineer",
                stack: "Node.js / Express / PostgreSQL",
                image: "assets/dev1-avatar.png"
            },
            {
                name: "Hamza Malik",
                role: "Computer Vision Engineer",
                stack: "OpenCV / YOLOv8 / PyTorch",
                image: "assets/dev2-avatar.png"
            },
            {
                name: "Bilal Ahmad",
                role: "Full-Stack UI/UX Engineer",
                stack: "Flutter / Tailwind / MongoDB",
                image: "assets/dev3-avatar.png"
            }
        ];

        document.getElementById('developers-module').innerHTML = `
            <section id="developers" class="py-24 max-w-7xl mx-auto px-6 bg-black border-t border-neutral-900">
                <div class="text-center mb-16">
                    <p class="text-xs font-mono uppercase tracking-[0.4em] text-sky-400 mb-3">Core Engineering</p>
                    <h2 class="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">Development & Research Unit</h2>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    ${devTeam.map(dev => `
                        <div class="p-6 bg-neutral-950 border border-neutral-900 rounded-xl hover:border-sky-500/50 transition-all duration-300 flex flex-col items-center text-center group">
                            <div class="w-24 h-24 mb-4 rounded-full border border-neutral-800 p-1 bg-black group-hover:border-sky-400 transition-colors overflow-hidden">
                                <img src="${dev.image}" alt="${dev.name}" class="w-full h-full object-cover rounded-full" onerror="this.src='https://cdn-icons-png.flaticon.com/512/149/149071.png'">
                            </div>
                            <h4 class="text-lg font-bold text-white mb-1">${dev.name}</h4>
                            <p class="text-xs font-mono text-sky-400 mb-3">${dev.role}</p>
                            <span class="text-[10px] font-mono text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">${dev.stack}</span>
                        </div>
                    `).join('')}
                </div>
            </section>`;
    }

    // 5.6. Join Our Engineering Unit
    if (document.getElementById('careers-module')) {
        document.getElementById('careers-module').innerHTML = `
            <section id="careers" class="py-28 max-w-4xl mx-auto px-6 bg-black border-t border-neutral-900">
                <div class="text-center mb-16">
                    <p class="text-xs font-mono uppercase tracking-[0.4em] text-amber-400 mb-3">Talent Acquisition</p>
                    <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">Join the Engineering Unit</h2>
                    <p class="text-neutral-400 text-sm font-light mt-4 max-w-xl mx-auto">
                        We are continuously onboarding software engineers, cybersecurity researchers, and machine learning practitioners to build resilient next-generation infrastructure.
                    </p>
                </div>

                <form id="joinTeamForm" class="space-y-5 bg-neutral-950 p-8 md:p-10 border border-neutral-900 rounded-2xl contact-card-hover">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label class="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">Full Legal Name</label>
                            <input name="applicantName" placeholder="e.g. John Doe" class="input-hover w-full p-3.5 bg-black border border-neutral-800 rounded focus:border-amber-400 outline-none transition text-sm text-slate-200 placeholder-neutral-700" required>
                        </div>
                        <div>
                            <label class="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">Direct Contact Email</label>
                            <input name="applicantEmail" type="email" placeholder="e.g. engineer@domain.com" class="input-hover w-full p-3.5 bg-black border border-neutral-800 rounded focus:border-amber-400 outline-none transition text-sm text-slate-200 placeholder-neutral-700" required>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label class="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">Target Engineering Track</label>
                            <select name="engineeringTrack" class="input-hover w-full p-3.5 bg-black border border-neutral-800 rounded focus:border-amber-400 outline-none transition text-sm text-slate-200" required>
                                <option value="Cybersecurity & Penetration Testing">Cybersecurity & Penetration Testing</option>
                                <option value="Full-Stack Web & API Engineering">Full-Stack Web & API Engineering</option>
                                <option value="Computer Vision & AI Modeling">Computer Vision & AI Modeling</option>
                                <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">GitHub / Portfolio URL</label>
                            <input name="portfolioUrl" type="url" placeholder="https://github.com/yourhandle" class="input-hover w-full p-3.5 bg-black border border-neutral-800 rounded focus:border-amber-400 outline-none transition text-sm text-slate-200 placeholder-neutral-700" required>
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">Curriculum Vitae / Résumé (PDF or DOCX, max 4MB)</label>
                        <input name="resumeFile" id="resumeFileInput" type="file" accept=".pdf,.doc,.docx" class="input-hover w-full p-3 bg-black border border-neutral-800 rounded focus:border-amber-400 outline-none transition text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-mono file:font-semibold file:bg-sky-500/10 file:text-sky-400 hover:file:bg-sky-500/20" required>
                    </div>

                    <div>
                        <label class="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">Technical Proficiency & Core Projects</label>
                        <textarea name="experienceSummary" placeholder="Summarize your tech stack, production repositories, or reverse engineering experience..." class="input-hover w-full p-3.5 bg-black border border-neutral-800 rounded h-28 focus:border-amber-400 outline-none transition text-sm text-slate-200 placeholder-neutral-700 resize-none" required></textarea>
                    </div>

                    <button type="submit" class="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-black font-bold text-xs tracking-[0.2em] uppercase rounded transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]">
                        SUBMIT CANDIDACY DOSSIER
                    </button>
                </form>
            </section>`;
    }

    // 6. Call To Action Banner
    document.getElementById('cta-module').innerHTML = `
        <section class="py-24 text-center bg-black border-t border-b border-neutral-900">
            <div class="max-w-3xl mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Scale Secure Systems?</h2>
                <p class="text-neutral-400 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">Connect directly with our engineering group to initiate infrastructure hardening, audit deployments, or construct custom operations pipelines.</p>
                <a href="#contact" class="inline-block px-10 py-4 bg-sky-500 hover:bg-sky-400 text-black font-bold text-xs tracking-[0.2em] uppercase rounded transition-all shadow-[0_0_25px_rgba(56,189,248,0.3)]">INITIATE PARTNERSHIP</a>
            </div>
        </section>`;

    // 7. Interactive Contact Form with Cursor Hover Lighting
    document.getElementById('contact-module').innerHTML = `
        <section id="contact" class="py-32 max-w-xl mx-auto px-6 bg-black">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold uppercase tracking-wider text-white mb-2">Initiate Communication</h2>
                <p class="text-neutral-500 text-xs font-mono">Encrypted payload dispatch to secure triage servers.</p>
            </div>
            
            <form id="contactForm" class="space-y-5 bg-black p-8 rounded-xl contact-card-hover cursor-pointer">
                <div>
                    <input name="name" placeholder="Designation / Full Name" class="input-hover w-full p-4 bg-black border border-neutral-800 rounded focus:border-sky-400 outline-none transition duration-300 text-sm text-slate-200 placeholder-neutral-600" required>
                </div>
                <div>
                    <input name="email" type="email" placeholder="Corporate Email Address" class="input-hover w-full p-4 bg-black border border-neutral-800 rounded focus:border-sky-400 outline-none transition duration-300 text-sm text-slate-200 placeholder-neutral-600" required>
                </div>
                <div>
                    <textarea name="message" placeholder="System Specifications / Requirement Payload" class="input-hover w-full p-4 bg-black border border-neutral-800 rounded h-36 focus:border-sky-400 outline-none transition duration-300 text-sm text-slate-200 placeholder-neutral-600 resize-none" required></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs tracking-[0.2em] uppercase rounded transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">TRANSMIT DATA MATRIX</button>
            </form>
        </section>`;

    // 8. Footer Section
    document.getElementById('footer-module').innerHTML = `
        <footer class="py-12 border-t border-neutral-900 text-center text-neutral-500 text-xs tracking-widest font-mono bg-black">
            <div class="mb-4 space-x-6">
                <a href="/security.txt" class="hover:text-amber-400 transition">Security Policy</a>
                <a href="https://github.com/shayankhan20356" target="_blank" class="hover:text-sky-400 transition">GitHub Profile</a>
            </div>
            <p>&copy; 2026 KING'S BRIDGE INFRASTRUCTURE. ALL RIGHTS RESERVED.</p>
        </footer>`;
};

render();

// Helper to convert CV file to Base64
const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = (error) => reject(error);
});

// Form Submission Handler: Contact Form
document.addEventListener('submit', async (e) => {
    if (e.target.id === 'contactForm') {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.textContent = 'TRANSMITTING DATA...';
        btn.disabled = true;
        
        const data = Object.fromEntries(new FormData(e.target).entries());
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            btn.textContent = res.ok ? 'TRANSMISSION SUCCESSFUL' : 'TRANSMISSION ERROR';
            if (res.ok) e.target.reset();
        } catch {
            btn.textContent = 'CONNECTION REFUSED';
        } finally {
            setTimeout(() => {
                btn.textContent = 'TRANSMIT DATA MATRIX';
                btn.disabled = false;
            }, 4000);
        }
    }
});

// Form Submission Handler: Join Team Form with CV Attachment
document.addEventListener('submit', async (e) => {
    if (e.target.id === 'joinTeamForm') {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.textContent = 'ATTACHING DOSSIER & TRANSMITTING...';
        btn.disabled = true;

        try {
            const form = e.target;
            const fileInput = document.getElementById('resumeFileInput');
            const file = fileInput.files[0];

            if (file && file.size > 4.5 * 1024 * 1024) {
                alert('File size exceeds the 4MB limit.');
                btn.textContent = 'SUBMIT CANDIDACY DOSSIER';
                btn.disabled = false;
                return;
            }

            let fileBase64 = null;
            let fileName = null;
            if (file) {
                fileBase64 = await fileToBase64(file);
                fileName = file.name;
            }

            const payload = {
                applicantName: form.applicantName.value,
                applicantEmail: form.applicantEmail.value,
                engineeringTrack: form.engineeringTrack.value,
                portfolioUrl: form.portfolioUrl.value,
                experienceSummary: form.experienceSummary.value,
                resumeFileName: fileName,
                resumeBase64: fileBase64
            };

            const res = await fetch('/api/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            btn.textContent = res.ok ? 'DOSSIER RECEIVED // UNDER REVIEW' : 'TRANSMISSION FAILED';
            if (res.ok) form.reset();
        } catch {
            btn.textContent = 'CONNECTION REFUSED';
        } finally {
            setTimeout(() => {
                btn.textContent = 'SUBMIT CANDIDACY DOSSIER';
                btn.disabled = false;
            }, 4000);
        }
    }
});