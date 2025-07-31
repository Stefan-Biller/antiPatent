<script setup lang="ts">
import content from "./modules/content";
import { LINKS } from "./globals";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import { setDefaultLanguageFromBrowserSettings } from "./modules/language";
import ClaimsAndOppositions from "./components/ClaimsAndOppositions.vue";

setDefaultLanguageFromBrowserSettings(navigator);
</script>

<template>
    <!-- container is full width of screen max width 1280 pixels-->
    <div id="app" class="p-8 w-full max-w-8xl align-center mx-auto">
        <LanguageSwitcher />

        <!-- header with title, subtitle -->
        <div id="header" class="pt-12 max-w-4xl pb-16">
            <h2
                class="text-6xl font-extralight underline underline-offset-4 pb-8 undeline decoration-1"
            >
                {{ content.title }}
            </h2>

            <p class="text-m italic">
                {{ content.subtitle }}
                <br />
                <a :href="LINKS.patentPDF">{{ content.buttonTexts.originalPatentLink }}</a>
            </p>
        </div>

        <!-- additional information -->
        <div class="max-w-3xl pb-6">
            <div class="text-m pb-6 space-y-4">
                <p>{{ content.texts.intro1 }}</p>
                <p>{{ content.texts.intro2 }}</p>
            </div>
        </div>

        <!-- add sources to opposition -->
        <div class="pb-16">
            <p>{{ content.texts.intro3 }}</p>

            <br />
            <div class="text-xs decoration-0">
                <a :href="LINKS.github">
                    {{ `${content.buttonTexts.addSourcesViaGithub}` }}
                </a>
                <br />
                <a :href="'mailto:' + LINKS.email1 + LINKS.email2 + '?subject=Hello!'">
                    {{ content.buttonTexts.contactByMail }}
                </a>
                <br />
                <a href="www.3dup.app/impressum"> Impressum </a>
                <br />
                <p class="text-xs">{{ content.texts.translationNotice }}</p>
            </div>
        </div>

        <!-- main content area with claims and counterclaims -->
        <div class="">
            <ClaimsAndOppositions />
        </div>
    </div>
</template>
