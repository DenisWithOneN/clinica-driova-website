<script setup>
import { ref } from 'vue';

const testimonials = ref([
    {
        name: 'S. I.',
        text: 'Recomand cu încredere! Dr. Iova, un medic dedicat meseriei sale, își desfășoară activitatea cu profesionalism și devotament față de fiecare pacient!'
    },
    {
        name: 'G. M.',
        text: 'Recomand aceasta clinica cu multă încredere, Dr. Iova și Macrea Sebastian m-au ajutat foarte mult prin toate serviciile lor; niște oameni excepționali! Doamnele asistente/secretare au fost drăguțe, amabile și înțelegătoare, iar toate acestea au făcut clinica perfectă, cu tot cu aranjamentul și aspectul ei! Vă mulțumesc pentru tot și mult succes în continuare!'
    },
    {
        name: 'V. T.',
        text: 'Personal prietenos, cabinet frumos și plăcut, servicii de calitate, cu multă răbdare.'
    },
]);

const hoveredIndex = ref(null);

const getReviewCardClass = (index) => {
    if (hoveredIndex.value === null) {
        return index === 0 ? 'bg-brand-tertiary text-white shadow-sm' : 'bg-brand-gray text-brand-black';
    }

    if (hoveredIndex.value === 0) {
        return index === 0 ? 'bg-brand-tertiary text-white shadow-sm' : 'bg-brand-gray text-brand-black';
    }

    return index === hoveredIndex.value
        ? 'bg-brand-tertiary text-white shadow-sm'
        : 'bg-brand-gray text-brand-black';
};
</script>

<template>
    <section class="mt-16 md:mt-20 lg:mt-24 bg-white px-6 py-16 md:py-20">
        <div class="container mx-auto max-w-7xl mb-10">
            <p class="eyebrow mb-2">TESTIMONIALE</p>
            <div class="flex flex-col lg:flex-row lg:items-start">
                <h2 class="text-gray-800 leading-tight mb-2 lg:mb-0 md:whitespace-nowrap">
                    Ce spun pacienții noștri?
                </h2>
                <div class="pl-0 lg:pl-52 flex-1">
                    <span class="text-gray-700">
                        Cuvintele pacienților noștri sunt cea mai bună dovadă a dedicării, profesionalismului, empatiei
                        și grijii noastre față de fiecare pacient:
                    </span>
                </div>
            </div>
        </div>

        <div class="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div class="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left h-full">
                <div class="w-full grid grid-rows-3 gap-5">
                    <div v-for="(testimonial, index) in testimonials" :key="index" :class="[
                        'p-6 rounded-3xl flex flex-col justify-center text-left h-full transition-colors duration-300 ease-in-out',
                        getReviewCardClass(index)
                    ]" @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null">
                        <div class="flex items-center w-full mb-3">
                            <span
                                class="flex items-center justify-center rounded-full w-12 h-12 bg-brand-primary mr-3 transition-all duration-300 ease-in-out">
                                <i class="bi bi-person-fill text-3xl text-brand-white transition-colors duration-300 ease-in-out"></i>
                            </span>
                            <h3 class="transition-colors duration-300 ease-in-out" :class="hoveredIndex === null
                                ? index === 0 ? 'text-brand-white' : 'text-brand-black'
                                : (hoveredIndex === index || (hoveredIndex === 0 && index === 0)) ? 'text-brand-white' : 'text-brand-black'">
                                {{ testimonial.name }}
                            </h3>
                        </div>
                        <p class="leading-relaxed transition-colors duration-300 ease-in-out" :class="hoveredIndex === null
                            ? index === 0 ? 'text-brand-white' : 'text-brand-black'
                            : (hoveredIndex === index || (hoveredIndex === 0 && index === 0)) ? 'text-brand-white' : 'text-brand-black'">
                            {{ testimonial.text }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 flex-col justify-center items-end flex">
                <img src="@/assets/gallery/Image4.jpg" alt="Interior Clinică"
                    class="rounded-3xl w-auto h-full object-cover" />
            </div>
        </div>
    </section>

    <section>
        <div
            class="container mx-auto max-w-7xl bg-brand-tertiary rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center text-white">
            <h3 class="text-brand-white">Ai nevoie de o programare?</h3>
            <RouterLink :to="{ name: 'contact' }"
                class="px-4 py-1 rounded-md text-brand-tertiary border-2 border-brand-white bg-brand-white hover:text-brand-white   hover:bg-brand-blue hover:bg-brand-tertiary hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                Programează-te
            </RouterLink>
        </div>
    </section>
</template>

<style scoped></style>

```