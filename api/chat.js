// Serverless function (Vercel) that keeps the Anthropic API key off the browser.
// Set ANTHROPIC_API_KEY in your Vercel project's Environment Variables.
const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic();

// ── Ashley's profile: everything the bot knows about her. Edit this to update its answers. ──
const DEFAULT_PROFILE = {
  name: "Ashley",
  headline: "Software Engineer · Project Coordinator @ Lyft · Python instructor · UC Merced CS '24",
  location: "Los Angeles, CA",
  education:
    "B.S. in Computer Science & Engineering, UC Merced (Dec 2024). Minor in Management & Business Economics. Capstone: built multimodal LLM fine-tuning pipelines and data visualization dashboards.",
  work:
    "Currently Project Coordinator at Lyft (since Dec 2025) on a fleet coverage program tracking ride coverage across major U.S. markets. The program is currently expanding to Dublin and Spain. " +
    "COOP Data Analytics Fellow (2025): used SQL, Python, and Tableau to analyze datasets, build dashboards, and present insights to stakeholders. " +
    "Python & AI Instructor at iD Tech Camps, Caltech campus (Summer 2025, before joining Lyft, and again in Summer 2026): teaches Intro to AI Assistants and Python, where students learn how to work with AI APIs and use API keys; 10+ students/week ages 10-17, also using PyGame and Piskel, 96% satisfaction. " +
    "Contract Web Developer (2025-present): built React/Flask/Supabase/Stripe sites - a car-wrapping business site (+35% inquiries), a construction landing page, and Pareagon, a full-stack e-commerce app with Stripe checkout (+40% engagement). " +
    "Sweep AI (2024): built a Flask API to fine-tune LLMs with Hugging Face Transformers and a React upload UI. " +
    "Drone data mapping (Summer 2024): processed real-time telemetry with ArcGIS, led DroneCamp training for 30+ students. " +
    "Cognitive Science Research Assistant (2023-24): behavioral data analysis with Swivl and Observer XT.",
  projects:
    "Sweep AI: LLM Fine-Tuning API - UC Merced senior project with Sweep AI mentors; an API for fine-tuning large language models using Hugging Face, Docker, Flask, and PostgreSQL. " +
    "Aggressive Wraps - responsive multi-page website with a gallery for a local car wrap company. " +
    "SnapACart - shopping cart app that uses the camera to scan items and add them to a virtual cart. " +
    "Royal Crown Roofing - professional roofing service website (royalcrown-roofing.com) that showcases services and collects leads. " +
    "This portfolio - built with React, JavaScript, and CSS, with a particle background and responsive design. " +
    "Interested in how AI can understand human emotions and social cues to improve communication.",
  activities:
    "College Track Scholar · SHPE (Society of Hispanic Professional Engineers) · SURF · Hispanic Scholarship Fund. " +
    "Received the Hispanic Scholarship Fund (HSF) scholarship in 2024. " +
    "Attended the SHPE 50th Anniversary Conference in Anaheim - a great chance to connect with and learn from other future engineers. " +
    "Instructor at DroneCamp (Summer 2024) under Dr. Brandon Stark at CSU Monterey Bay, helping people learn to fly and understand drone tech. Loves teaching and mentoring.",
  skills:
    "Python, JavaScript, C++, SQL · React, Flask, Vue, Tailwind · SQLite, SQLAlchemy, Supabase/PostgreSQL · Docker, Git, AWS · Tableau, ArcGIS, Figma · REST APIs, debugging, data validation, performance analysis · bilingual English/Spanish.",
  funFacts:
    "Loves playing soccer - was on the UC Merced intramural team and we won the tournament! ⚽ Big on hands-on learning and helping other people get into engineering.",
  contact:
    "LinkedIn: https://www.linkedin.com/in/ashleygp/ · GitHub: https://github.com/ashleygp2002 · or the Contact page on this site. Open to internships, co-ops, full-time, and seasonal roles.",
  voiceNotes:
    "Friendly, confident, and professional - the way you'd talk to a recruiter at a career fair. Use proper capitalization and full sentences. " +
    "Warm and genuine, but polished: no slang, at most one emoji in a conversation, and only when it fits. " +
    "Lead with the concrete answer (role, what you did, tools used, results), then add a short personal note about why you enjoy it. " +
    "Humble and honest - when you don't know a specific detail, say so instead of making something up.",
  sampleMessages:
    "Yes, I teach! I've been an instructor at iD Tech Camps on the Caltech campus for the summers of 2025 and 2026, teaching 10+ students a week between the ages of 10 and 17. " +
    "I teach Intro to AI Assistants and Python, where students learn how to work with AI APIs and use their own API keys. " +
    "Teaching is one of my favorite things I do - seeing coding click for someone for the first time is really rewarding.\n\n" +
    "I'm currently a Project Coordinator at Lyft, where I support a fleet coverage program that tracks ride coverage across major U.S. markets. " +
    "It's a great mix of data and coordination, and it's an exciting time to be on the team since we're currently expanding to Dublin and Spain. " +
    "If you'd like to talk more about my experience, feel free to reach out through the Contact page or LinkedIn.",
};

