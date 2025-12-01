import {
  getAllSchedulingTypeRequest,
  getSchedulingTypeByIdRequest,
  createSchedulingTypeRequest,
  updateSchedulingTypeRequest,
  deleteSchedulingTypeRequest
} from '../request/schedulingTypeRequest'

export const schedulingTypeService = {
  async listarTipoAgendamento(page = 1, size = 12, q = "") {
    try {
      const res = await getAllSchedulingTypeRequest(page, size, q)
      return res.data ?? res
    } catch (e) {
      console.error("[schedulingTypeService] Erro ao listar:", e)
      throw e.response?.data ?? e
    }
  },

  async buscarTipoAgendamentoPorId(id) {
    try {
      const res = await getSchedulingTypeByIdRequest(id)
      return res.data ?? res
    } catch (e) {
      console.error("[schedulingTypeService] Erro ao buscar por ID:", e)
      throw e.response?.data ?? e
    }
  },

  async criarTipoAgendamento(data) {
    try {
      const res = await createSchedulingTypeRequest(data)
      return res.data ?? res
    } catch (e) {
      console.error("[schedulingTypeService] Erro ao criar:", e)
      throw e.response?.data ?? e
    }
  },

  async atualizarTipoAgendamento(data) {
    try {
      const res = await updateSchedulingTypeRequest(data)
      return res.data ?? res
    } catch (e) {
      console.error("[schedulingTypeService] Erro ao atualizar:", e)
      throw e.response?.data ?? e
    }
  },

  async deletarTipoAgendamento(id) {
    try {
      const res = await deleteSchedulingTypeRequest(id)
      return res.data ?? res
    } catch (e) {
      console.error("[schedulingTypeService] Erro ao deletar:", e)
      throw e.response?.data ?? e
    }
  },
}

export default schedulingTypeService