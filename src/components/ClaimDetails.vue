<script setup lang="ts">
import { computed } from "vue";
import Divider from "./Divider.vue";
import language from "../modules/language";

const { title, summary, originalText } = defineProps<{
  id: number;
  title: string;
  originalText: string;
  summary: string;
}>();

const emit = defineEmits<{
  (e: "showDetails", title: string, text: string): void;
  (e: "showCounterClaims", id: number): void;
}>();

const showDetailButtonText = computed(() => {
  return language.value === "de"
    ? "Originaltext anzeigen"
    : "Show original text";
});

const showCounterClaimsButtonText = computed(() => {
  return language.value === "de"
    ? "Gegenansprüche anzeigen"
    : "Show counter claims";
});
</script>

<template>
  <!-- content should be right aligned-->
  <div class="p-4 text-gray-600">
    <Divider class="mt-2">
      {{ title }}
    </Divider>

    <p class="pt-2">{{ summary }}</p>

    <!-- one botton left one button right-->
    <div class="flex justify-between mt-2 text-xs">
      <button class="" @click="emit('showDetails', title, originalText)">
        {{ showDetailButtonText }}
      </button>
      <button class="" @click="emit('showCounterClaims', id)">
        {{ showCounterClaimsButtonText }}
      </button>
    </div>
  </div>
</template>
