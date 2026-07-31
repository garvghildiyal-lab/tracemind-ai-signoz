import { useState } from "react";
import axios from "axios";

const API =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8001";

const suggestions = [
  "Analyze system health",
  "Analyze latency",
  "Explain traces",
  "Explain logs",
  "Explain metrics",
  "Root cause analysis",
  "Error investigation",
  "Performance tuning",
];

export default function Copilot() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI(customQuestion = null) {

    const prompt = customQuestion || question;

    if (!prompt.trim()) return;

    setLoading(true);

    try {

      const res = await axios.post(
        `${API}/api/v1/copilot`,
        {
          question: prompt,
        }
      );

      setAnswer(res.data.answer);

    } catch {

      setAnswer("Unable to reach AI Copilot.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="copilot-card">

      <div className="copilot-header">

        <span className="copilot-icon">🤖</span>

        <div>

          <h3>TraceMind Copilot</h3>

          <p>AI-powered SRE Assistant</p>

        </div>

      </div>

      <div className="copilot-status">

        <span className="status-dot"></span>

        Monitoring System Health

      </div>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask TraceMind AI..."
      />

      <div className="copilot-help">

<h4>What can AI Copilot help with?</h4>

<ul>
<li>🔍 Analyze latency spikes</li>
<li>📊 Explain traces and metrics</li>
<li>🚨 Investigate incidents</li>
<li>🧠 Find possible root causes</li>
<li>⚡ Suggest performance improvements</li>
</ul>

</div>

      <p
        style={{
          marginTop: "14px",
          marginBottom: "12px",
          color: "var(--muted)",
          fontSize: "13px",
          lineHeight: "1.6",
        }}
      >
        TraceMind can help analyze application health, latency, logs,
        metrics, traces, performance bottlenecks, errors, and possible
        root causes.
      </p>

      <div className="ai-suggestions">

        {suggestions.map((item) => (

          <button
            type="button"
            key={item}
            className="ai-chip"
            onClick={() => {
              setQuestion(item);
              askAI(item);
            }}
          >
            {item}
          </button>

        ))}

      </div>

      <button
        onClick={() => askAI()}
      >
        {loading ? "Analyzing..." : "Analyze Incident"}
      </button>

      {answer && (

        <div className="ai-response">

          <h4>AI Analysis</h4>

          <p>{answer}</p>

        </div>

      )}

    </div>

  );

}