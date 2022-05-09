import {useEffect} from "react"
import {useSelector} from "react-redux";
import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../redux/";
import { selectExcuse } from "../../redux/slices/excusesSlice";
import {excusesSelector, excuseSelector} from "../../redux/selectors"

export default function ExcusePicker() {
  const dispatch = useAppDispatch();
  const excuses = useSelector(excusesSelector);
  const selected = useSelector(excuseSelector);

  const select = () =>{
    if(excuses.length === 0 ) return;
    let chosen = excuses[Math.floor(Math.random() * excuses.length )];

    while( selected.http_code === chosen.http_code )  {
        chosen = excuses[Math.floor(Math.random() * excuses.length)]
    }

    dispatch(selectExcuse(chosen));
  }

  useEffect(()=>{ dispatch(selectExcuse(excuses[0]));},[excuses])

  return (
    <Button  onClick={select}>
        Generer
    </Button>
  )
}
