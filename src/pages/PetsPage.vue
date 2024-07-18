<script setup>
import Pop from '../utils/Pop.js';
import { petsService } from '../services/PetsService.js';
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';


const pets = computed(() => AppState.pets)

onMounted(() =>{
  getPets()
})


async function getPets(){
  try {
    await petsService.getPets();
  } catch (error) {
    Pop.error(error)
  }
}

</script>


<template>
  <PetForm />
  <div class="container">
    <section class="row">
      <div class="col-12">
        <div class="d-flex align-items-center gap-3">
          <h1>Pets</h1>
        </div>
      </div>
    </section>
    <section class="row">
      <div v-for="pet in pets" :key="pet.id" class="col-12 md-0">
        <PetCard :petProps="pet"/>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>

</style>
