import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectByHttpCode } from "../redux/selectors";

export default function ExcuseDetail() {
    const {code} = useParams();
    const selectedExuse = useSelector(selectByHttpCode(code));

    return (
        <div>{selectedExuse? selectedExuse.message : "ooops"}</div>
    )
}
