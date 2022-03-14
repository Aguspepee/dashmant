import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import DateSelector from "../Controls/DateSelector";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DateContext from "../../Context/DateContext";
import { useContext } from "react";
import Logo from "../../Images/transpa.png";

const drawerWidth = 240;
const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const years = ["2021", "2022", "2023", "2024"];

function ResponsiveDrawer(props) {
  const [year, setYear, month, setMonth] = useContext(DateContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Divider />
      <List>
        <img
          src={Logo}
          style={{ width: "80%", padding: "15px,15px,15px,15px" }}
          alt="fireSpot"
        />
        <Divider />
        {["General"].map((text) => (
          <ListItem button key={text} component={Link} to="dashmant/general">
            <ListItemIcon>{<DashboardIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem
          button
          key="Zona Norte"
          component={Link}
          to="dashmant/Zonas/ZN1"
        >
          <ListItemText inset primary="Zona Norte" />
        </ListItem>
        <ListItem
          button
          key="Zona Sur"
          component={Link}
          to="dashmant/Zonas/ZS1"
        >
          <ListItemText inset primary="Zona Sur" />
        </ListItem>

        <ListItem
          button
          key="Zona Oeste"
          component={Link}
          to="dashmant/Zonas/ZO1"
        >
          <ListItemText inset primary="Zona Oste" />
        </ListItem>

        <ListItem
          button
          key="Zona Austral"
          component={Link}
          to="dashmant/Zonas/ZA1"
        >
          <ListItemText inset primary="Zona Austral" />
        </ListItem>

        <Divider />

        <ListItem key={"Periodo Evaluado"}>
          <ListItemIcon>{<FilterAltIcon />}</ListItemIcon>
          <ListItemText primary={"Periodo Evaluado"} />
        </ListItem>

        <ListItem>
          <DateSelector
            type="Mes"
            data={months}
            change1={setMonth}
            change2={setMonth}
            value={month}
          />
        </ListItem>
        <ListItem>
          <DateSelector
            type="Año"
            data={years}
            change1={setYear}
            change2={setYear}
            value={year}
          />
        </ListItem>

        <Divider />
        {["Cargar"].map((text, index) => (
          <ListItem button key={text} component={Link} to="dashmant/Upload">
            <ListItemIcon>{<CloudUploadIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{
          backgroundColor: "gray",
          boxShadow: "rgba(0, 0, 0, 0) 0px 3px 8px",
          zIndex: "1",
        }}
      >
        <Toolbar style={{ backgroundColor: "white" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "gray" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "gray" }}
          >
            EJECUCIÓN DEL PLAN DE MANTENIMIENTO
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: "rgba(0, 0, 0, 0) 0px 3px 8px",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: "rgba(0, 0, 0, 0) 0px 3px 8px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default ResponsiveDrawer;
