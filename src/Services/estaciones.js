//var data = require("../Data/dataJan.json");

//FILTROS PARA RPM
const filterRPM = [
  {
    "Status denominacion": "Cerrada Téc.",
    "Status usuario": "CTEC",
  },
  {
    "Status denominacion": "Cerrada Téc. No Ejec.",
    "Status usuario": "CTEC CENE",
  },
  {
    "Status denominacion": "En Ejecución",
    "Status usuario": "EJEC",
  },
  {
    "Status denominacion": "Abierto",
    "Status usuario": "ABIE",
  },
];

const zones = [
  {
    "Grupo planif.": "ZN1",
    Zona: "Zona Norte",
    "RPManual": 249,
    "RSPanual": 76,
  },
  {
    "Grupo planif.": "ZS1",
    Zona: "Zona Sur",
    "RPManual": 368,
    "RSPanual": 174,
  },
  {
    "Grupo planif.": "ZO1",
    Zona: "Zona Oeste",
    "RPManual": 41,
    "RSPanual": 24,
  },
  {
    "Grupo planif.": "ZA1",
    Zona: "Zona Austral",
    "RPManual": 53,
    "RSPanual": 20,
  },
];


function filterData(actividad, dataBruta, filtersGlobal) {
  let data = dataBruta;
  let cantidad //Cantidad de OT's que comple una o varias condiciones
  const { filterByIng, filterByMuesAceite, filterByProtecciones,  deleteDuplicates} = filtersGlobal;
 
  //FILTROS GLOBALES PARTICULARES 
  data = data.filter(
    (data) =>
      (data["Pto.tbjo.resp."] !== "ING-INGE" || filterByIng === false) && //Elimina los que tienen la palabra "ING-INGE" 
      (data["Texto breve"].includes("Muestreo") || filterByMuesAceite === false) && //Deja los que tienen la palabra "Muestreo" de aceite
      (!data["Pto.tbjo.resp."].includes("PROT") || filterByProtecciones === false) //Elimina los que tienen la palabra "PROT" (Protecciones)
  );

  let pieChartData = [];
  let listValues = [];
  for (let j = 0; j < zones.length; j++) {
    listValues = [];
    for (let i = 0; i < 4; i++) {

      //FILTRO POR ACTIVIDAD
      let data_filter = data.filter(
        (data) =>
          data["Cl.actividad PM"] === actividad &&
          data["Status usuario"] === filterRPM[i]["Status usuario"] &&
          data["Grupo planif."] === zones[j]["Grupo planif."]
      );

      //FILTRO ELIMINADOR DE REPETIDOS
      //Elimina los repetidos. Borra filas e información, pero en este punto no es
      //importante, por que se requiere solo la cantidad
      const setObj = new Set();
      const unicos = data_filter.reduce((acc, persona) => {
        if (!setObj.has(persona["Ubicac.técnica"])) {
          setObj.add(persona["Ubicac.técnica"], persona);
          acc.push(persona);
        }
        return acc;
      }, []);

      //Si está activado el borrador de duplicados, saca el largo de la matriz con 
      //los duplicados eliminados
      if (deleteDuplicates === true){
        cantidad=unicos.length
      //Si no está activado el borrador de duplicados, saca el largo de la matriz sin 
      //eliminar los duplicados
      }else{
        cantidad=data_filter.length
      }

      listValues[i] = {
        Tipo: filterRPM[i]["Status denominacion"],
        Cantidad: cantidad,
      };
    }
    pieChartData[j] = {
      Zona: zones[j]["Grupo planif."],
      ZonaNombre: zones[j]["Zona"],
      TotAnual: zones[j][actividad+"anual"],
      Lista: listValues,
    };
  }
 
  return pieChartData;
}
export default filterData;
