
import { AppState } from "../AppState.js"
import { Pet } from "../models/Pet.js"
import { api } from "./AxiosService.js"
class PetsService {
  async createPet(editablePetData) {
    const response = await api.post('/api/pets', editablePetData)
    const newPet = new Pet(response.data)
    AppState.pets.push(newPet)

  }

  async getPets() {
    const response = await api.get('/api/pets')
    console.log(response.data)
    const pets = response.data.map(petPOJ => new Pet(petPOJ))
    AppState.pets = pets
  }
}


export const petsService = new PetsService()
