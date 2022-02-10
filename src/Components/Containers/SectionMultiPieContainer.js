import React from "react";
import MiniPieChartCart from "../Cards/MiniPieChartCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListTableCard from "../Cards/ListTableCard";
import "./gridstyle.css";
import filterData from "../../Services/filter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SectionMultiPieContainer(props) {
  const [expanded, setExpanded] = React.useState(false);
  const activity = props.activity;
  const title = props.title;
  const bar = props.bar;
  const description = props.description;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //Hacer que sea un estado
  const data = filterData(activity);

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <CardContent>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader={description}
            />
            <div className="gridpie">
              {data.map((data) => (
                <div className="grid-column" key={data.Zona}>
                  <MiniPieChartCart data={data} bar={bar}></MiniPieChartCart>
                </div>
              ))}
            </div>
          </CardContent>
          <CardActions disableSpacing style={{ padding: "0px 0px 0px 0px" }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="gridpie">
                {data.map((data) => (
                  <div className="grid-column" key={data.Zona}>
                    <ListTableCard data={data}></ListTableCard>
                  </div>
                ))}
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
export default SectionMultiPieContainer;
