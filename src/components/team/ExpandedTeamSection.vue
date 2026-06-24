<script setup>
import { ref, computed } from 'vue'
import DoctorDetails from './DoctorDetails.vue'

import sorinIova from '@/assets/doctors/sorin-iova.png'
import sebastianMacrea from '@/assets/doctors/sebastian-macrea.png'
import titusMoga from '@/assets/doctors/titus-moga.png'
import adrianaMaties from '@/assets/doctors/adriana-maties.png';
import theodorNicolau from '@/assets/doctors/theodor-nicolau.png';
import roxanaSamuila from '@/assets/doctors/roxana-samuila.png';
import mihaelaCaba from '@/assets/doctors/mihaela-caba.png';

const doctors = ref([
    { id: 1, title: 'Șef lucr. Dr.', name: 'Iova Claudiu Sorin', specialty: 'Medic primar psihiatru', type: 'Medic', bio: 'Coordonatorul clinicii, cu experiență de peste 20 de ani în psihiatrie clinică și cercetare.', image: sorinIova, hasImage: true },
    { id: 2, title: 'Dr.', name: 'Macrea Sebastian Liviu', specialty: 'Medic specialist psihiatru', type: 'Medic', bio: 'Specializat în tulburări afective și intervenții moderne adaptate fiecărui pacient.', image: sebastianMacrea, hasImage: true },
    { id: 3, title: 'As. Univ. Dr.', name: 'Moga Titus', specialty: 'Medic specialist neurolog', type: 'Medic', bio: 'Interesat de neurologie clinică și cercetare interdisciplinară în neuroștiințe.', image: titusMoga, hasImage: true },
    { id: 4, title: 'Dr.', name: 'Adriana Maties', specialty: 'Medic specialist psihiatru', type: 'Medic', bio: 'Medic specialist psihiatru dedicat sănătății mintale.', image: adrianaMaties, hasImage: true },
    { id: 5, title: 'Dr.', name: 'Theodor Nicolau', specialty: 'Medic specialist psihiatru', type: 'Medic', bio: 'Medic specialist psihiatru axat pe intervenții personalizate.', image: theodorNicolau, hasImage: true },
    { id: 6, title: 'Dr.', name: 'Dorina Petris', specialty: 'Medic primar psihiatru', type: 'Medic', bio: 'Medic primar psihiatru cu experiență în diagnostic și tratament complex.', image: null, hasImage: false },
    { id: 7, title: 'Dr.', name: 'Roxana Samuila', specialty: 'Medic specialist psihiatrie pediatrică', type: 'Medic', bio: 'Specializată în evaluarea și tratamentul tulburărilor la copii și adolescenți.', image: roxanaSamuila, hasImage: true },
    { id: 8, title: 'Psih.', name: 'Mihaela Caba', specialty: 'Psiholog clinician, logoped', type: 'Psiholog', bio: 'Psiholog clinician cu expertiză în logopedie.', image: mihaelaCaba, hasImage: true },
    { id: 9, title: 'Psih.', name: 'Bianca Gliga', specialty: 'Psiholog clinician, psihoterapeut, logoped', type: 'Psiholog', bio: 'Psiholog clinician dedicat consilierii și dezvoltării personale.', image: null, hasImage: false },
])

const selectedFilter = ref('Toți')
const selectedDoctor = ref(null)

const filteredDoctors = computed(() => {
    return selectedFilter.value === 'Toți'
        ? doctors.value
        : doctors.value.filter(d => d.type === selectedFilter.value)
})

const formatName = (fullName) => {
    const parts = fullName.split(' ');
    if (parts.length > 2) return `${parts[0]} ${parts[parts.length - 1]}`;
    return fullName;
};

function setFilter(option) {
    selectedFilter.value = option
    selectedDoctor.value = null
}

function openDoctor(doctor) {
    selectedDoctor.value = doctor
    document.getElementById('doctors-root')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function backToGrid() {
    selectedDoctor.value = null
}
</script>

<template>
    <section id="doctors-root" class="mt-36">
        <div class="container mx-auto px-6 lg:px-16">

            <div class="text-center mb-12 max-w-2xl mx-auto">
                <h1 class="text-4xl font-bold mb-4">
                    Echipa noastră de specialiști
                </h1>
                <p class="text-gray-600 text-lg">
                    Descoperă profesioniștii dedicați care îți sunt alături pentru sănătatea ta mentală și fizică.
                </p>
            </div>

            <div class="flex justify-center gap-4 mb-10 flex-wrap">
                <button v-for="option in ['Toți', 'Medic', 'Psiholog']" :key="option" type="button"
                    @click="setFilter(option)"
                    class="px-4 py-2 uppercase rounded-xl border text-base font-medium transition" :class="selectedFilter === option
                        ? 'bg-brand-primary text-white border-brand-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'">
                    {{ option }}
                </button>
            </div>

            <div v-if="!selectedDoctor" key="grid">
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div v-for="doctor in filteredDoctors" :key="doctor.id"
                        class="bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col overflow-hidden h-full">

                        <div
                            class="w-full bg-gray-100 flex items-center justify-center overflow-hidden md:h-64 lg:h-72 xl:h-80 2xl:h-96">
                            <img v-if="doctor.hasImage" :src="doctor.image" :alt="doctor.name"
                                class="w-full h-full object-cover" />
                            <div v-else class="text-center p-6 text-gray-400">
                                <i class="bi bi-person-badge text-6xl block mb-2"></i>
                                <span class="font-medium uppercase tracking-widest mt-2 block">Coming Soon</span>
                            </div>
                        </div>

                        <div class="p-6 flex flex-col grow">
                            <div class="grow">
                                <p class="text-sm text-gray-500 mb-1">{{ doctor.title }}</p>
                                <h3 class="text-xl font-semibold mb-1">{{ formatName(doctor.name) }}</h3>
                                <p class="text-brand-primary font-medium mb-3">{{ doctor.specialty }}</p>
                            </div>

                            <!-- <div class="mt-auto pt-4">
                                <button type="button" @click="openDoctor(doctor)"
                                    class="bg-brand-primary text-xl text-white px-4 py-2 rounded hover:bg-brand-primary/90 hover:cursor-pointer transition-all flex items-center justify-center w-full">
                                    Află mai multe
                                </button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div v-else key="details" class="transition">
                <DoctorDetails :doctor="selectedDoctor" @back="backToGrid" />
            </div>
        </div>
    </section>
</template>