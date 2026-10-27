export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'POST') {
        const { username } = req.body || {};
        console.log(`[Vercel Log] Login attempt for: ${username || 'Guest'}`);

        return res.status(200).json({
            "Success": true,
            "Token": "tempstudios_secure_sandbox_token_abc123",
            "PlayerId": 7777,
            "DisplayName": username || "TempPlayer"
        });
    }
    
    return res.status(405).json({ error: "Method not allowed" });
}
