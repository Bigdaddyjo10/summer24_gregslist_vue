<script setup>
import { Pet } from '../models/Pet.js';

defineProps({ petProps: {type: Pet }})

</script>


<template>
<div class="row pet-card">
<div class="col-md-6 px-0">
  <img :src="petProps.imgUrl" alt="">
</div>
<div class="col-md-6">
  <div class="p-2 d-flex flex-column justify-content-between h-100">
    <h2>{{ petProps.name }}</h2>
    <div>
      <p>{{ petProps.age }} years old</p>
    </div>
  </div>
</div>
</div>
</template>


<style lang="scss" scoped>
.pet-car{
  background-color: rgb(215, 215, 215);
  box-shadow: 0 7px 15px black;
  border-style: solid;
  border-width: 6px;
}


</style>
