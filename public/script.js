document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'TRANSMITTING...';
    const data = Object.fromEntries(new FormData(e.target).entries());
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    btn.textContent = res.ok ? 'SUCCESS' : 'FAILED';
});