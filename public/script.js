const siteData = {
    hero: {
        title: "Architecting Resilient Digital Infrastructure",
        subtitle: "Strategic consultancy in Agentic AI, Advanced Machine Learning, Business Automation, Penetration Testing, and scalable enterprise full-stack solutions."
    },
    services: [
        { title: "Agentic AI & Business Automation", desc: "Developing autonomous machine learning systems, intelligent workflows, and custom automation engines to streamline high-scale enterprise operations." },
        { title: "Elite Cybersecurity", desc: "Comprehensive penetration testing, vulnerability assessments, and advanced network hardening to secure critical organizational infrastructure." },
        { title: "Scalable Full-Stack & Machine Learning", desc: "Building resilient, high-performance web applications and backend systems backed by data modeling and robust distributed database architectures." },
        { title: "Forensic Data Research", desc: "Deep digital forensics, incident response analysis, and technical auditing to detect, mitigate, and reverse sophisticated system threats." }
    ],
    projects: [
        { title: "Aegis-Vision", desc: "Real-time weapon detection utilizing YOLOv8 computer vision and PostgreSQL.", status: "LIVE" },
        { title: "Matrix Replay", desc: "Advanced digital forensics and network auditing tool designed for data siphoning.", status: "RESEARCH" },
        { title: "NovaChat", desc: "Real-time messaging application using Flutter and Node.js with MongoDB authentication.", status: "LIVE" },
        { title: "JarvisAI", desc: "Python-based voice assistant with WhatsApp automation and ambient noise calibration.", status: "LIVE" },
        { title: "Kings Bridge Portal", desc: "Full-stack web infrastructure and consultancy portal deployed on Render.", status: "LIVE" }
    ],
    techStack: ["Kali Linux", "Node.js", "Flutter", "YOLOv8", "PostgreSQL", "MongoDB"]
};

const render = () => {
    // 1. Hero
    document.getElementById('hero-module').innerHTML = `
        <section class="py-32 text-center border-b border-gray-800">
            <h2 class="text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-amber-500 bg-clip-text text-transparent">${siteData.hero.title}</h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto px-6">${siteData.hero.subtitle}</p>
        </section>`;

    // 2. Services
    document.getElementById('services-module').innerHTML = `
        <section id="services" class="py-24 max-w-4xl mx-auto px-6">
            <h2 class="text-3xl font-bold mb-12 uppercase tracking-widest text-center text-white">Core Expertise</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${siteData.services.map(s => `
                    <div class="p-8 border border-gray-800 bg-gray-900/10 hover:bg-gray-900/30 hover:border-amber-500/50 transition duration-300 rounded">
                        <h3 class="text-xl font-bold mb-3 text-white">${s.title}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">${s.desc}</p>
                    </div>`).join('')}
            </div>
        </section>`;

    // 3. Projects
    document.getElementById('projects-module').innerHTML = `
    <section id="projects" class="py-24 bg-gray-900/10">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-3xl font-bold mb-12 uppercase tracking-widest text-center">Infrastructure Deployments</h2>
            <div class="space-y-4">
                ${siteData.projects.map(p => `
                    <div class="p-6 border border-gray-800 rounded flex justify-between items-center hover:border-blue-500 transition group">
                        <div>
                            <h3 class="text-lg font-bold group-hover:text-blue-500">${p.title}</h3>
                            <p class="text-gray-400 text-sm mt-1">${p.desc}</p>
                        </div>
                        <span class="text-[10px] font-bold ${p.status === 'LIVE' ? 'text-emerald-500' : 'text-amber-500'} ml-4">
                            ● ${p.status}
                        </span>
                    </div>`).join('')}
            </div>
        </div>
    </section>`;

    // 4. Tech Stack
    document.getElementById('tech-module').innerHTML = `
        <section class="py-24 max-w-4xl mx-auto px-6 text-center">
            <h3 class="text-sm font-bold uppercase text-gray-600 mb-8">System Architecture Stack</h3>
            <div class="flex flex-wrap justify-center gap-3">
                ${siteData.techStack.map(t => `<span class="px-6 py-2 border border-gray-700 text-sm font-mono text-gray-300">${t}</span>`).join('')}
            </div>
        </section>`;

    // 5. CTA
    document.getElementById('cta-module').innerHTML = `
        <section class="py-24 text-center bg-blue-600">
            <h2 class="text-4xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
            <a href="#contact" class="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition">INITIATE PARTNERSHIP</a>
        </section>`;

    // 6. Executive Leadership (CEO Section)
    if (document.getElementById('leadership-module')) {
        document.getElementById('leadership-module').innerHTML = `
            <section class="py-24 bg-black border-t border-b border-gray-900 text-center">
                <div class="max-w-4xl mx-auto px-6">
                    <h2 class="text-3xl font-bold mb-12 uppercase tracking-widest text-center text-white">Executive Leadership</h2>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-44 h-44 mb-6 rounded-full border-2 border-amber-500 p-1 bg-neutral-900 shadow-xl shadow-amber-500/5 overflow-hidden">
                            <img src="assets/ceo-avatar.png" alt="Shayan Khan, CEO" class="w-full h-full object-cover rounded-full">
                        </div>
                        
                        <h3 class="text-2xl font-bold tracking-wide text-white mb-1">Shayan Khan</h3>
                        <p class="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold mb-6">Chief Executive Officer</p>
                        
                        <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                            Architecting next-generation digital defense frameworks, custom business automation engines, and robust intelligent infrastructure systems. Leading KING'S BRIDGE in delivering elite cyber security engineering and scalable full-stack transformations.
                        </p>
                    </div>
                </div>
            </section>`;
    }

    // 7. Contact Form
    document.getElementById('contact-module').innerHTML = `
        <section id="contact" class="py-24 max-w-2xl mx-auto px-6">
            <h2 class="text-3xl font-bold mb-12 uppercase tracking-widest text-center">Initiate Communication</h2>
            <form id="contactForm" class="space-y-4">
                <input name="name" placeholder="Designation / Name" class="w-full p-4 bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none" required>
                <input name="email" type="email" placeholder="Secure Email" class="w-full p-4 bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none" required>
                <textarea name="message" placeholder="Encrypted Payload" class="w-full p-4 bg-gray-900 border border-gray-700 rounded h-32 focus:border-blue-500 outline-none"></textarea>
                <button type="submit" class="w-full py-4 bg-blue-600 hover:bg-blue-700 transition font-bold uppercase tracking-widest">Transmit Data</button>
            </form>
        </section>`;

    // 8. Footer
    document.getElementById('footer-module').innerHTML = `
        <footer class="py-12 border-t border-gray-900 text-center text-gray-600 text-sm">
            <div class="mb-4 space-x-4">
                <a href="/security.txt" class="hover:text-blue-500">Security Policy</a>
                <a href="https://github.com/shayankhan20356" target="_blank" class="hover:text-blue-500">GitHub</a>
            </div>
            <p>&copy; 2026 KING'S BRIDGE INFRASTRUCTURE. ALL RIGHTS RESERVED.</p>
        </footer>`;
};

// Execute rendering
render();

// Event Listener for the Form
document.addEventListener('submit', async (e) => {
    if (e.target.id === 'contactForm') {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.textContent = 'TRANSMITTING...';
        
        const data = Object.fromEntries(new FormData(e.target).entries());
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        btn.textContent = res.ok ? 'TRANSMISSION SUCCESSFUL' : 'CONNECTION ERROR';
        if(res.ok) e.target.reset();
    }
});