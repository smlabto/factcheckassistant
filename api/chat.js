export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { text } = req.body;  
    if (!text || text.trim().length < 3) {
        return res.status(400).json({ error: "Invalid text input" });
    }

    const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/tinyllama/tinyllama-1.1b-chat-v1.0`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
            },
            body: JSON.stringify({
                messages: [
                    { role: "system", content: "You are a chatbot fact checking assistant developed by the Social Media Lab at Toronto Metropolitan University. Fact-check statements, then explain why (in less than 600 characters)." },
                    { role: "user", content: text },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`Cloudflare API error: ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json({ result: data.result.response });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}