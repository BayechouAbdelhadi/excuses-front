import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './lost.css';

export default function Lost() {
  const navigate = useNavigate();
  
  useEffect(() =>{
    setTimeout(() =>navigate("/"),5000)
  },[])

  return (
      <div className="lost-message mt-5">
          <h1 className="text-danger text-center">I amlost</h1>
          <img src={process.env.PUBLIC_URL + "/img/john-travolta-lost.gif"} alt="loading..." />
      </div>    
  )
}
