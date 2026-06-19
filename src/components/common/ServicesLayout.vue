<script setup>
import { ref } from 'vue';

const themeColor = '#5CA9AB';

const serviceCards = ref([
    {
        title: 'Consultații Psihiatrice',
        subtitle: 'Evaluare și tratament personalizat pentru sănătatea mintală.',
        color: '#FEF08A',
        icon: `<i class="bi bi-emoji-smile text-5xl"></i>`,
    },
    {
        title: 'Consultații Neurologice',
        subtitle: 'Diagnostic și tratament pentru afecțiuni neurologice.',
        color: '#A7F3D0',
        icon: `<i class="bi bi-file-earmark-medical text-5xl"></i>`,
    },
    {
        title: 'Psihoterapie',
        subtitle: 'Ședințe de consiliere cu psihologi și terapeuți acreditați.',
        color: '#FBCFE8',
        icon: `<i class="bi bi-chat-dots text-5xl"></i>`,
    },
    {
        title: 'Evaluări & Testări',
        subtitle: 'Testări psihologice și neurologice pentru diagnostic precis.',
        color: '#BFDBFE',
        icon: `<i class="bi bi-clipboard-check text-5xl"></i>`,
    },
]);
</script>

<template>
    <div class="p-4 sm:p-8">
        <div class="max-w-6xl mx-auto">
            <div class="text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden"
                :style="{ backgroundColor: themeColor }">
                <div class="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
                    <span class="font-black text-white/10" style="font-size: 18rem; line-height: 1;">Dr. Iova</span>
                </div>
                <div class="relative z-10">
                    <h1 class="text-center mb-8">
                        Clinica Dr. Iova
                    </h1>

                    <div class="relative flex justify-center items-center">
                        <div
                            class="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                            <span class="bg-white/30 rounded-full p-1.5">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                                </svg>
                            </span>
                            <span>Psihiatrie & Neurologie</span>
                        </div>

                        <div class="mx-4 sm:mx-8 flex-shrink-0">
                            <img src="@/assets/doctors/iova-sorin.png" alt="Doctor zâmbind"
                                class="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-64 object-cover rounded-full border-4 border-white shadow-lg">
                        </div>

                        <div
                            class="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                            <span class="bg-white/30 rounded-full p-1.5">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span>Abordare empatică</span>
                        </div>
                    </div>

                    <div class="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p class="md:w-1/3 text-center md:text-left text-white/90">
                            La Clinica Dr. Iova, oferim servicii personalizate de psihiatrie și neurologie, cu grijă
                            și
                            empatie pentru fiecare pacient.
                        </p>
                        <button
                            class="bg-white font-bold px-6 py-1 rounded-full flex items-center gap-4 transition-transform hover:scale-105"
                            :style="{ color: themeColor }">
                            Contactează-ne pentru o consultație
                            <span class="bg-gray-200 rounded-full p-1 px-2 flex items-center justify-center">
                                <i class="bi bi-telephone-fill text-xl"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Carduri -->
            <div class="mt-8 flex flex-col md:flex-row gap-6">
                <div v-for="card in serviceCards" :key="card.title" class="relative rounded-3xl p-6 flex flex-col h-64 shadow-md"
                    :style="{ backgroundColor: card.color }">
                    <div class="flex-grow">
                        <h3 class="text-gray-800">{{ card.title }}</h3>
                        <p class="text-gray-600 mt-1">{{ card.subtitle }}</p>
                    </div>
                    <div class="flex items-center justify-between absolute -bottom-6 left-0 w-full p-6">
                        <div class="w-20 h-20 flex items-center" v-html="card.icon"></div>
                        <RouterLink :to="{ name: 'team' }"
                            class="bg-gray-800 text-white rounded-full p-2 px-3 transition-transform hover:scale-110 flex items-center">
                            <i class="bi bi-arrow-right text-xl"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
