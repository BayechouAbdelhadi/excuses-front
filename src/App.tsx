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

  return (<Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:code" element={<ExcuseDetail />} />
              <Route path="/Lost" element={<Lost />} />
              <Route  element={<NotFound />} />
          </Routes>
        </Router>
    
  );
}

export default App;
