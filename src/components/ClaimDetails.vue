<script setup lang="ts">
import { computed } from "vue";
import Divider from "./Divider.vue";
import { MAX_STRLENGTH } from "../globals";
import { truncateText } from "../modules/utility";

const props = withDefaults(
    defineProps<{
        title: string;
        summary: string;
        abbreviate?: boolean;
    }>(),
    {
        abbreviate: false,
    }
);

const shortTitle = computed(() => truncateText(props.title, MAX_STRLENGTH.title));
</script>

<template>
    <div :class="props.abbreviate ? 'text-gray-300' : 'text-black pb-4'">
        <Divider class="mt-2 font-medium" :title="props.title">
            {{ shortTitle }}
        </Divider>
        <slot name="bibliography"></slot>

        <!-- content -->
        <div v-show="!props.abbreviate">
            <p class="pt-2">{{ summary }}</p>
            <slot> </slot>
        </div>
    </div>
</template>