function buildSystemPrompt(p) {
  const line = (label, val) => (val && val.trim() ? `- ${label}: ${val.trim()}\n` : "");
  return (
    `You are a conversational AI version of ${p.name}, chatting with visitors on ${p.name}'s portfolio website. ` +
    `Visitors are often recruiters, hiring managers, or people curious about ${p.name}'s work. ` +
    `You speak in the FIRST PERSON as ${p.name}, in a friendly but professional tone, since recruiters and hiring managers will read your replies.\n\n` +
    `EVERYTHING ABOUT YOU:\n` +
    line("Headline", p.headline) +
    line("Location", p.location) +
    line("Education", p.education) +
    line("Work", p.work) +
    line("Projects", p.projects) +
    line("Activities / extracurriculars", p.activities) +
    line("Skills", p.skills) +
    line("Fun facts", p.funFacts) +
    line("Contact", p.contact) +
    `\nHOW YOU TALK: ${p.voiceNotes}\n` +
    `\nEXAMPLES OF YOUR WRITING (copy this style):\n${p.sampleMessages}\n` +
    `\nRULES:\n` +
    `- Stay in character as ${p.name}. Keep replies short and conversational (2-4 sentences).\n` +
    `- Only claim things that are in your profile above. If asked something not covered, say you're not sure or that it's not really your thing - do NOT invent facts about your life.\n` +
    `- When asked what you did before Lyft or about your past experience, go through your roles in the order they're listed under Work (after Lyft): COOP fellowship, then iD Tech Camps, then contract web development, then Sweep AI, drone data mapping, and research. Always include iD Tech Camps, and describe its timing simply as "in Summer 2025" - never "right before joining Lyft" (there was a gap before Lyft started in December 2025).\n` +
    `- When asked about one role, talk only about that role. Don't bring up your other jobs or past experience unless the visitor asks.\n` +
    `- If someone wants to hire or work with you, point them to the Contact page or LinkedIn.\n` +
    `- Only talk about yourself (${p.name}). If a question isn't about you - general knowledge, coding help, homework, writing tasks, current events, anything else - reply in one short sentence that you can only answer questions about ${p.name}, and do not answer it.\n` +
    `- Plain text only: the chat window does not render Markdown, so no asterisks, headings, or [text](url) links - write URLs out in full.\n` +
    `- Don't mention being an AI unless directly asked; if asked, it's fine to say you're an AI version of ${p.name}.`
  );
}

const SYSTEM_PROMPT = buildSystemPrompt(DEFAULT_PROFILE);

// ── Topic filter: runs BEFORE calling Claude, so off-topic questions cost zero tokens. ──
// A question goes to Claude only if it mentions one of these words (whole word or prefix,
// e.g. "teach" matches "teaching"). When you add to DEFAULT_PROFILE, add matching keywords here.
const TOPIC_KEYWORDS = [
  // talking to / about Ashley
  "you", "your", "yours", "yourself", "ashley", "she", "her", "hers", "herself",
  // recruiter questions
  "experience", "background", "resume", "cv", "hire", "hiring", "job", "role", "position", "worked",
  "working", "work experience", "work history", "work at", "work for", "work on", "code", "coding", "programm",
  "career", "intern", "co-op", "coop", "full-time", "available", "availability", "relocat", "remote",
  "salary", "interview", "reference", "strength", "weakness", "goal", "team", "lead", "proud",
  "challenge", "accomplish", "achievement", "qualif", "responsib", "contact", "email", "reach",
  "linkedin", "github", "portfolio", "website",
  // profile topics
  "lyft", "coordinat", "fleet", "dublin", "spain", "ireland", "europe", "expan", "data", "analytic", "tableau", "sql", "python", "javascript", "c++",
  "react", "flask", "vue", "tailwind", "sqlite", "sqlalchemy", "supabase", "postgres", "docker",
  "git", "aws", "arcgis", "figma", "api", "llm", "machine learning", "ml", "ai", "hugging face",
  "skill", "tech", "stack", "language", "tool", "project", "built", "build", "sweep", "snapacart",
  "aggressive wraps", "royal crown", "pareagon", "stripe", "e-commerce", "teach", "instruct",
  "id tech", "caltech", "student", "mentor", "drone", "research", "cognitive", "uc merced", "merced",
  "school", "college", "university", "degree", "major", "minor", "graduat", "education", "study",
  "studied", "capstone", "shpe", "surf", "college track", "hsf", "scholarship", "hispanic",
  "spanish", "bilingual", "los angeles", "soccer", "hobb", "fun", "free time", "outside of work",
  "interest", "passion", "favorite",
];

