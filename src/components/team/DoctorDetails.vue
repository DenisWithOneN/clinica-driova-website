<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    doctor: { type: Object, required: true },
})

const emit = defineEmits(['back'])
</script>

<template>
    <div class="bg-white rounded-2xl shadow-lg p-8">
        <button type="button" @click="emit('back')"
            class="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-3xl text-sm">
            ← Înapoi la echipă
        </button>

        <div class="flex flex-col md:flex-row gap-8 items-start">
            <img :src="doctor.image" :alt="doctor.name"
                class="w-48 h-48 md:w-60 md:h-60 object-cover rounded-2xl shadow" />
            <div class="flex-1">
                <h2 class="text-3xl font-bold mb-2">{{ doctor.name }}</h2>
                <p class="text-brand-primary font-semibold mb-4">
                    {{ doctor.title }} {{ doctor.specialty }}
                </p>

                <!-- <p class="text-gray-700 leading-relaxed mb-6">
                    {{ doctor.bio }}
                </p> -->

                <div class="grid sm:grid-cols-2 gap-4 text-gray-700">
                    <div>
                        <h3 class="font-semibold mb-1">Competențe</h3>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Evaluare clinică</li>
                            <li>Plan de tratament personalizat</li>
                        </ul>
                    </div>
                    <!-- <div>
                        <h3 class="font-semibold mb-1">Program</h3>
                        <p>Luni–Vineri, 09:00–17:00</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
