<script setup lang="ts">
import { ref } from "vue";
import ClaimDetails from "./components/ClaimDetails.vue";
import ItemList from "./components/ItemList.vue";
import ModalSingleAction from "./components/ModalSingleAction.vue";
import content from "./modules/content";
import { LINKS, MAX_AUTHOR_LENGTH } from "./globals";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import { setDefaultLanguageFromBrowserSettings } from "./modules/language";
import { truncateText } from "./modules/utility";

setDefaultLanguageFromBrowserSettings(navigator);

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
        .filter(({ referencesClaims }) => referencesClaims.includes(claimId))
        .map(({ id }) => id);
    abbreviatedCounterClaims.value.push(...ids);
}

function toggleAbbreviate(counterClaimId: number) {
    if (!abbreviatedCounterClaims.value.includes(counterClaimId)) return;
    abbreviatedCounterClaims.value = abbreviatedCounterClaims.value.filter(
        (i) => i !== counterClaimId
    );
}

function formatCounterClaimData(
    data: {
        date: string;
        author: string;
        referencesClaims: number[];
    },
    opposeString: string
) {
    const dateStr = data.date || "Unknown Date";
    const authorStr = truncateText(data.author, MAX_AUTHOR_LENGTH);
    const referenceStr = data.referencesClaims.join(", ");
    return `${dateStr} | ${authorStr}  |  ${opposeString}: ${referenceStr}`;
}
</script>

<template>
    <!-- container is full width of screen max width 1280 pixels-->
    <div id="app" class="p-8 w-full max-w-7xl align-center mx-auto">
        <LanguageSwitcher />

        <!-- header with title, subtitle -->
        <div id="header" class="pt-12 max-w-4xl pb-16">
            <h2 class="text-3xl font-bold underline underline-offset-4 pb-8">
                {{ content.title }}
            </h2>

            <p class="text-m italic">
                {{ content.subtitle }}
                <br />
                <a :href="LINKS.patentPDF">{{ content.buttonTexts.originalPatentLink }}</a>
            </p>
        </div>

        <!-- additional information -->
        <div class="max-w-4xl pb-16">
            <div class="text-m pb-16 space-y-4">
                <p>{{ content.texts.intro1 }}</p>
                <p>{{ content.texts.intro2 }}</p>
            </div>

            <div class="text-m italic">
                <p>{{ content.texts.intro3 }}</p>
                {{ content.texts.summaryTitle }}<br />
                {{ content.texts.translationNotice }}
            </div>
        </div>

        <!-- main content area with claims and counterclaims -->

        <div
            id="claim-container"
            class="flex flex-col md:flex-row gap-16 max-h-[75vh] overflow-hidden"
        >
            <!-- list of claims -->
            <ItemList
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
            </ItemList>

            <ItemList id="counters" class="p-4 bg-gray-50 border-1 border-gray-200">
                <ClaimDetails
                    v-for="{ id, title, summary, ...data } in content.counterClaims"
                    :key="id"
                    :id
                    :title="title"
                    :summary="summary"
                    :abbreviate="abbreviatedCounterClaims.includes(id)"
                    @click="toggleAbbreviate(id)"
                >
                    <div class="text-xs">
                        {{ formatCounterClaimData(data, content.snippets.opposes) }}
                    </div>
                    <a class="text-xs" v-if="data.link" :href="data.link">{{ data.link }}</a>
                </ClaimDetails>
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
