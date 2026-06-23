<template>
    <div class="bg-white mt-36 flex items-center justify-center">
        <div
            class="w-full max-w-7xl px-6 lg:px-16 flex flex-col lg:flex-row items-center text-center lg:text-left gap-y-10 lg:gap-x-10">
            <!-- Stânga -->
            <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <p class="text-brand-primary uppercase tracking-wider mb-2">
                    STATISTICILE CLINICII
                </p>
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Rezultate care </br> vorbesc de la sine
                </h2>
                <p class="text-gray-700 mb-4">
                    De-a lungul anilor, am fost alături de sute de pacienți, sprijinindu-i să
                    depășească provocările mentale și emoționale, să-și recapete încrederea în
                    sine și să redescopere bucuria unei vieți echilibrate.
                </p>
                <div class="flex sm:flex-row sm:gap-10 gap-y-5">
                    <div class="flex flex-col items-center sm:items-start">
                        <div class="text-5xl font-extralight text-brand-primary tracking-widest">+500</div>
                        <span class="text-brand-primary text-center sm:text-left">
                            pacienți <br class="lg:hidden" /> consultați lunar
                        </span>
                    </div>
                    <div class="flex flex-col items-center sm:items-start">
                        <div class="text-5xl font-extralight text-brand-primary tracking-widest">+400</div>
                        <span class="text-brand-primary text-center sm:text-left">
                            evaluări <br class="lg:hidden" /> psihologice lunar
                        </span>
                    </div>
                </div>
            </div>

            <!-- Dreapta -->
            <div class="w-full lg:w-1/2 p-10 bg-brand-gray rounded-2xl flex flex-col gap-10">
                <div class="flex flex-col items-center text-center lg:flex-row lg:text-left">
                    <img src="@/assets/homepage/stats/statistici_echipa_medicala_profesionista.svg" alt="Stat Icon"
                        class="w-16 h-16 mb-4 lg:mb-0 lg:mr-8" />
                    <div>
                        <h4 class="text-gray-800">
                            Echipă medicală profesionistă
                        </h4>
                        <p class="text-gray-700">
                            Suntem o echipă dedicată, formată din specialiști cu experiență, pregătiți să ofere sprijin
                            și soluții personalizate fiecărui pacient.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col items-center text-center lg:flex-row lg:text-left">
                    <img src="@/assets/homepage/stats/statistici_pacienti_tratati.svg" alt="Stat Icon"
                        class="w-16 h-16 mb-4 lg:mb-0 lg:mr-8" />
                    <div>
                        <h4 class="text-gray-800">Pacienți tratați cu succes</h4>
                        <p class="text-gray-700">
                            Am ajutat sute de pacienți să depășească provocările mentale și să-și regăsească
                            echilibrul și liniștea interioară.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col items-center text-center lg:flex-row lg:text-left">
                    <img src="@/assets/homepage/stats/statistici_excelenta_medicala.svg" alt="Stat Icon"
                        class="w-16 h-16 mb-4 lg:mb-0 lg:mr-8" />
                    <div>
                        <h4 class="text-gray-800">Excelență medicală</h4>
                        <p class="text-gray-700">
                            Punem pasiune și profesionalism în tot ceea ce facem, oferind servicii medicale de
                            cea mai înaltă calitate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
