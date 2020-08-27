<template>
  <div class="drink">
    <!-- Navbar -->
    <app-navbar color="light"></app-navbar>
    <!-- Search Bar -->
    <app-searchbar></app-searchbar>
    <!-- Loader -->
    <b-container
      class="text-center d-flex justify-content-center align-items-center"
      v-if="loading"
      style="height:50vh;"
    >
      <b-spinner label="Spinning" style="width:5rem;height:5rem;"></b-spinner>
    </b-container>
    <!-- Drink info -->
    <app-drink v-else></app-drink>
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "../components/web_wide/navbar.vue";
import Footer from "../components/web_wide/footer.vue";
import Searchbar from "../components/modules/Searchbar.vue";
import DrinkPage from "../components/modules/DrinkPage.vue";

export default {
  components: {
    "app-navbar": Navbar,
    "app-searchbar": Searchbar,
    "app-footer": Footer,
    "app-drink": DrinkPage,
  },
  watch: {
    $route(to) {
      this.drinkApiCall(to.params.id);
    },
  },
  created() {
    this.drinkApiCall(this.$route.params.id);
  },
  methods: {
    checkData(id) {
      for (let i = 0; i < this.drinks.length; i++) {
        if (this.drinks[i].idDrink === id && this.drinks[i].allData) return i;
      }
      return false;
    },
    drinkApiCall(id) {
      // If we attempt to load cocktail we already have loaded do nothing.
      if (this.drink.idDrink === id) return;
      // Reset Ingredient Position to -1 (so that we can do the related ingredient again)
      this.$store.dispatch("resetIngPosition");
      // Check if we already have the data of the cocktail.
      const drink = this.checkData(id);
      if (drink || drink === 0) {
        this.$store.dispatch("ChangeMainCocktail", this.drinks[drink]);
      } else {
        this.$store.dispatch("loadCocktail", id);
      }
    },
  },
  computed: {
    drinks() {
      return this.$store.getters.getCocktails;
    },
    drink() {
      return this.$store.getters.getCocktail;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
<style>
</style>