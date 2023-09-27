import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  api_urlArchetypesList: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  cards: null,
  name: null,
  archetypeName: "0",
  archetypeList: "",
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

  fetchDataArchetypes() {
    axios
      .get(this.api_urlArchetypesList)
      .then((response) => {
        this.archetypeList = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  performSelection() {
    // console.log(this.cards);
    console.log(this.archetypeName);

    this.api_url = this.api_url + `&archetype=${this.archetypeName}`;
    this.fetchData();
  },
});
