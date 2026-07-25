import { useState } from "react";
import axios from "axios";


export default function Copilot(){

  const [question,setQuestion] = useState("");
  const [answer,setAnswer] = useState("");


  async function askAI(){

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

  }


  return (

    <div className="copilot-card">

      <h3>
        🧠 AI Copilot
      </h3>


      <input

        value={question}

        onChange={
          e=>setQuestion(e.target.value)
        }

        placeholder="Ask about system health..."

      />


      <button onClick={askAI}>
        Analyze
      </button>


      <p>
        {answer}
      </p>


    </div>

  );

}