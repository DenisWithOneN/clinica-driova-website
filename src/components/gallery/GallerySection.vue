<script setup>
import { ref } from 'vue';

const placeholderUrl = 'https://placehold.co/600x400/e2e8f0/64748b?text=In+Curand';

import Image1 from '../../assets/gallery/Image1.jpg';
import Image2 from '../../assets/gallery/Image2.jpg';
import Image3 from '../../assets/gallery/Image3.jpg';
import Image4 from '../../assets/gallery/Image4.jpg';
import Image5 from '../../assets/gallery/Image5.jpeg';
import Image6 from '../../assets/gallery/Image6.jpg';
import Image7 from '../../assets/gallery/Image7.jpg';
import Image8 from '../../assets/gallery/Image8.jpeg';
import Image9 from '../../assets/gallery/Image9.jpg';
import Image10 from '../../assets/gallery/Image10.jpeg';

const galleryImages = ref([
    { src: Image1, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image2, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image3, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image4, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image5, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image6, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image7, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image8, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image9, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
    { src: Image10, alt: 'Clinica Dr. Iova', caption: 'Clinica Dr. Iova' },
]);

const fullscreenImage = ref(null);

const openFullscreen = (imageUrl) => {
    fullscreenImage.value = imageUrl;
    document.body.style.overflow = 'hidden';
};

const closeFullscreen = () => {
    fullscreenImage.value = null;
    document.body.style.overflow = '';
};
</script>

<template>
    <section class="bg-white mt-36">
        <div class="container mx-auto px-6 lg:px-16">
            <div class="flex flex-col items-center mb-12">
                <p class="text-brand-primary uppercase tracking-wider mb-2">GALERIE</p>
                <h1 class="leading-tight mb-4 text-center">
                    Spațiile clinicii noastre
                </h1>
                <p class="text-gray-700 text-center max-w-2xl">
                    Descoperă ambientul modern și primitor al Clinicii Dr. Iova, conceput pentru confortul tău.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(image, index) in galleryImages" :key="index"
                    class="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                    @click="openFullscreen(image.src)">
                    <img :src="image.src" :alt="image.alt"
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div
                        class="absolute inset-0 bg-brand-primary bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p class="text-white">{{ image.caption }}</p>
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-if="fullscreenImage"
                class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                @click="closeFullscreen">
                <img :src="fullscreenImage" alt="Full screen image" class="max-w-full max-h-full object-contain"
                    @click.stop />
                <button
                    class="absolute top-5 right-5 text-white text-4xl leading-none bg-black bg-opacity-60 rounded-full p-1 shadow-lg border-white transition hover:bg-opacity-80 hover:scale-110"
                    @click="closeFullscreen" style="backdrop-filter: blur(2px);" aria-label="Închide imaginea">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        </transition>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>