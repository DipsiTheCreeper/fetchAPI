import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy endpoint
app.get("/bundles/:assetId", async (req, res) => {
    const assetId = req.params.assetId;

    try {
        const url = `https://catalog.roblox.com/v1/assets/${assetId}/bundles`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data); // send result back to Roblox
    } catch (err) {
        console.error("Proxy error:", err);
        res.status(500).json({ error: "Failed to fetch bundle info" });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy running on port ${PORT}`);
});