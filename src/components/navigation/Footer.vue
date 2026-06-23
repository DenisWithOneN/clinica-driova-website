<script setup>
</script>

<template>
    <footer class="py-16 mt-36 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat 
                    bg-[url('/src/assets/homepage/footer-background.svg')]" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-brand-black bg-opacity-90 z-0"></div>

        <div
            class="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-12 relative z-10">
            <div class="flex flex-col items-center lg:items-start lg:w-1/3 text-center lg:text-left">
                <div class="mb-6">
                    <img src="/logo-driova-inverse.png" alt="Clinica Dr. Iova Logo" class="h-36 w-auto">
                </div>
                <p class=" leading-relaxed max-w-sm mb-6">
                    Suntem aici pentru tine! Contactează-ne pentru orice întrebare sau pentru a programa o consultație.
                </p>
                <div class="flex space-x-4 justify-center lg:justify-start w-full">
                    <a href="https://www.facebook.com/p/Clinica-Dr-Iova-100092415109168/"
                        class="transition-colors duration-300">
                        <i class="bi bi-facebook text-2xl"></i>
                    </a>
                    <a href="https://www.instagram.com/clinicadriova/"
                        class="transition-colors duration-300">
                        <i class="bi bi-instagram text-2xl"></i>
                    </a>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row lg:w-2/3 justify-around gap-2 w-full">
                <div class="w-full lg:w-auto text-center lg:text-left">
                    <h4 class="mb-6 text-brand-primary">Link-uri rapide</h4>
                    <ul class="space-y-3">
                        <li>
                            <RouterLink :to="{ name: 'about' }"
                                class="transition-colors duration-300">Despre noi
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'team' }"
                                class="transition-colors duration-300">Echipă
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'gallery' }"
                                class="transition-colors duration-300">Galerie
                            </RouterLink>
                        </li>
                        <!-- <li>
                            <RouterLink :to="{ name: 'services' }"
                                class="transition-colors duration-300">Specializări
                            </RouterLink>
                        </li> -->
                        <li>
                            <RouterLink :to="{ name: 'contact' }"
                                class="transition-colors duration-300">Contact
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="w-full lg:w-auto text-center lg:text-left">
                    <h4 class="mb-6 text-brand-primary">Contact</h4>
                    <ul class="space-y-4">
                        <li class="flex items-center justify-center lg:justify-start">
                            <i class="bi bi-telephone-fill text-brand-primary text-xl mr-3"></i>
                            <span>0359 450 657</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start">
                            <i class="bi bi-envelope-fill text-brand-primary text-xl mr-3 mt-1"></i>
                            <span>receptie@clinicadriova.ro</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start">
                            <i class="bi bi-geo-alt-fill text-brand-primary text-xl mr-3 mt-1"></i>
                            <span class="max-w-[13rem] md:max-w-none">Strada Ceyrat nr. 31, bloc WR12, SC 1, <br /> Mun.
                                Oradea, Jud. Bihor, 410660</span>
                        </li>
                    </ul>
                </div>

                <div class="w-full lg:w-auto text-center lg:text-left">
                    <h4 class="mb-6 text-brand-primary">Orarul Clinicii</h4>
                    <ul class="space-y-3">
                        <li><span class="font-semibold">Luni-Vineri:</span> 08:00-20:00</li>
                        <li><span class="font-semibold">Sâmbătă:</span> închis</li>
                        <li><span class="font-semibold">Duminică:</span> închis</li>
                    </ul>
                </div>
            </div>
        </div>

        <div
            class="container mx-auto px-6 lg:px-16 mt-16 pt-8 text-center text-white relative z-10">
            <p>&copy; Copyright 2026 Clinica Dr. Iova</p>
        </div>
    </footer>
</template>

<style scoped></style>