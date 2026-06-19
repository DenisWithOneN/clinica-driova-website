<script setup>
import { ref, onMounted } from 'vue';

const timelineEvents = ref([
    {
        year: '2023',
        status: 'Început',
        description: [
            'A luat naștere Clinica Dr. Iova, fondată de Dr. Iova Sorin, în urma unei experiențe vaste în domeniul psihiatriei acumulată de-a lungul anilor.',
            'A pornit cu o echipă formată din 2 medici psihiatri și 1 psiholog, din dorința de a ajuta pacienții într-un spațiu modern adaptat nevoilor și confortului acestora.'
        ],
        isCurrent: false,
    },
    {
        year: '2024',
        status: 'Evoluție',
        description: [
            'Clinica s-a dezvoltat rapid, cooptând alt medic psihiatru format de Dr. Iova, răspunzând nevoii tot mai mari pentru servicii de psihiatrie de calitate.'
        ],
        isCurrent: false,
    },
    {
        year: '2025',
        status: 'Extindere',
        description: [
            'Ne-am mutat în locația actuală și am extins serviciile clinicii.',
            'Echipa noastră a ajuns la 4 medici psihiatri, 1 medic neurolog și 2 psihologi.'
        ],
        isCurrent: false,
    },
    {
        year: '2026',
        status: 'Prezent',
        description: [
            'Clinica continuă să crească: am introdus psihiatria pediatrică și am ajuns la o echipă formată din 5 psihiatri, 2 psihologi și 1 neurolog.',
            'În prezent, oferim îngrijire de calitate pentru peste 500 de pacienți în fiecare lună.'
        ],
        isCurrent: true,
    },
    {
        year: '2027+',
        status: 'Viitor',
        description: [
            'Privim spre viitor cu încredere, cu obiectivul de a extinde clinica și către alte specialități medicale, păstrând aceleași standarde ridicate de profesionalism, empatie și calitate a actului medical.'
        ],
        isCurrent: false,
    }
]);

const timelineScrollContainer = ref(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(true);

const checkScrollArrows = () => {
    if (timelineScrollContainer.value) {
        const { scrollLeft, scrollWidth, clientWidth } = timelineScrollContainer.value;
        showLeftArrow.value = scrollLeft > 0;
        showRightArrow.value = scrollLeft + clientWidth < scrollWidth - 1;
    }
};

const handleScroll = () => {
    checkScrollArrows();
};

const scrollAmount = 300;

const scrollLeft = () => {
    if (timelineScrollContainer.value) {
        timelineScrollContainer.value.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
};

const scrollRight = () => {
    if (timelineScrollContainer.value) {
        timelineScrollContainer.value.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
};

const centerOnCurrentYear = () => {
    if (timelineScrollContainer.value) {
        const currentYearIndex = timelineEvents.value.findIndex(event => event.isCurrent);
        if (currentYearIndex !== -1) {
            const currentYearElement = timelineScrollContainer.value.children[currentYearIndex];
            if (currentYearElement) {
                const containerWidth = timelineScrollContainer.value.clientWidth;
                const elementWidth = currentYearElement.clientWidth;
                const scrollLeftPos = currentYearElement.offsetLeft - (containerWidth / 2) + (elementWidth / 2);

                timelineScrollContainer.value.scrollTo({
                    left: scrollLeftPos,
                    behavior: 'smooth'
                });
            }
        }
    }
};

onMounted(() => {
    checkScrollArrows();
    window.addEventListener('resize', checkScrollArrows);

    setTimeout(() => {
        centerOnCurrentYear();
    }, 100);

    if (timelineScrollContainer.value) {
        const observer = new ResizeObserver(() => {
            checkScrollArrows();
        });
        observer.observe(timelineScrollContainer.value);
    }
});
</script>

<template>
    <section class="bg-white mt-36">
        <div class="container mx-auto px-6 lg:px-16 relative">
            <div class="flex flex-col items-center mb-12">
                <p class="text-brand-primary font-semibold uppercase tracking-wider mb-2">CLINICA DR. IOVA</p>
                <h1 class="leading-tight mb-4 text-center">
                    Povestea noastră
                </h1>
                <p class="text-gray-700 text-center max-w-2xl">
                    De la înființare până în prezent, am parcurs un drum plin de dedicare și inovație în serviciul
                    sănătății.
                </p>
            </div>

            <div class="relative">
                <div ref="timelineScrollContainer"
                    class="flex overflow-x-scroll no-scrollbar py-6 px-2 snap-x snap-mandatory scroll-smooth"
                    @scroll="handleScroll">
                    <div v-for="(event, index) in timelineEvents" :key="index" :class="[
                        'flex-shrink-0 w-[280px] md:w-[320px] snap-center rounded-3xl shadow-md',
                        'transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing mr-6 last:mr-0 h-auto self-stretch',
                        event.isCurrent ? 'bg-brand-primary border-2 border-brand-primary text-white shadow-xl transform md:scale-105' : 'bg-gray-50 border border-gray-100 text-gray-800 hover:shadow-lg'
                    ]">
                        <div class="p-6 flex flex-col h-full">
                            <p :class="[
                                'mb-2 text-center text-lg font-medium',
                                event.isCurrent ? 'text-white' : 'text-gray-500'
                            ]">{{ event.year }}</p>

                            <div :class="[
                                'py-3 rounded-lg text-center mb-4',
                                event.isCurrent ? 'bg-white text-brand-primary' : 'bg-gray-200 text-gray-800'
                            ]">
                                <h3 class="text-lg">{{ event.status }}</h3>
                            </div>

                            <ul class="list-disc list-inside space-y-3 flex-grow">
                                <li v-for="(line, lineIndex) in event.description" :key="lineIndex" :class="[
                                    'text-sm leading-relaxed',
                                    event.isCurrent ? 'text-white/95' : 'text-gray-700'
                                ]">
                                    {{ line }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button v-show="showLeftArrow" @click="scrollLeft"
                    class="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-20 hidden md:block border border-gray-100">
                    <i class="bi bi-chevron-left text-brand-primary text-xl"></i>
                </button>
                <button v-show="showRightArrow" @click="scrollRight"
                    class="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-20 hidden md:block border border-gray-100">
                    <i class="bi bi-chevron-right text-brand-primary text-xl"></i>
                </button>
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