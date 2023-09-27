<script>
import { state } from "../state.js";

export default {
  name: "AppMain",
  data() {
    return {
      state,
    };
  },
  created() {
    state.fetchData();
  },
};
</script>

<template>
  <main>
    <div class="container bg-light my-5 px-5 pb-5">
      <div class="dropdown my-4">
        <button
          class="btn btn-secondary dropdown-toggle mt-3"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Alien
        </button>
        <div class="dropdown-menu" aria-labelledby="triggerId">
          <a class="dropdown-item" href="#">B</a>
          <a class="dropdown-item" href="#">c</a>
          <a class="dropdown-item" href="#">D</a>
          <a class="dropdown-item" href="#">E</a>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-5">
        <div class="col" v-for="card in state.cards">
          <div class="card">
            <img
              class="card-img-top"
              :src="card.card_images[0].image_url"
              alt=""
            />
            <div class="card-body p-2">
              <h6 class="card-title fs-6">{{ card.name }}</h6>
              <p class="card-text fs-6">{{ card.archetype }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- /main -->
</template>

<style scoped>
.card-body {
  background-color: rgb(207, 136, 4);
}
</style>
