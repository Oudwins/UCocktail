<template>
  <b-container fluid style="height: 30vh;">
    <b-row align-h="center" align-v="center" style="height:100%;">
      <b-col cols="12" class="d-flex justify-content-center align-items-center">
        <h1 style="color: white">{{page}}</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      requiered: true,
    },
  },
};
</script>

<style>
</style>