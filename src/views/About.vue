<template>
  <div class="about">
    <!-- Navbar -->
    <app-navbar color="light"></app-navbar>
    <!-- Hero ~@/assets/images/about_us.jpg-->
    <app-hero class="about-hero" page="About Us"></app-hero>
    <!-- Content -->
    <b-container class="my-5">
      <b-row>
        <b-col cols="12">
          <p
            class="text-justify"
            style="font-size: 1.2rem"
          >U Cocktail was setup and envisioned in late 2010 when after much internet searching and cocktail mixing, Nicky Wills, the now CEO of U Cocktail, got "royally frustrated" about the online options to find cocktails and share them with the world.</p>
          <p class="text-justify" style="font-size: 1.2rem">
            At home in a dark corner Nick had been collecting various spirits and liqueurs and wanted to explore what cocktails he could make. "Why, there must be somewhere where I can search for cocktails to make, or search by a special ingredient I have and the site will tell me what I can make" he thought. Unfortunately, he was wrong. After much searching he found only 3-4 websites that offered the service, and none of them seemed to offer the level or simplicity that he was after.
            Two weeks later he had wrote a script that could do just what he was after, and he was content as he used the script to make cocktails for friends and family alike.
            During the Christmas period of 2010, he decided to turn the script into the basis of a much more comprehensive website that offered a full cocktail experience. Over the next two months, with the help of many cocktail loving associates, people in the cocktail industry, and some amazing thoughts, recommendations, and pure data entry from many close friends, a time of foundation setting and growth was carried out, as the base information and ideas were gathered for the site. Finally in March 2011 U Cocktail was born.
          </p>
          <p
            class="text-justify"
            style="font-size: 1.2rem"
          >That ladies and gentlemen - was, is, and hopefully always will be, U Cocktail.</p>
        </b-col>
      </b-row>
    </b-container>
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>
<script>
import Navbar from "../components/web_wide/navbar.vue";
import Footer from "../components/web_wide/footer.vue";
import Hero from "../components/modules/hero.vue";
export default {
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer,
    "app-hero": Hero,
  },
};
</script>

<style>
</style>
