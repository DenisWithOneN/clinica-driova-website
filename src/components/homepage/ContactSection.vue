<script setup>
import { ref } from 'vue';

const contactInfo = ref([
    {
        iconClass: 'bi-telephone-fill',
        lines: ['0359 450 657']
    },
    {
        iconClass: 'bi-envelope-fill',
        lines: ['receptie@clinicadriova.ro']
    },
    {
        iconClass: 'bi-geo-alt-fill',
        lines: ['Strada Ceyrat nr. 31, bloc WR12, SC 1, Mun. Oradea, Jud. Bihor, 410660']
    }
]);

const googleMapsIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.991790446855!2d21.9274421!3d47.040391899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474639167b0b99d9%3A0x430a460d4798c123!2sClinica%20Dr.%20Iova!5e0!3m2!1sro!2sro!4v1768413346173!5m2!1sro!2sro";

</script>

<template>
    <section class="mt-36">
        <div class="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start lg:items-stretch gap-12">
            <div class="flex-1 flex flex-col justify-center p-4">
                <div class="mb-2">
                    <p class="text-brand-primary uppercase tracking-wider mb-2">CONTACT</p>
                    <h2 class="text-gray-800 leading-tight mb-2">
                        Cum ne găsești?
                    </h2>
                    <p class="text-gray-700 leading-relaxed max-w-xl mb-0">
                        Suntem aici pentru tine! Contactează-ne pentru orice întrebare sau pentru a programa o
                        consultație.
                    </p>
                </div>

                <div class="space-y-4">
                    <div v-for="(item, index) in contactInfo" :key="index"
                        class="flex items-center bg-gray-100 p-3 rounded-3xl">
                        <div class="flex-shrink-0 mr-3">
                            <div
                                class="flex items-center justify-center h-10 w-10 rounded-full bg-brand-primary">
                                <i :class="['text-white text-xl', item.iconClass]"></i>
                            </div>
                        </div>
                        <div>
                            <p v-for="(line, lineIndex) in item.lines" :key="lineIndex"
                                class="text-gray-800">
                                {{ line }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 w-full h-[400px] sm:h-[400px] lg:h-[600px] rounded-lg shadow-lg overflow-hidden">
                <iframe :src="googleMapsIframeSrc" class="w-full h-full min-h-[400px]" style="border:0;"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
</template>

<style scoped></style>