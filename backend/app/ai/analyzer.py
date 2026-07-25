from datetime import datetime

def analyze_incident(metrics: dict):
    score = 0
    reasons = []

    latency = metrics.get("latency", 0)
    error_rate = metrics.get("error_rate", 0)
    cpu = metrics.get("cpu", 0)

    if latency > 1.5:
        score += 30
        reasons.append("High backend latency detected.")

    if error_rate > 0.10:
        score += 40
        reasons.append("High application error rate.")

    if cpu > 80:
        score += 30
        reasons.append("CPU utilization is unusually high.")

    if score >= 70:
        severity = "Critical"
    elif score >= 40:
        severity = "High"
    elif score >= 20:
        severity = "Medium"
    else:
        severity = "Low"

    return {
        "timestamp": datetime.utcnow().isoformat(),
        "severity": severity,
        "confidence": min(score + 10, 99),
        "possible_root_causes": reasons,
        "recommended_actions": [
            "Inspect recent deployments.",
            "Check database latency.",
            "Scale backend if required.",
            "Investigate failing endpoints."
        ]
    }
