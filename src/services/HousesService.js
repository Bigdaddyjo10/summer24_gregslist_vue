import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"

class HousesService {

  async destroyHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
    if (houseIndex == -1) throw new Error("You messed up on findIndex, big fella")
    AppState.houses.splice(houseIndex, 1)
  }

  async createHouse(editableHouseData) {
    const response = await api.post('api/houses', editableHouseData)
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }

  async getHouses() {
    const response = await api.get('/api/houses')

    const houses = response.data.map(housePOJO => new House(housePOJO))
    AppState.houses = houses
  }
}
export const housesService = new HousesService()
