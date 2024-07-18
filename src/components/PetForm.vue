<script setup>
import { ref } from 'vue';
import { petsService } from '../services/PetsService.js';
import Pop from '../utils/Pop.js';



const editablePetData = ref({
name:  '',
age: 0,
isVaccinated : false,
species: '',
imgUrl:''
})
async function createPet(editablePetData){
try {
  await petsService.createPet()
  editablePetData.value ={
    name: '',
      age: 0,
      isVaccinated: false,
      species: '',
      imgUrl: ''
  }

} catch (error) {
  Pop.error(error)

}
}
</script>


<template>
   <form @submit.prevent="createPet()">
    <div class="form-floating mb-3">
      <input v-model="editablePetData.name" type="text" class="form-control" id="model" placeholder="Name" required
        maxlength="500">
      <label for="model">Name</label>
    </div>
    <div class="form-floating mb-3">
        <input v-model="editablePetData.age" type="number" class="form-control" id="model" placeholder="Age" required
          maxlength="500">
        <label for="model">Age</label>
      </div>
        <div class="form-floating mb-3">
        <input v-model="editablePetData.isVaccinated" type="number" class="form-control" id="model" placeholder="House price" required
          maxlength="500">
        <label for="model">price</label>
      </div>
        <div class="form-floating mb-3">
        <input v-model="editablePetData.species" type="text" class="form-control" id="model" placeholder="Species" required
          maxlength="500">
        <label for="model">Species</label>
      </div>
       <div class="form-floating mb-3">
                <input v-model="editablePetData.imgUrl" type="text" class="form-control" id="model" placeholder="Pet imgUrl"
                  required maxlength="500">
                <label for="model">imgUrl</label>
      </div>
    <div class="text-end">
      <button class="btn btn-dark" type="submit">Submit</button>
    </div>
  </form>
</template>


<style lang="scss" scoped>

</style>
