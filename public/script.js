const siteData = {
    hero: {
        title: "Architecting Resilient Digital Infrastructure",
        subtitle: "Strategic consultancy in Agentic AI, Penetration Testing, and scalable enterprise full-stack solutions."
    },
    services: [
        { title: "Agentic AI", desc: "Developing autonomous machine learning systems and computer vision pipelines to automate high-scale enterprise operations." },
        { title: "Cybersecurity", desc: "Comprehensive penetration testing, vulnerability assessment, and forensic data research to harden your perimeter." },
        { title: "Full-Stack", desc: "Building scalable, high-performance web infrastructures using modern Node.js ecosystems and robust database architectures." }
    ],
    projects: [
        { title: "Aegis-Vision", desc: "High-scale real-time weapon detection utilizing YOLOv8 computer vision and PostgreSQL." },
        { title: "Matrix Replay", desc: "Advanced digital forensics and network auditing tool designed for data siphoning analysis." }
    ],
    techStack: ["Kali Linux", "Node.js", "Flutter", "YOLOv8", "PostgreSQL", "MongoDB"]
};

const render = () => {
    // 1. Hero
    document.getElementById('hero-module').innerHTML = `
        <section class="py-32 text-center border-b border-gray-800">
            <h2 class="text-6xl font-bold mb-6 tracking-tight">${siteData.hero.title}</h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">${siteData.hero.subtitle}</p>
        </section>`;

    // 2. Services
    document.getElementById('services-module').innerHTML = `
        <section id="services" class="py-24 max-w-4xl mx-auto px-6">
            <h2 class="text-3xl font-bold mb-12 uppercase tracking-widest text-center">Core Expertise</h2>
            <div class="space-y-8">
                ${siteData.services.map(s => `
                    <div class="p-8 border-l-4 border-blue-600 bg-gray-900/20 hover:bg-gray-900/50 transition">
                        <h3 class="text-2xl font-bold mb-3">${s.title}</h3>
                        <p class="text-gray-400 leading-relaxed">${s.desc}</p>
                    </div>`).join('')}
            </div>
        </section>`;

    // 3. Projects
    document.getElementById('projects-module').innerHTML = `
        <section id="projects" class="py-24 bg-gray-900/10">
            <div class="max-w-4xl mx-auto px-6">
                <h2 class="text-3xl font-bold mb-12 uppercase tracking-widest text-center">Infrastructure Deployments</h2>
                <div class="space-y-6">
                    ${siteData.projects.map(p => `
                        <div class="p-6 border border-gray-800 rounded hover:border-blue-500 transition group">
                            <h3 class="text-xl font-bold mb-2 group-hover:text-blue-500">${p.title}</h3>
                            <p class="text-gray-400 text-sm">${p.desc}</p>
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

    // 6. Contact Form
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

    // 7. Footer
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