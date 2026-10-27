export default function handler(req, res) {
    console.log("[Vercel Log] Client handshake initiated.");
    
    // Always allow cross-origin requests from game clients
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    
    return res.status(200).json({
        "ValidVersion": true,
        "BuildEnvironment": "Production",
        "ServerStatus": "Normal",
        "Endpoints": {
            "AuthUrl": "https://reccyv2.tempstudios.xyz",
            "RoomsUrl": "https://reccyv2.tempstudios.xyz"
        }
    });
}
