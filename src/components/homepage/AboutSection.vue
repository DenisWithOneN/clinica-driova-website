<script setup>
</script>

<template>
    <div class="mt-16 md:mt-20 lg:mt-24 bg-brand-gray py-16 md:py-20 flex items-center justify-center w-full">
        <div class="w-full max-w-7xl px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center lg:items-center text-center lg:text-left gap-y-8 lg:gap-x-10">
            <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                <p class="eyebrow mb-2">
                    Despre noi
                </p>
                <h2 class="mb-5">
                    Cine suntem?
                </h2>
                <p class="mb-5 max-w-2xl leading-relaxed">
                    La Clinica Dr. Iova, ne dedicăm în totalitate sănătății pacienților noștri, oferind servicii de
                    înaltă calitate în domeniile psihiatriei, psihiatriei pediatrice și neurologiei. Echipa noastră este
                    formată din medici specialiști cu experiență, psihologi și terapeuți, care colaborează pentru a
                    oferi tratamente personalizate, bazate pe nevoile individuale ale fiecărui pacient. Ne dorim să
                    creăm un spațiu sigur, în care să te simți ascultat, înțeles și sprijinit. Nu uităm niciodată că
                    fiecare pacient este unic!
                </p>
                <div class="flex justify-center lg:justify-start w-full lg:w-auto">
                    <RouterLink :to="{ name: 'about' }"
                        class="px-4 py-2 rounded-md text-white bg-brand-primary hover:bg-brand-tertiary hover:text-white hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                        Mai mult
                    </RouterLink>
                </div>
            </div>

            <div class="w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center lg:order-first">
                <img src="@/assets/homepage/homepage-about.png" alt="Despre Clinica Dr. Iova"
                    class="w-full max-w-[420px] lg:max-w-full h-auto object-contain" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>