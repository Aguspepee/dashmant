import instance from "../Config/axios"

export function NovedadesResumen(Mes, Año, Zona,Tipo){
    return instance.get(`lineasBase/novedadesResumen/${Mes}-${Año}-${Zona}-${Tipo}`)
}

export function NovedadesDetalle(Mes, Año, Zona,Tipo){
    return instance.get(`lineasBase/novedadesDetalle/${Mes}-${Año}-${Zona}-${Tipo}`)
}