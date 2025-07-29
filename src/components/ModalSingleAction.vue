<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps<{
  title: string;
  content: string;
  active: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="active">
      <Dialog class="relative z-10" @close="emit('close')">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
              >
                <div class="pb-8 px-4">
                  <!-- close button should be in the top right corner -->
                  <div
                    class="absolute top-0 right-0 flex items-center justify-center"
                  >
                    <div>
                      <button
                        type="button"
                        class="inline-flex w-12 justify-center rounded-md px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        @click="emit('close')"
                      >
                        ✖
                      </button>
                    </div>
                  </div>

                  <div class="text-center sm:mt-5">
                    <!-- title and dot div should overlap, title should be centered on dot-->
                    <div id="header" class="p-8">
                      <div
                        class="absolute top-8 left-0 right-0 flex justify-center"
                      >
                        <div
                          id="dot"
                          class="flex items-center mx-auto size-12 justify-center rounded-full bg-gray-100"
                        ></div>
                      </div>

                      <div
                        class="absolute top-10.5 left-0 right-0 flex items-center justify-center underline"
                      >
                        <DialogTitle
                          as="h3"
                          class="text-base font-semibold text-gray-900"
                          >{{ title }}</DialogTitle
                        >
                      </div>
                    </div>
                  </div>

                  <!-- content -->
                  <div
                    class="whitespace-pre-line text-left text-sm text-gray-500"
                  >
                    {{ content }}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
