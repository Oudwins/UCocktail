/* eslint-disable */
import axiosDB from '../../plugins/axios-db';
import { mergeDrinkArr as mergeArrCocktails, formatDrinks, formatDrink } from '../../plugins/helpers-fn';
import router from '../../router/index';

const state = {
  cocktail: {
    cocktail: {},
    related: {
      ingredientPosition: -1,
      drinks: []
    },
    ingToolTips: {}
  },
  cocktails: []
};

const getters = {
  getCocktail: state => {
    return state.cocktail.cocktail;
  },
  getRelated: state => {
    return state.cocktail.related.drinks;
  },
  getRelatedIng: state => {
    return state.cocktail.related.ingredientPosition;
  },
  getCocktails: state => {
    return state.cocktails;
  }
};


const mutations = {
  cocktail: (state, payload) => {
    state.cocktail.cocktail = payload;
  },
  related: (state, payload) => {
    const drinks = formatDrinks(payload.related);
    const duplicate = drinks.findIndex((el, idx) => el.idDrink === state.cocktail.cocktail.idDrink);
    if (duplicate !== -1) drinks.splice(duplicate, 1);
    state.cocktail.related.drinks = drinks;
    state.cocktail.related.ingredientPosition = payload.ingredientPosition;
  },
  cocktails: (state, payload) => {
    state.cocktails = formatDrinks(payload);
  },
  resetIngPosition: (state) => {
    state.cocktail.related.ingredientPosition = -1;
  }
};


const actions = {
  async loadCocktail(context, id) {
    context.dispatch('changeLoading', true, { root: true });
    // get the cocktail from api
    const response = await axiosDB.get('lookup.php?i=' + id);
    // commit mutation
    await context.commit("cocktail", formatDrink(response.data.drinks[0]))
    context.dispatch('loadRelated', context.getters.getCocktail.ingredients);
    context.dispatch('changeLoading', false, { root: true });
  },
  async loadRelated(context, ingredients) {
    // get the cocktails from api
    try {
      let i = 0;
      let related = 0;
      do {
        related = (await axiosDB.get('filter.php?i=' + ingredients[i].ing)).data.drinks;
        i++;
      }
      while (!related);
      context.commit('related', { related, ingredientPosition: i });
    } catch (err) {
      console.log(err);
    }
  },
  async loadCocktails(context, payload) {
    context.dispatch('changeLoading', true, { root: true });
    // get the cocktail from api
    try {
      const stringSearch = (await axiosDB.get('search.php?s=' + payload)).data.drinks;
      const IngredientSearch = (await axiosDB.get('filter.php?i=' + payload)).data.drinks;
      const list = IngredientSearch ? mergeArrCocktails(IngredientSearch, stringSearch) : stringSearch;
      context.commit('cocktails', list);
      context.dispatch('changeLoading', false, { root: true });
    } catch (err) {
      console.log(err);
    }
  },
  ChangeMainCocktail(context, payload) {
    context.commit('cocktail', payload);
    context.dispatch('loadRelated', context.getters.getCocktail.ingredients)
  },
  resetIngPosition({ commit }) {
    commit('resetIngPosition');
  },
  async dailyDrink(context) {

    // get current daily drink from local storage
    const item = localStorage.getItem('dailyDrink');
    const curDrink = JSON.parse(item);
    // if it exists && less than 1 day has passed since we last got a daily drink
    if (curDrink && ((new Date(curDrink.date).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < 1) {
      if (router.currentRoute.params.id === curDrink.id) return;
      router.push({ name: 'Drink', params: { id: curDrink.id } });
    } else {
      // else we call the API again and get a new || first daily drink & save it's ID and date to LocalStorage.
      const drink = (await axiosDB.get('random.php')).data.drinks[0];
      context.dispatch('ChangeMainCocktail', formatDrink(drink));
      router.push({ name: 'Drink', params: { id: drink.idDrink } });
      const toStore = {
        date: new Date(),
        id: drink.idDrink
      };
      localStorage.setItem('dailyDrink', JSON.stringify(toStore));
    }
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}