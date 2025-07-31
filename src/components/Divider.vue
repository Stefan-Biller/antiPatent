<template>
    <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-left">
            <span class="bg-gray-50 not-odd:text-sm pr-3">
                <slot> </slot>
            </span>
        </div>
    </div>
</template>
