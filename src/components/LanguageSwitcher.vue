<script setup lang="ts">
import { switchLanguage } from "../modules/language";
</script>

<template>
  <div class="space-x-2">
    <button
      v-for="[lang, icon] in ([['de', '🇩🇪'],['en', '🇬🇧'],['en', '🇺🇸']] as const)"
      @click="() => switchLanguage(lang)"
    >
      {{ icon }}
    </button>
  </div>
</template>
