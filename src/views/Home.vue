<template>
  <div class="home">
    <!-- Navbar -->
    <app-navbar></app-navbar>
    <!-- Hero -->
    <b-container class="hero-img" fluid>
      <b-row align-v="center" align-h="center" style="height: 100%;">
        <b-form inline @submit.prevent="search">
          <b-col lg="8" class="home_center_cols">
            <label for="home-search-bar" class="sr-only">Search Bar</label>
            <b-input
              v-model="search_text"
              placeholder="I want to make a...."
              id="home-search-bar"
              @keydown.enter="search"
              class="home-bar px-5 py-4"
            ></b-input>
          </b-col>
          <b-col offset-lg="1" lg="3" class="home_center_cols">
            <b-button type="submit" variant="danger" class="home-btn px-5 py-2">Search</b-button>
          </b-col>
        </b-form>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/web_wide/navbar.vue";
export default {
  name: "Home",
  data() {
    return {
      search_text: "",
    };
  },
  methods: {
    search() {
      if (this.search_text === "" || this.search_text === " ") return;
      this.$router.push({
        name: "Search",
        params: { query: this.search_text },
      });
      this.search_text = "";
    },
  },
  components: {
    "app-navbar": Navbar,
  },
};
</script>

<style>
.hero-img {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~@/assets/images/hero_image.jpg) center/cover no-repeat;
  margin-top: -10vh;
}

.home-bar,
.home-btn {
  font-size: 2rem;
}

@media screen and (max-width: 768px) {
  .home_center_cols {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
  .home-bar {
    width: 100% !important;
  }
  .home-btn {
    width: 100%;
  }
}
</style>