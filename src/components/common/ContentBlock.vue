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

const layoutClass = computed(() =>
    props.reverse ? 'flex md:flex-row-reverse' : 'flex md:flex-row'
);</script>

<template>
    <section class="mt-36 px-6">
        <div :class="`max-w-7xl mx-auto flex flex-col md:${layoutClass} gap-12 items-center`">
            <div>
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
                    class="px-4 py-1 bg-brand-primary text-xl text-white rounded hover:bg-white hover:text-brand-primary hover:border hover:border-brand-primary transition">
                    {{ showMore ? 'Mai puțin' : 'Mai mult' }}
                </button>
                <slot />
            </div>
            <img src="@/assets/about/about-hero.jpg" alt="Content image"
                class="rounded-3xl shadow-xl transition-transform duration-300 object-cover w-full h-[28rem]" />
        </div>
    </section>
</template>

<style scoped>
</style>