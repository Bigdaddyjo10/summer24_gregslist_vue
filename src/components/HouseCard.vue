<script setup>
import { AppState } from '../AppState.js';
import { computed, h } from 'vue';
import { House } from '../models/House.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';


defineProps({ houseProp: { type: House} })
const account = computed(() => { AppState.account })

async function destroyHouse(houseId){
  try {
    const wantsToDelete = await Pop.confirm('Are you sure you want to delete your car?')
    if (!wantsToDelete) return
    await housesService.destroyHouse(houseId)
  } catch (error) {
    Pop.error(error)
  }

}
</script>


<template>
  <div class="house-card">
    <div class="col-md-6 px-0">
      <img class="house-img img-fluid" :src="houseProp.imgUrl" alt="">
    </div>
    <div class="col-md-6">

      <div class="p-2 d-flex flex-column justify-content-center h-100 m-2">
        <div class="d-flex flex-column justify-content-start">
          <h1>{{ houseProp.description }}</h1>
        </div>
      <div>
        <h2>{{ houseProp.bathrooms }} bathrooms</h2>
        <h3>{{ houseProp.bedrooms }} bedrooms</h3>
        <h4>year is {{ houseProp.year }}</h4>
        <h5>price is {{'$' + houseProp.price }}</h5>
      </div>
      <div class="d-flex justify-content-between
      al align-items-center">

        <button @click="destroyHouse(houseProp.id)"
        class="btn btn-outline-danger" title="Delete Car" type="button">
        <i class="mdi mdi-close-octagon fs-3"></i>
      </button>
      <img :src="houseProp.creator.picture" :alt="houseProp.creator.name"
      :title="`Contact ${houseProp.creator.name} for more information`" class="creator-picture">
    </div>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>
.house-img {
  min-height: 100%;
  width: 100%;
  object-fit: cover;
}

.house-card {
  background-color: rgb(215, 215, 215);
  box-shadow: 0 7px 15px black;
  border-style: solid;
  border-width: 6px;
}

.creator-picture {
  height: 15vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}

</style>
