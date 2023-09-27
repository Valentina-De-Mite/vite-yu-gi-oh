import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  cards: null,
  name: null,
  archetype: null,
  cardArchetype: "",
  // loading: true,

  fetchData() {
    console.log(this.api_url);
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
});
