//var data = require("../Data/dataJan.json");

//FILTROS PARA RPM
const filterRPM = [
  {
    "Status denominacion": "En Ejecución",
    "Status usuario": "EJEC",
  },
  {
    "Status denominacion": "Cerrada Técnicamente",
    "Status usuario": "CTEC",
  },
  {
    "Status denominacion": "Cerrada Técnicamente No Ejecutado",
    "Status usuario": "CTEC CENE",
  },
];

const zones = [
  {
    "Grupo planif.": "ZN1",
    Zona: "Zona Norte",
    "Unidades de Mantenimiento": 249,
  },
  {
    "Grupo planif.": "ZS1",
    Zona: "Zona Sur",
    "Unidades de Mantenimiento": 368,
  },
  {
    "Grupo planif.": "ZO1",
    Zona: "Zona Oeste",
    "Unidades de Mantenimiento": 41,
  },
  {
    "Grupo planif.": "ZA1",
    Zona: "Zona Austral",
    "Unidades de Mantenimiento": 53,
  },
];

//Se listan los filtros mas comunes, se pueden agregar mas de ser necesario.
//Solo debe cambiarse el estado al llamar a la función.
/* const filtersGlobal = [
  {
    filterByIng: "false",
    filterByMuesAceite: "fasle",
    filterByIng: "true",
  },
];
 */
function filterData(actividad, dataBruta, filtersGlobal) {
  let data = dataBruta;
  let cantidad //Cantidad de OT's que comple una o varias condiciones
  const { filterByIng, filterByMuesAceite, deleteDuplicates } = filtersGlobal;
  console.log(
    "filterByIng: ",
    filterByIng,
    "filterByMuesAceite: ",
    filterByMuesAceite
  );

  //FILTROS GLOBALES PARTICULARES 
  data = data.filter(
    (data) =>
      (data["Pto.tbjo.resp."] !== "ING-INGE" || filterByIng === false) &&
      (data["Texto breve"].includes("Muestreo") || filterByMuesAceite === false) &&
      (data["Texto breve"].includes("Muestreo") || filterByMuesAceite === false)
  );

  let pieChartData = [];
  let listValues = [];
  for (let j = 0; j < zones.length; j++) {
    listValues = [];
    for (let i = 0; i < 3; i++) {

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
      UnidadadesMantenimientoCant: zones[j]["Unidades de Mantenimiento"],
      Lista: listValues,
    };
  }

  return pieChartData;
}
export default filterData;
