<script setup lang="ts"></script>

<template>
  <div
    class="flex-1 max-h-[75vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
  >
    <!-- slot for items-->
    <slot></slot>
  </div>
</template>
