import { useState } from "react";
import axios from "axios";

export default function Copilot(){

const [question,setQuestion] = useState("");
const [answer,setAnswer] = useState("");
const [loading,setLoading] = useState(false);


async function askAI(){

setLoading(true);

try{

const res = await axios.post(
"http://127.0.0.1:8001/api/v1/copilot",
{
question
}
);

setAnswer(res.data.answer);

}
catch(err){

setAnswer(
"Unable to reach AI Copilot"
);

}

setLoading(false);

}


return (

<div className="copilot-card">


<div className="copilot-header">

<span className="copilot-icon">
🤖
</span>

<div>
<h3>TraceMind Copilot</h3>
<p>AI SRE Assistant</p>
</div>

</div>



<div className="copilot-status">

<span className="status-dot"></span>

Monitoring System Health

</div>



<input

value={question}

onChange={
e=>setQuestion(e.target.value)
}

placeholder="Analyze traces, errors, latency..."

/>



<button onClick={askAI}>

{
loading
?
"Analyzing..."
:
"Analyze Incident"
}

</button>



{
answer &&

<div className="ai-response">

<h4>AI Analysis</h4>

<p>
{answer}
</p>

</div>

}



</div>

);

}