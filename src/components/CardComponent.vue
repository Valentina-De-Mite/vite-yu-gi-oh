<script>
import { state } from "../state";
export default {
  name: "CardComponent",
  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="card">
      <img class="card-img-top" :src="card.card_images[0].image_url" alt="" />
      <div class="card-body p-2">
        <h6 class="card-title fs-6">{{ card.name }}</h6>
        <p class="card-text fs-6">{{ card.archetype }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
