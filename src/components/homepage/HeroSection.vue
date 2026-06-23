<script setup>
</script>

<template>
    <div class="pt-36 sm:pt-40 md:pt-36 lg:pt-42 xl:pt-28 2xl:pt-24 flex items-center justify-center">
        <div class="w-full max-w-7xl px-6 lg:px-16 flex flex-col lg:flex-row items-center text-center lg:text-left gap-y-10 lg:gap-x-10">
            <div class="w-full flex flex-col items-center lg:items-start lg:w-1/2">
                <h1 class="text-gray-800 leading-tight mb-5 max-w-2xl">
                    Expertiză medicală.<br /> Empatie autentică.
                </h1>

                <p class="mb-6 max-w-xl text-base sm:text-lg text-brand-black">
                    Consultații de psihiatrie, psihiatrie pediatrică, neurologie și servicii psihologice bazate pe
                    profesionalism, confidențialitate și abordare personalizată.
                </p>

                <div class="w-full max-w-md flex flex-col gap-3 mb-6 lg:items-start">
                    <div class="flex items-center justify-center gap-3 lg:justify-start">
                        <i class="bi bi-telephone-fill text-brand-primary text-lg"></i>
                        <span class="text-sm sm:text-base text-brand-black">0359 450 657</span>
                    </div>
                    <div class="flex items-center justify-center gap-3 lg:justify-start">
                        <i class="bi bi-geo-alt-fill text-brand-primary text-lg mt-0.5"></i>
                        <span class="text-sm sm:text-base text-center lg:text-left text-brand-black">
                            Bihor, Oradea, Strada Ceyrat nr. 31, bloc WR12, SC 1
                        </span>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-3 justify-center items-center lg:justify-start w-full sm:w-auto">
                    <a href="tel:0359450657"
                        class="w-full sm:w-auto md:hidden inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-brand-primary hover:bg-brand-tertiary hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                        Programează-te
                    </a>

                    <RouterLink :to="{ name: 'contact' }"
                        class="w-full sm:w-auto hidden md:inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-brand-primary hover:bg-brand-tertiary hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                        Programează-te
                    </RouterLink>

                    <RouterLink :to="{ name: 'contact' }"
                        class="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md text-brand-primary border-2 border-brand-primary hover:border-brand-primary hover:bg-brand-primary hover:text-brand-white transition duration-300 ease-in-out hover:cursor-pointer text-lg font-medium">
                        Specialități
                    </RouterLink>
                </div>
            </div>

            <div class="w-full lg:w-1/2 hidden lg:flex justify-center relative">
                <img src="@/assets/homepage/homepage-hero-image.png" alt="Clinica Dr. Iova team"
                    class="max-w-full h-auto block" />
                <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-48"></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>