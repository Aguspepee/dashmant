import "./App.css";
import OffCanvasMenu from "./Components/User/OffCanvasMenu";
import General from "./Pages/General";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DateProvider from "./Context/DateProvider";
import Upload from "./Pages/Upload";
import Zonas from "./Pages/Zonas";
import Mapa from "./Pages/Mapa";
const drawerWidth = 240;

function App() {  
  return (
    <>
      <DateProvider>
        <Box
          sx={{
            display: {sm: "flex" },
            backgroundColor: "rgb(243, 243, 243)",
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
              <Routes>
                <Route path="dashmant/" element={<General />} />
                <Route path="dashmant/general" element={<General />} />
                <Route path="dashmant/zonas/:id" element={<Zonas params/>} />
                <Route path="dashmant/Upload" element={<Upload />} /> 
                <Route path="dashmant/Map" element={<Mapa />} />                 
              </Routes>
            </Box>
          </BrowserRouter>
        </Box>
        </DateProvider>
    </>
  );
}

export default App;