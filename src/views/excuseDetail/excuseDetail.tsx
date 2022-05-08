import  { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectByHttpCode } from "../../redux/selectors";

export default function ExcuseDetail() {
    const navigate = useNavigate();
    const {code} = useParams();
    const selectedExuse = useSelector(selectByHttpCode(code));
    
    useEffect(()=>{
        if(selectedExuse === undefined){
            navigate("/lost")
        }
    },[selectedExuse])

    return (
        <div>{selectedExuse? selectedExuse.message : "ooops"}</div>
    )
}
