<script setup>
import { Pet } from '../models/Pet.js';

defineProps({ petProps: {type: Pet }})

</script>


<template>
<div class="row pet-card">
<div class="col-md-6 px-0">
  <img :src="petProps.imgUrl" alt="" class="pet-img">
</div>
<div class="col-md-6">
  <div class="p-2 d-flex justify-content-between h-100">
    <h2>{{ petProps.name }}</h2>
    <div>
      <p class="fs-2">{{ petProps.age }} years old</p>
      <p class="fs-2"> {{ petProps.name }} is a  {{ petProps.species }}</p>
      <p class="fs-2">Is {{ petProps.name }} vaccinated {{ petProps.isVaccinated}}</p>

    </div>
  </div>
</div>
</div>
</template>


<style lang="scss" scoped>
.pet-card{
  background-color: rgb(215, 215, 215);
  box-shadow: 0 7px 15px black;
  border-style: solid;
  border-width: 6px;
}

.pet-img {
  min-height: 100%;
  width: 100%;
  object-fit: cover;
}



</style>
