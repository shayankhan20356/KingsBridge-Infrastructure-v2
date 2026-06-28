const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    try {
        const { name, email, subject, message } = req.body;
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'khanshayyan223@gmail.com',
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(500).json({ error: 'Failed' });
    }
};