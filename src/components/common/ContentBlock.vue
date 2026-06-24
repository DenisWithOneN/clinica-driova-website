<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    reverse: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    moreText: {
        type: String,
        default: '',
    },
});

const showMore = ref(false);

// const layoutClass = computed(() =>
//     props.reverse ? 'flex md:flex-row-reverse' : 'flex md:flex-row'
// );</script>

<template>
    <section class="container mx-auto mt-36 px-4 sm:px-6">
        <div :class="[
            'max-w-7xl mx-auto flex flex-col gap-10 items-center text-center lg:text-left lg:flex-row lg:items-center lg:gap-16',
            props.reverse ? 'lg:flex-row-reverse' : ''
        ]">
            <div class="w-full lg:w-[55%]">
                <h2 class="mb-4">
                    {{ title }}
                </h2>
                <p class="mb-4 leading-relaxed text-gray-700">
                    {{ description }}
                </p>
                <p v-if="showMore && moreText" class="mb-4 leading-relaxed text-gray-700">
                    {{ moreText }}
                </p>
                <button v-if="moreText" @click="showMore = !showMore"
                    class="px-4 py-2 rounded-md text-white bg-brand-primary hover:bg-brand-tertiary hover:text-white hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                    {{ showMore ? 'Mai puțin' : 'Mai mult' }}
                </button>
                <slot />
            </div>
            <div class="w-full lg:w-[45%] flex justify-center lg:justify-end">
                <img src="@/assets/about/about-hero.jpg" alt="Content image"
                    class="rounded-3xl shadow-xl transition-transform duration-300 object-cover w-full max-w-[32rem] h-[20rem] sm:h-[24rem] lg:h-[24rem] xl:h-[28rem]" />
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>