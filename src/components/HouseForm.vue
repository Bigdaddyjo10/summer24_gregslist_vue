<script setup>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';



const editableHouseData = ref({
bathrooms: 0,
bedrooms: 0,
imgUrl: '',
price: 0,
year: 0,
description: '',
  levels: 0,
})

async function createHouse(){
  console.log('🔧 🏚️');
  try {
    await housesService.createHouse(editableHouseData.value)
  editableHouseData.value = {
      bathrooms: 0,
      bedrooms: 0,
      imgUrl: '',
      price: 0,
      year: 0,
      description: '',
      levels: 0,
    }

  } catch (error) {
    // Modal.getOrCreateInstance('#carFormModal').hide()
    Pop.error(error)
  }
}

</script>


<template>
  <form @submit.prevent="createHouse()">
    <div class="form-floating mb-3">
        <input v-model="editableHouseData.bathrooms" type="number" class="form-control" id="model" placeholder="House bathrooms"
          required maxlength="500">
        <label for="model">Bathrooms</label>
      </div>
       <div class="form-floating mb-3">
          <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="model" placeholder="House bedrooms"
            required maxlength="500">
          <label for="model">Bedrooms</label>
        </div>
            <div class="form-floating mb-3">
            <input v-model="editableHouseData.levels" type="number" class="form-control" id="model" placeholder="House levels"
              required maxlength="500">
            <label for="model">levels</label>
          </div>
            <div class="form-floating mb-3">
              <input v-model="editableHouseData.imgUrl" type="text" class="form-control" id="model" placeholder="House imgUrl"
                required maxlength="500">
              <label for="model">imgUrl</label>
            </div>
                   <div class="form-floating mb-3">
              <input v-model="editableHouseData.year" type="number" class="form-control" id="model" placeholder="House year"
                required maxlength="500">
              <label for="model">year</label>
            </div>
                 <div class="form-floating mb-3">
                <input v-model="editableHouseData.price" type="number" class="form-control" id="model" placeholder="House price"
                  required maxlength="500">
                <label for="model">price</label>
              </div>

      <div class="text-end">
        <button class="btn btn-dark" type="submit">Submit</button>
      </div>
    </form>
</template>


<style lang="scss" scoped>

</style>

<!--
  "price": {
    "type": "Number",
    "required": true -->
