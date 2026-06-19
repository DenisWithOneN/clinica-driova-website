<script setup>
import Hero from '../components/homepage/HeroSection.vue';
import About from '../components/homepage/AboutSection.vue';
import Stats from '../components/homepage/StatsSection.vue';
import Services from '../components/homepage/ServicesSection.vue';
import Team from '../components/homepage/TeamSection.vue';
import CTASection from '../components/homepage/CTASection.vue';
import Contact from '../components/homepage/ContactSection.vue';
import Review from '../components/homepage/ReviewSection.vue';
</script>
<template>
    <section>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Review />
        <Team />
        <CTASection :variantIndex="1" />
        <Contact />
    </section>
</template>
<style scoped></style>