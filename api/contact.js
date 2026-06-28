const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    try {
        const { name, email, subject, message } = req.body;
        // api/contact.js

await resend.emails.send({
    from: 'KingsBridge Consultancy <onboarding@resend.dev>',
    to: 'contact.kingsbridge@gmail.com', // Your business email
    subject: `New Inquiry from: ${name}`,
    text: `Client Name: ${name}\nClient Email: ${email}\n\nMessage:\n${message}`
});
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(500).json({ error: 'Failed' });
    }
};