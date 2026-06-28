const siteData = {
    hero: {
        title: "Architecting Resilient Digital Infrastructure",
        subtitle: "Strategic consultancy in Agentic AI, Penetration Testing, and scalable enterprise full-stack solutions."
    },
    services: [
        { title: "Agentic AI", desc: "Autonomous ML systems and computer vision pipelines." },
        { title: "Cybersecurity", desc: "Advanced penetration testing and forensic research." },
        { title: "Full-Stack", desc: "Scalable Node.js architectures and robust databases." }
    ],
    projects: [
        { title: "Aegis-Vision", desc: "Real-time threat detection utilizing YOLOv8.", status: "LIVE" },
        { title: "Matrix Replay", desc: "Network forensics and data auditing tool.", status: "RESEARCH" }
    ]
};

const render = () => {
    // Hero with hover-responsive text
    document.getElementById('hero-module').innerHTML = `
        <section class="py-24 text-center border-b border-gray-800">
            <h2 class="text-5xl font-bold mb-4 hover:text-blue-500 transition-colors duration-500 cursor-default">${siteData.hero.title}</h2>
            <p class="text-gray-400">${siteData.hero.subtitle}</p>
        </section>`;

    // Services with Hover Glow Effect
    document.getElementById('services-module').innerHTML = `
        <section id="services" class="py-20 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            ${siteData.services.map(s => `
                <div class="p-6 border border-gray-800 rounded-xl bg-gray-900/30 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
                    <h3 class="font-bold text-blue-500 mb-2">${s.title}</h3>
                    <p class="text-sm text-gray-400">${s.desc}</p>
                </div>`).join('')}
        </section>`;

    // Contact Form (Initiate Communication)
    document.getElementById('contact-module').innerHTML = `
        <section id="contact" class="py-20 max-w-2xl mx-auto px-6">
            <h2 class="text-3xl font-bold mb-8 text-center">Initiate Communication</h2>
            <form id="contactForm" class="space-y-4">
                <input name="name" placeholder="Designation / Name" class="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 outline-none" required>
                <input name="email" type="email" placeholder="Secure Email" class="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 outline-none" required>
                <textarea name="message" placeholder="Encrypted Payload" class="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg h-32 focus:border-blue-500 outline-none"></textarea>
                <button type="submit" class="w-full py-4 bg-blue-600 hover:bg-blue-700 transition font-bold rounded-lg uppercase tracking-widest">Transmit Data</button>
            </form>
        </section>`;
};

render();

// Communication Handler
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