export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    return res.status(200).json({
        "PlayerId": 7777,
        "Outfits": ["default_torso", "default_legs", "temp_studios_custom_shirt"],
        "SelectedOutfit": "temp_studios_custom_shirt",
        "XP": 12500,
        "Level": 30
    });
}
