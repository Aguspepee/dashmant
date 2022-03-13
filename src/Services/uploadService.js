import instance from "../Config/axios"

export function deleteAll(dbSubBaseURL){
    return instance.delete(`${dbSubBaseURL}/`)
}

export function createAll(dbSubBaseURL,json){
    return instance.post(`${dbSubBaseURL}/`,json)
}