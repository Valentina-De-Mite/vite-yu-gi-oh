<script>
import axios from "axios";
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
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav">
        <a class="nav-item nav-link" href="#">Yu-Gi-Oh API</a>
      </div>
    </nav>
  </header>

  <!-- /header -->

  <main>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-3">
        <div class="col" v-for="card in cards">
          <div class="card">
            <img
              class="card-img-top"
              :src="card.card_images[0].image_url"
              alt=""
            />
            <div class="card-body p-2">
              <h6 class="card-title ygo-cardTitle">{{ card.name }}</h6>
              <p class="card-text ygo-cardText">{{ card.archetype }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- /main -->

  <footer></footer>
  <!-- /footer -->
</template>

<style></style>
