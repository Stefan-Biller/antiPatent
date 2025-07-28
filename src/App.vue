<script setup lang="ts"></script>

<template>
  <h1 class="text-3xl font-bold underline">Header // TODO</h1>
  <p class="text-lg">Intro // TODO</p>

  <ItemList id="claims">
    <div
      v-for="item in ['Claim 1', 'Claim 2', 'Claim 3']"
      :key="item"
      class="p-4 bg-gray-100 rounded shadow"
    >
      {{ item }}
    </div>
  </ItemList>

  <ItemList id="counters">
    <div
      v-for="item in ['Counter 1', 'Counter 2', 'Counter 3']"
      :key="item"
      class="p-4 bg-gray-100 rounded shadow"
    >
      {{ item }}
    </div>
  </ItemList>
  <p class="text-lg">CallToAction // TODO</p>
  <p class="text-lg">Contact Information // TODO</p>
</template>
