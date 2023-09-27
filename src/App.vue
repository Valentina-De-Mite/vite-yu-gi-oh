<script>
// import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <body>
    <AppHeader></AppHeader>

    <!-- /header -->

    <AppMain></AppMain>

    <footer></footer>
    <!-- /footer -->
  </body>
</template>

<style></style>
