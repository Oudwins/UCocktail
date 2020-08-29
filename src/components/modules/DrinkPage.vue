<template>
  <b-container class="my-5">
    <b-row>
      <b-col cols="12" lg="5" class="my-3">
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink + 'image'" class="img-fluid" />
      </b-col>
      <b-col cols="12" lg="7" class="text-center text-md-left my-3">
        <h2>{{drink.strDrink}}</h2>
        <b-row class="info-section">
          <b-col cols="12" class="my-3">
            <h5 class="info-title">Ingredients</h5>
            <hr />
            <!-- <div>
              <label for="servings-btn">Drinks</label>
              <b-form-spinbutton
                class="ml-3"
                v-model="servings"
                id="servings-btn"
                min="1"
                max="12"
                wrap
                inline
              ></b-form-spinbutton>
            </div>-->
            <b-form-checkbox-group
              id="ingredients"
              name="ingredients"
              v-model="selectedIngredients"
            >
              <b-form-checkbox
                v-for="(ingredient, index) in drink.ingredients"
                :key="'ing-'+ index"
                class="mr-5 my-2"
                :value="ingredient"
              >
                <strong>{{ingredient.ing}}</strong>
                {{ingredient.measure ? ': ' + ingredient.measure : ''}}
                <!--                 <small
                  v-b-tooltip.hover
                  :title="tooltip ? tooltip : 'Loading...'"
                  class="text-muted"
                  @mouseenter="fetchTooltip(ingredient.ing)"
                  @mouseleave="cleanTooltip()"
                >?</small>-->
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-col>
          <b-col cols="12" class="my-3">
            <h5 class="info-title">Tags</h5>
            <hr />
            <div>
              <b-badge
                pill
                :variant="drink.strAlcoholic ? 'danger' : 'success'"
                class="mr-2"
                v-if="drink.strAlcoholic !== null || drink.strAlcoholic !== undefined"
              >{{ drink.strAlcoholic ? 'Alcoholic' : 'Non Alcoholic' }}</b-badge>
              <b-badge pill variant="info" class="ml-2" v-if="drink.strGlass">{{drink.strGlass}}</b-badge>
            </div>
          </b-col>
          <b-col cols="12" class="my-3">
            <h5 class="info-title">Recepie</h5>
            <hr />
            <p class="text-justify">{{drink.strInstructions}}</p>
          </b-col>
        </b-row>
        <b-row class="info-section"></b-row>
        <b-row class="info-section"></b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="my-3" v-if="related">
        <h4>{{firstIngredient}}</h4>
        <hr />
        <div class="container my-3">
          <div class="row justify-content-center">
            <div class="card-deck" style="justify-content-center">
              <router-link
                v-for="cocktail in related"
                :key="cocktail.idDrink"
                :to="'/drink/'+cocktail.idDrink"
                class="unstyle-link text-center text-md-left"
              >
                <div class="card mb-4" style="min-width: 12rem; max-width: 12rem;">
                  <img class="card-img-top" :src="cocktail.strDrinkThumb" alt="Cocktail Image" />
                  <div class="card-body">
                    <h5 class="card-title">{{ cocktail.strDrink}}</h5>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* import axiosDB from "../../plugins/axios-db"; */
export default {
  data() {
    return {
      servings: 1,
      selectedIngredients: [],
      /*       tooltip: "", */
    };
  },
  computed: {
    drink() {
      return this.$store.getters.getCocktail;
    },
    related() {
      const related = this.$store.getters.getRelated.slice(0, 5);
      if (related[0]) return related;
      return false;
    },
    firstIngredient() {
      const ingPos = this.$store.getters.getRelatedIng;
      if (ingPos >= 0) {
        const ing = this.drink.ingredients[ingPos].ing.toLowerCase();
        return `Other recepies with ${ing}`;
      }
      return "Sorry, we couldn't find any related cocktails";
    },
  },
  methods: {
    /*     async fetchTooltip(ing) {
      const res = (await axiosDB.get("search.php?i=" + ing)).data.ingredients[0]
        .strDescription;
      this.tooltip = res;
    },
    cleanToolTip() {
      this.tooltip = "";
    }, */
  },
};
</script>

<style>
.unstyle-btn {
  padding: 0;
  margin: 0;
  background: none;
  border: 0;
  color: black;
  vertical-align: top;
}
.unstyle-btn:hover {
  padding: 0;
  margin: 0;
  background: none;
  border: 0;
  color: black;
}
</style>