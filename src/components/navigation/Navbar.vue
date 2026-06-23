<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isLanguageDropdownOpen = ref(false);

const navItems = [
    { name: 'Despre noi', href: 'about' },
    { name: 'Echipă', href: 'team' },
    // { name: 'Specializări', href: 'services' },
    { name: 'Galerie', href: 'gallery' },
];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    isLanguageDropdownOpen.value = false;
};


const callPhone = () => {
    window.open('tel:+123456790');
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent'
    ]">
        <div class="container mx-auto px-4">
            <div :class="[
                'flex items-center justify-between transition-all duration-300',
                isScrolled ? 'h-20' : 'h-36'
            ]">
                <div :class="[
                    'flex items-center transition-all duration-300 space-x-2',
                    isScrolled ? 'h-20' : 'h-28'
                ]">
                    <RouterLink :to="{ name: 'home' }">
                        <img :src="isScrolled ? '@/assets/logo/logo-driova-icon.png' : '@/assets/logo/logo-driova.png'" 
                            alt="Clinica Dr. Iova Logo" :class="[
                                'object-contain transition-all duration-300 rounded-lg mr-1',
                                isScrolled ? 'h-auto w-24' : 'h-auto w-24 lg:w-24'
                            ]" />
                    </RouterLink>
                </div>

                <div class="hidden lg:flex items-center space-x-8 ml-16">
                    <RouterLink v-for="item in navItems" :key="item.name" :to="{ name: item.href }"
                        class="text-brand-primary text-lg transition-colors hover:cursor-pointer">
                        {{ item.name }}
                    </RouterLink>
                    <RouterLink :to="{ name: 'contact' }"
                        class="bg-brand-primary text-xl text-white px-4 py-2 rounded hover:bg-brand-primary hover:cursor-pointer transition-all flex items-center justify-center">
                        Contact
                    </RouterLink>
                </div>

                <button class="lg:hidden" @click="toggleMenu">
                    <i :class="isMenuOpen ? 'bi bi-x-lg text-3xl' : 'bi bi-list text-3xl'"
                        class="text-brand-primary"></i>
                </button>
            </div>

            <div v-if="isMenuOpen"
                class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
                <div class="px-4 py-6 space-y-4">
                    <RouterLink v-for="item in navItems" :key="item.name" :to="{ name: item.href }" @click="toggleMenu"
                        class="block w-full text-left py-2 text-gray-800 hover:text-teal-600 transition-colors font-medium">
                        {{ item.name }}
                    </RouterLink>

                    <div class="pt-4 border-t border-gray-200 space-y-3">
                        <RouterLink :to="{ name: 'contact' }" @click="toggleMenu"
                            class="bg-brand-primary text-xl text-white px-4 py-2 rounded hover:bg-brand-primary hover:cursor-pointer transition-all flex items-center justify-center">
                            Contact
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>