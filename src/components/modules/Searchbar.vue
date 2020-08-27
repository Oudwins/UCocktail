<template>
  <div class="search-hero">
    <b-form-input
      id="searchbar"
      size="lg"
      placeholder="I want to search for"
      class="w-50"
      v-model="searchQuery"
      @keypress.enter="search"
    ></b-form-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      if (this.searchQuery === "" || this.searchQuery === " ") return;
      this.$router.push({
        name: "Search",
        params: { query: this.searchQuery },
      });
      this.searchQuery = "";
    },
  },
};
</script>
<style>
.search-hero {
  height: 30vh;
  background: #393939;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>