import "./App.css";
import OffCanvasMenu from "./Components/User/OffCanvasMenu";
import General from "./Pages/General";
import Zona from "./Pages/Zona"
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



const drawerWidth = 240;
function App() {
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "rgb(243, 243, 243)" }}>
      <BrowserRouter>
        <OffCanvasMenu></OffCanvasMenu>;
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          
            <Routes>
            <Route path="/" element={<General />} />
              <Route path="/general" element={<General />} />
              <Route path="/zonas" element={<Zona />} />
            </Routes>
         

        </Box>
        </BrowserRouter>
      </Box>
      
    </>
  );
}

export default App;
