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

    // 3. Tech Stack Console
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

    // 5. Executive Leadership
    if (document.getElementById('leadership-module')) {
        const team = [
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
                image: "assets/ai-lead-avatar.png"
            }
        ];

        document.getElementById('leadership-module').innerHTML = `
            <section id="leadership" class="py-32 max-w-5xl mx-auto px-6 bg-black">
                <div class="text-center mb-20">
                    <p class="text-xs font-mono uppercase tracking-[0.4em] text-amber-400 mb-3">Governance</p>
                    <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">Executive Leadership</h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                    ${team.map((member, idx) => `
                        <div class="p-8 bg-black border border-neutral-900 rounded-xl backdrop-blur-md flex flex-col items-center ${idx === 0 ? 'gold-border-glow' : 'blue-border-glow'} transition-all">
                            <div class="w-36 h-36 mb-6 rounded-full border-2 ${idx === 0 ? 'border-amber-500/60' : 'border-sky-500/60'} p-1 bg-black shadow-2xl overflow-hidden">
                                <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover rounded-full" onerror="this.src='https://cdn-icons-png.flaticon.com/512/149/149071.png'">
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-1">${member.name}</h3>
                            <p class="text-xs font-mono uppercase tracking-widest ${idx === 0 ? 'text-amber-400' : 'text-sky-400'} font-semibold mb-4">${member.role}</p>
                            <p class="text-neutral-400 text-sm leading-relaxed font-light max-w-sm">${member.bio}</p>
                        </div>
                    `).join('')}
                </div>
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

// Form Submission Handler
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
            if(res.ok) e.target.reset();
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