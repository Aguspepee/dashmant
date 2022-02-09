import React from "react";
import MiniNumberCard from "../Cards/MiniNumberCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import filterData from "../../Services/filter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";


function SectionMultiNumContainer(props) {
  const activity = props.activity;
  const title = props.title;
  const description = props.description;

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
