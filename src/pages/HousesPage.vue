<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import HousesCard from '../components/HouseCard.vue'


const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)

onMounted(() => {
  getHouses()
})

async function getHouses() {
try {
await housesService.getHouses()
} catch (error) {
  Pop.error(error)
}
}
</script>


<template>
   <HouseForm />
  <div class="container">
    <section class="row">
      <div class="col-12">
        <div class="d-flex align-items-center gap-3">
          <h1>Houses</h1>
        </div>
      </div>
    </section>
  </div>
  <div class="row">
        <div v-for="house in houses" class=" py-2" >
          <HousesCard :houseProp="house"/>
      </div>
  </div>

</template>




<style lang="scss" scoped>

</style>
