<script setup>
import { computed } from 'vue';

const props = defineProps({
    variantIndex: {
        type: Number,
        default: 0 
    }
});

const variants = [
    {
        title: 'Programează o consultație',
        text: 'Fă primul pas către sănătatea ta. Alege un interval orar care ți se potrivește și lasă-ne să ne ocupăm de restul!'
    },
    {
        title: 'Suntem aici pentru tine',
        text: 'Contactează-ne și găsim împreună soluția potrivită. Indiferent de întrebări sau nelămuriri, echipa noastră îți stă la dispoziție.'
    },
    {
        title: 'Ai grijă de sănătatea ta',
        text: 'Programează-te pentru o evaluare personalizată și obține o imagine clară asupra stării tale de sănătate din partea unui specialist.'
    }
];

const currentVariant = computed(() => {
    return variants[props.variantIndex] || variants[0];
});
</script>

<template>
    <div class="relative mt-36 bg-blue-950 text-white py-20 px-6 overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center
                    bg-[url('@/assets/homepage/cta-background-1.svg')] 
                    md:bg-[url('@/assets/homepage/cta-background-1.svg')]" aria-hidden="true"></div>

        <div class="relative z-10 container mx-auto flex flex-col items-center">

            <h2 class="text-white leading-tight mb-4 text-center">
                {{ currentVariant.title }}
            </h2>

            <p class="w-full max-w-2xl text-center text-gray-100 mb-6 line-clamp-2 h-12 leading-6">
                {{ currentVariant.text }}
            </p>

            <RouterLink :to="{ name: 'contact' }"
                class="bg-white text-xl text-brand-primary font-semibold px-5 py-2 rounded hover:bg-brand-primary hover:text-white hover:cursor-pointer transition-all z-20">
                Programează-te
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>