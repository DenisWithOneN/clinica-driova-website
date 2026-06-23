<script setup>
import { ref } from 'vue';

import PsihiatrieIcon from '@/assets/icons/specializare-psihiatrie.svg';
import NeurologieIcon from '@/assets/icons/specializare-neurologie.svg';

const specializations = ref([
    {
        title: 'Psihiatrie',
        description: 'Echilibru emoțional și sănătate mintală.',
        icon: PsihiatrieIcon,
        isBootstrap: false,
        backTitle: 'Despre Psihiatrie',
        backDescription: 'Psihiatria este specialitatea medicală care se ocupă cu diagnosticarea, tratarea și prevenția tulburărilor emoționale, mentale și de comportament.',
        flipped: false,
    },
    {
        title: 'Neurologie',
        description: 'Tratarea afecțiunilor sistemului nervos.',
        icon: NeurologieIcon,
        isBootstrap: false,
        backTitle: 'Despre Neurologie',
        backDescription: 'Neurologia este specialitatea medicală care se ocupă cu diagnosticarea și tratarea afecțiunilor sistemului nervos.',
        flipped: false,
    },
    {
        title: 'Psihiatrie Pediatrică',
        description: 'Sprijin emoțional pentru copii și adolescenți.',
        icon: 'bi bi-emoji-smile',
        isBootstrap: true,
        backTitle: 'Despre Psihiatrie Pediatrică',
        backDescription: 'Psihiatria pediatrică se ocupă cu evaluarea, diagnosticarea și tratamentul tulburărilor emoționale, comportamentale și de dezvoltare la copii și adolescenți.',
        flipped: false,
    },
    {
        title: 'Psihologie',
        description: 'Consiliere, autocunoaștere și dezvoltare personală.',
        icon: 'bi bi-chat-heart',
        isBootstrap: true,
        backTitle: 'Despre Psihologie',
        backDescription: 'Psihologia se ocupă cu evaluarea și înțelegerea emoțiilor, comportamentului și proceselor cognitive, oferind sprijin pentru sănătatea mintală și dezvoltarea personală.',
        flipped: false,
    }
]);
</script>

<template>
    <div class="mt-16 md:mt-20 lg:mt-24 relative text-white py-20 md:py-24 px-4 md:px-6 overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center
                    bg-[url('@/assets/homepage/cta-background-1.svg')] 
                    md:bg-[url('@/assets/homepage/cta-background-1.svg')]" aria-hidden="true"></div>

        <div class="relative z-10 container mx-auto flex flex-col items-center max-w-6xl">
            <p class="text-gray-100 uppercase tracking-wider mb-2">SPECIALIZĂRI</p>
            <h2 class="text-white leading-tight mb-10 text-center">
                Domeniile noastre de expertiză
            </h2>

            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 w-full">
                <div v-for="(card, index) in specializations" :key="index"
                    class="w-full h-24 sm:h-28 md:h-32 lg:h-64 perspective relative mx-auto max-w-full sm:max-w-none">

                    <div class="relative w-full h-full preserve-3d transition-transform duration-700"
                        :class="{ 'rotate-y-180': card.flipped }">

                        <div
                            class="absolute inset-0 backface-hidden bg-white rounded-2xl p-3 sm:p-4 md:p-4 lg:p-5 flex flex-row lg:flex-col items-center justify-start lg:justify-center text-left lg:text-center shadow-white shadow-sm overflow-hidden">
                            <div class="shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center mr-3 sm:mr-3 md:mr-3 lg:mr-0 lg:mb-3">
                                <i v-if="card.isBootstrap" :class="[card.icon, 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-brand-primary']"></i>
                                <img v-else :src="card.icon" alt="" class="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain" />
                            </div>

                            <div class="min-w-0 flex-1 pr-8 lg:pr-0 lg:flex lg:flex-col lg:items-center">
                                <h4 class="text-gray-800 mb-1 font-semibold text-base sm:text-base md:text-base lg:text-lg leading-tight">{{ card.title }}</h4>
                                <p class="text-gray-700 text-xs sm:text-xs md:text-sm lg:text-sm leading-snug">{{ card.description }}</p>
                            </div>

                            <button @click="card.flipped = !card.flipped"
                                class="absolute top-2 right-2 w-auto h-auto bg-white backdrop-blur-sm text-brand-primary rounded-3xl flex items-center justify-center hover:bg-white/50 transition">
                                <i class="bi bi-hand-index text-xl -rotate-45 hover:cursor-pointer"></i>
                            </button>
                        </div>

                        <div
                            class="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-3 sm:p-4 md:p-4 lg:p-5 flex flex-col items-start lg:items-center justify-center text-left lg:text-center shadow-white shadow-sm overflow-hidden">
                            <h4 class="text-gray-800 mb-2 font-semibold text-base sm:text-base md:text-base lg:text-lg leading-tight">{{ card.backTitle }}</h4>
                            <p class="text-gray-700 leading-relaxed text-xs sm:text-xs md:text-sm lg:text-sm">{{ card.backDescription }}</p>

                            <button @click="card.flipped = !card.flipped"
                                class="absolute top-2 right-2 w-auto h-auto bg-white backdrop-blur-sm text-brand-primary rounded-3xl flex items-center justify-center hover:bg-white/50 transition">
                                <i class="bi bi-hand-index-fill text-xl -rotate-45"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective {
    perspective: 1000px;
}

.preserve-3d {
    transform-style: preserve-3d;
}

.backface-hidden {
    backface-visibility: hidden;
}

.rotate-y-180 {
    transform: rotateY(180deg);
}
</style>