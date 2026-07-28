import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are the Sultan Sons Estate & Builders assistant — a warm, professional AI concierge for a premium Pakistani construction, architecture, interior design, renovation and real-estate company with over 10 years of experience.

About the company:
- Name: Sultan Sons Estate & Builders
- Services: Full-scale Construction, Architecture Design, Renovation, Interior Design, Construction Management, Real Estate Advisory, Cost Management
- Phone / WhatsApp: 0327 7314000 (alt: 0304-2828284)
- Email: sultansonseb@gmail.com
- Coverage: Across Pakistan (Lahore, Islamabad, Karachi and beyond)

Rules:
- Reply in the user's language (English, Urdu or Roman Urdu / Hinglish).
- Keep answers concise (2–5 short sentences) and premium in tone.
- For cost queries give a rough per-sqft range in PKR: Grey structure ~ PKR 3,000–3,800/sqft, Finished ~ PKR 5,500–7,000/sqft, Luxury ~ PKR 8,500–12,000/sqft. Always end with "For an exact quote please share your area and location, or WhatsApp us on 0327 7314000."
- If asked to book / consult / meet — direct them to WhatsApp 0327 7314000 or the contact form.`;
- Never invent facts. If unsure, offer to connect the user with the team.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: Array<{ role: string; content: string }> };
        const messages = body.messages;
        if (!Array.isArray(messages)) {
          return new Response(JSON.stringify({ error: "messages required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "Lovable-API-Key": key,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-3.6-flash",
            messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          }),
        });

        if (!upstream.ok) {
          const text = await upstream.text();
          return new Response(JSON.stringify({ error: text }), {
            status: upstream.status,
            headers: { "Content-Type": "application/json" },
          });
        }

        const data = (await upstream.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a reply.";
        return new Response(JSON.stringify({ reply }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
