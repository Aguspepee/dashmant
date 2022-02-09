import React from "react";
import MiniNumberCard from "../Cards/MiniNumberCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import filterData from "../../Services/filter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";

const style = {
  display: "grid",
  gridTemplateColumns: "25% 25% 25% 25%",
  justifyContent: "center",
  alignItems: "center"
};

function SectionMultiNumContainer(props) {
  const [expanded, setExpanded] = React.useState(false);
  const activity = props.activity;
  const title = props.title;
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
            <div className="gridnumber">
              {data.map((data) => (
                <div className="grid-column" key={data.Zona}>
                  <MiniNumberCard data={data}></MiniNumberCard>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default SectionMultiNumContainer;
