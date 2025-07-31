<script setup lang="ts">
import { computed } from "vue";
import Divider from "./Divider.vue";
import { MAX_TITLE_LENGTH } from "../globals";
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

const shortTitle = computed(() => truncateText(props.title, MAX_TITLE_LENGTH));
</script>

<template>
    <div :class="props.abbreviate ? 'text-gray-300' : 'text-gray-800'">
        <Divider class="mt-2" :title="props.title">
            {{ shortTitle }}
        </Divider>

        <!-- content -->
        <div v-show="!props.abbreviate">
            <p class="pt-2">{{ summary }}</p>
            <slot> </slot>
        </div>
    </div>
</template>
