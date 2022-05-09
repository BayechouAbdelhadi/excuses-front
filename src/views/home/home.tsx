import React from 'react';
import { useSelector } from "react-redux";
import ExcusePicker from "../../components/excuse-picker";
import { excuseSelector } from "../../redux/selectors";

export default function Home() {
  const excuse = useSelector(excuseSelector);
  
  return (
    <div className="w-100 h100  mt-5 d-flex flex-column justify-content-center ">
      <div className="m-auto">
        <div  className="text-center">
          <h4 >Ma super application</h4>
        </div>
        <div className=" text-center my-3" style={{minHeight:"3.25rem"}}>
          <h6>{excuse?.message}</h6>
        </div>
        <div className="d-flex justify-content-center" style={{minHeight:"2rem",minWidth:"2rem"}}>
          <ExcusePicker />
        </div>
        </div>
    </div>
  )
}
