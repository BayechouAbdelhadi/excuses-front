import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./redux";
import { setExcuses } from "./redux/slices/excusesSlice";
import { ExcuseDetail, Home, Lost, NotFound } from "./views";



function App() {
  const dispatch = useAppDispatch();

  const loadExcuses = async () => {
    await axios.get("http://localhost:8080/api/v1/excuses")
    .then((response ) => {
      const excuses = response.data.map((e:any) => {
        return {
          http_code: e.httpCode,
          tag: e.tag,
          message: e.message
        }
      })
      dispatch(setExcuses(excuses));
    }).catch((error) => {
      console.error("could not load excuses", error);
    })
  }

  useEffect(()=>{
    loadExcuses();
  },[])

  return (
  <Router>
    <div className="h-100 w-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excuses/:code" element={<ExcuseDetail />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>       
  </Router>
    
  );
}

export default App;
