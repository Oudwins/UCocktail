<template>
  <div>
    <!-- Navbar -->
    <app-navbar color="light"></app-navbar>
    <!-- Hero-->
    <app-hero class="about-hero" page="Contact Us"></app-hero>
    <!-- Content -->
    <b-container class="my-5">
      <b-row style="min-height:30vh;" align-h="center" align-v="center">
        <b-col cols="12">
          <b-form @submit="onSubmit" v-if="!form.submitted">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-form-textarea
              id="textarea"
              v-model="form.message"
              placeholder="Message..."
              rows="3"
              max-rows="6"
              required
            ></b-form-textarea>
            <b-form-group id="input-group-4" class="mt-2">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me" required>I accept UCocktail's Privacy Policy</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="primary" class="my-3">Submit</b-button>
          </b-form>
          <div v-else style="font-size:1.5rem;">
            <p>Thank you very much for getting in touch. We will try to contact you as soon as possible. However, please allow up to 7 business days for the request to be processed by our team. In some cases, if we are under heavy server load, this processing time might be longer.</p>
            <p>It will be our very pleasure to hear from you.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
        checked: [],
        submitted: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.form.submitted = true;
    },
  },
};
</script>

<style>
</style>