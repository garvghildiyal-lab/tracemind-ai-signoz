export default function KPICards({ metrics }) {
  return (
    <div className="kpi-container">

      <div className="kpi-card">
        <h4>Total Requests</h4>
        <p>{metrics.requests}</p>
      </div>

      <div className="kpi-card">
        <h4>Average Response</h4>
        <p>{metrics.response} ms</p>
      </div>

      <div className="kpi-card">
        <h4>Error Rate</h4>
        <p>{metrics.errors}%</p>
      </div>

      <div className="kpi-card">
        <h4>Status</h4>
        <p className="healthy">
          {metrics.status}
        </p>
      </div>

    </div>
  );
}