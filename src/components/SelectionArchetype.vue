<script>
import { state } from "../state.js";
export default {
  name: "SelectionArchetype",

  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <div class="py-4">
    <select
      class="form-select"
      aria-label="Default select example"
      name="archetype"
      id="archetype"
      @change="state.performSelection"
      v-model="state.archetypeName"
    >
      <option placeholder="Seleziona un Archetipo" disabled>
        Seleziona un Archetipo
      </option>
      <option
        v-for="archetype in state.archetypeList"
        :value="archetype.archetype_name"
      >
        {{ archetype.archetype_name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
