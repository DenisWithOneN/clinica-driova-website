<script setup>
</script>

<template>
    <div class="mt-36 flex items-center justify-center">
        <div
            class="w-full max-w-7xl px-6 lg:px-16 flex flex-col lg:flex-row items-center text-center lg:text-left gap-y-10 lg:gap-x-10">

            <div class="w-full lg:w-1/2">
                <h1 class="text-gray-800 leading-tight mb-5">
                    Expertiză medicală. Empatie autentică.
                </h1>
                <p class="mb-5">
                    Consultații de psihiatrie, psihiatrie pediatrică, neurologie și servicii psihologice bazate pe
                    profesionalism, confidențialitate și abordare personalizată.
                </p>
                <div class="flex flex-wrap gap-x-10 gap-y-5 mb-5 justify-center lg:justify-start">
                    <div class="flex items-center">
                        <i class="bi bi-telephone-fill text-brand-primary text-xl mr-2"></i>
                        <span>0359 450 657</span>
                    </div>
                    <div class="flex items-center">
                        <i class="bi bi-geo-alt-fill text-brand-primary text-xl mr-2"></i>
                        <span>Strada Ceyrat nr. 31, bloc WR12, SC 1, <br /> Mun. Oradea, Jud. Bihor, 410660</span>
                    </div>
                </div>
                <div class="flex gap-4 justify-center lg:justify-start">
                    <a href="tel:0359450657"
                        class="md:hidden inline-block px-4 py-1 rounded-md text-white bg-brand-primary hover:bg-brand-blue hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                        Programează-te
                    </a>

                    <RouterLink :to="{ name: 'contact' }"
                        class="hidden md:inline-block px-4 py-1 rounded-md text-white bg-brand-primary hover:bg-brand-blue hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                        Programează-te
                    </RouterLink>
                    <RouterLink :to="{ name: 'contact' }"
                        class="px-4 py-1 rounded-md text-brand-primary border-2 border-brand-primary hover:bg-brand-blue hover:border-brand-blue hover:text-white transition duration-300 ease-in-out hover:cursor-pointer text-lg font-medium">
                        Specializări
                    </RouterLink>
                </div>
            </div>

            <div class="w-full lg:w-1/2 flex justify-center relative">
                <img src="/src/assets/homepage/homepage-hero-image.png" alt="Clinica Dr. Iova team"
                    class="max-w-full h-auto block" />
                <div
                    class="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>