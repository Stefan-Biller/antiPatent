<template>
    <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center">
            <span class="px-2 bg-gray-50 not-odd:text-sm">
                <slot> </slot>
            </span>
        </div>
    </div>
</template>
