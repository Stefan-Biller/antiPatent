<script setup lang="ts">
import { ref } from "vue";
import ClaimDetails from "./components/ClaimDetails.vue";
import ItemList from "./components/ItemList.vue";
import ModalSingleAction from "./components/ModalSingleAction.vue";
import content from "./modules/content";
import { switchLanguage, type Language } from "./modules/language";
import { LINKS } from "./globals";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

function setModal(title: string, text: string) {
  modalTitle.value = title;
  modalContent.value = text;
  showModal.value = true;
}
const modalTitle = ref("Re:");
const modalContent = ref("");
const showModal = ref(false);

const defaultLang: Language = (navigator.language ?? "en")
  .toLowerCase()
  .startsWith("de")
  ? "de"
  : "en";
switchLanguage(defaultLang);
</script>

<template>
  <!-- container is full width of screen max width 1280 pixels-->
  <div id="app" class="p-8 w-full max-w-7xl align-center mx-auto">
    <LanguageSwitcher />

    <!-- header with title, subtitle and texts -->
    <div id="header" class="pt-12 max-w-4xl">
      <h2 class="text-3xl font-bold underline underline-offset-4 pb-12">
        {{ content.title }}
      </h2>

      <p class="text-lg italic">
        {{ content.subtitle }}
        <br />
        <a :href="LINKS.patentPDF">Original Patent: DPMA-Website</a>
      </p>

      <div class="text-m py-8">
        <p v-for="item in content.texts" class="pb-6">
          {{ item }}
        </p>
      </div>
    </div>

    <div
      id="claim-container"
      class="flex flex-col md:flex-row gap-16 max-h-[75vh] overflow-hidden"
    >
      <ItemList
        id="claims"
        title="Claims"
        subtitle="List of claims made in the patent"
        class="flex-1 bg-gray-50"
      >
        <ClaimDetails
          v-for="{
            id,
            details: { title, summary, originalText },
          } in content.claims"
          :id
          :key="id"
          :title="title"
          :summary="summary"
          :originalText="originalText"
          @show-details="setModal"
        >
        </ClaimDetails>
      </ItemList>

      <ItemList id="counters" class="flex-1 bg-gray-50">
        <div
          v-for="{ id, details, ...data } in content.counterClaims"
          :key="id"
        >
          <ClaimDetails
            :id
            :title="details.title"
            :summary="details.summary"
            :original-text="details.originalText"
          />
          {{ data.date }} {{ data.author }} {{ data.link }}
          {{ data.referencesClaims }}
        </div>
      </ItemList>
    </div>

    <p class="text-lg">CallToAction // TODO</p>
    <p class="text-lg">Contact Information // TODO</p>

    <!-- overlay to show some text details -->
    <ModalSingleAction
      id="modal"
      :title="modalTitle"
      :content="modalContent"
      :active="showModal"
      @close="showModal = false"
    />
  </div>
</template>
