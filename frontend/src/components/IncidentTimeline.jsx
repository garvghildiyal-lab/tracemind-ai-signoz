export default function IncidentTimeline({ incidents }) {

  return (
    <div className="timeline-card">

      <h3>
        Incident Timeline
      </h3>


      {
        incidents.map((item,index)=>(
          <div 
            key={index}
            className="incident"
          >

            <strong>
              {item.time}
            </strong>

            <p>
              {item.message}
            </p>

          </div>
        ))
      }


    </div>
  );
}