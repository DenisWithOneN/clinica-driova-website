<script setup>
import Navbar from './components/navigation/Navbar.vue';
import Footer from './components/navigation/Footer.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
    <Footer />

    <button v-if="showScrollTop" @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 bg-brand-primary text-white hover:bg-white hover:cursor-pointer hover:text-brand-primary rounded-full px-4 py-3 shadow-lg transition-all duration-300"
      aria-label="Scroll to top">
      <i class="bi bi-caret-up-fill text-xl"></i>
    </button>
  </main>
</template>

<style scoped></style>