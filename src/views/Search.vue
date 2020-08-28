<template>
  <div class="search">
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
    <!-- Search Results -->
    <div class="container mt-3" v-else>
      <div class="row justify-content-center">
        <div class="card-deck" style="justify-content: center;">
          <!-- Each Cocktail Card -->
          <router-link
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :to="'/drink/'+cocktail.idDrink"
            class="unstyle-link"
          >
            <div class="card mb-4" style="min-width: 18rem; max-width: 18rem;">
              <!-- <img class="card-img-top" :src="cocktail.strDrinkThumb" alt="Cocktail Image" /> -->
              <b-img-lazy class="card-img-top" :src="cocktail.strDrinkThumb" alt="Cocktail Image"></b-img-lazy>
              <div class="card-body">
                <h5 class="card-title">{{ cocktail.strDrink}}</h5>
                <!-- Tags -->
                <p class="card-text">
                  <b-badge
                    pill
                    :variant="cocktail.strAlcoholic ? 'primary' : 'success'"
                    class="mr-2"
                    v-if="cocktail.strAlcoholic"
                  >{{ cocktail.strAlcoholic ? 'Alcoholic' : 'Non Alcoholic' }}</b-badge>
                  <b-badge
                    pill
                    variant="info"
                    class="ml-2"
                    v-if="cocktail.strGlass"
                  >{{cocktail.strGlass}}</b-badge>
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <b-pagination
      v-if="dataDrinks.length > perPage"
      v-model="curPage"
      :total-rows="dataDrinks.length"
      :per-page="perPage"
      aria-controls="cocktail-search-results"
      size="lg"
      align="center"
    ></b-pagination>
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "../components/web_wide/navbar.vue";
import Footer from "../components/web_wide/footer.vue";
import Searchbar from "../components/modules/Searchbar.vue";
export default {
  components: {
    "app-navbar": Navbar,
    "app-searchbar": Searchbar,
    "app-footer": Footer,
  },
  watch: {
    $route(to) {
      this.$store.dispatch("loadCocktails", to.params.query);
    },
  },
  created() {
    this.$store.dispatch("loadCocktails", this.$route.params.query);
  },
  computed: {
    dataDrinks() {
      return this.$store.getters.getCocktails;
    },
    cocktails() {
      // If result is less than perPage no pagination needed
      if (this.dataDrinks.length <= this.perPage) return this.dataDrinks;
      // if we are not on page 1 we follow this logic to find up to where to cut.
      if (this.curPage > 1)
        return this.dataDrinks.slice(
          this.perPage * (this.curPage - 1),
          this.curPage * this.perPage
        );
      // if this is the first page
      return this.dataDrinks.slice(0, this.perPage);
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  data() {
    return {
      curPage: 1,
      perPage: 8,
    };
  },
};
</script>

<style>
.unstyle-link:hover {
  text-decoration: none;
}
</style>