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
  <div class="col mb-3 colonna">
    <div class="card">
      <img
        class="card-img-top m-auto"
        :src="card.card_images[0].image_url"
        alt=""
      />
      <div class="card-body">
        <h6 class="card-title text-light fs-6">{{ card.name }}</h6>
        <p class="card-text fs-6">{{ card.archetype }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgb(207, 136, 4);
}
</style>
