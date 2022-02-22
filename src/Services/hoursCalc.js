//import hours from "../Data/hours.json";

function hoursCalc(dataRealMonth) {
  let hours = dataRealMonth;
  console.log(hours);
  let zonas = [
    { Zona: "ZN1", Nombre: "Zona Norte", Activity: [] },
    { Zona: "ZS1", Nombre: "Zona Sur", Activity: [] },
    { Zona: "ZO1", Nombre: "Zona Oeste", Activity: [] },
    { Zona: "ZA1", Nombre: "Zona Austral", Activity: [] },
  ];
  let Total = [];
  for (let i = 0; i < zonas.length; i++) {
    let activity = [
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "RPM",
        NombreActividad: "Mantenimiento Preventivo Programado",
        Mostrar: true,
      },
      {
        Grupo: "MCP",
        NombreGrupo: "Mantenimiento Correctivo",
        Actividad: "MCP",
        NombreActividad: "Mantenimiento Correctivo",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "MUA",
        NombreActividad: "Muestreos de Aceite",
        Mostrar: true,
      },
      {
        Grupo: "RSP",
        NombreGrupo: "Recorridos de Seguridad Público",
        Actividad: "RSP",
        NombreActividad: "Recorridos de Seguridad Público",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "RCE",
        NombreActividad: "Recorrido de Control de Estaciones",
        Mostrar: true,
      },
      {
        Grupo: "MST",
        NombreGrupo: "Servicios a Terceros",
        Actividad: "MPL",
        NombreActividad: "Mantenimiento Preventivo No Programado",
        Mostrar: true,
      },
      {
        Grupo: "MST",
        NombreGrupo: "Servicios a Terceros",
        Actividad: "MST",
        NombreActividad: "Servicios a Terceros",
        Mostrar: true,
      },
      {
        Grupo: "MAC",
        NombreGrupo: "Actividades Complementarias",
        Actividad: "MAC",
        NombreActividad: "Actividades Complementarias",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "TER",
        NombreActividad: "Termografía",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "LIT",
        NombreActividad: "LAT Inspección Terrestre",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "LMT",
        NombreActividad: "LAT Inspección Minuciosa",
        Mostrar: true,
      },
      {
        Grupo: "MST",
        NombreGrupo: "Servicios a Terceros",
        Actividad: "MPT",
        NombreActividad: "Medición de Resistencia de PAT",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "MRS",
        NombreActividad: "Medición de Resistividad de Suelo",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "PCA",
        NombreActividad: "Medición de Protección Catódica",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "MPT",
        NombreActividad: "LAT Inspección Minuciosa",
        Mostrar: true,
      },
      {
        Grupo: "RPM",
        NombreGrupo: "Mantenimiento Programado",
        Actividad: "RPE",
        NombreActividad: "Recorrido Periódico",
        Mostrar: true,
      },
    ];
    for (let j = 0; j < activity.length; j++) {
      let horas = hours
        .filter((hours) => {
          return (
            hours["Cl.actividad PM"] === activity[j]["Actividad"] &&
            hours["Grupo planif."] === zonas[i]["Zona"]
          );
        })
        .reduce((a, b) => a + b["Trabajo real"], 0);
      activity[j]["Horas"] = horas;
    }
    zonas[i]["Activity"] = activity;
  }
  // console.log(zonas)
  return zonas;
}
export default hoursCalc;
