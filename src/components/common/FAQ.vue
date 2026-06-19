<script setup>
import { ref, computed } from 'vue'

const tabs = ['General', 'Programări', 'Contact']
const activeTab = ref(0)
const openIndex = ref(null)

const faqs = [
    {
        question: 'Ce servicii medicale oferă clinica?',
        answer:
            'Oferim consultații de psihiatrie, neurologie, precum și evaluări psihologice și testări specializate.',
        category: 'General',
    },
    {
        question: 'Cum pot face o programare?',
        answer:
            'Puteți face o programare telefonic la numărul nostru de contact sau folosind formularul online disponibil pe site.',
        category: 'Programări',
    },
    {
        question: 'Care este programul clinicii?',
        answer: 'Clinica este deschisă de luni până vineri, între orele 08:00 și 20:00.',
        category: 'General',
    },
    {
        question: 'Ce trebuie să aduc la prima consultație?',
        answer:
            'Este recomandat să aduceți actul de identitate, recomandările medicale anterioare și lista medicamentelor pe care le luați.',
        category: 'General',
    },
    {
        question: 'Pot anula sau modifica o programare?',
        answer:
            'Da, vă rugăm să ne contactați cu cel puțin 24 de ore înainte pentru a modifica sau anula programarea.',
        category: 'Programări',
    },
    {
        question: 'Care sunt metodele de plată acceptate?',
        answer:
            'Acceptăm plata cash, card bancar și plata prin transfer bancar pentru serviciile oferite.',
        category: 'Contact',
    },
    {
        question: 'Unde este situată clinica?',
        answer: 'Clinica Dr. Iova se află pe Strada Ceyrat nr. 31, bloc WR12, SC 1, Mun.Oradea, Jud.Bihor, 410660.',
        category: 'Contact',
    },
]

const filteredFaqs = computed(() =>
    faqs.filter((faq) => faq.category === tabs[activeTab.value])
)

function toggle(idx) {
    openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
    <section class="w-full flex flex-col items-center mt-36 bg-white px-4 sm:px-0">
        <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center">
            Întrebări frecvente
        </h2>

        <div class="flex flex-wrap justify-center gap-4 mb-14">
            <button v-for="(tab, idx) in tabs" :key="tab" @click="activeTab = idx" :class="[
                'px-4 py-2 rounded-md font-semibold text-base transition-colors duration-200',
                'sm:px-6 sm:py-3 sm:text-lg',
                activeTab === idx
                    ? 'bg-[#212936] text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            ]">
                {{ tab }}
            </button>
        </div>

        <div class="w-full max-w-[50rem] flex flex-col gap-8 mx-auto">
            <div v-for="(faq, idx) in filteredFaqs" :key="faq.question" class="border-b border-gray-300 pb-6">
                <button class="w-full flex items-center justify-between text-left cursor-pointer" @click="toggle(idx)"
                    :aria-expanded="openIndex === idx" :aria-controls="'faq-answer-' + idx">
                    <span class="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <i class="bi bi-question-square"></i>
                        {{ faq.question }}
                    </span>
                    <svg :class="[
                        'w-6 h-6 text-gray-600 transition-transform duration-300',
                        openIndex === idx ? 'rotate-180' : ''
                    ]" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

                <div v-show="openIndex === idx" :id="'faq-answer-' + idx"
                    class="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                    {{ faq.answer }}
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>
