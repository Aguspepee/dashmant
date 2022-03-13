
//Renombrar las keys de la base de datos de SAP con los nombres utilizados en MongoDB
export function keyModifiSapBase(data) {
    let idModified = data.map((obj) => {
      return {
        Cl_actividad_PM: obj["Cl.actividad PM"],
        Clase_de_orden: obj["Clase de orden"],
        Equipo: obj["Equipo"],
        Fecha_ref: obj["Fecha ref."],
        Grupo_planif: obj["Grupo planif."],
        Inicio_program: obj["Inicio program."],
        Operacion: obj["Operación"],
        Orden: obj["Orden"],
        Pto_tbjo_resp: obj["Pto.tbjo.resp."],
        Status_usuario: obj["Status usuario"],
        Texto_breve: obj["Texto breve"],
        Trabajo_real: obj["Trabajo real"],
        Ubicac_técnica: obj["Ubicac.técnica"],
      };
    });
    return idModified;
  }

  export function keyModifiLineasNovedades(data) {
    let idModified = data.map((obj) => {
      return {
        Orden: obj["Orden"],
        Ubicac_tecnica: obj["Ubicac.técnica"],
        Punto_de_medida: obj["Punto de medida"],
        Documento_med: obj["Documento_med"],
        Equipo: obj["Equipo"],
        Denominacion: obj["Denominación"],
        Posicion_medida: obj["Posición medida"],
        Fecha: obj["Fecha"],
        Grupo_codigos: obj["Grupo códigos"],
        Codigo_valorac: obj["Código valorac."],
        Codif_txt_cod: obj["Codif.txt.cód."],
        Texto: obj["Texto"],
        Valor_medido: obj["Valor medido"],
      };
    });
    return idModified;
  }




  export function keyModifiLineasBase(data) {
    let idModified = data.map((obj) => {
      return {
        Codigo:obj["Código"],
        Codigo_Tension:obj["Codigo Tension"],
        TENS_kV:obj["TENS kV"],
        DENOMINACION_LAT:obj["DENOMINACION L.A.T."],
        Notas:obj["Notas"],
        Long_Oficial_km:obj["Long. Oficial km"],
        Long_Planim_Km:obj["Long. Planim. Km"],
        Long_Dif_Km:obj["Long. Dif. Km"],
        Año_P_Serv:obj["Año P. Serv."],
        S_mm2:obj["S mm2"],
        HG_mm2:obj["HG mm2"],
        Material_Conductor:obj["Material Conductor"],
        Tipo_de_Estructura:obj["Tipo de Estructura"],
        Compartida_km:obj["Compartida km"],
        Torres_Cantidad:obj["Torres Cantidad"],
        Suspension_Cantidad:obj["Suspension Cantidad"],
        Aisladores_Suspension_Cantidad:obj["Aisladores Suspension Cantidad"],
        Suspension_Masa:obj["Suspension Masa"],
        Retension_Cantidad:obj["Retension Cantidad"],
        Aisladores_Retension_Cantidad:obj["Aisladores Retension Cantidad"],
        Retension_Masa:obj["Retension Masa"],
        Altura_Cond:obj["Altura Cond."],
        Ta:obj["Ta."],
        Zona:obj["Zona"],
        Servidumbre_Urbana:obj["Servidumbre Urbana"],
        Servidumbre_Rural:obj["Servidumbre Rural"],
        Sale:obj["Sale"],
        Llega:obj["Llega"],
        BDE:obj["BDE"],
        IDQ:obj["IDQ"],
        Observaciones:obj["Observaciones"],
        Resistencia_Terreno:obj["Resistencia Terreno"],
        Pot_Nat:obj["Pot. Nat."],
        Imped_Caract:obj["Imped. Caract."],
        Const_Atenuac:obj["Const. Atenuac."],
        Const_Fase:obj["Const. Fase"],
        Vel_Prop:obj["Vel. Prop."],
        R:obj["R ohm/km"],
        X:obj["X ohm/km"],
        B:obj["B µs/km"],
        R0:obj["R0 ohm/km"],
        X0:obj["X0 ohm/km"],
        B0:obj["B0 µs/km"],
        Limite_termico:obj["Límite térmico"],
        Propietario:obj["Propietario"],
        Show:obj["Show"],
      };
    });
    return idModified;
  }