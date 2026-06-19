<script setup>
import { ref, onMounted } from 'vue';

import adrianamaties from '@/assets/doctors/adriana-maties.png';
import theodornicolau from '@/assets/doctors/theodor-nicolau.png';
// import DorinaPetris from '@/assets/doctors/Dorina-Petris.png';
import roxanasamuila from '@/assets/doctors/roxana-samuila.png';
import mihaelacaba from '@/assets/doctors/mihaela-caba.png';
// import BiancaGliga from '@/assets/doctors/Bianca-Gliga.png';
import soriniova from '@/assets/doctors/sorin-iova.png';
import sebastianmacrea from '@/assets/doctors/sebastian-macrea.png';
import titusmoga from '@/assets/doctors/titus-moga.png';

const doctors = ref([
    { title: 'Sef lucr. Dr.', name: 'Sorin Claudiu Iova', specialty: 'Medic primar psihiatru', image: soriniova, hasImage: true },
    { title: 'Dr.', name: 'Sebastian Liviu Macrea', specialty: 'Medic specialist psihiatru', image: sebastianmacrea, hasImage: true },
    { title: 'As. Univ. Dr.', name: 'Titus Moga', specialty: 'Medic specialist neurolog', image: titusmoga, hasImage: true },
    { title: 'Dr.', name: 'Adriana Maties', specialty: 'Medic specialist psihiatru', image: adrianamaties, hasImage: true },
    { title: 'Dr.', name: 'Theodor Nicolau', specialty: 'Medic specialist psihiatru', image: theodornicolau, hasImage: true },
    { title: 'Dr.', name: 'Dorina Petris', specialty: 'Medic primar psihiatru', image: null, hasImage: false },
    { title: 'Dr.', name: 'Simona Zancu', specialty: 'Medic primar psihiatru', image: null, hasImage: false },
    { title: 'Dr.', name: 'Roxana Samuila', specialty: 'Medic specialist psihiatrie pediatrică', image: roxanasamuila, hasImage: true },
    { title: 'Psih.', name: 'Mihaela Caba', specialty: 'Psiholog clinician, logoped', image: mihaelacaba, hasImage: true },
    { title: 'Psih.', name: 'Bianca Gliga', specialty: 'Psiholog clinician, psihoterapeut, logoped', image: null, hasImage: false },
]);

const formatName = (fullName) => {
    const parts = fullName.split(' ');
    if (parts.length > 2) return `${parts[0]} ${parts[parts.length - 1]}`;
    return fullName;
};

const scrollContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);

const updateArrows = () => {
    if (!scrollContainer.value) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
    canScrollLeft.value = scrollLeft > 0;
    canScrollRight.value = scrollLeft + clientWidth < scrollWidth - 5;
};

const scroll = (direction) => {
    scrollContainer.value.scrollBy({ left: direction * 300, behavior: 'smooth' });
};

onMounted(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
});
</script>

<template>
    <section class="bg-white py-20 mt-16">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <p class="text-brand-primary uppercase tracking-wider font-semibold mb-2">Echipă</p>
                <h2 class="text-3xl md:text-4xl font-bold">Echipa noastră de specialiști</h2>
            </div>

            <div class="relative group">
                <button v-show="canScrollLeft" @click="scroll(-1)"
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
                    <i class="bi bi-chevron-left text-xl"></i>
                </button>

                <div ref="scrollContainer" @scroll="updateArrows"
                    class="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
                    <div v-for="(doctor, i) in doctors" :key="i" class="shrink-0 w-[280px] snap-center">
                        <div class="p-4 flex flex-col items-center text-center">
                             <p class="text-gray-500 text-sm">{{ doctor.title }}</p>
                            <h4 class="text-xl font-bold">{{ formatName(doctor.name) }}</h4>
                            <div
                                class="w-64 h-80 rounded-3xl overflow-hidden flex flex-col  items-center justify-center relative">
                                <img v-if="doctor.hasImage" :src="doctor.image" :alt="doctor.name"
                                    class="w-full h-full object-cover" />
                                <div v-else class="text-center p-6 text-gray-400">
                                    <i class="bi bi-person-badge text-5xl block mb-2"></i>
                                    <span class="font-medium">Coming Soon</span>
                                </div>
                                <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white via-white/80 to-transparent"></div>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>

                <button v-show="canScrollRight" @click="scroll(1)"
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
                    <i class="bi bi-chevron-right text-xl"></i>
                </button>
            </div>

            <div class="text-center">
                <RouterLink :to="{ name: 'team' }"
                    class="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition">
                    Vezi toți medicii
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>