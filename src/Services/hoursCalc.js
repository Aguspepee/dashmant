//import hours from "../Data/hours.json";

function hoursCalc(dataRealMonth) {
    let hours=dataRealMonth
    console.log(hours)
    let zonas = [
        { Zona: "ZN1", Activity: [] },
        { Zona: "ZS1", Activity: [] },
        { Zona: "ZO1", Activity: [] },
        { Zona: "ZA1", Activity: [] },
      ];
      let Total = []
 for (let i=0; i<zonas.length;i++){
    let activity = [
        { Actividad: "RPM", Mostrar: true },
        { Actividad: "MCP",  Mostrar: true },
        { Actividad: "MUA",  Mostrar: true },
        { Actividad: "RCE",  Mostrar: true },
        { Actividad: "MPL",  Mostrar: true },
      ];
    for (let j=0; j<activity.length;j++){
        let horas = hours.filter((hours) => {return (hours["Cl.actividad PM"] === activity[j]["Actividad"] && hours["Ubicac.técnica"].slice(5, 8) === zonas[i]["Zona"])}).reduce((a, b) => a + b["Trabajo real"], 0)
        activity[j]["Horas"]=horas
    }
    zonas[i]["Activity"]=activity
 }
// console.log(zonas)
 return(zonas)
}
export default hoursCalc;
