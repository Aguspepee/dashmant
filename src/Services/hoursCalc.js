import hours from "../Data/hours.json"




function hoursCalc() {
    let horas = hours
    let zonas = [
        { "Zona": "ZN1" },
        { "Zona": "ZS1" },
        { "Zona": "ZO1" },
        { "Zona": "ZA1" },
    ]
    let activity = [
        { "Actividad": "RPM", "Mostrar": true },
        { "Actividad": "MCP", "Mostrar": true },
        { "Actividad": "MUA", "Mostrar": true }
    ]

    let activity1 = []
    zonas = zonas.map((zonas) => {
        activity = activity.map((activity) => {
            let valor = hours.filter((hours) => {
                return (hours["Cl.actividad PM"] === activity["Actividad"]
                    && hours["Ubicac.técnica"].slice(5, 8) === zonas["Zona"]
                )
            }).reduce((a, b) =>
                a + b["Trabajo real"], 0)

            activity["Horas"] = valor
            console.log("ACTIVI", activity)
            return (activity)

        })
        console.log("holasd", activity1)
        return (zonas["Activity"] = activity)
    })

    console.log("Zonas", zonas)

}

export default hoursCalc