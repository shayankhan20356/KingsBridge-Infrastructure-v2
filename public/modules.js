const components = {
    hero: `
        <section class="py-24 text-center">
            <h1 class="text-6xl font-bold mb-6">Securing the Digital Frontier</h1>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">Expert consultancy in Agentic AI, Penetration Testing, and scalable Full-Stack architecture.</p>
        </section>`,
    
    projects: (projects) => `
        <section class="py-20 bg-gray-900">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold mb-10">Deployed Infrastructure</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    ${projects.map(p => `
                        <div class="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition">
                            <h3 class="text-xl font-bold mb-2">${p.title}</h3>
                            <p class="text-gray-400">${p.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>`
};