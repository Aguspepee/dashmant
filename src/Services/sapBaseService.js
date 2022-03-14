import instance from "../Config/axios"

export function filterGeneral(config,zona){
    return instance.get(`sapBase/filterGeneral/${config.Mes}-${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`)
}

export function distribucionHoraria(config,zona){
    return instance.get(`sapBase/DistibucionHoraria/${config.Mes}-${config.Año}-${zona}`)
}

export function resumenAnual(config,zona){
    return instance.get(`sapBase/resumenAnual/${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`)
}