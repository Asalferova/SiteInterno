<script setup>
import { ref, watch, reactive } from "vue";
import axios from "axios";
import { URL_POST_CONTACT_FORM } from "../constants";
import { validateContactForm } from "../validators";
import BaseNavigationButton from "./UI/BaseNavigationButton.vue";
import BaseOpenButton from "./UI/BaseOpenButton.vue";
import { ICON_CLOSE } from "../icons";
import BaseIcon from "./UI/BaseIcon.vue";
import BaseText from "./UI/BaseText.vue";

const formValues = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  desc: "",
});
const name = ref(null);
const email = ref(null);
const phone = ref(null);
const subject = ref(null);

const isOpen = ref(false);
const isDataSended = ref(false);
const form = ref(null);
const message = ref("");

const submitForm = async () => {
  if (!validateContactForm(formValues, { name, email, phone, subject })) {
    return;
  }
  const formData = new FormData(form.value);
  try {
    const response = await axios.post(URL_POST_CONTACT_FORM, formData);

    if (response.status === 200) {
      message.value = `Thank you, ${formValues.name}, we will be with you throughout the day :)`;
      isDataSended.value = true;
    }
  } catch (error) {
    message.value = "An error occurred while submitting the form. ";
  }
  Object.keys(formValues).forEach((key) => {
    formValues[key] = "";
  });
};
watch(isDataSended, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      isDataSended.value = false;
      isOpen.value = false;
    }, 3000);
  }
});
</script>
<template>
  <div>
    <base-open-button v-show="!isOpen" @click="isOpen = !isOpen"
      >Connect With us</base-open-button
    >
    <div class="form-container" v-show="isOpen">
      <form class="form" @submit.prevent ref="form" v-if="!isDataSended">
        <button
          @click.stop
          class="close-button"
          @click="isOpen = !isOpen"
          aria-label="Close form"
        >
          <base-icon :name="ICON_CLOSE" class="close-button__svg"></base-icon>
        </button>
        <h1 class="form__heading">
          Creative Project? Let&rsquo;s have a productive talk
        </h1>
        <div class="form__row">
          <input
            v-model="formValues.name"
            ref="name"
            type="text"
            name="name"
            placeholder="Name*"
            class="form__input base-input"
            aria-label="Name"
          />
          <input
            type="email"
            ref="email"
            v-model="formValues.email"
            name="email"
            placeholder="Email*"
            class="form__input base-input"
            aria-label="Email"
          />
        </div>
        <div class="form__row">
          <input
            v-model="formValues.phone"
            ref="phone"
            type="tel"
            name="tel"
            placeholder="Phone*"
            class="form__input base-input"
            aria-label="Phone"
          />
          <input
            type="text"
            v-model="formValues.subject"
            ref="subject"
            name="subject"
            placeholder="Subject*"
            class="form__input base-input"
            aria-label="Subject"
          />
        </div>
        <textarea
          placeholder="Hello i&rsquo;am interested in.."
          v-model="formValues.desc"
          name="desc"
          class="form__textarea base-textarea"
          aria-label="Decription"
        ></textarea>
        <base-navigation-button class="form__button" @click="submitForm"
          >Submit</base-navigation-button
        >
      </form>
      <div v-else class="message">
        <base-text>{{ message }}</base-text>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.form-container {
  background-color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  overflow: auto;
  top: 0px;
  bottom: 0px;
  z-index: 99;
  width: 100%;
}

.form {
  margin-top: 200px;
  max-width: 900px;
  width: 100%;
  padding: 20px;
  height: fit-content;
  margin-bottom: 100px;
  &__heading {
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10%;
    @include text-styles(
      $color-text-default,
      $font-family-heading,
      $font-size-heading-xxlarge,
      125%,
      1px
    );
  }
  &__row {
    display: flex;
    gap: 15px;
  }
  &__button {
    margin: 40px auto;
    min-width: 200px;
    justify-content: space-between;
  }
  @media (max-width: 620px) {
    margin-top: 100px;
    &__row {
      flex-direction: column;
    }
  }
}

.close-button {
  margin-left: 95%;
  border: none;
  background: none;
  &__svg {
    width: 20px;
  }
}

.message {
  margin: 20% auto;
  width: 300px;
  padding: 50px;
  display: block;
  text-align: center;
}
</style>