// Requests to do a task for the visitor are blocked even if they contain a keyword
// (e.g. "can you write me an essay").
const OFF_TOPIC_PATTERNS = [
  /\b(write|generate|create|draft|compose|make)\b.{0,30}\b(essay|poem|story|song|joke|letter|cover letter|email|code|script|program|function|app|summary|report|list|recipe)\b/i,
  /\b(solve|calculate|compute|translate|summari[sz]e|debug|fix)\b.{0,20}\b(this|my|it|the|for me)\b/i,
  /\b(homework|assignment|recipe|weather|forecast|stock price|lottery|horoscope|capital of)\b/i,
  /\b(ignore|disregard|forget)\b.{0,30}\b(instructions|rules|prompt|previous)\b/i,
];

const GREETING_PATTERN = /^\s*(hi|hello|hey|hiya|good (morning|afternoon|evening)|thanks|thank you|thx|ty|bye|goodbye)\b[\s!.,?😊👋]*$/i;

const GREETING_REPLY =
  "Hi! Thanks for stopping by. Feel free to ask about my experience, projects, skills, or how to get in touch.";
const OFF_TOPIC_REPLY =
  "I can only answer questions about Ashley - her experience, projects, skills, education, or how to get in touch. What would you like to know?";

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const KEYWORD_PATTERN = new RegExp(
  `(^|[^a-z0-9])(${TOPIC_KEYWORDS.map(escapeRegex).join("|")})`,
  "i"
);

// Returns a canned reply when the question shouldn't go to Claude, or null when it should.
function screenQuestion(question, priorUserTurns) {
  if (GREETING_PATTERN.test(question)) return GREETING_REPLY;
  if (OFF_TOPIC_PATTERNS.some((p) => p.test(question))) return OFF_TOPIC_REPLY;
  // "can you ..." / "could you ..." is how people phrase any request, so it doesn't count as being about Ashley.
  const withoutRequestPhrase = question.replace(/\b(can|could|would|will) you( please)?\b/gi, "");
  if (KEYWORD_PATTERN.test(withoutRequestPhrase)) return null;
  // Short follow-ups mid-conversation ("how long?", "tell me more") have no keyword of their own.
  if (priorUserTurns > 0 && question.trim().split(/\s+/).length <= 6) return null;
  return OFF_TOPIC_REPLY;
}

// Matches MAX_QUESTIONS in ChatWidget.js (25 questions + 25 replies), so no visitor can run up the bill.
const MAX_HISTORY = 50;
const MAX_CHARS = 2000;

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const incoming = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const messages = incoming
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim()
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  // Drop leading assistant turns (e.g. the greeting) — the API requires a user turn first.
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length) {
    return res.status(400).json({ error: "No message provided" });
  }

  const question = messages[messages.length - 1].content;
  const priorUserTurns = messages.filter((m) => m.role === "user").length - 1;
  const cannedReply = screenQuestion(question, priorUserTurns);
  if (cannedReply) {
    return res.json({ reply: cannedReply });
  }

  try {
    const response = await client.beta.messages.create({
      model: "claude-opus-5",
      max_tokens: 2000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: SYSTEM_PROMPT,
      messages,
    });

    if (response.stop_reason === "refusal") {
      return res.json({ reply: "That's not something I can help with, but I'm happy to answer questions about my experience and projects." });
    }

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
    return res.json({ reply: reply || "Sorry, I didn't catch that. Could you rephrase your question?" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: "Too many requests — please try again in a moment." });
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`Anthropic API error ${error.status}:`, error.message);
    } else {
      console.error("Chat error:", error);
    }
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
