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
    <div class="relative mt-36 bg-blue-950 text-white py-20 px-4 md:px-6 overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center
                    bg-[url('/src/assets/homepage/cta-background-1.svg')] 
                    md:bg-[url('/src/assets/homepage/cta-background-1.svg')]" aria-hidden="true"></div>

        <div class="relative z-10 container mx-auto flex flex-col items-center max-w-6xl">
            <p class="text-gray-100 uppercase tracking-wider mb-2">SPECIALIZĂRI</p>
            <h2 class="text-white leading-tight mb-10 text-center">
                Domeniile noastre de expertiză
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full">
                <div v-for="(card, index) in specializations" :key="index"
                    class="w-full h-[22rem] perspective relative mx-auto max-w-[16rem] md:max-w-none">

                    <div class="relative w-full h-full preserve-3d transition-transform duration-700"
                        :class="{ 'rotate-y-180': card.flipped }">

                        <div
                            class="absolute inset-0 backface-hidden bg-white rounded-3xl p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-white shadow-sm ">

                            <i v-if="card.isBootstrap" :class="[card.icon, 'text-5xl text-brand-primary mb-6']"></i>
                            <img v-else :src="card.icon" alt="" class="w-16 h-16 object-contain mb-4" />

                            <h4 class="text-gray-800 mb-2 font-semibold text-lg">{{ card.title }}</h4>
                            <p class="text-gray-700 text-sm leading-snug">{{ card.description }}</p>

                            <button @click="card.flipped = !card.flipped"
                                class="absolute top-2 right-2 w-auto h-auto bg-white backdrop-blur-sm text-brand-primary rounded-3xl flex items-center justify-center hover:bg-white/50 transition">
                                <i class="bi bi-hand-index text-2xl -rotate-45 hover:cursor-pointer "></i>
                            </button>
                        </div>

                        <div
                            class="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-3xl p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-white shadow-sm">
                            <h4 class="text-gray-800 mb-3 font-semibold text-lg">{{ card.backTitle }}</h4>
                            <p class="text-gray-700 leading-relaxed text-xs lg:text-sm">{{ card.backDescription }}</p>

                            <button @click="card.flipped = !card.flipped"
                                class="absolute top-2 right-2 w-auto h-auto bg-white backdrop-blur-sm text-brand-primary rounded-3xl flex items-center justify-center hover:bg-white/50 transition">
                                <i class="bi bi-hand-index-fill text-2xl -rotate-45"></i>
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