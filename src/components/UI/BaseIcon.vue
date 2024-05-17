<script setup>
import { defineProps } from "vue";
import { ICONS } from "/src/icons.js";
import { isIconTypeValid } from "/src/validators.js";

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: isIconTypeValid,
  },
});
</script>
<template>
  <img :src="ICONS[props.name]" alt="icon" />
</template>
