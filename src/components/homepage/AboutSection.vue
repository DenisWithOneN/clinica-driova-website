<script setup>
</script>

<template>
    <div class="bg-gray-50 mt-36 py-16 flex items-center justify-center w-full">

        <div
            class="w-full max-w-7xl px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center text-center lg:text-left lg:gap-y-10 lg:gap-x-10">
            <div class="w-full lg:w-1/2">
                <p class="uppercase text-brand-primary mb-2 tracking-wide">
                    Despre noi
                </p>
                <h2 class="text-gray-800 leading-tight mb-5">
                    Cine suntem?
                </h2>
                <p class="text-gray-700 mb-5 leading-relaxed">
                    La Clinica Dr. Iova, ne dedicăm în totalitate sănătății pacienților noștri, oferind servicii de
                    înaltă calitate în domeniile psihiatriei, psihiatriei pediatrice și neurologiei. Echipa noastră este
                    formată din medici specialiști cu experiență, psihologi și terapeuți, care colaborează pentru a
                    oferi tratamente personalizate, bazate pe nevoile individuale ale fiecărui pacient. Ne dorim să
                    creăm un spațiu sigur, în care să te simți ascultat, înțeles și sprijinit. Nu uităm niciodată că
                    fiecare pacient este unic!
                </p>
                <div class="flex justify-center lg:justify-start">
                    <RouterLink :to="{ name: 'about' }"
                        class="px-4 py-1 rounded-md text-white bg-brand-blue hover:bg-brand-primary hover:text-white hover:cursor-pointer transition duration-300 ease-in-out text-lg font-medium">
                        Mai mult
                    </RouterLink>
                </div>
            </div>

            <div class="w-full lg:w-1/2 flex justify-center lg:order-first">
                <img src="/src/assets/homepage/homepage-about.png" alt="Despre Clinica Dr. Iova"
                    class="max-w-full h-auto block" />
            </div>

            <h1 class="block lg:hidden text-black text-center w-full">
                Clinica <span class="text-brand-primary">Dr. Iova</span>
            </h1>
        </div>
    </div>
</template>

<style scoped></style>