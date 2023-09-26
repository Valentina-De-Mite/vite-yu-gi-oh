<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  data() {
    return {
      api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
      cards: null,
      name: null,
      archetype: null,
    };
  },

  created() {
    axios
      .get(this.api_url)
      .then((response) => {
        console.log(response);
        this.cards = response.data.data;
        this.name = response.data.name;
        this.archetype = response.data.archetype;
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
