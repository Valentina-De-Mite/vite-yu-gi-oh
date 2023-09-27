<script>
import { state } from "../state.js";
import CardComponent from "./CardComponent.vue";
import SelectionArchetype from "./SelectionArchetype.vue";

export default {
  name: "AppMain",
  data() {
    return {
      state,
    };
  },
  methods: {},
  mounted() {
    state.fetchData();
    state.fetchDataArchetypes();
  },
  components: { CardComponent, SelectionArchetype },
};
</script>

<template>
  <main>
    <SelectionArchetype></SelectionArchetype>
    <div class="container bg-light my-3 px-5 py-5">
      <div class="row row-cols-1 row-cols-sm-5">
        <CardComponent :card="card" v-for="card in state.cards">
        </CardComponent>
      </div>
    </div>
  </main>

  <!-- /main -->
</template>

<style scoped></style>
