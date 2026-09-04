const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { applicantName, applicantEmail, engineeringTrack, portfolioUrl, experienceSummary } = req.body;

        await resend.emails.send({
            from: 'KingsBridge Recruitment <onboarding@resend.dev>',
            to: 'contact.kingsbridge@gmail.com',
            subject: `[CANDIDACY DOSSIER] ${applicantName} - ${engineeringTrack}`,
            text: `New Application Received\n` +
                  `-------------------------\n` +
                  `Candidate Name: ${applicantName}\n` +
                  `Candidate Email: ${applicantEmail}\n` +
                  `Engineering Track: ${engineeringTrack}\n` +
                  `Portfolio/GitHub: ${portfolioUrl}\n\n` +
                  `Technical Experience & Summary:\n${experienceSummary}`
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(500).json({ error: 'Failed' });
    }
};