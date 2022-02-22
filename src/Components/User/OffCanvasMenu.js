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
import FilterContext from "../../Context/FilterContext";
import { useEffect, useContext } from "react";
import TableRowsIcon from '@mui/icons-material/TableRows';


const drawerWidth = 240;
/* const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]; */
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

const years = ["2021", "2022", "2023", "2024"];

function ResponsiveDrawer(props) {
  const [
    pieChartData,
    setPieChartData,
    year,
    setYear,
    handleYearChange,
    month,
    setMonth,
    handleMonthChange,
    dataBruta,
    setDataBruta,
    dataNormalizada,
    setDataNormalizada,
    dataFiltrada,
    setDataFiltada,
    normalizeData,
    filterDataByVarious,
    filterDataByDate
  ] = useContext(FilterContext);

  //setMonth("jaunua");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <List>
        {["General"].map((text) => (
          <ListItem button key={text} component={Link} to="dashmant/general">
            <ListItemIcon>{<DashboardIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key="Zona Norte"
          component={Link}
          to="dashmant//zonas/ZN"
        >
          <ListItemText primary="Zona Norte" />
        </ListItem>
        <ListItem
          button
          key="Zona Sur"
          component={Link}
          to="dashmant//zonas/ZS"
        >
          <ListItemText primary="Zona Sur" />
        </ListItem>
        <ListItem
          button
          key="Zona Oeste"
          component={Link}
          to="dashmant//xonas/ZO"
        >
          <ListItemText primary="Zona Oeste" />
        </ListItem>
        <ListItem
          button
          key="Zona Austral"
          component={Link}
          to="dashmant//zonas/ZA"
        >
          <ListItemText primary="Zona Austral" />
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem key={"Filtros"}>
          <ListItemIcon>{<FilterAltIcon />}</ListItemIcon>
          <ListItemText primary={"Filtros"} />
        </ListItem>

        <ListItem>
          <DateSelector type="Mes" data={months} change1={handleMonthChange} change2={setMonth} value={month} />
        </ListItem>
        <ListItem>
          <DateSelector type="Año" data={years} change1={handleYearChange} change2={setYear} value={year} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Cargar"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<CloudUploadIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      {/* <List>
        {["Base de Datos"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{< TableRowsIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />

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
        style={{ backgroundColor: "gray", boxShadow: ""   }}

      >
        <Toolbar style={{ backgroundColor: "white"}}>
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
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
