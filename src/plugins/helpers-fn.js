
export const mergeDrinkArr = (arr1, arr2) => {
 const resultArr = [];
 const arr = arr1.concat(arr2);
 const assoc = {};
 for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  if (!assoc[item.idDrink]) {
   assoc[item.idDrink] = true;
   resultArr.push(item);
  }
 }
 return resultArr;
}


export const returnIngredientArr = (cocktail, max) => {
 const arr = [];
 // API returns an object with keys for each ingredient & its measure. So ingredient1: lemon, and so on. We turn it into an array of objects with ing = ingredient name && measure = ingredient measure
 for (let i = 1; i <= max; i++) {
  // Break if null because no more data.
  if (cocktail[`strIngredient${i}`] === null && cocktail[`strMeasure${i}`] === null) break;
  arr.push({
   ing: cocktail[`strIngredient${i}`],
   measure: cocktail[`strMeasure${i}`],
  });
 }
 return arr;
}

export const formatDrinks = (arr) => {
 const data = [];
 for (let i = 0; i < arr.length; i++) {
  data[i] = formatDrink(arr[i]);
 }
 return data;
}

export const formatDrink = (drink) => {
 const data = {
  idDrink: drink.idDrink,
  strDrink: drink.strDrink,
  strDrinkThumb: drink.strDrinkThumb,
  allData: false
 };
 // if it doesnt have the strGlass Parameter we can continue (since we know from api it wont have any of the others. This is the case for the search by ingredient api call)
 if (!drink.strGlass) return data;
 data.allData = true;
 data.strGlass = drink.strGlass;
 data.strInstructions = drink.strInstructions;

 data.strAlcoholic = drink.strAlcoholic.localeCompare('Alcoholic') === 0 ? true : false;
 // We call return ing arr to make an array of objects with ing as our ingredient name and measure our ingredient measure. Then we pass the maximum number of items, in this case 15 as per the API.
 data.ingredients = returnIngredientArr(drink, 15)
 return data;
}