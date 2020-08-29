<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
/* Importing custom styles */
@import "./assets/sass/myvars-custom.scss";
/* Importing bootstrap vue */
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

.about-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~@/assets/images/about_us.jpg) center/cover no-repeat;
}
</style>
