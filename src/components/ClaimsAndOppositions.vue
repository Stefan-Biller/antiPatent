<script setup lang="ts">
import { ref } from "vue";
import content from "../modules/content";
import { truncateText } from "../modules/utility";
import { MAX_STRLENGTH } from "../globals";
import ModalSingleAction from "./ModalSingleAction.vue";
import ClaimDetails from "./ClaimDetails.vue";

function setModal(title: string, originalText: string) {
    modalTitle.value = title;
    modalContent.value = originalText;
    showModal.value = true;
}
const modalTitle = ref("Re:");
const modalContent = ref("");
const showModal = ref(false);

const abbreviatedCounterClaims = ref([] as number[]);
let _lastTriggeredClaimId = -1;
function setCounterClaimFilter(claimId: number) {
    abbreviatedCounterClaims.value.length = 0;
    if (_lastTriggeredClaimId === claimId) {
        _lastTriggeredClaimId = -1;
        return;
    }
    const ids = content.value.counterClaims
        .filter(({ referencesClaims }) => !referencesClaims.includes(claimId))
        .map(({ id }) => id);
    abbreviatedCounterClaims.value.push(...ids);
}
function enforceUnabbreviated(counterClaimId: number) {
    if (!abbreviatedCounterClaims.value.includes(counterClaimId)) return;
    abbreviatedCounterClaims.value = abbreviatedCounterClaims.value.filter(
        (i) => i !== counterClaimId
    );
}

function formatCounterClaimData(data: {
    date: string;
    type: string;
    author: string;
    publication?: string;
    referencesClaims: number[];
}) {
    const dateStr = data.date || "Unknown Date";
    const authorStr = truncateText(data.author, MAX_STRLENGTH.author);
    const publicationStr = data.publication
        ? "  |  " + truncateText(data.publication, MAX_STRLENGTH.publication)
        : "";
    return `${data.type}  |  ${dateStr}  |  ${authorStr}${publicationStr}`;
}
</script>

<template>
    <div id="claim-container" class="flex flex-col md:flex-row gap-8">
        <!-- list of claims -->
        <div class="flex-1 min-w-0 w-1/2">
            <h3 class="text-5xl font-extralight pb-12">{{ content.snippets.claims }}</h3>

            <div class="max-h-[95vh] overflow-y-auto">
                <div
                    id="claims"
                    title="Claims"
                    subtitle="List of claims made in the patent"
                    class="pt-2 px-4 space-y-8 bg-gray-50 border-1 border-gray-200"
                >
                    <ClaimDetails
                        v-for="{ id, title, summary, originalText } in content.claims"
                        :key="id"
                        :title="title"
                        :summary="summary"
                    >
                        <!-- buttons for each claim -->
                        <div class="flex justify-between pt-2 text-xs">
                            <button @click="setModal(title, originalText)">
                                {{ content.buttonTexts.showOriginalClaim }}
                            </button>
                            <button @click="setCounterClaimFilter(id)">
                                {{ content.buttonTexts.showCounterClaims }}
                            </button>
                        </div>
                    </ClaimDetails>
                </div>
            </div>
        </div>

        <!-- list of counterclaims -->
        <div class="flex-1 min-w-0 w-1/2">
            <h3 class="text-5xl font-extralight pb-12">{{ content.snippets.opposes }}</h3>
            <div class="max-h-[95vh] overflow-y-auto">
                <div id="counters" class="space-y-6 py-2 px-4 bg-gray-50 border-1 border-gray-200">
                    <ClaimDetails
                        v-for="{ id, title, summary, ...data } in content.counterClaims"
                        :key="id"
                        :id
                        :title="id + ' - ' + title"
                        :summary="summary"
                        :abbreviate="abbreviatedCounterClaims.includes(id)"
                        @click="enforceUnabbreviated(id)"
                    >
                        <template v-slot:bibliography>
                            <div class="text-xs">
                                {{ formatCounterClaimData(data) }}
                            </div>
                        </template>

                        <div class="text-xs pt-2">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-xs"
                                v-if="data.link"
                                :href="data.link"
                                >{{ data.link }}</a
                            >
                            <br />
                            {{ `${content.snippets.opposes}: ${data.referencesClaims.join(", ")}` }}
                        </div>
                    </ClaimDetails>
                </div>
            </div>
        </div>

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
