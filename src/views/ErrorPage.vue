<template>
  <div class="errorPage">
    <!-- Navbar -->
    <app-navbar color="light"></app-navbar>
    <!-- Content -->
    <b-container style="height: 50vh; display: flex; justify-content:center; align-items: center;">
      <div>
        <h1 class="text-center" style="font-size:5rem;">404 Error</h1>
        <h2 class="text-center">Sorry we couldn't find the page you were looking for</h2>
      </div>
    </b-container>
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "../components/web_wide/navbar.vue";
import Footer from "../components/web_wide/footer.vue";
export default {
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer,
  },
};
</script>
<style>
</style>