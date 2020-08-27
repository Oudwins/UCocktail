# Posible Upgrades to the current build.
  ## Allowing for showing amount of servings you want. Make the app update all servings.
    The problem with this is that in terms of fucking numbers this API is all over the damm place.
    Never the less, I have already began the process, this is the approach I think most possible at the moment:
     - Make a filter that parses through each character in the ingredient's measure and if it finds a number it multiplies it by the current number of people (stored as servings in DrinkPage).
      - There will be some problems with fractions and with some recepies that say 2-3 oz of something. But with enough work that can be overcome.
      - Reason why im not doing it now is that it looks like a pain and there has to be a better way.
    WHAT HAS ALREADY BEEN DONE?
      - You can find the input:number already in a comment in DrinkPage.vue. It is already hooked up to a property called "servings". Inside plugins/helpers-fn.js you can find the function that handles the ingredient parsing in case that is necesary (returnIngredientArr).

  ## Popup with ingredient information
    I have already made the code for the API call but right now it is set on hover (everything is commented out) inside drinkPage. I think the best thing to do is to make a pop-up that shows on click of the ? and shows the content of making the API call. the image and everything.