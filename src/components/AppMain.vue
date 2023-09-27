<script>
import { state } from "../state.js";
import CardComponent from "./CardComponent.vue";

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
  components: { CardComponent },
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
        <CardComponent :card="card" v-for="card in state.cards">
        </CardComponent>
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
