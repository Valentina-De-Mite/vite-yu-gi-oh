<script>
import { state } from "../state.js";
import CardComponent from "./CardComponent.vue";
import SelectionComponent from "./SelectionComponent.vue";

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
  components: { CardComponent, SelectionComponent },
};
</script>

<template>
  <main>
    <div class="container bg-light my-5 px-5 pb-5">
      <SelectionComponent></SelectionComponent>

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
