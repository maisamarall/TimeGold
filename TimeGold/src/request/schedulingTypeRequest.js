import api from "../services/api"

export async function getAllSchedulingTypeRequest(page = 1, size = 12, q = "") {
  const params = { page, size }
  if (q) params.q = q

  return api.get("/SchedulingType", { params }) 
}

export async function getSchedulingTypeByIdRequest(id) {
  return api.get(`/SchedulingType/${id}`) 
}

export async function createSchedulingTypeRequest(data) {
  return api.post("/SchedulingType", data)  
}

export async function updateSchedulingTypeRequest(data) {
  return api.put("/SchedulingType", data)  
}

export async function deleteSchedulingTypeRequest(id) {
  return api.delete(`/SchedulingType/${id}`)  
}