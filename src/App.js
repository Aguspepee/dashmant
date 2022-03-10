import "./App.css";
import OffCanvasMenu from "./Components/User/OffCanvasMenu";
import General from "./Pages/General";
import ETS from "./Pages/ETS";
//import LATS from "./Pages/LATS";
import { Box } from "@mui/system";
//import Toolbar from "@mui/material/Toolbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterProvider from "./Context/FilterProvider";
import DateProvider from "./Context/DateProvider";
import Upload from "./Pages/Upload";
//import FrecuenciaAcumulado from "../src/Services/graficos";
//import Tablas from "./Pages/Tablas";
import Zonas from "./Pages/Zonas";

const drawerWidth = 240;


function App() {  
  console.log("cargó App")
  return (
    <>
       <FilterProvider> 
      <DateProvider>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "rgb(243, 243, 243)",
            //background: "linear-gradient(90deg, rgba(178,177,204,1) 0%, rgba(176,176,201,0.10127801120448177) 35%, rgba(93,96,97,1) 100%)",
            width: "100%",
          }}
        >
          <BrowserRouter>
            <OffCanvasMenu></OffCanvasMenu>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              {/* <Toolbar /> */}

              <Routes>
                <Route path="dashmant/" element={<General />} />
                <Route path="dashmant/general" element={<General />} />
                <Route path="dashmant/zonas/:id" element={<Zonas params/>} />
                <Route path="dashmant/Upload" element={<Upload />} />
                <Route path="dashmant/ETS" element={<ETS />} />
                
              </Routes>
            </Box>
          </BrowserRouter>
        </Box>
        </DateProvider>
      </FilterProvider>
    </>
  );
}

export default App;
