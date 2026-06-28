const siteData = {
    services: [
        { title: "Agentic AI", desc: "Autonomous ML systems and computer vision pipelines." },
        { title: "Cybersecurity", desc: "Penetration testing and forensic data research." },
        { title: "Full-Stack", desc: "Scalable Node.js architectures and database design." }
    ],
    projects: [
        { title: "Aegis-Vision", desc: "High-scale weapon detection utilizing YOLOv8.", status: "LIVE" },
        { title: "Matrix Replay", desc: "Advanced network forensics and auditing tool.", status: "RESEARCH" }
    ],
    techStack: ["Kali Linux", "Node.js", "Flutter", "YOLOv8", "PostgreSQL", "MongoDB"]
};

const render = () => {
    document.getElementById('hero-module').innerHTML = `
        <section class="py-24 text-center border-b border-gray-800">
            <h2 class="text-5xl font-bold mb-4">Securing the Digital Frontier</h2>
            <p class="text-gray-400">Next-gen autonomous infrastructure for enterprise.</p>
        </section>`;

    document.getElementById('services-module').innerHTML = `
        <section id="services" class="py-20 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            ${siteData.services.map(s => `
                <div class="p-6 border border-gray-800 rounded-xl bg-gray-900/30">
                    <h3 class="font-bold text-blue-500 mb-2">${s.title}</h3>
                    <p class="text-sm text-gray-400">${s.desc}</p>
                </div>`).join('')}
        </section>`;

    document.getElementById('tech-module').innerHTML = `
        <section class="py-10 max-w-5xl mx-auto px-6 text-center">
            <h3 class="text-gray-500 uppercase tracking-widest text-xs mb-6">Powered By</h3>
            <div class="flex flex-wrap justify-center gap-4">
                ${siteData.techStack.map(t => `
                    <span class="px-4 py-1 border border-blue-900/50 rounded-full text-blue-400 text-sm font-mono">${t}</span>
                `).join('')}
            </div>
        </section>`;

    document.getElementById('projects-module').innerHTML = `
        <section id="projects" class="py-20 bg-gray-900/20">
            <div class="max-w-5xl mx-auto px-6">
                <h2 class="text-3xl font-bold mb-10">Deployed Infrastructure</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    ${siteData.projects.map(p => `
                        <div class="p-6 border border-gray-800 rounded-xl">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="font-bold text-xl">${p.title}</h3>
                                <span class="text-[10px] font-bold ${p.status === 'LIVE' ? 'text-emerald-500' : 'text-amber-500'}">● ${p.status}</span>
                            </div>
                            <p class="text-gray-400 text-sm">${p.desc}</p>
                        </div>`).join('')}
                </div>
            </div>
        </section>`;
};

render();