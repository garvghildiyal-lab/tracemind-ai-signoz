from datetime import datetime

def generate_response(question: str, analysis: dict):
    q = question.lower()

    severity = analysis.get("severity", "Unknown")
    confidence = analysis.get("confidence", 0)
    causes = analysis.get("possible_root_causes", [])
    actions = analysis.get("recommended_actions", [])

    if "latency" in q or "slow" in q:
        return {
            "answer": f"""Backend latency appears elevated.

Severity: {severity}
Confidence: {confidence}%

Possible Causes:
- {" - ".join(causes) if causes else "No clear cause detected."}

Recommended Fixes:
- {" - ".join(actions)}

Next Step:
Open SigNoz traces and identify the slowest span."""
        }

    elif "error" in q or "500" in q or "failure" in q:
        return {
            "answer": f"""Errors are being detected.

Severity: {severity}

Recommendations:
- Inspect stack traces
- Review recent logs
- Compare traces before and after deployment
- Investigate failing endpoints"""
        }

    elif "trace" in q:
        return {
            "answer": """Distributed traces show the complete request journey through your application.

Use traces to:
• Find slow spans
• Locate bottlenecks
• Detect failing services
• Compare healthy vs unhealthy requests"""
        }

    elif "metric" in q:
        return {
            "answer": """Metrics show the health of your system over time.

Important metrics:
• Latency
• Request Rate
• Error Rate
• CPU
• Memory
• Database Response Time"""
        }

    elif "log" in q:
        return {
            "answer": """Logs explain WHY something happened.

Use logs to:
• Find exceptions
• Identify failed requests
• Debug deployments
• Correlate with traces"""
        }

    elif "fix" in q or "recommend" in q:
        return {
            "answer": f"""AI Recommendations

Priority:
HIGH

Actions:
- {" - ".join(actions)}

Evidence:
Severity = {severity}
Confidence = {confidence}%"""
        }

    else:
        return {
            "answer": """I can help with:

• Analyze latency
• Explain traces
• Explain logs
• Explain metrics
• Root cause analysis
• Error investigation
• Performance tuning
• Observability best practices"""
        }
