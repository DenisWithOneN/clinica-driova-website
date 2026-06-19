<script setup>
const cards = [
    {
        img: "https://placehold.co/600x400/F0F0F0/000000?text=Placeholder+1",
        title: "Teeth hygiene for toddlers",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: "https://placehold.co/600x400/F0F0F0/000000?text=Placeholder+2",
        title: "Mindfulness Basics: Steps to a Calmer Day",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: "https://placehold.co/600x400/F0F0F0/000000?text=Placeholder+3",
        title: "Understanding Anxiety: When to Seek Help",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: "https://placehold.co/600x400/F0F0F0/000000?text=Placeholder+4",
        title: "The Role of Sleep in Mental Health",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: "https://placehold.co/600x400/F0F0F0/000000?text=Placeholder+5",
        title: "Cum să alegi periuța de dinți potrivită",
        description: "Criterii pentru alegerea periuței ideale."
    },
    {
        img: "https://placehold.co/600x400/F0F0F0/000000?text=Placeholder+6",
        title: "Importanța controlului stomatologic periodic",
        description: "De ce sunt importante vizitele regulate la dentist."
    },
];
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header class="mb-10">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between items-center text-center md:text-left">
                <div>
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-500">BLOG</span>
                    <h2 class="mt-1 max-w-2xl">
                        Sfaturi și informații direct de la specialiștii noștri
                    </h2>
                </div>
                <a href="#"
                    class="mt-4 md:mt-0 px-4 py-1 w-fit rounded-md text-white bg-brand-dark-blue hover:bg-brand-primary hover:text-white hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                    Vezi toate articolele
                </a>
            </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(card, index) in cards" :key="index" :class="[
                'bg-white rounded-lg shadow-md transition-transform duration-300',
                (index % 3 === 1)
                    ? `md:-translate-y-${4 + (Math.floor(index / 3) * 2)}`
                    : 'md:translate-y-10'
            ]">
                <img :src="card.img" :alt="card.title" class="w-full h-40 object-cover rounded-t-lg">
                <div class="p-5 pb-0 text-center">
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">{{ card.title }}</h4>
                    <p class="text-gray-600 text-sm mb-2">{{ card.description }}</p>
                    <a href="#" class="text-brand-primary font-medium flex items-center justify-center group pb-2">
                        Citește Mai Mult
                        <i
                            class="bi bi-arrow-right-short ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
