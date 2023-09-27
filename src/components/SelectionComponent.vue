<script>
import { state } from "../state.js";
export default {
  name: "SelectionComponent",
  emits: ["performSelection"],
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <select
    class="my-4"
    name="archetype"
    id="archetype"
    @change="$emit('performSelection')"
    v-model="state.cardArchetype"
  >
    <option value="" disabled>Select an Archetype</option>
    <option value="Alien">Alien</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</template>

<style lang="scss" scoped></style>
