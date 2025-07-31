<script setup lang="ts">
import {
  switchLanguage,
  LANGUAGE_STRING_ICONS,
  type Language,
} from "../modules/language";
const options = Object.entries(LANGUAGE_STRING_ICONS) as [Language, string][];
</script>

<template>
  <div class="space-x-2">
    <button v-for="[lang, icon] in options" @click="() => switchLanguage(lang)">
      {{ icon }}
    </button>
  </div>
</template>
